import React from 'react';

// A generic props interface for all icons
interface IconProps {
  className?: string;
}

export const SendIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5a.75.75 0 001.5 0v-1.528a3 3 0 01.984-2.122 3 3 0 012.121-.984h1.03a3 3 0 012.122.984 3 3 0 01.984 2.122v1.528a.75.75 0 001.5 0V3.75a.75.75 0 000-1.5h-9zM6 6.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H6.75zM6 11.25a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H6.75zM12 6.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM12 11.25a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 2.25a.75.75 0 01.75.75v16.5a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
);

export const GraduationCapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.765 3.333a.75.75 0 01.47 0l8.25 4.125a.75.75 0 010 1.334l-8.25 4.125a.75.75 0 01-.47 0l-8.25-4.125a.75.75 0 010-1.334l8.25-4.125z" />
        <path d="M3.003 9.333a.75.75 0 01.75.645v4.524a.75.75 0 01-1.5 0v-3.332l-.25.125a.75.75 0 01-.97-1.125l.25-.125v-.646a.75.75 0 01.75-.645z" />
        <path d="M21.003 9.333a.75.75 0 00-.75.645v4.524a.75.75 0 001.5 0v-3.332l.25.125a.75.75 0 00.97-1.125l-.25-.125v-.646a.75.75 0 00-.75-.645z" />
        <path d="M12 12.167a.75.75 0 01.75.75v5.333a.75.75 0 01-1.5 0v-5.333a.75.75 0 01.75-.75z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
    </svg>
);

export const BotIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3.375a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5h-6.75zm0 3.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" clipRule="evenodd" />
    </svg>
);

export const MapIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l2.06-9.269H4.5a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z" />
    <path fillRule="evenodd" d="M5.25 13.5A2.25 2.25 0 003 15.75v2.25a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25V15.75a2.25 2.25 0 00-2.25-2.25h-.75zM14.25 13.5a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h.75a2.25 2.25 0 002.25-2.25V15.75a2.25 2.25 0 00-2.25-2.25h-.75z" clipRule="evenodd" />
    <path d="M15 15.75a.75.75 0 00.75.75h.75a.75.75 0 00-.75-.75h-.75zM15.75 18a.75.75 0 01-.75.75h-.75a.75.75 0 01.75-.75h.75zM6 15.75a.75.75 0 00.75.75h.75a.75.75 0 00-.75-.75H6zM6.75 18a.75.75 0 01-.75.75H6a.75.75 0 01.75-.75h.75zM11.25 15.375a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25z" />
    <path d="M12.75 15.375a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0v-2.25z" />
    <path fillRule="evenodd" d="M12.75 20.25a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zM11.25 20.25a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75z" clipRule="evenodd" />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.026.026.05.054.07.084v6.101a2.25 2.25 0 01-2.25 2.25H6.021a2.25 2.25 0 01-2.25-2.25v-6.101c.02-.03.044-.058.07-.084L12 5.432z" />
  </svg>
);

export const ChartPieIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M10.5 4.5a7.5 7.5 0 00-7.5 7.5h7.5V4.5z" />
    <path d="M13.5 4.5v7.5h7.5a7.5 7.5 0 00-7.5-7.5z" />
    <path d="M13.5 13.5h7.5a7.5 7.5 0 01-15 0h7.5z" />
  </svg>
);

export const CurrencyDollarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 7.5a2.25 2.25 0 00-2.25 2.25v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 01.75-.75h.015a.75.75 0 01.75.75v.015a2.25 2.25 0 002.25 2.25h2.25a.75.75 0 000-1.5h-2.25a.75.75 0 01-.75-.75v-.015a2.25 2.25 0 00-2.25-2.25H12z" />
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" clipRule="evenodd" />
  </svg>
);

