import React, { useState } from 'react';
import { StepIndicator } from '../components/lease/StepIndicator';
import { FileUploadPlaceholder } from '../components/lease/FileUploadPlaceholder';
import { IdentificationIcon, GraduationCapIcon, BanknotesIcon, DocumentTextIcon, CheckCircleIcon, EnvelopeIcon, UserIcon } from '../components/icons';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  major: string;
  yearOfStudy: string;
};

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  university: '',
  major: '',
  yearOfStudy: '1st Year',
};

export const LeasePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the data to a server
    console.log('Form Submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex-1 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16 text-center">
            <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Application Submitted!</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thank you for applying through Uni-Nest. The landlord has been notified and will review your application shortly. You will receive an email confirmation with the next steps.
            </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Simplified Lease Application</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            A guided, paperwork-light workflow to secure your new home.
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal & Student Information */}
            {currentStep === 1 && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 1: Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                    </div>
                     <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                    </div>
                    <div>
                        <label htmlFor="university" className="block text-sm font-medium text-gray-700 dark:text-gray-300">University</label>
                        <input type="text" name="university" id="university" value={formData.university} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                    </div>
                    <div>
                        <label htmlFor="major" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Major / Field of Study</label>
                        <input type="text" name="major" id="major" value={formData.major} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                    </div>
                    <div>
                        <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Year of Study</label>
                        <select name="yearOfStudy" id="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]">
                            <option>1st Year</option>
                            <option>2nd Year</option>
                            <option>3rd Year</option>
                            <option>4th Year</option>
                            <option>Graduate Student</option>
                        </select>
                    </div>
                </div>
              </section>
            )}

            {/* Step 2: Document Upload */}
            {currentStep === 2 && (
              <section className="animate-fade-in">
                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 2: Document Upload</h2>
                 <p className="text-gray-600 dark:text-gray-400 mb-6">Please upload the following documents. This helps landlords verify your identity and student status.</p>
                 <div className="space-y-4">
                    <FileUploadPlaceholder icon={<IdentificationIcon className="w-6 h-6 text-[--nd-gold]" />} title="Passport or National ID" description="A clear copy of your government-issued photo ID." />
                    <FileUploadPlaceholder icon={<DocumentTextIcon className="w-6 h-6 text-[--nd-gold]" />} title="Student Visa (I-20 / DS-2019)" description="Required to verify your international student status." />
                    <FileUploadPlaceholder icon={<BanknotesIcon className="w-6 h-6 text-[--nd-gold]" />} title="Proof of Funds" description="A bank statement or letter showing sufficient funds for rent." />
                 </div>
              </section>
            )}

            {/* Step 3: Review and Submit */}
            {currentStep === 3 && (
              <section className="animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Step 3: Review & Submit</h2>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg space-y-4">
                    <h3 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-600 pb-2">Personal & Student Details</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <p><strong className="block text-gray-500">Full Name:</strong> {formData.fullName}</p>
                        <p><strong className="block text-gray-500">Email:</strong> {formData.email}</p>
                        <p><strong className="block text-gray-500">Phone:</strong> {formData.phone}</p>
                        <p><strong className="block text-gray-500">University:</strong> {formData.university}</p>
                        <p><strong className="block text-gray-500">Major:</strong> {formData.major}</p>
                        <p><strong className="block text-gray-500">Year:</strong> {formData.yearOfStudy}</p>
                    </div>
                    <h3 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-600 pb-2 pt-4">Uploaded Documents</h3>
                     <ul className="space-y-2 text-sm">
                        <li className="flex items-center text-green-600 dark:text-green-400"><CheckCircleIcon className="w-5 h-5 mr-2" /> Passport_ID.pdf</li>
                        <li className="flex items-center text-green-600 dark:text-green-400"><CheckCircleIcon className="w-5 h-5 mr-2" /> Student_Visa.pdf</li>
                        <li className="flex items-center text-green-600 dark:text-green-400"><CheckCircleIcon className="w-5 h-5 mr-2" /> Proof_of_Funds.pdf</li>
                    </ul>
                </div>
                 <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                    <p>By submitting, you agree to Uni-Nest's Terms of Service and Privacy Policy, and consent to sharing this information with the landlord of the property you are applying to.</p>
                </div>
              </section>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="px-6 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Back
              </button>
              {currentStep < totalSteps ? (
                 <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-colors"
                >
                    Next
                </button>
              ) : (
                <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                    Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
