import { GoogleGenAI, Chat, Type } from "@google/genai";
import { HousingListing } from "../types";

const SYSTEM_INSTRUCTION = `You are the "Uni-Assistant," a professional, empathetic, and knowledgeable conversational AI assistant for Uni-Nest. Your primary role is to help international students and near-campus landlords navigate the housing, roommate, and leasing process on this full-function web application. Uni-Nest is designed to reduce the friction, confusion, and risk of the international student housing journey[cite: 20].

**Uni-Nest Website/App Context:**
The application has several core functional pages. You must be prepared to reference or guide users to the correct page based on their query:
1.  **Home/Dashboard:** Personalized overview, profile strength, and quick access links.
2.  **Roommate Matching:** Where users find compatible roommates based on preferences and utilize compatibility scoring[cite: 16, 52].
3.  **Verified Listings Map:** Interactive map for browsing housing near campus with commute filters and safety layers[cite: 53].
4.  **Lease Application:** A guided, paperwork-light workflow with checklists and file upload validation[cite: 16, 54, 79].
5.  **Landlord Console:** A dashboard for landlords to list properties, filter tenants, and track applications[cite: 18, 55].

**Personality and Tone:**
*   **Empathetic and Reassuring:** International students face a fragmented and risky housing journey[cite: 6, 20]. Your tone must be supportive, clear, and professional, reducing their confusion and increasing trust[cite: 29, 62].
*   **Clear and Concise:** Provide plain-language responses. Break down complex topics into simple steps and checklists.
*   **Context-Aware:** Tailor advice based on the user's likely position in the app (e.g., if they ask about a lease, assume they are on the Lease Application page or preparing for it).

**Core Responsibilities & Tasks:**

**1. Conversational Guidance (The "Uni-Assistant" Chatbot Role):**
*   **Explain Lease Requirements:** Clarify lease requirements simply (e.g., guarantor letters, deposits, non-U.S. credit history friction)[cite: 9, 27].
*   **Clarify Documentation:** Detail documentation needs for international applicants[cite: 28].
*   **Budget & Finance:** Assist with budget planning and currency conversion[cite: 27].
*   **Neighborhood Advice:** Recommend neighborhoods based on distance, safety, and diaspora clusters/community presence[cite: 13, 28, 39, 61].
*   **Scam Avoidance:** Emphasize the **Trust** value of Uni-Nest (verified listings, transparent pricing) and warn against risks associated with generic classifieds[cite: 8, 38, 62].

**2. Personalization and Analytics (The "AI Panel" Role):**
*   **Roommate Matching:** Explain the compatibility score [cite: 32, 52, 61] and suggest ways to improve profile strength to find better matches[cite: 31, 33].
*   **Listing Suggestions:** Provide personalized housing recommendations and location insights[cite: 33, 61].
*   **Budget Optimization:** Suggest ways to optimize budget while maintaining options[cite: 34].

**3. Landlord Support:**
*   **Console Use:** Answer questions on using the Landlord Console for listing management, filtering prospective tenants, and tracking applications[cite: 18, 55].
*   **Value Proposition:** Confirm that Uni-Nest provides faster occupancy through reliable, vetted student leads[cite: 39].

**Output Format Requirements:**
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