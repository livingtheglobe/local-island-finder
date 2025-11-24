import React, { useState, useMemo } from 'react';
import { ISLANDS } from './constants';
import { Island, FilterState, Atoll, TransferType, FerryAccess, IslandSize, Atmosphere, Accommodation, MarineActivity } from './types';
import { IslandCard } from './components/IslandCard';
import { FilterSidebar } from './components/FilterSidebar';
import { MapPin, Filter, ChevronDown, ChevronUp, X } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  atoll: [],
  transferTypes: [],
  ferryAccess: [],
  size: [],
  atmosphere: [],
  accommodations: [],
  marineActivities: [],
  hasFloatingBar: null,
  hasSandbankAttached: null,
};

function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  // --- Filtering Logic ---
  
  // Helper: Checks if an island matches a specific filter group
  // Returns true if no filter is selected for that group, OR if the island matches one of the selected options.
  const matchesFilterGroup = (islandValues: any | any[], selectedValues: any[]) => {
    if (selectedValues.length === 0) return true;
    if (Array.isArray(islandValues)) {
      return selectedValues.some(val => islandValues.includes(val));
    }
    return selectedValues.includes(islandValues);
  };

  // Main Filter Function
  const filterIslands = (source: Island[], currentFilters: FilterState) => {
    return source.filter(island => {
      if (!matchesFilterGroup(island.atoll, currentFilters.atoll)) return false;
      if (!matchesFilterGroup(island.transferTypes, currentFilters.transferTypes)) return false;
      if (!matchesFilterGroup(island.size, currentFilters.size)) return false;
      if (!matchesFilterGroup(island.atmosphere, currentFilters.atmosphere)) return false;
      
      // Marine Activities is tricky: Do we want islands that have ANY selected activity or ALL?
      // Usually Faceted Search is OR within a category. "I want to see islands with Sharks OR Turtles".
      if (!matchesFilterGroup(island.marineActivities, currentFilters.marineActivities)) return false;
      
      if (!matchesFilterGroup(island.accommodations, currentFilters.accommodations)) return false;

      // Booleans
      if (currentFilters.hasSandbankAttached && !island.hasSandbankAttached) return false;
      if (currentFilters.hasFloatingBar && !island.hasFloatingBar) return false;

      return true;
    });
  };

  const filteredIslands = useMemo(() => {
    return filterIslands(ISLANDS, filters);
  }, [filters]);


  // --- Faceted Counts Logic ---
  // We need to calculate how many islands match each option *if* we were to select it,
  // considering all OTHER currently active filters.
  const availableCounts = useMemo(() => {
    const counts: Record<string, Record<string, number>> = {};

    const getCountsForCategory = (key: keyof FilterState, extractValue: (i: Island) => string | string[]) => {
      // 1. Filters excluding this key
      const tempFilters = { ...filters, [key]: Array.isArray(filters[key]) ? [] : null };
      // 2. Filter data
      const potentialIslands = filterIslands(ISLANDS, tempFilters);
      
      // 3. Count
      const catCounts: Record<string, number> = {};
      potentialIslands.forEach(island => {
        const val = extractValue(island);
        if (Array.isArray(val)) {
          val.forEach(v => { catCounts[v] = (catCounts[v] || 0) + 1; });
        } else if (typeof val === 'string') {
          catCounts[val] = (catCounts[val] || 0) + 1;
        }
      });
      return catCounts;
    };

    counts['atoll'] = getCountsForCategory('atoll', i => i.atoll);
    counts['atmosphere'] = getCountsForCategory('atmosphere', i => i.atmosphere);
    counts['size'] = getCountsForCategory('size', i => i.size);
    counts['transferTypes'] = getCountsForCategory('transferTypes', i => i.transferTypes);
    counts['marineActivities'] = getCountsForCategory('marineActivities', i => i.marineActivities);
    counts['accommodations'] = getCountsForCategory('accommodations', i => i.accommodations);

    // Booleans: Calculate availability based on current filter set excluding the specific boolean itself
    const baseForFeatures = filterIslands(ISLANDS, { 
      ...filters, 
      hasSandbankAttached: null, 
      hasFloatingBar: null 
    });
    
    counts['features'] = {
      'Sandbank': baseForFeatures.filter(i => i.hasSandbankAttached).length,
      'FloatingBar': baseForFeatures.filter(i => i.hasFloatingBar).length
    };

    return counts;
  }, [filters]);

  const activeFiltersCount = Object.values(filters).reduce((acc: number, val) => {
    if (Array.isArray(val)) return acc + val.length;
    if (val === true) return acc + 1;
    return acc;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Results Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">Explore Local Islands</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Showing <span className="font-bold text-gray-900">{filteredIslands.length}</span> results based on your preferences
          </p>
        </div>

        {/* Mobile/Tablet Filter Toggle - Collapsible */}
        <div className="lg:hidden mb-6 sticky top-4 z-20">
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className={`w-full bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between shadow-md transition-all ${isMobileFiltersOpen ? 'ring-2 ring-teal-500 border-transparent' : ''}`}
          >
            <div className="flex items-center gap-2 text-gray-900 font-bold font-serif text-lg">
              <Filter size={20} className="text-teal-600" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-teal-600 text-white text-xs font-sans px-2 py-0.5 rounded-full ml-1">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            {isMobileFiltersOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
          </button>

          {/* Collapsible Content */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileFiltersOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
               <div className="flex justify-between items-center mb-4 lg:hidden">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Filters</span>
                 <button onClick={() => setIsMobileFiltersOpen(false)} className="text-gray-400 hover:text-gray-600">
                   <X size={18} />
                 </button>
               </div>
               <FilterSidebar 
                 filters={filters} 
                 onFilterChange={updateFilter} 
                 availableCounts={availableCounts}
                 onReset={resetFilters}
               />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-1/4 flex-shrink-0">
             <div className="sticky top-8 bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
               <FilterSidebar 
                 filters={filters} 
                 onFilterChange={updateFilter} 
                 availableCounts={availableCounts}
                 onReset={resetFilters}
               />
             </div>
          </aside>

          {/* Grid */}
          <main className="w-full lg:w-3/4">
            {filteredIslands.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredIslands.map(island => (
                  <IslandCard key={island.id} island={island} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <MapPin size={48} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">No islands match your criteria</h3>
                <p className="text-gray-500 mb-6 text-center max-w-md">Try adjusting your filters or resetting them to explore more options.</p>
                <button 
                  onClick={resetFilters}
                  className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;