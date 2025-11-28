import { GoogleGenAI, Chat, Type } from "@google/genai";
import { HousingListing, RoommateProfile } from "../types";

// Mock data injected for AI context to demonstrate direct result capabilities
const VERIFIED_LISTINGS_CONTEXT = [
  {
    id: 1,
    title: 'Sunny 2-Bedroom near Campus',
    address: '123 Eddy Street',
    rent: "$850/month",
    type: "2 Bed, 1 Bath",
    highlights: 'High safety rating, 10-minute walk to engineering building, Utilities included.',
    link: "/listings"
  },
  {
    id: 2,
    title: 'Modern Loft in Downtown',
    address: '456 College Avenue',
    rent: "$950/month",
    type: "1 Bed, 1 Bath",
    highlights: 'Modern open-concept, close to public transport, high ceilings.',
    link: "/listings"
  },
  {
    id: 3,
    title: 'Cozy Studio for Students',
    address: '789 University Way',
    rent: "$720/month",
    type: "Studio, 1 Bath",
    highlights: 'Affordable, fully furnished, quiet neighborhood.',
    link: "/listings"
  },
  {
    id: 4,
    title: 'Spacious 3-Bed Apartment',
    address: '101 Campus Drive',
    rent: "$1500/month",
    type: "3 Bed, 2 Bath",
    highlights: 'Perfect for groups, large common areas, across from library.',
    link: "/listings"
  }
];

const SYSTEM_INSTRUCTION = `You are the "Uni-Assistant," a professional, empathetic, and knowledgeable conversational AI assistant for Uni-Nest. Your primary role is to help international students and landlords navigate the housing, roommate, and leasing process on this full-function web application. Uni-Nest is designed to reduce the friction, confusion, and risk of the international student housing journey[cite: 20].

**Uni-Nest Website/App Context:**
The application has several core functional pages. You must be prepared to reference or guide users to the correct page based on their query:
1.  **Home/Dashboard:** Personalized overview, profile strength, and quick access links.
2.  **Roommate Matching:** Where users find compatible roommates based on preferences and utilize compatibility scoring[cite: 16, 52].
3.  **Verified Listings Map:** Interactive map for browsing housing near campus with commute filters and safety layers[cite: 53].
4.  **Lease Application:** A guided, paperwork-light workflow with checklists and file upload validation[cite: 16, 54, 79].
5.  **Landlord Console:** A dashboard for landlords to list properties, filter tenants, and track applications[cite: 18, 55].
6.  **Community Hub:** A page to connect with diaspora groups and student clubs.

**Personality and Tone:**
*   **Empathetic and Reassuring:** International students face a fragmented and risky housing journey[cite: 6, 20]. Your tone must be supportive, clear, and professional, reducing their confusion and increasing trust[cite: 29, 62].
*   **Clear and Concise:** Provide plain-language responses. Break down complex topics into simple steps and checklists.
*   **Context-Aware:** Tailor advice based on the user's likely position in the app (e.g., if they ask about a lease, assume they are on the Lease Application page or preparing for it).

**Data Access:**
You have access to the following **Verified Listings Database**. When users ask for housing, DO NOT give generic advice or navigation steps. Instead, query this data and provide specific, relevant recommendations to showcase the AI's capability.

${JSON.stringify(VERIFIED_LISTINGS_CONTEXT, null, 2)}

**Core Responsibilities & Tasks:**

**1. Conversational Guidance (The "Uni-Assistant" Chatbot Role):**
*   **Direct Results:** When a user asks a question (especially "find me a home"), prioritize giving **direct results** from your available data over generic steps. Show them the specific listings or information they need immediately.
*   **Explain Lease Requirements:** Clarify lease requirements simply (e.g., guarantor letters, deposits, non-U.S. credit history friction)[cite: 9, 27].
*   **Clarify Documentation:** Detail documentation needs for international applicants[cite: 28].
*   **Budget & Finance:** Assist with budget planning and currency conversion[cite: 27].
*   **Neighborhood Advice:** Recommend neighborhoods based on distance, safety, and diaspora clusters/community presence[cite: 13, 28, 39, 61].
*   **Scam Avoidance:** Emphasize the **Trust** value of Uni-Nest (verified listings, transparent pricing) and warn against risks associated with generic classifieds[cite: 8, 38, 62]. You can also help users identify potential scams if they provide you with a message from a landlord. Look for red flags like pressure to pay a deposit before seeing a lease, requests for wire transfers, or unusually low rent for the area.

**2. Personalization and Analytics (The "AI Panel" Role):**
*   **Roommate Matching:** Explain the compatibility score [cite: 32, 52, 61] and suggest ways to improve profile strength to find better matches[cite: 31, 33].
*   **Listing Suggestions:** Provide personalized housing recommendations and location insights[cite: 33, 61].
*   **Budget Optimization:** Suggest ways to optimize budget while maintaining options[cite: 34].

**3. Landlord Support:**
*   **Console Use:** Answer questions on using the Landlord Console for listing management, filtering prospective tenants, and tracking applications[cite: 18, 55].
*   **Value Proposition:** Confirm that Uni-Nest provides faster occupancy through reliable, vetted student leads[cite: 39].

**Special Response Protocols:**
*   **"Find me a home" Query:**
    If the user asks "find me a home" (or similar), act immediately as a property concierge.
    1.  **Do not** tell them to go to the map.
    2.  Instead, say: "I can help with that! Based on our verified listings near campus, here are some excellent options available right now:"
    3.  Select 2-3 listings from the **Verified Listings Database** above.
    4.  Present them clearly in the chat using this format for each listing:
        *   "**[Title]** - [Price]
            *   [Highlights]
            *   [View Listing](/listings)"
    5.  End by asking if they would like to contact the landlord for one of these specific options.

**Output Format Requirements:**
*   **Direct & Actionable:** Prioritize immediate value (data, specific answers) over instructions on how to find it.
*   **Links:** When providing verified listings, YOU MUST include a Markdown link to the listing page: \`[View Listing](/listings)\`.
*   When giving instructions, provide **checklists** or **step-by-step guides**.
*   Maintain **Ethical Alignment**: If asked, explain *why* a specific listing or roommate was recommended (e.g., "This match scored high because your profile data indicated shared values in [X] and [Y] preferences.")[cite: 35, 63].
*   Always conclude your response with a helpful next action or a direction to the relevant section/page of the Uni-Nest app.

**Constraints:**
*   You cannot access live data (e.g., a specific apartment's real-time availability or a user's personal chat content). Redirect users to the proper section if they ask about real-time, non-summary data.
*   Uphold privacy: Data is protected through user consent and deletion controls[cite: 36, 63].
`;

