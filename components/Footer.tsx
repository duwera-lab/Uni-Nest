import React from 'react';
import { BuildingIcon } from './icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-[--nd-blue] p-2 rounded-lg">
              <BuildingIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Uni-Nest</h1>
          </div>
          <p className="max-w-md mx-auto mb-4 text-gray-500 dark:text-gray-400">
            Simplifying the housing journey for international students with trust and technology.
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>Contact us: <a href="mailto:support@un-nest.com" className="hover:text-[--nd-gold-light]">support@un-nest.com</a></p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p>&copy; {new Date().getFullYear()} Uni-Nest. All rights reserved.</p>
          <p>Your AI-powered guide to student housing.</p>
        </div>
      </div>
    </footer>
  );
};