import React from 'react';
import { FilterState, Atoll, TransferType, FerryAccess, IslandSize, Atmosphere, MarineActivity, Accommodation, BikiniBeach, Watersports, JungleVegetation, Nightlife } from '../types';
import { Check, BookOpen } from 'lucide-react';
import { translate, Language, UI_TEXT } from '../translations';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  availableCounts: Record<string, Record<string, number>>;
  onReset: () => void;
  lang: Language;
}

const FilterSection: React.FC<{
  title: string;
  options: string[];
  selected: string[];
  counts: Record<string, number>;
  onChange: (option: string) => void;
  lang: Language;
}> = ({ title, options, selected, counts, onChange, lang }) => {
  // Only render if there are options with non-zero matches or if they are already selected
  const visibleOptions = options.filter(opt => (counts[opt] || 0) > 0 || selected.includes(opt));
  
  if (visibleOptions.length === 0) return null;

  return (
    <div className="mb-6 border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
      <h3 className="text-sm font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider mb-3">{title}</h3>
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
                  ${isSelected ? 'bg-teal-600 border-teal-600 dark:bg-teal-500 dark:border-teal-500' : 'border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 group-hover:border-teal-400 dark:group-hover:border-teal-500'}`}>
                  {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
                </div>
              </div>
              <span className="ml-3 text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-teal-900 dark:group-hover:text-teal-300 transition-colors leading-tight">
                {translate(option, lang)}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange, availableCounts, onReset, lang }) => {
  
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
            <div className={`w-5 h-5 border rounded transition-all duration-200 flex items-center justify-center shadow-sm ${isSelected ? 'bg-teal-600 border-teal-600 dark:bg-teal-500 dark:border-teal-500' : 'border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 group-hover:border-teal-400 dark:group-hover:border-teal-500'}`}>
              {isSelected && <Check size={14} className="text-white" strokeWidth={3} />}
            </div>
          </div>
          <span className="ml-3 text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-teal-900 dark:group-hover:text-teal-300 transition-colors leading-tight">{label}</span>
       </label>
    );
  };

  // Logic for merged Transfer Type section (Speedboat + Public Ferry)
  const transferAndFerryOptions = [...Object.values(TransferType), ...Object.values(FerryAccess)];
  const transferAndFerrySelected = [...filters.transferTypes, ...filters.ferryAccess];
  const transferAndFerryCounts = {
      ...(availableCounts['transferTypes'] || {}),
      ...(availableCounts['ferryAccess'] || {})
  };
  const handleTransferAndFerryChange = (val: string) => {
    if (Object.values(TransferType).includes(val as TransferType)) {
      handleMultiSelect('transferTypes', val);
    } else if (Object.values(FerryAccess).includes(val as FerryAccess)) {
      handleMultiSelect('ferryAccess', val);
    }
  };

  // Check visibility for features header
  const showSandbank = (availableCounts['features']?.['Sandbank'] || 0) > 0 || filters.hasSandbankAttached;
  const showFloatingBar = (availableCounts['features']?.['FloatingBar'] || 0) > 0 || filters.hasFloatingBar;
  const showFeaturesSection = showSandbank || showFloatingBar;
  
  const text = UI_TEXT[lang];

  return (
    <div className="w-full">
      {/* Travel Guide Promo Section */}
      <div className="mb-6 bg-gradient-to-br from-teal-50 to-white dark:from-teal-900/20 dark:to-gray-800 rounded-xl border border-teal-100 dark:border-teal-800 p-5 shadow-sm">
        <h3 className="font-serif font-bold text-lg text-teal-900 dark:text-teal-300 mb-2 leading-tight">
          {text.promoTitle}
        </h3>
        <p className="text-sm text-teal-700/80 dark:text-teal-400/80 mb-4 leading-relaxed font-medium">
          {text.promoDesc}
        </p>
        <a 
          href="https://maldivesonabudget.net/products/maldives-budget-travel-guide" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow group"
        >
          <BookOpen size={16} className="mr-2 group-hover:scale-105 transition-transform" />
          {text.promoButton}
        </a>
      </div>

      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
        <h2 className="font-serif font-bold text-xl text-gray-900 dark:text-white">{text.filters}</h2>
        <button 
          onClick={onReset}
          className="text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 uppercase tracking-wider px-3 py-1.5 rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors border border-transparent hover:border-teal-100 dark:hover:border-teal-800"
        >
          {text.reset}
        </button>
      </div>

      <div className="pr-1">
        {/* 1. Atoll */}
        <FilterSection lang={lang} title={text.filterHeaders.atoll} options={Object.values(Atoll)} selected={filters.atoll} counts={availableCounts['atoll'] || {}} onChange={(val) => handleMultiSelect('atoll', val)} />
        
        {/* 2. Transfer Type (Merged) */}
        <FilterSection 
          lang={lang}
          title={text.filterHeaders.transferType}
          options={transferAndFerryOptions} 
          selected={transferAndFerrySelected} 
          counts={transferAndFerryCounts} 
          onChange={handleTransferAndFerryChange} 
        />

        {/* 3. Island Size */}
        <FilterSection lang={lang} title={text.filterHeaders.islandSize} options={Object.values(IslandSize)} selected={filters.size} counts={availableCounts['size'] || {}} onChange={(val) => handleMultiSelect('size', val)} />
        
        {/* 4. Accommodation */}
        <FilterSection lang={lang} title={text.filterHeaders.accommodation} options={Object.values(Accommodation)} selected={filters.accommodations} counts={availableCounts['accommodations'] || {}} onChange={(val) => handleMultiSelect('accommodations', val)} />
        
        {/* 5. Bikini Beach Size */}
        <FilterSection lang={lang} title={text.filterHeaders.bikiniBeachSize} options={Object.values(BikiniBeach)} selected={filters.bikiniBeach} counts={availableCounts['bikiniBeach'] || {}} onChange={(val) => handleMultiSelect('bikiniBeach', val)} />
        
        {/* 6. Atmosphere */}
        <FilterSection lang={lang} title={text.filterHeaders.atmosphere} options={Object.values(Atmosphere)} selected={filters.atmosphere} counts={availableCounts['atmosphere'] || {}} onChange={(val) => handleMultiSelect('atmosphere', val)} />
        
        {/* 7. Greenery / Jungle */}
        <FilterSection lang={lang} title={text.filterHeaders.greenery} options={Object.values(JungleVegetation)} selected={filters.jungle} counts={availableCounts['jungle'] || {}} onChange={(val) => handleMultiSelect('jungle', val)} />
        
        {/* 8. Nightlife */}
        <FilterSection lang={lang} title={text.filterHeaders.nightlife} options={Object.values(Nightlife)} selected={filters.nightlife} counts={availableCounts['nightlife'] || {}} onChange={(val) => handleMultiSelect('nightlife', val)} />
        
        {/* 9. Marine Activities */}
        <FilterSection lang={lang} title={text.filterHeaders.marineActivities} options={Object.values(MarineActivity)} selected={filters.marineActivities} counts={availableCounts['marineActivities'] || {}} onChange={(val) => handleMultiSelect('marineActivities', val)} />
        
        {/* 10. Watersports */}
        <FilterSection lang={lang} title={text.filterHeaders.watersports} options={Object.values(Watersports)} selected={filters.watersports} counts={availableCounts['watersports'] || {}} onChange={(val) => handleMultiSelect('watersports', val)} />

        {/* 11. Features (Booleans) */}
        {showFeaturesSection && (
          <div className="mb-8 border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
             <h3 className="text-sm font-bold text-teal-800 dark:text-teal-400 uppercase tracking-wider mb-3">{text.filterHeaders.features}</h3>
             <div className="space-y-1.5">
               {renderBooleanFilter(text.booleans.sandbank, 'hasSandbankAttached', 'Sandbank')}
               {renderBooleanFilter(text.booleans.floatingBar, 'hasFloatingBar', 'FloatingBar')}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
