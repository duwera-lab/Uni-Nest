import React from 'react';
import type { Message, NavigationHandler } from '../types';
import { UserIcon, BotIcon } from './icons';

interface MessageBubbleProps {
  message: Message;
  onNavigate?: NavigationHandler;
}

const parseMessageContent = (text: string, onNavigate?: NavigationHandler): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  
  // Combined regex to find:
  // 1. [cite_start]...[cite: XX]
  // 2. [cite: XX]
  // 3. [Link Text](Link URL)
  const regex = /(?:\[cite_start\](.*?)\[cite: (\d+)\])|(?:\[cite: (\d+)\])|(?:\[([^\]]+)\]\(([^)]+)\))/g;
  
  let match;

  while ((match = regex.exec(text)) !== null) {
    const textBefore = text.slice(lastIndex, match.index);
    if (textBefore) {
      parts.push(textBefore);
    }
    
    if (match[1] !== undefined) { 
        // Case 1: [cite_start]...[cite: XX]
        const citedText = match[1];
        const citationNumber = match[2];
        parts.push(
            <span key={match.index} className="relative">
            {citedText}
            <sup className="ml-0.5 text-xs font-bold text-[--nd-gold] dark:text-[--nd-gold-light]" title={`Source: ${citationNumber}`}>
                [{citationNumber}]
            </sup>
            </span>
        );
    } else if (match[3] !== undefined) { 
        // Case 2: [cite: XX]
        const citationNumber = match[3];
        parts.push(
            <sup key={match.index} className="mx-0.5 text-xs font-bold text-[--nd-gold] dark:text-[--nd-gold-light]" title={`Source: ${citationNumber}`}>
            [{citationNumber}]
            </sup>
        );
    } else if (match[4] !== undefined && match[5] !== undefined) {
        // Case 3: [Link Text](Link URL)
        const linkText = match[4];
        const linkUrl = match[5];

        const isInternal = linkUrl.startsWith('/');
        
        parts.push(
            <a 
                key={match.index}
                href={linkUrl}
                onClick={(e) => {
                    if (isInternal && onNavigate) {
                        e.preventDefault();
                        // Simple routing logic based on mock paths
                        if (linkUrl === '/listings') {
                            onNavigate('listings');
                        } else if (linkUrl === '/dashboard') {
                            onNavigate('dashboard');
                        } else if (linkUrl === '/profile') {
                            onNavigate('profile');
                        }
                    }
                }}
                className="text-[--nd-blue] dark:text-[--nd-gold-light] underline font-medium hover:text-[--nd-gold] dark:hover:text-white transition-colors cursor-pointer"
                target={isInternal ? undefined : "_blank"}
                rel={isInternal ? undefined : "noopener noreferrer"}
            >
                {linkText}
            </a>
        );
    }
    
    lastIndex = regex.lastIndex;
  }

  const remainingText = text.slice(lastIndex);
  if (remainingText) {
    parts.push(remainingText);
  }

  return parts;
};

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message, onNavigate }) => {
  const isUser = message.sender === 'user';
  const parsedText = isUser ? [message.text] : parseMessageContent(message.text, onNavigate);

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[--nd-blue] flex items-center justify-center text-white">
          <BotIcon className="w-5 h-5" />
        </div>
      )}
      <div
        className={`rounded-xl p-4 max-w-lg shadow-md ${
          isUser
            ? 'bg-[--nd-blue] text-white'
            : 'bg-white dark:bg-gray-800'
        }`}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none text-current whitespace-pre-wrap">
          {parsedText.map((part, i) => (
            <React.Fragment key={i}>{part}</React.Fragment>
          ))}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
          <UserIcon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};