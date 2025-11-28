import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { AssistantPage } from './pages/AssistantPage';
import { ContactPage } from './pages/Contact';
import { DashboardPage } from './pages/DashboardPage';
import { ListingsPage } from './pages/ListingsPage';
import { LeasePage } from './pages/LeasePage';
import { CommunityPage } from './pages/CommunityPage';
import { ProfilePage } from './pages/ProfilePage';
import { LandlordConsolePage } from './pages/LandlordConsolePage';
import { FloatingAssistantButton } from './components/FloatingAssistantButton';
import { HousingListing, StudentClub, Page, NavigationHandler, RoommateProfile, Message } from './types';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { ClubDetailPage } from './pages/ClubDetailPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [draftingFor, setDraftingFor] = useState<HousingListing | null>(null);
  const [draftingForRoommate, setDraftingForRoommate] = useState<RoommateProfile | null>(null);
  const [selectedListing, setSelectedListing] = useState<HousingListing | null>(null);
  const [selectedClub, setSelectedClub] = useState<StudentClub | null>(null);

  // Lifted state for Chat Persistence
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm Uni-Assistant, your guide to Uni-Nest. How can I help you today? Please let me know if you are a student or a landlord.",
    },
  ]);
  const [chatInstance, setChatInstance] = useState<any>(null);

  const handleNavigate: NavigationHandler = (page, data) => {
    if (data) {
      // Duck-typing to check if it's a HousingListing
      if ('recommendationReason' in data && 'address' in data) {
        const listing = data as HousingListing;
        if (page === 'assistant') {
          setDraftingFor(listing);
        } else if (page === 'listing-detail') {
          setSelectedListing(listing);
        }
      }
      // Duck-typing to check if it's a StudentClub
      else if ('category' in data) {
        const club = data as StudentClub;
        if (page === 'club-detail') {
          setSelectedClub(club);
        }
      }
      // Duck-typing for RoommateProfile
      else if ('compatibilityScore' in data) {
        const roommate = data as RoommateProfile;
        if (page === 'assistant') {
          setDraftingForRoommate(roommate);
        }
      }
    }
    
    if (page !== 'assistant') {
      setDraftingFor(null);
      setDraftingForRoommate(null);
    }
    if (page !== 'listing-detail') {
        setSelectedListing(null);
    }
    if (page !== 'club-detail') {
      setSelectedClub(null);
    }

    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'assistant':
        return <AssistantPage 
                  draftingFor={draftingFor} 
                  draftingForRoommate={draftingForRoommate}
                  onDraftComplete={() => {
                    setDraftingFor(null);
                    setDraftingForRoommate(null);
                  }}
                  onNavigate={handleNavigate}
                  messages={chatMessages}
                  setMessages={setChatMessages}
                  chatInstance={chatInstance}
                  setChatInstance={setChatInstance}
                />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'listings':
        return <ListingsPage onNavigate={handleNavigate} />;
      case 'lease':
        return <LeasePage />;
      case 'community':
        return <CommunityPage onNavigate={handleNavigate} />;
      case 'profile':
        return <ProfilePage onNavigate={handleNavigate} />;
      case 'landlord-console':
        return <LandlordConsolePage onNavigate={handleNavigate} />;
      case 'listing-detail':
        return selectedListing ? <ListingDetailPage listing={selectedListing} onNavigate={handleNavigate} /> : <ListingsPage onNavigate={handleNavigate} />;
      case 'club-detail':
        return selectedClub ? <ClubDetailPage club={selectedClub} onNavigate={handleNavigate} /> : <CommunityPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-[--nd-blue] text-gray-800 dark:text-gray-200 font-sans">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 flex flex-col">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      {currentPage !== 'assistant' && <FloatingAssistantButton onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;