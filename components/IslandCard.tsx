
import React, { useState } from 'react';
import { Island, Atoll } from '../types';
import { Youtube, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Language, UI_TEXT, translate } from '../translations';

interface IslandCardProps {
  island: Island;
  lang: Language;
}

const AtollBadge: React.FC<{ atoll: Atoll, lang: Language }> = ({ atoll, lang }) => {
  // Translate atoll name first
  const translatedAtoll = translate(atoll, lang);
  // Extract simple name (everything before parenthesis)
  const simpleName = translatedAtoll.split('(')[0].trim().toUpperCase();
  return (
    <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-2.5 py-1 rounded-full z-10 shadow-sm border border-gray-100 dark:border-gray-700">
      <span className="text-[10px] font-bold tracking-wider text-teal-800 dark:text-teal-400 uppercase">{simpleName}</span>
    </div>
  );
};

const CompactStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <span className="block text-[9px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">{label}</span>
    <span className="block text-xs font-bold text-gray-700 dark:text-gray-200 truncate" title={value}>{value}</span>
  </div>
);

export const IslandCard: React.FC<IslandCardProps> = ({ island, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = UI_TEXT[lang];

  // Pick description based on language
  const description = (lang === 'de' && island.descriptionDe) ? island.descriptionDe : island.description;

  // Collect features and accommodations for tags
  const featureTags = [
    ...(island.hasSandbankAttached ? ['Sandbank'] : []),
    ...(island.hasFloatingBar ? ['Floating Bar'] : []),
    ...island.accommodations,
  ];

  // Combine tags
  const allTags = [
    ...featureTags,
    ...island.transferTypes,
    island.ferryAccess,
    ...island.marineActivities
  ].filter(Boolean);

  const visibleTags = allTags;

  // Truncate description logic
  const shortDesc = description.slice(0, 120) + '...';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full group">
      {/* Image Container - Reduced Height */}
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 shrink-0">
        <img 
          src={island.imageUrl} 
          alt={island.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <AtollBadge atoll={island.atoll} lang={lang} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-serif font-bold text-gray-900 dark:text-white leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">{island.name}</h2>
        </div>
        
        <div className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3 flex-grow">
          {isExpanded ? description : shortDesc}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-teal-600 dark:text-gray-500 dark:hover:text-teal-400 text-xs font-bold tracking-wide uppercase flex items-center mb-4 transition-colors w-fit"
        >
          {isExpanded ? text.readLess : text.readMore}
          {isExpanded ? <ChevronUp size={14} className="ml-1"/> : <ChevronDown size={14} className="ml-1"/>}
        </button>

        {/* Tags - Compact */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleTags.map((tag, idx) => (
            <span key={idx} className="bg-cyan-50 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-200 text-[10px] font-medium px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-800/50 leading-tight">
              {translate(tag, lang)}
            </span>
          ))}
        </div>

        {/* Action Buttons - Compact */}
        <div className="space-y-2 mt-auto">
          {island.travelGuideUrl ? (
            <a 
              href={island.travelGuideUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#0d9488] hover:bg-[#0f766e] text-white py-2 rounded-md text-xs font-bold tracking-wide transition-colors shadow-sm"
            >
              <BookOpen size={14} className="mr-2" />
              {text.getGuide}
            </a>
          ) : (
            <div className="h-[34px]"></div>
          )}
          
          {island.videoUrl ? (
            <a 
              href={island.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-white py-2 rounded-md border border-gray-200 dark:border-gray-600 text-xs font-bold tracking-wide transition-colors shadow-sm"
            >
              <Youtube size={16} className="mr-2 text-red-600" />
              {text.watchTour}
            </a>
          ) : (
             <div className="h-[34px]"></div>
          )}
        </div>
      </div>

      {/* Detailed Features Grid - Compact 3-col */}
      <div className="px-5 py-3 bg-gray-50/80 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700 mt-auto">
        {/* Adjusted grid-cols to give first column (Atmosphere) more space (40/30/30) */}
        <div className="grid grid-cols-[40%_30%_30%] gap-y-2 gap-x-1">
          <CompactStat label={text.labels.atmosphere} value={island.atmosphere.map(a => translate(a, lang)).join(', ')} />
          <CompactStat label={text.labels.size} value={translate(island.size, lang)} />
          <CompactStat label={text.labels.beach} value={translate(island.bikiniBeach, lang)} />
          
          <CompactStat label={text.labels.nightlife} value={translate(island.nightlife, lang)} />
          <CompactStat label={text.labels.greenery} value={translate(island.jungle, lang)} />
          <CompactStat label={text.labels.sports} value={translate(island.watersports, lang)} />
        </div>
      </div>
    </div>
  );
};
