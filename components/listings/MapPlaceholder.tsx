import React from 'react';
import { HousingListing } from '../../types';
import { MapPinIcon } from '../icons';

interface MapPlaceholderProps {
  listings: HousingListing[];
  hoveredListingId: number | null;
}

// Function to normalize coordinates to a 0-100 scale for positioning
const normalizeCoords = (listings: HousingListing[]) => {
  if (listings.length === 0) return [];
  
  const lats = listings.map(l => l.location.lat);
  const lngs = listings.map(l => l.location.lng);
  
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLng = Math.min(...lngs);
  const maxLng = Math.max(...lngs);

  const latRange = maxLat - minLat || 1;
  const lngRange = maxLng - minLng || 1;

  return listings.map(l => ({
    ...l,
    y: ((l.location.lat - minLat) / latRange) * 80 + 10, // Scale to 10-90% to avoid edges
    x: ((l.location.lng - minLng) / lngRange) * 80 + 10,
  }));
};


export const MapPlaceholder: React.FC<MapPlaceholderProps> = ({ listings, hoveredListingId }) => {
    const positionedListings = normalizeCoords(listings);
    
  return (
    <div className="w-full h-full bg-gray-300 dark:bg-gray-700 relative overflow-hidden">
        {/* Placeholder map texture */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-30"
            style={{ backgroundImage: "url('https://www.openstreetmap.org/assets/map-background-6453b934375496412a8325a7c588a9c805333e9d854e195454b83a2105156a64.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-[--nd-blue] to-transparent" />
      
        {/* Render pins */}
        {positionedListings.map(listing => (
            <div
                key={listing.id}
                className="absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300"
                style={{ top: `${listing.y}%`, left: `${listing.x}%` }}
            >
                <MapPinIcon className={`
                    w-8 h-8
                    ${hoveredListingId === listing.id ? 'text-[--nd-gold-light] scale-125' : 'text-[--nd-blue]'}
                    transition-all duration-300 drop-shadow-lg
                `} />
            </div>
        ))}
    </div>
  );
};