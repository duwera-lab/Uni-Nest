import React from 'react';
import { ChartPieIcon, CheckCircleIcon } from '../icons';

interface ProfileStrengthProps {
  score: number;
}

export const ProfileStrength: React.FC<ProfileStrengthProps> = ({ score }) => {
  const circumference = 2 * Math.PI * 45; // 2 * pi * radius
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const scoreColor = score > 80 ? 'text-green-500' : score > 60 ? 'text-yellow-500' : 'text-red-500';

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <ChartPieIcon className="w-6 h-6 text-[--nd-blue] dark:text-[--nd-gold-light]" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Profile Strength</h3>
      </div>
      <div className="flex items-center justify-center space-x-6 my-4">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="10"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
            />
            {/* Progress circle */}
            <circle
              className={scoreColor}
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className={`absolute inset-0 flex items-center justify-center text-3xl font-bold ${scoreColor}`}>
            {score}%
          </span>
        </div>
        <div className="text-sm">
          <p className="font-semibold">{score > 80 ? "Excellent!" : score > 60 ? "Looking Good!" : "Could be better"}</p>
          <p className="text-gray-500 dark:text-gray-400">Higher scores attract more matches.</p>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">How to improve:</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-center">
            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>Add more lifestyle preferences</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span>Upload a profile picture</span>
          </li>
          <li className="flex items-center">
            <CheckCircleIcon className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span>Verify your student status</span>
          </li>
        </ul>
      </div>
    </div>
  );
};