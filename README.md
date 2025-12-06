<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1RSIRNS6f_c45PpCAjUd7LLM4edFAFrI_

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
1. Clear Description of What the Product Does and How to View It
Uni-Nest is an AI-supported housing platform designed for international students who struggle with confusing, risky, and unfamiliar housing markets. It helps students:
Create a simple onboarding profile
Browse a verified listings map with commute-time filters
See compatibility-based roommate matches
Follow a beginner-friendly lease application checklist
Ask questions through an AI chatbot that explains documents, budgeting, safety, and common scams
View personalized insights like profile strength or recommended listings
Landlords can also use Uni-Nest through a dedicated console that lets them list properties, track applications, and connect with verified student tenants.
To view the product, you navigate through the onboarding flow, open the dashboard, explore verified listings on the map, check your roommate matches, and interact with the Uni-Assistant chatbot that appears on every page. The current prototype includes working screens for onboarding, listings, map filters, roommate cards, the community hub, and the landlord console.

2. Technologies Used
Frontend
React
Tailwind CSS
React Router
Lucide Icons
Leaflet (maps)
AI
Google Gemini API (via Google AI Studio)
External APIs & Infrastructure
OpenStreetMap
Hosted on Vercel or GitHub Pages
JSON data expected to move to Firebase or Supabase
AI triggers occur when users:
Chat with the assistant
Edit their profile
View listings
Move through lease steps

3. How This Project Uses AI
Uni-Nest uses AI in two main ways:
1. AI Chatbot (Uni-Assistant)
The AI chatbot appears on every page and gives simple, clear answers about housing. It explains documents, budgeting, safety, and common scams. When a student asks a question, the AI uses their profile data, listing information, and page context to produce an easy-to-understand response. It is designed to reduce confusion and stress for international students navigating housing for the first time.
2. AI Personalization & Scoring
AI also generates:
Roommate compatibility scores
Personalized suggestions
Budget guidance
Simple explanations of why recommendations were made
Guardrails
The project uses strict AI safety guidelines:
No legal or visa advice
Avoids bias (no race, nationality, or identity profiling)
Clear explanations of suggestions
Reminds students to double-check important information
Sensitive documents are protected and not used by AI

## Demo Video Link:
https://drive.google.com/file/d/1AL6o4MoNQ2SddwVCcg8rfoIVmtSN4sZz/view?usp=share_link
