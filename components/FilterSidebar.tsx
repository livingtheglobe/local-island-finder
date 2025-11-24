import React from 'react';
import { FilterState, Atoll, TransferType, FerryAccess, IslandSize, Atmosphere, MarineActivity, Accommodation } from '../types';
import { Check } from 'lucide-react';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  availableCounts: Record<string, Record<string, number>>;
  onReset: () => void;
}

const FilterSection: React.FC<{
  title: string;
  options: string[];
  selected: string[];
  counts: Record<string, number>;
  onChange: (option: string) => void;
}> = ({ title, options, selected, counts, onChange }) => {
  // Only render if there are options with non-zero matches or if they are already selected
  const visibleOptions = options.filter(opt => (counts[opt] || 0) > 0 || selected.includes(opt));
  
  if (visibleOptions.length === 0) return null;

  return (
    <div className="mb-6 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
      <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-3">{title}</h3>
      {/* Tightened vertical spacing (space-y-1.5) */}
      <div className="space-y-1.5">
        {visibleOptions.map((option) => {
          const isSelected = selected.includes(option);
          // Checkboxes
          return (
            <label 
              key={option} 
              className="flex items-center cursor-pointer group select-none py-0.5"
            >
              <div className="relative flex items-center shrink-0">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isSelected}
                  onChange={() => onChange(option)}
                />
                <div className={`w-5 h-5 border rounded transition-all duration-200 flex items-center justify-center shadow-sm
                  ${isSelected ? 'bg-teal-600 border-teal-600' : 'border-gray-300 bg-white group-hover:border-teal-400'}`}>
                  {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
              </div>
              {/* Increased font size to text-base (16px) */}
              <span className="ml-3 text-base text-gray-700 font-medium group-hover:text-teal-900 transition-colors leading-tight">
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, availableCounts, onReset }) => {
  
  const handleMultiSelect = (key: keyof FilterState, value: string) => {
    const current = filters[key] as string[];
    const newValues = current.includes(value) 
      ? current.filter(item => item !== value)
      : [...current, value];
    onFilterChange(key, newValues);
  };

  const handleBooleanToggle = (key: keyof FilterState) => {
    const current = filters[key];
    onFilterChange(key, current ? null : true);
  };

  const renderBooleanFilter = (label: string, key: 'hasSandbankAttached' | 'hasFloatingBar', countKey: string) => {
    const count = availableCounts['features']?.[countKey] || 0;
    const isSelected = filters[key] === true;
    
    // Completely hide if unavailable and not selected
    if (count === 0 && !isSelected) return null;

    return (
       <label className="flex items-center cursor-pointer group select-none py-0.5">
          <div className="relative flex items-center shrink-0">
            <input type="checkbox" className="peer sr-only" checked={isSelected} onChange={() => handleBooleanToggle(key)} />
            <div className={`w-5 h-5 border rounded transition-all duration-200 flex items-center justify-center shadow-sm ${isSelected ? 'bg-teal-600 border-teal-600' : 'border-gray-300 bg-white group-hover:border-teal-400'}`}>
              {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
            </div>
          </div>
          <span className="ml-3 text-base text-gray-700 font-medium group-hover:text-teal-900 transition-colors leading-tight">{label}</span>
       </label>
    );
  };

  // Check visibility for features header
  const showSandbank = (availableCounts['features']?.['Sandbank'] || 0) > 0 || filters.hasSandbankAttached;
  const showFloatingBar = (availableCounts['features']?.['FloatingBar'] || 0) > 0 || filters.hasFloatingBar;
  const showFeaturesSection = showSandbank || showFloatingBar;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <h2 className="font-serif font-bold text-xl text-gray-900">Filters</h2>
        <button 
          onClick={onReset}
          className="text-xs font-bold text-teal-600 hover:text-teal-700 uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100"
        >
          Reset All
        </button>
      </div>

      <div className="pr-1">
        <FilterSection title="Transfer Type" options={Object.values(TransferType)} selected={filters.transferTypes} counts={availableCounts['transferTypes'] || {}} onChange={(val) => handleMultiSelect('transferTypes', val)} />
        <FilterSection title="Atmosphere" options={Object.values(Atmosphere)} selected={filters.atmosphere} counts={availableCounts['atmosphere'] || {}} onChange={(val) => handleMultiSelect('atmosphere', val)} />
        <FilterSection title="Island Size" options={Object.values(IslandSize)} selected={filters.size} counts={availableCounts['size'] || {}} onChange={(val) => handleMultiSelect('size', val)} />
        <FilterSection title="Atoll" options={Object.values(Atoll)} selected={filters.atoll} counts={availableCounts['atoll'] || {}} onChange={(val) => handleMultiSelect('atoll', val)} />
        <FilterSection title="Accommodation" options={Object.values(Accommodation)} selected={filters.accommodations} counts={availableCounts['accommodations'] || {}} onChange={(val) => handleMultiSelect('accommodations', val)} />
        <FilterSection title="Marine Activities" options={Object.values(MarineActivity)} selected={filters.marineActivities} counts={availableCounts['marineActivities'] || {}} onChange={(val) => handleMultiSelect('marineActivities', val)} />

        {/* Boolean filters - Features */}
        {showFeaturesSection && (
          <div className="mb-8 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
             <h3 className="text-sm font-bold text-teal-800 uppercase tracking-wider mb-3">Features</h3>
             <div className="space-y-1.5">
               {renderBooleanFilter("Has Sandbank", 'hasSandbankAttached', 'Sandbank')}
               {renderBooleanFilter("Floating Bar", 'hasFloatingBar', 'FloatingBar')}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};