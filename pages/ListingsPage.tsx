
import React, { useState } from 'react';
import { HousingListing, NavigationHandler } from '../types';
import { ListingItem } from '../components/listings/ListingItem';
import { MapPlaceholder } from '../components/listings/MapPlaceholder';
import { SparklesIcon, SunIcon, ShieldCheckIcon } from '../components/icons';

const mockListingsData: HousingListing[] = [
  {
    id: 1,
    title: 'Sunny 2-Bedroom near Campus',
    address: '123 Eddy Street',
    rent: 850,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=600&h=400&auto=format&fit=crop',
    recommendationReason: 'High safety rating and a 10-minute walk to the engineering building.',
    amenities: ['Wifi', 'Utilities Included', 'Parking'],
    description: 'A bright and spacious 2-bedroom apartment perfect for students. Features a modern kitchen, hardwood floors, and large windows that let in plenty of natural light. Located in a quiet, safe neighborhood just a short walk from the main campus.',
    location: { lat: 37.7749, lng: -122.4194 }
  },
  {
    id: 2,
    title: 'Modern Loft in Downtown',
    address: '456 College Avenue',
    rent: 950,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&h=400&auto=format&fit=crop',
    recommendationReason: 'Excellent access to public transport and within your specified budget.',
    amenities: ['Wifi', 'Parking'],
    description: 'Stylish and modern loft apartment in the heart of downtown. This unit boasts high ceilings, an open-concept living area, and a fully-equipped kitchen with stainless steel appliances. Ideal for a single student or a couple.',
    location: { lat: 37.7850, lng: -122.4290 }
  },
  {
    id: 3,
    title: 'Cozy Studio for Students',
    address: '789 University Way',
    rent: 720,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ab162324?q=80&w=600&h=400&auto=format&fit=crop',
    recommendationReason: 'Affordable and located in a quiet, student-friendly neighborhood.',
    amenities: ['Utilities Included'],
    description: 'This cozy studio is perfect for the budget-conscious student. It comes fully furnished and includes all utilities. The building has a shared laundry room and is located on a quiet street with easy access to the campus bus route.',
    location: { lat: 37.7695, lng: -122.4335 }
  },
  {
    id: 4,
    title: 'Spacious 3-Bed Apartment',
    address: '101 Campus Drive',
    rent: 1500,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&h=400&auto=format&fit=crop',
    recommendationReason: 'Perfect for groups, with large common areas and close to university facilities.',
    amenities: ['Wifi', 'Parking', 'Utilities Included'],
    description: 'Ideal for a group of friends, this 3-bedroom apartment offers ample space for studying and socializing. It features a large living room, a recently renovated kitchen, and two full bathrooms. Located directly across from the university library.',
    location: { lat: 37.7780, lng: -122.4100 }
  },
];

interface ListingsPageProps {
    onNavigate: NavigationHandler;
}

const FilterCheckbox: React.FC<{ label: string }> = ({ label }) => (
    <label className="flex items-center space-x-3">
        <input type="checkbox" className="w-5 h-5 rounded text-[--nd-blue] bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-[--nd-gold]" />
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
    </label>
);

const FilterButton: React.FC<{ label: string }> = ({ label }) => (
    <button className="px-3 py-1.5 w-full text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-[--nd-gold] focus:outline-none">
        {label}
    </button>
);

const FilterToggle: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <label className="flex items-center justify-between space-x-3 cursor-pointer">
        <span className="flex items-center space-x-3">
            {icon}
            <span className="text-gray-700 dark:text-gray-300">{label}</span>
        </span>
        <input type="checkbox" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[--nd-gold]/50 dark:peer-focus:ring-[--nd-gold] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[--nd-blue]"></div>
    </label>
);

export const ListingsPage: React.FC<ListingsPageProps> = ({ onNavigate }) => {
    const [hoveredListingId, setHoveredListingId] = useState<number | null>(null);

    return (
        <div className="flex-1 flex flex-col">
            <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
                <div className="container mx-auto px-6 py-6">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Verified Housing Listings</h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">Browse housing with confidence. 
                        <button className="ml-1 text-[--nd-gold] font-semibold hover:underline">How we verify listings</button>
                    </p>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12">
                {/* Filters Column */}
                <aside className="lg:col-span-3 bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-700 p-6 space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Price Range</h3>
                        <input type="range" min="500" max="2000" step="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Bedrooms</h3>
                        <div className="flex space-x-2">
                            {['1', '2', '3', '4+'].map(num => (
                                <button key={num} className="px-4 py-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-[--nd-blue] focus:text-white focus:border-[--nd-blue]">{num}</button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Commute Time to Campus</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <FilterButton label="< 10 min walk" />
                            <FilterButton label="< 20 min walk" />
                            <FilterButton label="< 15 min bus" />
                            <FilterButton label="< 15 min bike" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <SparklesIcon className="w-5 h-5 text-[--nd-gold]"/>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Community Filters</h3>
                        </div>
                        <div className="space-y-3">
                            <FilterCheckbox label="Near Indian Grocery" />
                            <FilterCheckbox label="Close to Asian Market" />
                            <FilterCheckbox label="Student Hotspot Area" />
                            <FilterCheckbox label="Quiet Neighborhood" />
                        </div>
                    </div>
                     <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Map Layers</h3>
                        <div className="space-y-4">
                            <FilterToggle icon={<SunIcon className="w-5 h-5 text-yellow-500" />} label="Well-lit Areas" />
                            <FilterToggle icon={<ShieldCheckIcon className="w-5 h-5 text-blue-500" />} label="Security Patrol Zone" />
                        </div>
                    </div>
                </aside>
                
                {/* Listings Column */}
                <div className="lg:col-span-5 overflow-y-auto bg-white dark:bg-gray-800">
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
                </div>

                {/* Map Column */}
                <main className="hidden lg:block lg:col-span-4 sticky top-0 h-full">
                   <MapPlaceholder listings={mockListingsData} hoveredListingId={hoveredListingId} />
                </main>
            </div>
        </div>
    );
};
