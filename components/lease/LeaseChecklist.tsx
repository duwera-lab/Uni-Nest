import React from 'react';
import { UserIcon, DocumentTextIcon, ClipboardCheckIcon, CheckCircleIcon } from '../icons';

interface LeaseChecklistProps {
  currentStep: number;
}

const CheckListItem: React.FC<{ text: string; isComplete: boolean; isActive: boolean }> = ({ text, isComplete, isActive }) => (
    <li className={`flex items-start space-x-3 transition-opacity ${isActive || isComplete ? 'opacity-100' : 'opacity-50'}`}>
        <div className="flex-shrink-0 mt-1">
            {isComplete ? (
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
            ) : (
                <div className={`w-5 h-5 rounded-full border-2 ${isActive ? 'border-[--nd-gold]' : 'border-gray-400 dark:border-gray-500'}`} />
            )}
        </div>
        <span className={` ${isActive ? 'font-bold text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{text}</span>
    </li>
);

export const LeaseChecklist: React.FC<LeaseChecklistProps> = ({ currentStep }) => {
    const steps = [
        { id: 1, title: 'Personal Information', items: ['Full Name', 'Contact Details', 'University Info'] },
        { id: 2, title: 'Required Documents', items: ['Passport / ID', 'Student Visa', 'Proof of Funds'] },
        { id: 3, title: 'Review & Submit', items: ['Confirm Details', 'Agree to Terms'] },
    ];
    
    return (
        <aside className="w-full lg:w-80 flex-shrink-0 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Application Checklist</h3>
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={step.id}>
                        <div className="flex items-center space-x-3 mb-3">
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${currentStep > step.id ? 'bg-[--nd-blue] text-white' : currentStep === step.id ? 'bg-[--nd-gold] text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                                {step.id}
                            </div>
                            <h4 className={`font-bold ${currentStep === step.id ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>{step.title}</h4>
                        </div>
                        <ul className="space-y-2 pl-5 border-l-2 border-gray-200 dark:border-gray-700 ml-4">
                            {step.items.map(item => (
                                <CheckListItem 
                                    key={item} 
                                    text={item}
                                    isComplete={currentStep > step.id}
                                    isActive={currentStep === step.id}
                                />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
};
