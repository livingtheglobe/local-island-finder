
import React, { useState, useMemo, useEffect } from 'react';
import { ISLANDS } from './constants';
import { Island, FilterState, Atoll, TransferType, FerryAccess, IslandSize, Atmosphere, Accommodation, MarineActivity } from './types';
import { IslandCard } from './components/IslandCard';
import { FilterSidebar } from './components/FilterSidebar';
import { MapPin, Filter, ChevronDown, ChevronUp, X, Globe, Moon, Sun, RotateCcw } from 'lucide-react';
import { Language, UI_TEXT } from './translations';

const INITIAL_FILTERS: FilterState = {
  atoll: [],
  transferTypes: [],
  ferryAccess: [],
  size: [],
  atmosphere: [],
  accommodations: [],
  marineActivities: [],
  bikiniBeach: [],
  watersports: [],
  jungle: [],
  nightlife: [],
  hasFloatingBar: null,
  hasSandbankAttached: null,
};

function App() {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  // Default to open for mobile filters as requested
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(true);
  const [lang, setLang] = useState<Language>('en');
  
  // Dark mode state - Default to false (Light Mode) as requested
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const text = UI_TEXT[lang];

  const resetFilters = () => setFilters(INITIAL_FILTERS);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'de' : 'en');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  // --- Filtering Logic ---
  const matchesFilterGroup = (islandValues: any | any[], selectedValues: any[]) => {
    if (selectedValues.length === 0) return true;
    if (Array.isArray(islandValues)) {
      return selectedValues.some(val => islandValues.includes(val));
    }
    return selectedValues.includes(islandValues);
  };

  const filterIslands = (source: Island[], currentFilters: FilterState) => {
    return source.filter(island => {
      if (!matchesFilterGroup(island.atoll, currentFilters.atoll)) return false;
      if (!matchesFilterGroup(island.transferTypes, currentFilters.transferTypes)) return false;
      if (!matchesFilterGroup(island.ferryAccess, currentFilters.ferryAccess)) return false;
      if (!matchesFilterGroup(island.size, currentFilters.size)) return false;
      if (!matchesFilterGroup(island.atmosphere, currentFilters.atmosphere)) return false;
      if (!matchesFilterGroup(island.bikiniBeach, currentFilters.bikiniBeach)) return false;
      if (!matchesFilterGroup(island.watersports, currentFilters.watersports)) return false;
      if (!matchesFilterGroup(island.jungle, currentFilters.jungle)) return false;
      if (!matchesFilterGroup(island.nightlife, currentFilters.nightlife)) return false;
      if (!matchesFilterGroup(island.marineActivities, currentFilters.marineActivities)) return false;
      if (!matchesFilterGroup(island.accommodations, currentFilters.accommodations)) return false;
      if (currentFilters.hasSandbankAttached && !island.hasSandbankAttached) return false;
      if (currentFilters.hasFloatingBar && !island.hasFloatingBar) return false;

      return true;
    });
  };

  const filteredIslands = useMemo(() => {
    return filterIslands(ISLANDS, filters);
  }, [filters]);


  // --- Faceted Counts Logic ---
  const availableCounts = useMemo(() => {
    const counts: Record<string, Record<string, number>> = {};

    const getCountsForCategory = (key: keyof FilterState, extractValue: (i: Island) => string | string[]) => {
      const tempFilters = { ...filters, [key]: Array.isArray(filters[key]) ? [] : null };
      const potentialIslands = filterIslands(ISLANDS, tempFilters);
      
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
    counts['ferryAccess'] = getCountsForCategory('ferryAccess', i => i.ferryAccess);
    counts['marineActivities'] = getCountsForCategory('marineActivities', i => i.marineActivities);
    counts['accommodations'] = getCountsForCategory('accommodations', i => i.accommodations);
    counts['bikiniBeach'] = getCountsForCategory('bikiniBeach', i => i.bikiniBeach);
    counts['watersports'] = getCountsForCategory('watersports', i => i.watersports);
    counts['jungle'] = getCountsForCategory('jungle', i => i.jungle);
    counts['nightlife'] = getCountsForCategory('nightlife', i => i.nightlife);

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

  const activeFiltersCount: number = (Object.values(filters) as any[]).reduce((acc: number, val: any) => {
    if (Array.isArray(val)) return acc + val.length;
    if (val === true) return acc + 1;
    return acc;
  }, 0);

  return (
    <div className="min-h-screen bg-[#F4F2EC] dark:bg-gray-900 font-sans transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2 transition-colors">
              {text.exploreTitle}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base transition-colors">
              {text.showingResults.replace('{count}', filteredIslands.length.toString())}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={toggleDarkMode}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:border-teal-200 dark:hover:border-teal-700 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:border-teal-200 dark:hover:border-teal-700 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <Globe size={18} className="text-teal-600 dark:text-teal-400" />
              <span>{lang === 'en' ? 'Deutsch' : 'English'}</span>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Filter Toggle - Collapsible */}
        <div className="lg:hidden mb-6 sticky top-4 z-20">
          <div className={`w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-all ${isMobileFiltersOpen ? 'ring-2 ring-teal-500 border-transparent' : ''}`}>
             
             {/* Header Bar - Grid Layout to center the Reset Button */}
             <div 
               className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 cursor-pointer gap-2" 
               onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
             >
                {/* Left: Filter Title */}
                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold font-serif text-lg justify-self-start">
                  <Filter size={20} className="text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>{text.filters}</span>
                  {activeFiltersCount > 0 && (
                    <span className="bg-teal-600 text-white text-xs font-sans px-2 py-0.5 rounded-full ml-1 shrink-0">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>

                {/* Center: Reset Button (Bigger and Centered) */}
                <div className="justify-self-center w-full flex justify-center">
                   <button
                     onClick={(e) => {
                       e.stopPropagation();
                       resetFilters();
                     }}
                     className="flex items-center justify-center gap-1.5 text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider px-6 py-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-100 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors shadow-sm"
                   >
                     <RotateCcw size={14} />
                     <span>{text.resetShort}</span>
                   </button>
                </div>
                   
                {/* Right: Chevron */}
                <div className="text-gray-500 dark:text-gray-400 justify-self-end">
                   {isMobileFiltersOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
             </div>

            {/* Collapsible Content */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${isMobileFiltersOpen ? 'max-h-[70dvh] opacity-100' : 'max-h-0 opacity-0'}`}>
               {/* 
                  Fix mobile scrolling:
                  1. max-h-[70dvh] prevents it from going off-screen on small devices.
                  2. pb-32 adds huge padding at bottom so the last item (Features) isn't cut off by browser bars.
               */}
               <div className="flex-1 overflow-y-auto custom-scrollbar overscroll-contain p-6 pb-32 border-t border-gray-100 dark:border-gray-700">
                  <FilterSidebar 
                    filters={filters} 
                    onFilterChange={updateFilter} 
                    availableCounts={availableCounts}
                    onReset={resetFilters}
                    lang={lang}
                    hideHeader={true} // Hide redundant "Filters" header inside mobile view
                  />
               </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-1/4 flex-shrink-0">
             {/* 
                Fix desktop scrolling:
                1. sticky top-8 (32px)
                2. max-h-[calc(100vh-6rem)] (approx 100vh - 96px). 
                   This leaves ~64px gap at bottom, ensuring scrollbar and content are always visible.
             */}
             <div className="sticky top-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar transition-colors">
               <FilterSidebar 
                 filters={filters} 
                 onFilterChange={updateFilter} 
                 availableCounts={availableCounts}
                 onReset={resetFilters}
                 lang={lang}
               />
             </div>
          </aside>

          {/* Grid */}
          <main className="w-full lg:w-3/4">
            {filteredIslands.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredIslands.map(island => (
                  <IslandCard key={island.id} island={island} lang={lang} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 transition-colors">
                <MapPin size={48} className="text-gray-300 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">{text.noResultsTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-center max-w-md">{text.noResultsDesc}</p>
                <button 
                  onClick={resetFilters}
                  className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-teal-700 transition-colors"
                >
                  {text.resetBtn}
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
