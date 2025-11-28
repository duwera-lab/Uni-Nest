import React, { useState } from 'react';
// FIX: Corrected import path for Page type.
import { Page } from '../types';
import { UserProfile } from '../types';
import { ProfileStrength } from '../components/dashboard/ProfileStrength';

interface ProfilePageProps {
  onNavigate: (page: Page) => void;
}

const mockUserProfile: UserProfile = {
  fullName: 'Alex Chen',
  email: 'alex.chen@university.edu',
  avatarUrl: 'https://i.pravatar.cc/150?u=alexchen',
  university: 'University of Notre Dame',
  major: 'Computer Science',
  profileStrength: 75,
  preferences: {
    lifestyle: 'Quiet',
    sleepSchedule: 'Early Bird',
    cleanliness: 'Very Tidy',
  },
  bio: 'Quiet, clean, and focused on studies. I enjoy video games and exploring local coffee shops on weekends. Looking for a roommate with similar habits.',
  budget: 900,
  moveInDate: '2024-08-15',
};

const FormRow: React.FC<{ label: string; children: React.ReactNode}> = ({ label, children }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
        {children}
    </div>
);

const ProfileProgressBar: React.FC<{ value: number }> = ({ value }) => (
    <div className="mb-8">
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-[--nd-blue] dark:text-[--nd-gold-light]">Profile Completion</span>
            <span className="text-sm font-medium text-[--nd-blue] dark:text-[--nd-gold-light]">{value}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-gradient-to-r from-[--nd-gold] to-[--nd-gold-light] h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
        </div>
    </div>
);

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
    const [user, setUser] = useState(mockUserProfile);

    const handlePrefChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            preferences: {
                ...prev.preferences,
                [name]: value,
            }
        }));
    };
    
    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <header className="mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Your Profile</h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                        Keep your information up to date to get the best matches.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Profile & Preferences Forms */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-10">
                        <ProfileProgressBar value={user.profileStrength} />

                        {/* Personal Info */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormRow label="Full Name">
                                    <input type="text" value={user.fullName} readOnly className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm opacity-70 cursor-not-allowed" />
                                </FormRow>
                                <FormRow label="Email Address">
                                    <input type="email" value={user.email} readOnly className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm opacity-70 cursor-not-allowed" />
                                </FormRow>
                                <FormRow label="University">
                                    <input type="text" value={user.university} readOnly className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm opacity-70 cursor-not-allowed" />
                                </FormRow>
                                <FormRow label="Major">
                                    <input type="text" value={user.major} readOnly className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm opacity-70 cursor-not-allowed" />
                                </FormRow>
                            </div>
                        </section>
                         <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                            <FormRow label="Write a short bio to help potential roommates get to know you.">
                                <textarea 
                                    name="bio"
                                    value={user.bio}
                                    onChange={(e) => setUser(p => ({...p, bio: e.target.value}))}
                                    rows={4}
                                    className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]"
                                    placeholder="Tell us about your habits, hobbies, and what you're looking for in a roommate..."
                                />
                            </FormRow>
                        </section>

                        {/* Roommate Preferences */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Housing & Roommate Preferences</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <FormRow label="Ideal Move-in Date">
                                    <input type="date" name="moveInDate" value={user.moveInDate} onChange={(e) => setUser(p => ({...p, moveInDate: e.target.value}))} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                                </FormRow>
                                <FormRow label="Monthly Budget ($/person)">
                                    <input type="number" name="budget" value={user.budget} onChange={(e) => setUser(p => ({...p, budget: parseInt(e.target.value, 10)}))} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]" />
                                </FormRow>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <FormRow label="Lifestyle">
                                     <select name="lifestyle" value={user.preferences.lifestyle} onChange={handlePrefChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]">
                                        <option>Quiet</option>
                                        <option>Social</option>
                                        <option>Flexible</option>
                                    </select>
                                </FormRow>
                                <FormRow label="Sleep Schedule">
                                     <select name="sleepSchedule" value={user.preferences.sleepSchedule} onChange={handlePrefChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]">
                                        <option>Early Bird</option>
                                        <option>Night Owl</option>
                                        <option>Flexible</option>
                                    </select>
                                </FormRow>
                                <FormRow label="Cleanliness">
                                     <select name="cleanliness" value={user.preferences.cleanliness} onChange={handlePrefChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]">
                                        <option>Very Tidy</option>
                                        <option>Moderately Tidy</option>
                                        <option>Relaxed</option>
                                    </select>
                                </FormRow>
                            </div>
                        </section>
                        
                        <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
                             <button
                                type="button"
                                className="px-6 py-2 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                            <img src={user.avatarUrl} alt={user.fullName} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[--nd-gold]" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{user.fullName}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
                        </div>
                        <ProfileStrength score={user.profileStrength} onNavigate={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
}