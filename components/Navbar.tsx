import React from 'react';
import { BuildingIcon } from './icons';
import { Page, NavigationHandler } from '../types';


interface NavbarProps {
  currentPage: Page;
  onNavigate: NavigationHandler;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'My Dashboard' },
    { id: 'listings', label: 'Verified Listings' },
    { id: 'community', label: 'Community Hub' },
    { id: 'lease', label: 'Lease Application' },
    { id: 'assistant', label: 'Uni-Assistant' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="bg-[--nd-blue] p-2 rounded-lg">
            <BuildingIcon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Uni-Nest</h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-gray-600 dark:text-gray-300 hover:text-[--nd-gold] dark:hover:text-[--nd-gold-light] transition-colors font-medium pb-1 border-b-2 ${
                currentPage === link.id
                  ? 'border-[--nd-gold] text-[--nd-gold] dark:text-[--nd-gold-light]'
                  : 'border-transparent'
              }`}
            >
              {link.label}
            </button>
          ))}
           <button
              onClick={() => onNavigate('landlord-console')}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-[--nd-blue] dark:text-[--nd-gold-light] text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
                For Landlords
            </button>
          <button
            onClick={() => onNavigate('profile')}
            className={`relative rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] ${
                currentPage === 'profile'
                ? 'ring-2 ring-[--nd-gold] ring-offset-2'
                : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600'
            }`}
            aria-label="User Profile"
          >
             <img 
              src="https://i.pravatar.cc/150?u=alexchen" 
              alt="Profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
            />
            {/* Online Status Indicator */}
            <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-800 bg-green-400"></span>
          </button>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
    </header>
  );
};