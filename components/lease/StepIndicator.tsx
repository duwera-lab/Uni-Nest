import React from 'react';
import { UserIcon, DocumentTextIcon, ClipboardCheckIcon } from '../icons';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const stepDetails = [
    { icon: <UserIcon className="w-5 h-5" />, label: 'Information' },
    { icon: <DocumentTextIcon className="w-5 h-5" />, label: 'Documents' },
    { icon: <ClipboardCheckIcon className="w-5 h-5" />, label: 'Review' },
]

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }, (_, i) => {
            const step = i + 1;
            const isCompleted = step < currentStep;
            const isActive = step === currentStep;
            return (
                <React.Fragment key={step}>
                    <div className="flex flex-col items-center text-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isCompleted ? 'bg-[--nd-blue] border-[--nd-blue] text-white' : 
                            isActive ? 'border-[--nd-gold] text-[--nd-gold]' : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                        }`}>
                            {isCompleted ? <CheckCircleIcon className="w-5 h-5" /> : stepDetails[i].icon}
                        </div>
                        <p className={`mt-2 text-xs font-semibold ${isActive ? 'text-[--nd-gold]' : 'text-gray-500 dark:text-gray-400'}`}>{stepDetails[i].label}</p>
                    </div>
                    {step < totalSteps && <div className={`flex-1 h-1 mx-4 rounded-full ${isCompleted ? 'bg-[--nd-blue]' : 'bg-gray-200 dark:bg-gray-700'}`} />}
                </React.Fragment>
            );
        })}
      </div>
    </div>
  );
};

// A checkmark icon for completed steps.
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);
