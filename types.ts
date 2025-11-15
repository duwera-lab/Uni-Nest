
export type UserType = 'student' | 'landlord';

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
  location: {
    lat: number;
    lng: number;
  };
}