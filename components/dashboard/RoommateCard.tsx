import React from 'react';
import type { RoommateProfile, NavigationHandler } from '../../types';
import { StarIcon, ChatBubbleLeftRightIcon } from '../icons';

interface RoommateCardProps {
  roommate: RoommateProfile;
  onNavigate: NavigationHandler;
}

export const RoommateCard: React.FC<RoommateCardProps> = ({ roommate, onNavigate }) => {
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
      
      <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-md mb-4">
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Compatibility</span>
                <span className="px-2 py-0.5 text-sm font-bold text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-800/50 rounded-full">
                    {roommate.compatibilityScore}%
                </span>
            </div>
            <div className="flex items-start space-x-2">
                <StarIcon className="w-4 h-4 text-[--nd-gold] mt-0.5 flex-shrink-0" />
                <div>
                    <h5 className="text-xs font-bold text-gray-800 dark:text-gray-200">Match Reason:</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{roommate.matchReason}</p>
                </div>
            </div>
      </div>

      <div className="mt-auto">
        <button 
            onClick={() => onNavigate('assistant', roommate)}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[--nd-blue] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] transition-colors"
        >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            <span>Start Chat</span>
        </button>
      </div>
    </div>
  );
};