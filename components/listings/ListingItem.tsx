import React from 'react';
import type { HousingListing } from '../../types';
import { LocationMarkerIcon, WifiIcon, FireIcon, CarIcon, EnvelopeIcon } from '../icons';
import { Page } from '../../App';

interface ListingItemProps {
  listing: HousingListing;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNavigate: (page: Page, listing?: HousingListing) => void;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wifi': <WifiIcon className="w-4 h-4" />,
  'Utilities Included': <FireIcon className="w-4 h-4" />,
  'Parking': <CarIcon className="w-4 h-4" />,
};

export const ListingItem: React.FC<ListingItemProps> = ({ listing, onMouseEnter, onMouseLeave, onNavigate }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={listing.imageUrl} alt={listing.title} className="w-1/3 h-auto object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{listing.title}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
            <LocationMarkerIcon className="w-4 h-4 mr-1 flex-shrink-0"/>
            <span>{listing.address}</span>
          </div>
        </div>
        
        <div className="my-3 text-sm text-gray-700 dark:text-gray-300 flex items-center space-x-4">
            <span>{listing.bedrooms} bed</span>
            <span className="text-gray-300 dark:text-gray-600">&middot;</span>
            <span>{listing.bathrooms} bath</span>
        </div>

        <div className="flex items-center space-x-3 my-2">
            {listing.amenities.map(amenity => (
                <div key={amenity} title={amenity} className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300">
                    {amenityIcons[amenity]}
                    <span>{amenity}</span>
                </div>
            ))}
        </div>

        <div className="mt-auto flex justify-between items-center pt-2">
            <button
                onClick={() => onNavigate('assistant', listing)}
                className="flex items-center space-x-2 px-3 py-1.5 bg-white dark:bg-gray-700 text-xs font-medium text-[--nd-blue] dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[--nd-gold] transition-colors"
            >
                <EnvelopeIcon className="w-4 h-4" />
                <span>Contact</span>
            </button>
            <span className="font-bold text-xl text-[--nd-blue] dark:text-[--nd-gold-light]">
                ${listing.rent}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mo</span>
            </span>
        </div>
      </div>
    </div>
  );
};