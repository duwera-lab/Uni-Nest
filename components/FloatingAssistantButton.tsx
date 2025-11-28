import React from 'react';
// FIX: Corrected import path for Page type.
import { Page } from '../types';
import { SparklesIcon } from './icons';

interface FloatingAssistantButtonProps {
  onNavigate: (page: Page) => void;
}

export const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({ onNavigate }) => {
  return (
    <button
      onClick={() => onNavigate('assistant')}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-[--nd-blue] to-blue-800 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[--nd-gold]/50 animate-fade-in"
      aria-label="Open Uni-Assistant"
    >
        <SparklesIcon className="w-8 h-8" />
    </button>
  );
};