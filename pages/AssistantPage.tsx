import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ChatWindow } from '../components/ChatWindow';
import { getUniAssistantResponse, getDraftSuggestions } from '../services/geminiService';
import type { Message, UserType, HousingListing } from '../types';

interface AssistantPageProps {
  draftingFor: HousingListing | null;
  onDraftComplete: () => void;
}

export const AssistantPage: React.FC<AssistantPageProps> = ({ draftingFor, onDraftComplete }) => {
  const [userType, setUserType] = useState<UserType>('student');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm Uni-Assistant, your guide to Uni-Nest. How can I help you today? Please let me know if you are a student or a landlord.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<any>(null);

  const [draftText, setDraftText] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState(false);

  useEffect(() => {
    if (draftingFor) {
      // Enter drafting mode
      const initialDraft = `Hello,

I'm interested in your property, "${draftingFor.title}," located at ${draftingFor.address}. I found it on Uni-Nest.

Could you please provide some more information?

Thank you,
[Your Name]`;
      
      setDraftText(initialDraft);
      
      const draftMessage: Message = {
        id: Date.now(),
        sender: 'ai',
        text: `Let's draft a message to the landlord for "${draftingFor.title}". You can edit the message below and use the AI suggestions to add more details. When you're ready, hit "Send Inquiry"!`
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
  }, [draftingFor]);

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
      const { response, chatInstance } = await getUniAssistantResponse(text, chat);
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        text: response,
      };
      setMessages(prev => [...prev, aiMessage]);
      setChat(chatInstance); // Save the chat instance for conversation history
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
  }, [chat]);
  
  const handleSendDraft = () => {
    if (!draftText) return;
    const finalMessage = `Regarding the property "${draftingFor?.title}":\n\n${draftText}`;
    handleSendMessage(finalMessage);
    const confirmationMessage: Message = {
      id: Date.now() + 2,
      sender: 'ai',
      text: "Great! I've sent your inquiry to the landlord. They should get back to you soon. Can I help with anything else?"
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

  return (
    <div className="flex flex-1">
      <Sidebar userType={userType} setUserType={setUserType} onPromptClick={handleSendMessage} />
      <main className="flex-1 flex flex-col">
        <ChatWindow 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading}
          draftingForTitle={draftingFor?.title}
          draftText={draftText}
          onDraftTextChange={setDraftText}
          onSendDraft={handleSendDraft}
          onCancelDraft={handleCancelDraft}
          suggestions={suggestions}
          isGeneratingSuggestions={isGeneratingSuggestions}
        />
      </main>
    </div>
  );
};