import React from 'react';
import { CheckCircleIcon, MapIcon, SparklesIcon } from '../components/icons';
import { Page } from '../App';
import { HousingListing } from '../types';

interface HomePageProps {
  onNavigate: (page: Page, listing?: HousingListing) => void;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center h-full">
    <div className="flex justify-center items-center mb-4 w-12 h-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{children}</p>
  </div>
);


export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white lg:text-5xl">
            Find Your Perfect Student Home, Simplified.
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Uni-Nest is designed for international students, reducing the friction, confusion, and risk of finding housing near campus.
          </p>
          <button
            onClick={() => onNavigate('assistant')}
            className="mt-8 px-8 py-3 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-all transform hover:scale-105"
          >
            Talk to Uni-Assistant
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Uni-Nest?</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Everything you need for a smooth transition.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => onNavigate('dashboard')}
            >
              <FeatureCard
                icon={<SparklesIcon className="w-6 h-6 text-[--nd-gold]" />}
                title="AI-Powered Roommate Matching"
              >
                Our compatibility scoring helps you find the perfect roommate based on lifestyle and preferences.
              </FeatureCard>
            </div>
            <div
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => onNavigate('listings')}
            >
              <FeatureCard
                icon={<MapIcon className="w-6 h-6 text-[--nd-gold]" />}
                title="Verified Listings Map"
              >
                Browse housing near campus with confidence. All our listings are verified to prevent scams.
              </FeatureCard>
            </div>
            <div
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => onNavigate('lease')}
            >
              <FeatureCard
                icon={<CheckCircleIcon className="w-6 h-6 text-[--nd-gold]" />}
                title="Simplified Lease Applications"
              >
                A guided, paperwork-light workflow with checklists makes applying for a lease straightforward.
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};