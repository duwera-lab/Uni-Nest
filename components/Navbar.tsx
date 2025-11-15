import React from 'react';
import { BuildingIcon } from './icons';
import { Page } from '../App';
import { HousingListing } from '../types';


interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page, listing?: HousingListing) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'listings', label: 'Verified Listings' },
    { id: 'lease', label: 'Lease Application' },
    { id: 'about', label: 'About Us' },
    { id: 'assistant', label: 'Uni-Assistant' },
    { id: 'contact', label: 'Contact Us' },
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
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
    </header>
  );
};