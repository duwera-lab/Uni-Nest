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
import { HousingListing } from './types';

export type Page = 'home' | 'about' | 'assistant' | 'contact' | 'dashboard' | 'listings' | 'lease';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [draftingFor, setDraftingFor] = useState<HousingListing | null>(null);

  const handleNavigate = (page: Page, listing?: HousingListing) => {
    if (listing && page === 'assistant') {
      setDraftingFor(listing);
    } else if (page !== 'assistant') {
      setDraftingFor(null);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'assistant':
        return <AssistantPage draftingFor={draftingFor} onDraftComplete={() => setDraftingFor(null)} />;
      case 'contact':
        return <ContactPage />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'listings':
        return <ListingsPage onNavigate={handleNavigate} />;
      case 'lease':
        return <LeasePage />;
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
      <Footer />
    </div>
  );
};

export default App;