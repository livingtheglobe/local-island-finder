import React, { useState } from 'react';
import { Island, TransferType, FerryAccess, MarineActivity, Atoll } from '../types';
import { Youtube, BookOpen, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

interface IslandCardProps {
  island: Island;
}

const AtollBadge: React.FC<{ atoll: Atoll }> = ({ atoll }) => {
  // Extract simple name (everything before parenthesis)
  const simpleName = atoll.split('(')[0].trim().toUpperCase();
  return (
    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full z-10 shadow-sm border border-gray-100">
      <span className="text-[10px] font-bold tracking-wider text-teal-800 uppercase">{simpleName}</span>
    </div>
  );
};

export const IslandCard: React.FC<IslandCardProps> = ({ island }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Collect tags
  const tags = [
    ...island.transferTypes,
    island.ferryAccess,
    ...island.marineActivities
  ].slice(0, 6); // Limit initial visible tags

  // Truncate description logic
  const shortDesc = island.description.slice(0, 150) + '...';

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-56 w-full bg-gray-200 shrink-0">
        <img 
          src={island.imageUrl} 
          alt={island.name} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <AtollBadge atoll={island.atoll} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">{island.name}</h2>
        
        <div className="text-gray-600 text-sm leading-relaxed mb-3 flex-grow">
          {isExpanded ? island.description : shortDesc}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 text-xs font-bold tracking-wide uppercase flex items-center mb-6 hover:text-teal-600 transition-colors w-fit"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? <ChevronUp size={14} className="ml-1"/> : <ChevronDown size={14} className="ml-1"/>}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-cyan-50 text-cyan-900 text-[11px] font-medium px-2.5 py-1 rounded border border-cyan-100">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mt-auto">
          {island.travelGuideUrl ? (
            <a 
              href={island.travelGuideUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#0d9488] hover:bg-[#0f766e] text-white py-2.5 rounded-lg text-sm font-bold tracking-wide transition-colors"
            >
              <BookOpen size={16} className="mr-2" />
              GET TRAVEL GUIDE
            </a>
          ) : (
            <div className="h-[42px]"></div> // Spacer to keep alignment if needed, though prompt says leave empty.
          )}
          
          {island.videoUrl ? (
            <a 
              href={island.videoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-700 py-2.5 rounded-lg border border-gray-200 text-sm font-bold tracking-wide transition-colors shadow-sm"
            >
              <Youtube size={18} className="mr-2 text-red-600" />
              WATCH WALKING TOUR
            </a>
          ) : (
             <div className="h-[42px]"></div>
          )}
        </div>
      </div>

      {/* Footer Metadata */}
      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100 mt-auto">
        <div className="flex justify-between items-center text-sm mb-1">
          <span className="text-gray-500">Atmosphere:</span>
          <span className="font-semibold text-gray-900">{island.atmosphere.join(', ')}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500">Size:</span>
          <span className="font-semibold text-gray-900">{island.size}</span>
        </div>
      </div>
    </div>
  );
};