export const LocationMarkerIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.242 16.975 16.975 0 004.241-5.16c.317-1.192.317-2.61.002-3.801a11.942 11.942 0 00-1.579-3.235 11.942 11.942 0 00-3.235-1.579c-1.192-.317-2.61-.317-3.801.002a11.942 11.942 0 00-3.235 1.579 11.942 11.942 0 00-1.579 3.235c-.317 1.192-.317 2.61.002 3.801a16.975 16.975 0 004.241 5.16 16.975 16.975 0 005.16 4.242zM12 10.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.242 16.975 16.975 0 004.241-5.16c.317-1.192.317-2.61.002-3.801a11.942 11.942 0 00-1.579-3.235 11.942 11.942 0 00-3.235-1.579c-1.192-.317-2.61-.317-3.801.002a11.942 11.942 0 00-3.235 1.579 11.942 11.942 0 00-1.579 3.235c-.317 1.192-.317 2.61.002 3.801a16.975 16.975 0 004.241 5.16 16.975 16.975 0 005.16 4.242zM12 10.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" clipRule="evenodd" />
    </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M1.323 11.205a.75.75 0 011.06 0l.94.94a.75.75 0 001.06 0l.94-.94a.75.75 0 111.06 1.06l-.94.94a.75.75 0 000 1.06l.94.94a.75.75 0 11-1.06 1.06l-.94-.94a.75.75 0 00-1.06 0l-.94.94a.75.75 0 11-1.06-1.06l.94-.94a.75.75 0 000-1.06l-.94-.94a.75.75 0 010-1.06zM22.677 11.205a.75.75 0 010 1.06l-.94.94a.75.75 0 000 1.06l.94.94a.75.75 0 11-1.06 1.06l-.94-.94a.75.75 0 00-1.06 0l-.94.94a.75.75 0 11-1.06-1.06l.94-.94a.75.75 0 000-1.06l-.94-.94a.75.75 0 011.06-1.06l.94.94a.75.75 0 001.06 0l.94-.94a.75.75 0 011.06 0z" clipRule="evenodd" />
        <path d="M4.707 9.227a.75.75 0 011.06 0l.94.94a.75.75 0 001.06 0l.94-.94a.75.75 0 011.06 0l.94.94a.75.75 0 001.06 0l.94-.94a.75.75 0 011.06 0l.94.94a.75.75 0 001.06 0l.94-.94a.75.75 0 011.06 1.06l-.94.94a.75.75 0 000 1.06l.94.94a.75.75 0 01-1.06 1.06l-.94-.94a.75.75 0 00-1.06 0l-.94.94a.75.75 0 01-1.06 0l-.94-.94a.75.75 0 00-1.06 0l-.94.94a.75.75 0 01-1.06 0l-.94-.94a.75.75 0 00-1.06 0l-.94.94a.75.75 0 01-1.06-1.06l.94-.94a.75.75 0 000-1.06l-.94-.94a.75.75 0 010-1.06z" />
    </svg>
);

export const FireIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0-1.545-.48-2.996-1.29-4.221a.75.75 0 00-1.127.971A8.25 8.25 0 007.5 12c0 2.943 1.536 5.536 3.829 7.025a.75.75 0 10.842-1.21A6.75 6.75 0 019 12c0-2.002 1.006-3.79 2.537-4.846a.75.75 0 00.926-1.107 8.25 8.25 0 00-4.209 7.653.75.75 0 001.442.273A6.75 6.75 0 0112 17.25a6.75 6.75 0 004.148-11.75.75.75 0 00-1.175-.928A5.25 5.25 0 0115 12c0 1.545.48 2.996 1.29 4.221a.75.75 0 001.127-.971A8.25 8.25 0 0016.5 12c0-2.943-1.536-5.536-3.829-7.025a.75.75 0 10-.842 1.21A6.75 6.75 0 0115 12c0 .243.014.483.04.721a.75.75 0 001.493-.142A8.25 8.25 0 0012.963 2.286z" clipRule="evenodd" />
    </svg>
);

