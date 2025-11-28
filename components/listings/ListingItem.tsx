
import React from 'react';
import type { HousingListing, NavigationHandler } from '../../types';
import { LocationMarkerIcon, WifiIcon, FireIcon, CarIcon, CheckCircleIcon } from '../icons';

interface ListingItemProps {
  listing: HousingListing;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: NavigationHandler;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wifi': <WifiIcon className="w-4 h-4" />,
  'Utilities Included': <FireIcon className="w-4 h-4" />,
  'Parking': <CarIcon className="w-4 h-4" />,
};

export const ListingItem: React.FC<ListingItemProps> = ({ listing, onMouseEnter, onMouseLeave, onNavigate }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row group cursor-pointer border border-gray-100 dark:border-gray-700 min-h-[220px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onNavigate('listing-detail', listing)}
    >
      {/* Image Container */}
      <div className="w-full md:w-72 h-64 md:h-auto relative flex-shrink-0 overflow-hidden">
        <img 
            src={listing.imageUrl} 
            alt={listing.title} 
            loading="lazy"
            width="600"
            height="400"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
         <div className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-green-600 dark:text-green-400 text-xs font-bold rounded-full shadow-sm z-10">
            <CheckCircleIcon className="w-3.5 h-3.5" />
            <span>Verified</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
            <div className="flex justify-between items-start">
                <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-[--nd-blue] dark:group-hover:text-[--nd-gold-light] transition-colors">{listing.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                        <LocationMarkerIcon className="w-4 h-4 mr-1.5 flex-shrink-0 text-gray-400"/>
                        <span className="truncate">{listing.address}</span>
                    </div>
                </div>
                <div className="text-right flex-shrink-0">
                    <span className="block font-bold text-xl text-[--nd-blue] dark:text-[--nd-gold-light]">
                        ${listing.rent}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">/month</span>
                </div>
            </div>
            
            <div className="my-4 flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300">
                <span className="font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{listing.bedrooms} Beds</span>
                <span className="font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{listing.bathrooms} Baths</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
                {listing.amenities.slice(0, 3).map(amenity => (
                    <div key={amenity} className="flex items-center space-x-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600">
                        {amenityIcons[amenity]}
                        <span>{amenity}</span>
                    </div>
                ))}
                {listing.amenities.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">+ {listing.amenities.length - 3} more</span>
                )}
            </div>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center mt-auto">
             <p className="text-xs text-gray-500 dark:text-gray-400 italic line-clamp-1 max-w-[60%]">
                {listing.recommendationReason}
             </p>
            <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate('listing-detail', listing)}
                }
                className="px-4 py-2 text-sm font-semibold text-white bg-[--nd-blue] rounded-lg shadow-sm hover:bg-[--nd-gold] hover:text-[--nd-blue] transition-all transform hover:-translate-y-0.5"
            >
                View Details
            </button>
        </div>
      </div>
    </div>
  );
};
