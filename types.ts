export type Page = 'home' | 'about' | 'assistant' | 'contact' | 'dashboard' | 'listings' | 'lease' | 'community' | 'profile' | 'landlord-console' | 'listing-detail' | 'club-detail';

export type UserType = 'student' | 'landlord';

export interface UserProfile {
  fullName: string;
  email: string;
  avatarUrl: string;
  university: string;
  major: string;
  profileStrength: number;
  preferences: {
    lifestyle?: 'Quiet' | 'Social' | 'Flexible';
    sleepSchedule?: 'Early Bird' | 'Night Owl' | 'Flexible';
    cleanliness?: 'Very Tidy' | 'Moderately Tidy' | 'Relaxed';
  };
  bio?: string;
  budget?: number;
  moveInDate?: string; // YYYY-MM-DD
}

export interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

export interface RoommateProfile {
  id: number;
  name: string;
  major: string;
  bio: string;
  compatibilityScore: number;
  matchReason: string;
  avatarUrl: string;
}

export interface HousingListing {
  id: number;
  title: string;
  address: string;
  rent: number;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  recommendationReason: string;
  amenities: string[];
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

export type NavigationHandler = (page: Page, data?: HousingListing | StudentClub | RoommateProfile) => void;


// New types for Landlord Console
export interface LeaseApplication {
  id: string;
  applicantName:string;
  submittedDate: string;
  status: 'Pending' | 'Reviewed' | 'Approved';
  profileStrength: number;
}

export interface LandlordProperty extends HousingListing {
    status: 'Listed' | 'Rented';
    applications: number;
}

// New types for Community Hub
export interface DiasporaGroup {
  id: number;
  name: string;
  description: string;
  memberCount: number;
  whatsappLink: string;
}

export interface StudentClub {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  meetingInfo: string;
  contactEmail: string;
}