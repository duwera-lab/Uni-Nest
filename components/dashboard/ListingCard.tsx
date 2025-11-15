import React from 'react';
import type { HousingListing } from '../../types';
import { LocationMarkerIcon, StarIcon, EnvelopeIcon } from '../icons';
import { Page } from '../../App';

interface ListingCardProps {
  listing: HousingListing;
  onNavigate: (page: Page, listing?: HousingListing) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onNavigate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={listing.imageUrl} alt={listing.title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{listing.title}</h4>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 my-2">
            <LocationMarkerIcon className="w-4 h-4 mr-1"/>
            <span>{listing.address}</span>
        </div>
        <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300 mb-4">
            <span>{listing.bedrooms} bed</span>
            <span>&middot;</span>
            <span>{listing.bathrooms} bath</span>
            <span className="font-bold text-lg text-[--nd-blue] dark:text-[--nd-gold-light] ml-auto">
                ${listing.rent}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mo</span>
            </span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-md mt-auto">
            <div className="flex items-start space-x-2">
                <StarIcon className="w-4 h-4 text-[--nd-gold] mt-0.5 flex-shrink-0" />
                <div>
                    <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200">Why it's recommended:</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{listing.recommendationReason}</p>
                </div>
            </div>
        </div>
        <button
            onClick={() => onNavigate('assistant', listing)}
            className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-[--nd-blue] dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-colors"
        >
            <EnvelopeIcon className="w-4 h-4" />
            <span>Contact Landlord</span>
        </button>
      </div>
    </div>
  );
};