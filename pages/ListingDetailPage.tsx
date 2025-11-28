import React from 'react';
import { HousingListing, NavigationHandler } from '../types';
import { LocationMarkerIcon, WifiIcon, FireIcon, CarIcon, EnvelopeIcon, CheckCircleIcon, StarIcon } from '../components/icons';
import { MapPlaceholder } from '../components/listings/MapPlaceholder';

interface ListingDetailPageProps {
  listing: HousingListing;
  onNavigate: NavigationHandler;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  'Wifi': <WifiIcon className="w-5 h-5 text-[--nd-gold]" />,
  'Utilities Included': <FireIcon className="w-5 h-5 text-[--nd-gold]" />,
  'Parking': <CarIcon className="w-5 h-5 text-[--nd-gold]" />,
};

export const ListingDetailPage: React.FC<ListingDetailPageProps> = ({ listing, onNavigate }) => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="cursor-pointer hover:underline" onClick={() => onNavigate('listings')}>Listings</span>
                <span>/</span>
                <span className="font-semibold text-gray-700 dark:text-gray-200">{listing.title}</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{listing.title}</h1>
            <div className="mt-2 flex items-center text-gray-600 dark:text-gray-300">
                <LocationMarkerIcon className="w-5 h-5 mr-2" />
                <span>{listing.address}</span>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <img src={listing.imageUrl} alt={listing.title} className="w-full h-96 object-cover"/>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">About this property</h2>
                            <div className="mt-2 flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full w-fit">
                                <CheckCircleIcon className="w-4 h-4" />
                                <span>Verified by Uni-Nest</span>
                            </div>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                            <p className="text-3xl font-bold text-[--nd-blue] dark:text-[--nd-gold-light]">
                                ${listing.rent}
                                <span className="text-lg font-normal text-gray-500 dark:text-gray-400">/mo</span>
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">per person</p>
                        </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{listing.description}</p>
                    
                    <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Amenities</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {listing.amenities.map(amenity => (
                                <div key={amenity} className="flex items-center space-x-3">
                                    {amenityIcons[amenity]}
                                    <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                 <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md mb-6">
                    <div className="flex items-start space-x-3">
                        <StarIcon className="w-5 h-5 text-[--nd-gold] mt-0.5 flex-shrink-0" />
                        <div>
                            <h5 className="font-bold text-gray-800 dark:text-gray-200">AI Recommendation:</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{listing.recommendationReason}</p>
                        </div>
                    </div>
                </div>

                <div className="h-64 w-full rounded-lg overflow-hidden mb-6 border-2 border-gray-200 dark:border-gray-700">
                    <MapPlaceholder listings={[listing]} hoveredListingId={null} />
                </div>
                
                <button
                    onClick={() => onNavigate('assistant', listing)}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[--nd-blue] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-colors"
                >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>Contact Landlord</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};