export const CarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M3.75 9.319c0-.889.47-1.72.93-2.284a.75.75 0 011.082.02L7.5 9.172l1.218-1.74a.75.75 0 011.082-.02c.46.564.93 1.395.93 2.284v3.131c0 1.342-1.344 2.5-3 2.5s-3-1.158-3-2.5V9.319zm15-4.5a.75.75 0 00-1.5 0v4.444c0 1.342-1.344 2.5-3 2.5s-3-1.158-3-2.5V4.819a.75.75 0 00-1.5 0v4.5c0 .889.47 1.72.93 2.284a.75.75 0 001.082.02L15 9.172l1.218 1.74a.75.75 0 001.082.02c.46-.564.93-1.395.93-2.284V4.819z" clipRule="evenodd" />
        <path d="M5.25 15.75c0 1.657 2.119 3 4.75 3s4.75-1.343 4.75-3V9.172l-.75-.916v7.494c0 1.342-1.344 2.5-3 2.5s-3-1.158-3-2.5V8.256l-.75.916v6.578z" />
    </svg>
);

export const ArrowUpTrayIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.25 4.5a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V5.25a.75.75 0 01.75-.75z" />
        <path fillRule="evenodd" d="M11.25 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 21a8.25 8.25 0 01-8.25-8.25.75.75 0 011.5 0A6.75 6.75 0 0012 19.5a6.75 6.75 0 006.75-6.75.75.75 0 011.5 0A8.25 8.25 0 0112 21z" clipRule="evenodd" />
    </svg>
);

export const IdentificationIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4.5 5.25a3 3 0 013-3h10.5a3 3 0 013 3v2.25a3 3 0 01-3 3h-1.5a.75.75 0 000 1.5h1.5a4.5 4.5 0 004.5-4.5V5.25a4.5 4.5 0 00-4.5-4.5H7.5a4.5 4.5 0 00-4.5 4.5v13.5a4.5 4.5 0 004.5 4.5h10.5a4.5 4.5 0 004.5-4.5V13.5a.75.75 0 00-1.5 0v5.25a3 3 0 01-3 3H7.5a3 3 0 01-3-3V5.25z" />
        <path d="M7.5 10.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M11.25 10.5a.75.75 0 000-1.5H15a.75.75 0 000 1.5h-3.75zM6 14.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM6.75 16.5a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5h-6.75z" />
    </svg>
);

export const BanknotesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 4.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V4.5zM16.5 4.5a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V4.5z" />
        <path fillRule="evenodd" d="M2.25 8.625A3.375 3.375 0 015.625 5.25h12.75a3.375 3.375 0 013.375 3.375v9A3.375 3.375 0 0118.375 21H5.625A3.375 3.375 0 012.25 17.625v-9zM4.125 17.625c0 .414.336.75.75.75h14.25a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75H4.875a.75.75 0 00-.75.75v9z" clipRule="evenodd" />
        <path d="M15.75 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.375A3.75 3.75 0 009 2.625H5.625zM12.75 12a.75.75 0 00-1.5 0v2.25a.75.75 0 001.5 0V12zM10.5 10.5a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        <path d="M14.25 1.5c.205 0 .406.01.604.03.195.02.388.048.577.084a.75.75 0 01.29.907l-3.375 6.75a.75.75 0 01-.908.29.358.358 0 00-.084-.578.358.358 0 00-.03-.604c-.02-.195-.048-.388-.084-.577a.75.75 0 01.908-.29l3.375-6.75a.75.75 0 01.29-.908z" />
    </svg>
);

export const ClipboardCheckIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10.5 3A2.5 2.5 0 008 5.5v.75a.75.75 0 01-1.5 0v-.75A4 4 0 0110.5 2h3A4 4 0 0117.5 6v.75a.75.75 0 01-1.5 0V6A2.5 2.5 0 0013.5 3.5h-3zm-2.02 6.22a.75.75 0 011.06 0L10.5 10.19l3.97-3.97a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2.25-2.25a.75.75 0 010-1.06z" clipRule="evenodd" />
        <path d="M3 10.5a.75.75 0 01.75-.75H6v-1.5a.75.75 0 011.5 0V12h1.5a.75.75 0 010 1.5H7.5v1.5a.75.75 0 01-1.5 0V13.5H3.75a.75.75 0 01-.75-.75zM12 15.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zM12 18.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75z" />
    </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
);