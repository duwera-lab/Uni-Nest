import React from 'react';
import { BuildingIcon } from './icons';
// FIX: Corrected import path for Page type.
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4 justify-center md:justify-start">
              <div className="bg-[--nd-blue] p-2 rounded-lg">
                <BuildingIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Uni-Nest</h1>
            </div>
            <p className="max-w-xs mx-auto md:mx-0 text-gray-500 dark:text-gray-400">
              Simplifying the housing journey for international students with trust and technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Navigate</h4>
              <nav className="flex flex-col space-y-2">
                <button onClick={() => onNavigate('about')} className="text-gray-500 dark:text-gray-400 hover:text-[--nd-gold-light]">About Us</button>
                <button onClick={() => onNavigate('contact')} className="text-gray-500 dark:text-gray-400 hover:text-[--nd-gold-light]">Contact Us</button>
                <button onClick={() => onNavigate('listings')} className="text-gray-500 dark:text-gray-400 hover:text-[--nd-gold-light]">Listings</button>
              </nav>
            </div>
             <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Contact</h4>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p>Email: <a href="mailto:support@un-nest.com" className="hover:text-[--nd-gold-light]">support@un-nest.com</a></p>
              </div>
            </div>
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