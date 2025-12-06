
Final Product Requirements Document (PRD)

1. Product Overview 
Problem
International students often face a confusing and risky housing process. They must choose safe areas without local information, check if listings are real, understand hidden costs, and find a trustworthy roommate. Many use Facebook groups, which leads to scams and stressful situations. Landlords also hesitate to rent to students who do not have a local credit score.
Users
Main users are first year international students in the United States, United Kingdom, Canada, or Australia. They want safe and affordable housing near campus. Secondary users are small and mid sized landlords who want reliable tenants and a simple screening process.
Current Prototype
Uni-Nest now has onboarding with profile creation, a verified listings map with commute filters, simple roommate matching with compatibility scores, and a landlord dashboard. The lease steps are early but started. An AI chatbot gives guidance on documents, budgeting, and housing. A basic personalization panel shows simple insights like profile strength.
2. Core Features and Status
Onboarding and Profile Creation: Implemented  
Roommate Matching with score and chat: Partially implemented  
Verified Listings Map: Implemented  
Community Hub: Implemented
Lease Application checklist: Partially implemented  
Landlord Console: Implemented  
AI Chatbot: Implemented  
AI Personalization Panel: Partially implemented  

AI Features: Chatbot, personalization, compatibility scoring, recommendations  
Conventional Features: Map, onboarding, listing details, landlord tools  

3. AI Specification
AI Role
The AI chatbot answers questions about housing, documents, and budgets. The AI personalization engine gives scores and suggestions. Inputs include user questions, profile data, listing data, and page context. Outputs include simple explanations, checklists, suggested listings, scores, and budget help.
AI Location in User Flow
The chatbot appears on every page. The personalization panel appears in the dashboard and updates when user data changes.
Model Used
Google Gemini API.
Guardrails
Clear answers, user data control, no legal advice, bias controls, AI usage limits.
1. Simple and Clear Answers
The AI gives short, easy explanations so students can understand housing terms without stress.
2. No Legal or Official Advice
The AI does not give legal answers about leases, visas, or rights. It tells students to confirm with their school or landlord.
3. Protects Sensitive Data
The AI does not store personal documents unless the user chooses to upload them. Students can delete files anytime.
4. Transparent Suggestions
When the AI gives a match score or housing suggestion, it explains why, so nothing feels hidden.
5. Reduces Bias
The AI avoids suggestions based on race, nationality, religion, or personal identity. It uses lifestyle and budget only.
6. Warns About Possible Mistakes
The AI reminds users to double check important information because it can be wrong sometimes.
7. Stays Within Safe Topics
The AI does not give medical, emotional, or financial advice outside housing. It stays focused on student housing support.


4. Technical Architecture

Frontend Technologies
React, Tailwind CSS, React Router, Lucide icons, Leaflet Maps.

AI Call Points
AI triggers when users chat, edit profiles, view listings, or move through lease steps.

External APIs
Gemini API, OpenStreetMap, hosting through Vercel or GitHub Pages. JSON data will move to Firebase or Supabase.

5. Prompting and Iteration Summary

Key Prompts
I used a vibe coding style by beginning  with very simple requests to see what the AI could do, and then I slowly asked for more as I understood its abilities. As a beginner with no technical skills, I let the AI guide me step by step.
Key prompts that were important:
Prompt 1: "Make a simple home page for a student housing app with a title and two buttons."
Prompt 2: "Create a simple form that asks for name, budget, and what kind of roommate the student wants."
Prompt 3: "Make a simple screen that shows a map with a few sample houses marked on it."
Prompt 4: "Make simple cards that show a possible roommate with their name and interests and add Like and Skip buttons."
How the prompts changed over time: At first, my prompts were very basic because I did not know what the AI could do. As I tested different ideas, I saw that the AI could build more than I expected. I then asked for things like a chat window, a checklist, a file upload box, or a dashboard. Each time, I became more comfortable asking for slightly bigger features.
What I learned about prompt design: I learned that the AI works best when I keep instructions short and clear. If I describe only one idea at a time, the AI does a better job. I also learned that I do not need technical words. Simple instructions like "make a box," "add a button," or "show a list" are enough. The more I practiced, the more I understood how to guide the AI in a calm and steady way.
6. UX and Limitations
Intended User Journey:
Student creates a simple profile with budget and preferences
Student views housing options on a map
Student looks at roommate cards and likes or skips
Student follows a basic lease checklist to understand required documents
Landlord posts listings and reviews student applications
Overall flow aims to reduce stress and guide new international students

Known Limitations and Janky Areas:
Roommate compatibility score is very simple
Lease steps are basic and not ready for real use
Map shows sample data, not real listings
Chat is not real time
Some screens need better spacing and design
A few transitions feel disconnected because some features are still early

Ethical or Trust Limitations:
AI can give incorrect or incomplete answers
Tool cannot replace legal or official university advice
Students must verify documents and housing details on their own
Users should be careful when uploading personal files
Important decisions should not be based on AI suggestions alone

7. Future Roadmap
Plans
University verification  
Better AI scoring  
Backend migration with real time chat  
Scam detection and trust tools  

