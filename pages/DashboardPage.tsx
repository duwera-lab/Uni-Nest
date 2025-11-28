
import React from 'react';
import { RoommateProfile, HousingListing, NavigationHandler } from '../types';
import { ProfileStrength } from '../components/dashboard/ProfileStrength';
import { RoommateCard } from '../components/dashboard/RoommateCard';
import { BudgetCard } from '../components/dashboard/BudgetCard';
import { ListingCard } from '../components/dashboard/ListingCard';
import { UsersIcon, HomeIcon } from '../components/icons';

const mockRoommates: RoommateProfile[] = [
  {
    id: 1,
    name: 'Alex Chen',
    major: 'Computer Science',
    bio: 'Quiet, clean, and focused on studies. I enjoy video games and exploring local coffee shops on weekends.',
    compatibilityScore: 92,
    matchReason: 'Shared "Quiet" lifestyle preference and "Early Bird" sleeping habits.',
    avatarUrl: `https://i.pravatar.cc/150?u=alexchen`
  },
  {
    id: 2,
    name: 'Maria Garcia',
    major: 'Business Administration',
    bio: 'Social and outgoing. Looking for a roommate who is friendly and enjoys hosting small get-togethers.',
    compatibilityScore: 85,
    matchReason: 'Compatible "Social" energy levels and interest in "Weekend Outings".',
    avatarUrl: `https://i.pravatar.cc/150?u=mariagarcia`
  },
];

const mockListings: HousingListing[] = [
  {
    id: 1,
    title: 'Sunny 2-Bedroom near Campus',
    address: '123 Eddy Street',
    rent: 850,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1024&h=768&auto=format&fit=crop',
    recommendationReason: 'High safety rating and a 10-minute walk to the engineering building.',
    amenities: ['Wifi', 'Utilities Included', 'Parking'],
    description: 'A bright and spacious 2-bedroom apartment perfect for students. Features a modern kitchen, hardwood floors, and large windows that let in plenty of natural light. Located in a quiet, safe neighborhood just a short walk from the main campus.',
    location: { lat: 34.0522, lng: -118.2437 }
  },
  {
    id: 2,
    title: 'Modern Loft in Downtown',
    address: '456 College Avenue',
    rent: 950,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1024&h=768&auto=format&fit=crop',
    recommendationReason: 'Excellent access to public transport and within your specified budget.',
    amenities: ['Wifi', 'Parking'],
    description: 'Stylish and modern loft apartment in the heart of downtown. This unit boasts high ceilings, an open-concept living area, and a fully-equipped kitchen with stainless steel appliances. Ideal for a single student or a couple.',
    location: { lat: 34.0522, lng: -118.2437 }
  }
];

interface DashboardPageProps {
  onNavigate: NavigationHandler;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Your Personalization Panel</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            AI-powered insights to guide your housing journey.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Roommate Recommendations */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <UsersIcon className="w-7 h-7 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Top Roommate Matches</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockRoommates.map(roommate => (
                  <RoommateCard key={roommate.id} roommate={roommate} onNavigate={onNavigate} />
                ))}
              </div>
            </section>

            {/* Housing Recommendations */}
            <section>
              <div className="flex items-center space-x-3 mb-4">
                <HomeIcon className="w-7 h-7 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Housing Recommendations</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockListings.map(listing => (
                  <ListingCard key={listing.id} listing={listing} onNavigate={onNavigate} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            <ProfileStrength score={75} onNavigate={() => onNavigate('profile')} />
            <BudgetCard />
          </div>
        </div>
      </div>
    </div>
  );
};
