import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ChatWindow } from '../components/ChatWindow';
import { getUniAssistantResponse, getDraftSuggestions, getRoommateDraftSuggestions } from '../services/geminiService';
import type { Message, UserType, HousingListing, RoommateProfile, NavigationHandler } from '../types';

interface AssistantPageProps {
  draftingFor: HousingListing | null;
  draftingForRoommate: RoommateProfile | null;
  onDraftComplete: () => void;
  onNavigate: NavigationHandler;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  chatInstance: any;
  setChatInstance: (chat: any) => void;
}

export const AssistantPage: React.FC<AssistantPageProps> = ({ 
  draftingFor, 
  draftingForRoommate, 
  onDraftComplete, 
  onNavigate,
  messages,
  setMessages,
  chatInstance,
  setChatInstance
}) => {
  const [userType, setUserType] = useState<UserType>('student');
  const [isLoading, setIsLoading] = useState(false);

  const [draftText, setDraftText] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState(false);

  useEffect(() => {
    if (draftingFor) {
      // Enter landlord drafting mode
      const initialDraft = `Hello,

I'm interested in your property, "${draftingFor.title}," located at ${draftingFor.address}. I found it on Uni-Nest.

Could you please provide some more information?

Thank you,
[Your Name]`;
      
      setDraftText(initialDraft);
      
      const draftMessage: Message = {
        id: Date.now(),
        sender: 'ai',
        text: `Let's draft a message to the landlord for "${draftingFor.title}". You can edit the message below and use the AI suggestions to add more details. When you're ready, hit "Send Message"!`
      };
      setMessages(prev => [...prev, draftMessage]);

      const fetchSuggestions = async () => {
        setIsGeneratingSuggestions(true);
        const fetchedSuggestions = await getDraftSuggestions(draftingFor);
        setSuggestions(fetchedSuggestions);
        setIsGeneratingSuggestions(false);
      }
      fetchSuggestions();
    }
  }, [draftingFor, setMessages]);

  useEffect(() => {
    if (draftingForRoommate) {
      // Enter roommate drafting mode
      const initialDraft = `Hi ${draftingForRoommate.name},

My name is [Your Name], and I saw your profile on Uni-Nest. It looks like we could be a great match (our compatibility score is ${draftingForRoommate.compatibilityScore}%)!

I'm also a student at [Your University] studying [Your Major]. I'm looking for a roommate who is [mention a key preference, e.g., tidy, friendly, quiet].

I'd love to chat more and see if we'd be a good fit.

Best,
[Your Name]`;
      
      setDraftText(initialDraft);
      
      const draftMessage: Message = {
        id: Date.now(),
        sender: 'ai',
        text: `Let's draft a message to ${draftingForRoommate.name}. A good first message can make all the difference! You can edit the text below and use the AI suggestions to add more personal touches.`
      };
      setMessages(prev => [...prev, draftMessage]);

      const fetchSuggestions = async () => {
        setIsGeneratingSuggestions(true);
        const fetchedSuggestions = await getRoommateDraftSuggestions(draftingForRoommate);
        setSuggestions(fetchedSuggestions);
        setIsGeneratingSuggestions(false);
      }
      fetchSuggestions();
    }
  }, [draftingForRoommate, setMessages]);

  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { response, chatInstance: newChatInstance } = await getUniAssistantResponse(text, chatInstance);
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response,
      };
      setMessages(prev => [...prev, aiMessage]);
      setChatInstance(newChatInstance); // Save the chat instance for conversation history
    } catch (error) {
      console.error("Failed to get response from Gemini:", error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: "I'm sorry, but I'm having trouble connecting right now. Please try again later.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [chatInstance, setMessages, setChatInstance]);
  
  const handleSendDraft = () => {
    if (!draftText) return;
    
    let confirmationText: string;

    if (draftingFor) {
        confirmationText = "Great! Your inquiry has been sent to the landlord. They should get back to you soon. Can I help with anything else?";
    } else if (draftingForRoommate) {
        confirmationText = `Perfect! Your message has been sent to ${draftingForRoommate.name}. Hope you connect soon! What else can I assist you with?`;
    } else {
        return; // Should not happen
    }
    
    // Simulate sending by adding a confirmation to the chat
    const confirmationMessage: Message = {
      id: Date.now() + 2,
      sender: 'ai',
      text: confirmationText
    };
    setMessages(prev => [...prev, confirmationMessage]);
    
    // Exit drafting mode
    setDraftText(null);
    setSuggestions([]);
    onDraftComplete();
  };
  
  const handleCancelDraft = () => {
     const cancelMessage: Message = {
      id: Date.now(),
      sender: 'ai',
      text: "No problem. I've cancelled this draft. Let me know if you need help with anything else!"
    };
    setMessages(prev => [...prev, cancelMessage]);
    // Exit drafting mode
    setDraftText(null);
    setSuggestions([]);
    onDraftComplete();
  };

  const draftingTargetName = draftingFor?.title || draftingForRoommate?.name;

  return (
    <div className="flex flex-1">
      <Sidebar userType={userType} setUserType={setUserType} onPromptClick={handleSendMessage} />
      <main className="flex-1 flex flex-col">
        <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading}
          draftingTargetName={draftingTargetName}
          draftText={draftText}
          onDraftTextChange={setDraftText}
          onSendDraft={handleSendDraft}
          onCancelDraft={handleCancelDraft}
          suggestions={suggestions}
          isGeneratingSuggestions={isGeneratingSuggestions}
          onNavigate={onNavigate}
        />
      </main>
    </div>
  );
};