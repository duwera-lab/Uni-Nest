import React from 'react';
import { CurrencyDollarIcon } from '../icons';

export const BudgetCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <CurrencyDollarIcon className="w-6 h-6 text-[--nd-blue] dark:text-[--nd-gold-light]" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Budget Optimization</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Here are some AI-powered tips to help you save on housing costs:
      </p>
      <ul className="space-y-3 text-sm">
        <li className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-md">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Consider a Longer Lease</p>
          <p className="text-gray-600 dark:text-gray-400">Landlords often offer lower monthly rates for 12-month leases compared to semester-based ones.</p>
        </li>
         <li className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-md">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Look Just Outside Prime Areas</p>
          <p className="text-gray-600 dark:text-gray-400">Properties a 5-minute extra walk from campus can be significantly cheaper.</p>
        </li>
         <li className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-md">
          <p className="font-semibold text-gray-800 dark:text-gray-200">Factor in Utilities</p>
          <p className="text-gray-600 dark:text-gray-400">Some listings include utilities like Wi-Fi or heating, which can save you over $100 per month.</p>
        </li>
      </ul>
    </div>
  );
};