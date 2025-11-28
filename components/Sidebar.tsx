import React from 'react';
import type { UserType } from '../types';
import { BuildingIcon, GraduationCapIcon, SparklesIcon } from './icons';

interface SidebarProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
  onPromptClick: (prompt: string) => void;
}

const studentPrompts = [
  "Find me a home",
  "How do I find a compatible roommate?",
  "Explain the lease application process for an international student.",
  "What are some common housing scams to avoid?",
];

const landlordPrompts = [
  "How do I list my property on Uni-Nest?",
  "What are the benefits of using the Landlord Console?",
  "How does Uni-Nest verify student tenants?",
  "Explain how to track lease applications.",
];

export const Sidebar: React.FC<SidebarProps> = ({ userType, setUserType, onPromptClick }) => {
  const prompts = userType === 'student' ? studentPrompts : landlordPrompts;

  return (
    <aside className="w-64 lg:w-80 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-[--nd-blue] p-2 rounded-lg">
          <BuildingIcon className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Uni-Assistant</h1>
      </div>

      <div className="flex-1 flex flex-col">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">I am a...</p>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <button
            onClick={() => setUserType('student')}
            className={`flex items-center justify-center space-x-2 p-3 rounded-lg text-sm font-medium transition-colors ${
              userType === 'student'
                ? 'bg-[--nd-blue] text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <GraduationCapIcon className="w-5 h-5" />
            <span>Student</span>
          </button>
          <button
            onClick={() => setUserType('landlord')}
            className={`flex items-center justify-center space-x-2 p-3 rounded-lg text-sm font-medium transition-colors ${
              userType === 'landlord'
                ? 'bg-[--nd-blue] text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <BuildingIcon className="w-5 h-5" />
            <span>Landlord</span>
          </button>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <SparklesIcon className="w-5 h-5 text-[--nd-gold]"/>
          <h2 className="text-md font-semibold text-gray-700 dark:text-gray-300">Quick Prompts</h2>
        </div>
        <div className="space-y-2">
          {prompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => onPromptClick(prompt)}
              className="w-full text-left p-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-6">
        <p>&copy; {new Date().getFullYear()} Uni-Nest. All rights reserved.</p>
        <p>Powered by AI</p>
      </div>
    </aside>
  );
};