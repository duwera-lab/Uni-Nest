import React from 'react';
import { CheckCircleIcon, DocumentTextIcon, HomeIcon, MapIcon, SparklesIcon, UsersIcon } from '../components/icons';
import { NavigationHandler } from '../types';

interface HomePageProps {
  onNavigate: NavigationHandler;
}

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center h-full flex flex-col">
    <div className="flex justify-center items-center mb-4 w-12 h-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 flex-grow">{children}</p>
  </div>
);


export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white lg:text-5xl leading-tight">
                Find Your Perfect Student Home, <span className="text-[--nd-gold-light]">Simplified</span>.
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                Uni-Nest is an end-to-end platform for international students, reducing the friction, confusion, and risk of finding housing near campus.
              </p>
              <button
                onClick={() => onNavigate('assistant')}
                className="mt-8 px-8 py-3 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-all transform hover:scale-105"
              >
                Talk to Uni-Assistant
              </button>
            </div>
            
            {/* Visual Content */}
            <div className="relative hidden lg:block">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[--nd-gold]/20 rounded-full -translate-x-1/4 -translate-y-1/4 blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[--nd-blue]/20 rounded-full translate-x-1/4 translate-y-1/4 blur-2xl animate-pulse [animation-delay:2s]"></div>
              <img 
                src="https://images.unsplash.com/photo-1493809842344-ab90ff3add39?q=80&w=1200&auto=format&fit=crop" 
                alt="A bright and cozy living space representing a student's perfect new home" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Your Journey, Simplified</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">An end-to-end experience, all in one place.</p>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700 hidden lg:block" style={{ transform: 'translateY(-50%)' }}></div>
            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-full mb-4">
                  <UsersIcon className="w-10 h-10 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">1. Find Your Crew</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Connect with compatible roommates using our AI-powered matching system.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-full mb-4">
                  <HomeIcon className="w-10 h-10 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">2. Discover Your Home</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Browse our map of verified listings, safe from scams and uncertainty.</p>
              </div>
               <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-full mb-4">
                  <DocumentTextIcon className="w-10 h-10 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">3. Secure Your Lease</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Our simplified application process makes securing your new home easy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
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
                title="AI-Powered Matching"
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

      {/* Landlord Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-10 lg:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Are You a Landlord?</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl">
                        Fill your vacancies faster with a steady stream of verified international student tenants. Uni-Nest simplifies your process from listing to lease.
                    </p>
                </div>
                <button
                    onClick={() => onNavigate('contact')}
                    className="mt-8 lg:mt-0 lg:ml-8 px-8 py-3 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-all transform hover:scale-105 flex-shrink-0"
                >
                    List Your Property
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};