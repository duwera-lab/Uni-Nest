
import React from 'react';
import { BuildingIcon, EnvelopeIcon, UsersIcon, CheckCircleIcon, CurrencyDollarIcon, HomeIcon } from '../components/icons';
import { LandlordProperty, LeaseApplication, NavigationHandler } from '../types';

interface LandlordConsolePageProps {
  onNavigate: NavigationHandler;
}

const mockProperties: LandlordProperty[] = [
  {
    id: 1,
    title: 'Sunny 2-Bedroom near Campus',
    address: '123 Eddy Street',
    rent: 1700,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1024&h=768&auto=format&fit=crop',
    status: 'Listed',
    applications: 3,
    description: 'A bright and spacious 2-bedroom apartment perfect for students. Close to campus and local amenities.',
    recommendationReason: '',
    amenities: [],
    location: { lat: 0, lng: 0 }
  },
  {
    id: 4,
    title: 'Spacious 3-Bed Apartment',
    address: '101 Campus Drive',
    rent: 2400,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1024&h=768&auto=format&fit=crop',
    status: 'Rented',
    applications: 8,
    description: 'Ideal for a group of students, this large 3-bedroom apartment offers plenty of space and modern features.',
    recommendationReason: '',
    amenities: [],
    location: { lat: 0, lng: 0 }
  },
];

const mockApplications: LeaseApplication[] = [
  { id: 'app-001', applicantName: 'Priya Sharma', submittedDate: '2024-07-20', status: 'Pending', profileStrength: 92 },
  { id: 'app-002', applicantName: 'Kenji Tanaka', submittedDate: '2024-07-19', status: 'Reviewed', profileStrength: 85 },
  { id: 'app-003', applicantName: 'Fatima Al-Jamil', submittedDate: '2024-07-18', status: 'Approved', profileStrength: 95 },
];

const StatCard: React.FC<{ icon: React.ReactNode, title: string, value: string }> = ({ icon, title, value }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
    </div>
);

export const LandlordConsolePage: React.FC<LandlordConsolePageProps> = ({ onNavigate }) => {
    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Landlord Console</h1>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
                            Manage your properties and connect with verified student tenants.
                        </p>
                    </div>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="mt-4 md:mt-0 px-6 py-3 bg-[--nd-blue] text-white font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-all">
                        + Add New Property
                    </button>
                </header>

                {/* Stats Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                   <StatCard icon={<HomeIcon className="w-6 h-6 text-[--nd-blue] dark:text-[--nd-gold-light]" />} title="Active Listings" value="1" />
                   <StatCard icon={<UsersIcon className="w-6 h-6 text-green-500" />} title="New Applications" value="3" />
                   <StatCard icon={<EnvelopeIcon className="w-6 h-6 text-yellow-500" />} title="Unread Messages" value="2" />
                   <StatCard icon={<CurrencyDollarIcon className="w-6 h-6 text-blue-500" />} title="Potential Monthly Income" value="$1,700" />
                </section>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* My Properties Section */}
                    <section className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Properties</h2>
                        {mockProperties.map(prop => (
                            <div key={prop.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex">
                                <img src={prop.imageUrl} alt={prop.title} className="w-1/3 object-cover rounded-l-lg" />
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{prop.title}</h3>
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${prop.status === 'Listed' ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>{prop.status}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{prop.address}</p>
                                    </div>
                                    <div className="flex justify-between items-end mt-4">
                                        <div className="text-sm">
                                            <p className="font-semibold">{prop.applications} Applications</p>
                                            <p className="text-xl font-bold text-[--nd-blue] dark:text-[--nd-gold-light]">${prop.rent}<span className="text-sm font-normal text-gray-500">/mo</span></p>
                                        </div>
                                        <button className="px-4 py-2 text-sm font-semibold bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200">Manage</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* New Applications Section */}
                    <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">New Applications</h2>
                         <div className="space-y-4">
                            {mockApplications.map(app => (
                                <div key={app.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{app.applicantName}</p>
                                        <span className={`text-xs font-bold ${app.status === 'Pending' ? 'text-yellow-500' : app.status === 'Reviewed' ? 'text-blue-500' : 'text-green-500'}`}>{app.status}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                                        <span>{app.submittedDate}</span>
                                        <span>Profile: {app.profileStrength}%</span>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
