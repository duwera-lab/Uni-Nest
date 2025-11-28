import React, { useState, useRef, useEffect } from 'react';
import type { Message, NavigationHandler } from '../types';
import { MessageBubble } from './MessageBubble';
import { SendIcon, SparklesIcon, XMarkIcon } from './icons';

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  draftingTargetName?: string | null;
  draftText?: string | null;
  onDraftTextChange?: (text: string) => void;
  onSendDraft?: () => void;
  onCancelDraft?: () => void;
  suggestions?: string[];
  isGeneratingSuggestions?: boolean;
  onNavigate?: NavigationHandler;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ 
    messages, 
    onSendMessage, 
    isLoading,
    draftingTargetName,
    draftText,
    onDraftTextChange,
    onSendDraft,
    onCancelDraft,
    suggestions,
    isGeneratingSuggestions,
    onNavigate,
}) => {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(inputText);
    setInputText('');
  };

  const handleSuggestionClick = (suggestion: string) => {
    onDraftTextChange?.(draftText + `\n\n${suggestion}`);
  };

  const isDrafting = draftText !== null && draftText !== undefined;

  return (
    <div className="flex-1 flex flex-col h-full bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} onNavigate={onNavigate} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 max-w-lg shadow">
                <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.4s]"></div>
                </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 md:p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        {isDrafting ? (
            <div className="animate-fade-in space-y-4">
                <div>
                    <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        Drafting message to: <span className="font-bold text-[--nd-blue] dark:text-[--nd-gold-light]">{draftingTargetName}</span>
                    </h3>
                </div>
                <textarea
                    value={draftText}
                    onChange={(e) => onDraftTextChange?.(e.target.value)}
                    placeholder="Edit your message..."
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--nd-gold] transition-all"
                    rows={5}
                />
                <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <SparklesIcon className="w-4 h-4 text-[--nd-gold]"/>
                        <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400">AI-Powered Suggestions:</h4>
                    </div>
                    {isGeneratingSuggestions ? (
                         <div className="text-xs text-gray-500 italic">Generating suggestions...</div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {suggestions?.map((s, i) => (
                                <button key={i} onClick={() => handleSuggestionClick(s)} className="px-3 py-1.5 bg-gray-200 dark:bg-gray-700/50 text-xs rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex justify-end items-center space-x-3">
                    <button
                        onClick={onCancelDraft}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-300 dark:hover:bg-gray-500 disabled:opacity-50 transition-colors"
                    >
                        <XMarkIcon className="w-5 h-5"/>
                        <span>Cancel</span>
                    </button>
                    <button
                        onClick={onSendDraft}
                        disabled={!draftText?.trim()}
                        className="flex items-center space-x-2 px-4 py-2 bg-[--nd-blue] text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] disabled:opacity-50 transition-colors"
                    >
                         <SendIcon className="w-5 h-5" />
                         <span>Send Message</span>
                    </button>
                </div>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me anything about Uni-Nest..."
                className="flex-1 w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[--nd-gold]"
                disabled={isLoading}
            />
            <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="p-3 bg-[--nd-blue] text-white rounded-full disabled:bg-[--nd-blue]/50 disabled:cursor-not-allowed hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-all"
            >
                <SendIcon className="w-6 h-6" />
            </button>
            </form>
        )}
      </div>
    </div>
  );
};