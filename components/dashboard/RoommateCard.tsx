import React from 'react';
import type { RoommateProfile } from '../../types';
import { StarIcon } from '../icons';

interface RoommateCardProps {
  roommate: RoommateProfile;
}

export const RoommateCard: React.FC<RoommateCardProps> = ({ roommate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col">
      <div className="flex items-center space-x-4 mb-4">
        <img src={roommate.avatarUrl} alt={roommate.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{roommate.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{roommate.major}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">{roommate.bio}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Compatibility Score</span>
          <span className="px-2 py-0.5 text-sm font-bold text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800/50 rounded-full">
            {roommate.compatibilityScore}%
          </span>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-md">
            <div className="flex items-start space-x-2">
                <StarIcon className="w-4 h-4 text-[--nd-gold] mt-0.5 flex-shrink-0" />
                <div>
                    <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200">Why we matched:</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{roommate.matchReason}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};