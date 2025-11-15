import React from 'react';
import { ArrowUpTrayIcon } from '../icons';

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
          <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
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
