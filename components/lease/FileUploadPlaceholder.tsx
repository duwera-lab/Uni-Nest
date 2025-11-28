import React from 'react';
import { ArrowUpTrayIcon, LockClosedIcon } from '../icons';

interface FileUploadPlaceholderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FileUploadPlaceholder: React.FC<FileUploadPlaceholderProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
            <div className="relative group">
                <LockClosedIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <div className="absolute bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    Your data is encrypted and only shared with the landlord upon submission.
                </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-[--nd-blue] dark:text-gray-200 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold]"
      >
        <ArrowUpTrayIcon className="w-4 h-4" />
        <span>Upload File</span>
      </button>
    </div>
  );
};