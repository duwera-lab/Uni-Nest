import React, { useState } from 'react';
import { HousingListing } from '../types';
import { ListingItem } from '../components/listings/ListingItem';
import { MapPlaceholder } from '../components/listings/MapPlaceholder';
import { Page } from '../App';

const mockListingsData: HousingListing[] = [
  {
    id: 1,
    title: 'Sunny 2-Bedroom near Campus',
    address: '123 Eddy Street',
    rent: 850,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop',
    recommendationReason: 'High safety rating and a 10-minute walk to the engineering building.',
    amenities: ['Wifi', 'Utilities Included'],
    location: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 2,
    title: 'Modern Loft in Downtown',
    address: '456 College Avenue',
    rent: 950,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    recommendationReason: 'Excellent access to public transport and within your specified budget.',
    amenities: ['Wifi', 'Parking'],
    location: { lat: 37.7850, lng: -122.4290 }
  },
  {
    id: 3,
    title: 'Cozy Studio for Students',
    address: '789 University Way',
    rent: 720,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ab162324?q=80&w=800&auto=format&fit=crop',
    recommendationReason: 'Affordable and located in a quiet, student-friendly neighborhood.',
    amenities: ['Utilities Included'],
    location: { lat: 37.7695, lng: -122.4335 }
  },
  {
    id: 4,
    title: 'Spacious 3-Bed Apartment',
    address: '101 Campus Drive',
    rent: 1500,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    recommendationReason: 'Perfect for groups, with large common areas and close to university facilities.',
    amenities: ['Wifi', 'Parking', 'Utilities Included'],
    location: { lat: 37.7780, lng: -122.4100 }
  },
];

interface ListingsPageProps {
    onNavigate: (page: Page, listing?: HousingListing) => void;
}

export const ListingsPage: React.FC<ListingsPageProps> = ({ onNavigate }) => {
    const [hoveredListingId, setHoveredListingId] = useState<number | null>(null);

    return (
        <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
                <div className="container mx-auto px-6 py-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Verified Housing Listings</h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Browse housing near campus with confidence. All listings are verified to prevent scams.</p>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
                {/* Listings Column */}
                <aside className="overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
                    <div className="p-4 space-y-4">
                        {mockListingsData.map((listing) => (
                            <ListingItem
                                key={listing.id}
                                listing={listing}
                                onMouseEnter={() => setHoveredListingId(listing.id)}
                                onMouseLeave={() => setHoveredListingId(null)}
                                onNavigate={onNavigate}
                            />
                        ))}
                    </div>
                </aside>

                {/* Map Column */}
                <main className="hidden lg:block sticky top-0 h-full">
                   <MapPlaceholder listings={mockListingsData} hoveredListingId={hoveredListingId} />
                </main>
            </div>
        </div>
    );
};