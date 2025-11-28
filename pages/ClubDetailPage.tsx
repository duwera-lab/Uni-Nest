import React from 'react';
import { NavigationHandler } from '../types';
import { StudentClub } from '../types';
import { CalendarDaysIcon, EnvelopeIcon } from '../components/icons';

interface ClubDetailPageProps {
  club: StudentClub;
  onNavigate: NavigationHandler;
}

export const ClubDetailPage: React.FC<ClubDetailPageProps> = ({ club, onNavigate }) => {
  return (
    <div className="flex-1 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="cursor-pointer hover:underline" onClick={() => onNavigate('community')}>Community Hub</span>
                <span>/</span>
                <span className="font-semibold text-gray-700 dark:text-gray-200">{club.name}</span>
            </div>
             <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <img src={club.imageUrl} alt={`${club.name} cover`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                    <h1 className="text-4xl font-extrabold text-white">{club.name}</h1>
                    <p className="mt-1 text-lg font-semibold text-[--nd-gold-light]">{club.category}</p>
                </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About the Club</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {club.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-200">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-start space-x-4">
                    <CalendarDaysIcon className="w-8 h-8 text-[--nd-gold] flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Meeting Information</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{club.meetingInfo}</p>
                    </div>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-start space-x-4">
                    <EnvelopeIcon className="w-8 h-8 text-[--nd-gold] flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Contact</h3>
                        <a href={`mailto:${club.contactEmail}`} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                            {club.contactEmail}
                        </a>
                    </div>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};