import React, { useState } from 'react';
import { GlobeAmericasIcon, UsersIcon, WhatsAppIcon, MagnifyingGlassIcon } from '../components/icons';
import { DiasporaGroup, StudentClub, NavigationHandler, Page } from '../types';

const mockDiasporaGroups: DiasporaGroup[] = [
    {
        id: 1,
        name: "Chinese Students & Scholars Association",
        description: "A community for students from China to connect, share resources, and attend cultural events.",
        memberCount: 450,
        whatsappLink: "https://chat.whatsapp.com/samplelink1"
    },
    {
        id: 2,
        name: "Indian Graduate Student Association",
        description: "Connecting graduate students from India for social gatherings, academic support, and festival celebrations.",
        memberCount: 320,
        whatsappLink: "https://chat.whatsapp.com/samplelink2"
    },
    {
        id: 3,
        name: "Latin American Student Organization",
        description: "A vibrant group for students from Latin American countries to share culture and support one another.",
        memberCount: 180,
        whatsappLink: "https://chat.whatsapp.com/samplelink3"
    },
];

const mockStudentClubs: StudentClub[] = [
    { id: 1, name: "AI & Machine Learning Club", category: "Academics", imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop', description: 'Explore the latest in AI, from neural networks to natural language processing. We host workshops, guest speakers, and project groups.', meetingInfo: 'Tuesdays at 6 PM, Tech Hub Room 101', contactEmail: 'ai.club@university.edu' },
    { id: 2, name: "International Film Club", category: "Arts & Culture", imageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963e?q=80&w=800&auto=format&fit=crop', description: 'Discover cinema from around the world. We screen a new international film every week, followed by a casual discussion.', meetingInfo: 'Fridays at 7 PM, Global Commons Theater', contactEmail: 'film.club@university.edu' },
    { id: 3, name: "Hiking & Outdoors Group", category: "Recreation", imageUrl: 'https://images.unsplash.com/photo-1454982523322-4201bb65969b?q=80&w=800&auto=format&fit=crop', description: 'Escape the campus and explore nature! We organize bi-weekly hikes, camping trips, and other outdoor adventures for all skill levels.', meetingInfo: 'Saturdays, meet at 9 AM at the Student Center', contactEmail: 'outdoors.club@university.edu' },
    { id: 4, name: "Entrepreneurs Network", category: "Professional", imageUrl: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop', description: 'Connect with fellow innovators and aspiring founders. We host networking events, pitch competitions, and workshops with successful entrepreneurs.', meetingInfo: 'Thursdays at 5 PM, Innovation Garage', contactEmail: 'entrepreneurs@university.edu' },
    { id: 5, name: "Photography Club", category: "Hobbies", imageUrl: 'https://images.unsplash.com/photo-1510127034890-ba27e482e8e3?q=80&w=800&auto=format&fit=crop', description: 'For shutterbugs of all levels. Join our photo walks, workshops on editing and composition, and share your work in our gallery.', meetingInfo: 'Bi-weekly on Sundays, locations vary', contactEmail: 'photo.club@university.edu' },
    { id: 6, name: "Debate Team", category: "Academics", imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop', description: 'Sharpen your public speaking and critical thinking skills. We compete in regional tournaments and host campus debates.', meetingInfo: 'Mondays & Wednesdays at 4 PM, Hall of Arts', contactEmail: 'debate.team@university.edu' },
    { id: 7, name: "Volunteer Association", category: "Community Service", imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop', description: 'Make a difference in the local community. We partner with local non-profits for various service projects throughout the year.', meetingInfo: 'Monthly meetings, project times vary', contactEmail: 'volunteer@university.edu' },
    { id: 8, name: "Gaming Society", category: "Hobbies", imageUrl: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?q=80&w=800&auto=format&fit=crop', description: 'From board games to esports, we cover it all. Join us for casual game nights and competitive tournaments.', meetingInfo: 'Fridays at 8 PM, Student Union Basement', contactEmail: 'gaming.society@university.edu' },
];

interface CommunityPageProps {
  onNavigate: NavigationHandler;
}

const DiasporaGroupCard: React.FC<{ group: DiasporaGroup }> = ({ group }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col">
        <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4">{group.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">{group.memberCount}</span> members
            </div>
            <a href={group.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">
                <WhatsAppIcon className="w-5 h-5"/>
                <span>Join Group</span>
            </a>
        </div>
    </div>
);

const ClubCard: React.FC<{ club: StudentClub, onNavigate: (page: Page, data?: StudentClub) => void }> = ({ club, onNavigate }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
        <div className="flex-grow">
            <h4 className="font-bold text-gray-900 dark:text-white p-5">{club.name}</h4>
            <p className="text-sm text-[--nd-gold] dark:text-[--nd-gold-light] px-5">{club.category}</p>
        </div>
        <button onClick={() => onNavigate('club-detail', club)} className="mt-3 block w-full text-sm text-center text-[--nd-blue] dark:text-gray-200 font-semibold hover:underline p-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
            Learn More &rarr;
        </button>
    </div>
)

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredGroups = mockDiasporaGroups.filter(group =>
        group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredClubs = mockStudentClubs.filter(club =>
        club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        club.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex-1 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 py-12">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Community Hub</h1>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Connect with fellow students and build your support network. Find your community below.
                    </p>
                </header>

                {/* Search Bar */}
                <div className="mb-10 max-w-xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for groups or clubs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[--nd-gold]"
                        />
                    </div>
                </div>

                {/* Diaspora Communities Section */}
                <section className="mb-16">
                    <div className="flex items-center space-x-3 mb-6">
                        <GlobeAmericasIcon className="w-8 h-8 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Diaspora Communities</h2>
                    </div>
                    {filteredGroups.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGroups.map(group => (
                                <DiasporaGroupCard key={group.id} group={group} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">No matching diaspora groups found.</p>
                    )}
                </section>

                {/* Student Clubs Section */}
                 <section>
                    <div className="flex items-center space-x-3 mb-6">
                        <UsersIcon className="w-8 h-8 text-[--nd-blue] dark:text-[--nd-gold-light]" />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Student Clubs & Groups</h2>
                    </div>
                     {filteredClubs.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                           {filteredClubs.map(club => (
                               <ClubCard key={club.id} club={club} onNavigate={onNavigate} />
                           ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">No matching student clubs found.</p>
                    )}
                </section>
            </div>
        </div>
    );
};