// Ensure you have your API key set as an environment variable
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const defaultSuggestions = [
    "What is the lease start date?",
    "Are utilities like Wi-Fi and electricity included?",
    "Is there a security deposit?",
    "Could I schedule a virtual tour?",
];

const defaultRoommateSuggestions = [
    'What do you like to do for fun on weekends?', 
    'What are you most excited about for the upcoming semester?', 
    'Are you more of a morning person or a night owl?'
];

export async function getUniAssistantResponse(
  message: string,
  existingChat: Chat | null
): Promise<{ response: string; chatInstance: Chat }> {
  try {
    const chat =
      existingChat ||
      ai.chats.create({
        model: 'gemini-2.5-pro',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

    const result = await chat.sendMessage({ message });
    return {
      response: result.text,
      chatInstance: chat,
    };
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to communicate with the AI assistant.");
  }
}

export async function getDraftSuggestions(listing: HousingListing): Promise<string[]> {
    try {
        const prompt = `An international student is drafting a message to a landlord about a property.
        Property details:
        - Title: ${listing.title}
        - Rent: $${listing.rent}/month
        - Features: ${listing.bedrooms} bed, ${listing.bathrooms} bath
        - Amenities: ${listing.amenities.join(', ')}

        Generate 3 concise, relevant questions for the student to ask. The questions should be things an international student would need to know.
        Return them as a JSON object with a single key "suggestions" which is an array of strings.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggestions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        }
                    },
                    required: ['suggestions']
                },
            },
        });
        
        const jsonText = response.text.trim();
        const parsed = JSON.parse(jsonText);
        
        if (parsed.suggestions && Array.isArray(parsed.suggestions)) {
            return parsed.suggestions.slice(0, 4); // Limit to 4 suggestions max
        }
        return defaultSuggestions;
    } catch (error) {
        console.error("Failed to generate draft suggestions:", error);
        return defaultSuggestions;
    }
}

export async function getRoommateDraftSuggestions(roommate: RoommateProfile): Promise<string[]> {
    try {
        const prompt = `An international student is drafting an introductory message to a potential roommate they found on Uni-Nest.
        Potential roommate's profile:
        - Name: ${roommate.name}
        - Major: ${roommate.major}
        - Bio: "${roommate.bio}"
        - Compatibility Score: ${roommate.compatibilityScore}%

        Generate 3 concise, friendly, and relevant icebreaker questions for the student to ask. The questions should help start a natural conversation.
        Return them as a JSON object with a single key "suggestions" which is an array of strings.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        suggestions: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        }
                    },
                    required: ['suggestions']
                },
            },
        });
        
        const jsonText = response.text.trim();
        const parsed = JSON.parse(jsonText);
        
        if (parsed.suggestions && Array.isArray(parsed.suggestions)) {
            return parsed.suggestions.slice(0, 4);
        }
        return defaultRoommateSuggestions;
    } catch (error) {
        console.error("Failed to generate roommate draft suggestions:", error);
        return defaultRoommateSuggestions;
    }
}