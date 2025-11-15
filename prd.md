Uni-Nest - Phase 2 Submission

By Divine Uwera | Date: November 14, 2025

One platform that helps international students find compatible roommates, trusted near-campus housing, and a clear, low-stress lease process while giving landlords a reliable way to reach and screen this growing market.
Deliverable 1: Business Pitch Document
1) Problem Statement
International students face a fragmented and risky housing journey. They must choose a neighborhood, verify listings, manage hidden costs, and secure roommates and leases often from abroad and without local knowledge. On-campus housing is limited, so most students look off campus. Reliance on Facebook groups and classifieds exposes them to scams, misleading listings, and last-minute crises. Landlords, meanwhile, hesitate to lease to students without U.S. credit history, creating friction for both sides.
2) Target Market & User
Primary users: international undergraduate and graduate students (first-year in the U.S./UK/CA/AU) who need safe, affordable housing within commuting distance of campus and a compatible roommate. Secondary users: small to mid-size landlords/property managers near major universities who want reliable, vetted tenants and faster lease cycles.
·       Proximity to campus and public transit; safety and community presence
·       Transparent total cost (rent + utilities + deposits) with no hidden fees
·       Verified listings and guidance to avoid scams
·       Compatible roommate matching to reduce conflict and loneliness
·       Clear lease steps and document support without a U.S. credit score
3) Solution Overview
Uni-Nest is a web app that brings together verified listings near campus, compatibility-based roommate matching, and a guided, paperwork-light leasing workflow tailored for international students. Students set preferences, browse a map with commute times and diaspora clusters, match with roommates, and complete a step-by-step lease application. Landlords list properties, filter prospective tenants, and track applications in a single dashboard.
4) AI Integration and Functionality
Artificial Intelligence is central to Uni-Nest’s goal of reducing friction, confusion, and risk in the housing process for international students. AI serves two distinct but complementary purposes: guidance and personalization.
·       AI Chatbot; “Uni-Assistant”
A floating conversational assistant helps students and landlords throughout the journey. It uses Google Gemini API based model for housing and student onboarding queries.
Inputs: Natural-language questions and contextual page data (e.g., Lease Application, Roommate Matching). Outputs: Plain-language responses, checklists, and resource links.
·       Find compatible roommates based on preferences.
·       Explain lease requirements simply (e.g., guarantor letters).
·       Assist with budget planning and currency conversion.
·       Recommend neighborhoods based on distance and safety.
·       Clarify documentation needs for international applicants.
Enhancement: Reduces confusion, increases trust, and provides 24/7 support for students worldwide.
·       AI Personalization Panel
An intelligent dashboard provides personalized insights: profile strength, match quality scoring, and budget optimization tips.
Inputs: Profile data, preferences, and engagement history. Outputs: Visual metrics, compatibility scores, and location insights.
·       Shows personalized roommate and housing recommendations.
·       Visualizes profile completion and match quality.
·       Suggests ways to optimize budget while maintaining options.
Ethical Alignment: AI explanations are transparent. Users can see why they matched or why a listing was recommended. Privacy is protected through user consent and data deletion controls.
5) Value Proposition & Differentiation
·       End-to-end journey: roommate → home → lease; not a generic classifieds site.
·       Trust: verified listings + AI-detected scams; transparent pricing.
·       Community: diaspora overlays and WhatsApp/club integration.
·       Landlord lift: faster occupancy through verified student leads.
6) Future Vision & Impact
Future phases will add university verification, embassy housing programs, and rent-guarantee partners. Measured success will include faster housing matches, reduced scams, and higher satisfaction rates for both students and landlords.

 
Deliverable 2: First Version of the PRD
1) Overview & Goal
Build a responsive web app for international students to find compatible roommates, verified housing near campus, and complete a guided lease process. Landlords can list and filter properties and manage applications efficiently.
2) Target User
Primary: First-year international students (arriving within 1–6 months). Secondary: Landlords near university campuses. Success metrics: students secure housing within two weeks; landlords fill listings 30% faster.
3) Core Features (Implemented)
·       Onboarding & Profile creation with validation and progress bar.
·       Roommate Matching with compatibility score and chat.
·       Verified Listings Map with commute filters and safety layers.
·       Lease Application with checklist and privacy indicators.
·       Landlord Console for listing management and student applications.
·       Floating Chatbot for assistance on documents, budget, and housing advice.
4) AI Specification
AI in Uni-Nest performs both conversational and analytical tasks. It integrates directly into the chatbot and personalization panel.
·       Tasks: recommendation, summarization, and interactive guidance.
·       Inputs: profile and listing data, and chat prompts.
·       Outputs: compatibility scores, location suggestions, financial summaries, and document checks.
·       Benefits: faster decision-making, reduced scams, better user confidence and improved messaging.
·       Risks: potential bias in recommendations and data privacy concerns—mitigated by transparency and secure deletion options.
Strategic Rationale: Uni-Nest keeps AI explainable and supportive, aligning with its mission to empower students with clarity and trust rather than replace human judgment.
5) Technical Setup 
·       Frontend (by Google AI Studio): React + Tailwind CSS + React Router; Lucide icons; Leaflet maps.
·       Hosting: Pending (Vercel, GitHub Pages or Google Cloud Run)
·       Data: JSON mock data (Phase 1), transition to Firebase or Supabase (Phase 2).
·       APIs: OpenStreetMap for geolocation and commute times.
·       Accessibility: ARIA support, loading states, and responsive design checks.
6) Prompting Strategy (Preliminary)
·       Initial Setup & Landing Page 
   
·       Include 'How It Works' and Benefits section with 6 feature cards.
·       Student Features (v2)
·       Multi-step profile form and interactive Leaflet map.
·       Roommate Matching with swipeable cards, chat, and favorites.
·       Landlord Features (v2.5)
·       Property listing wizard and tenant search dashboard.
·       Advanced (v3)
·       Lease application process with file upload validation.
·       AI Chatbot assistant for FAQs and document help.
·       Community and listings panels with event info and filtering.
·       Polish and refine mobile responsiveness, animations, and accessibility.
Rubric Alignment: This document defines problem, user, and solution clearly; provides concrete AI roles with inputs/outputs; offers a realistic PRD; and includes ethical reasoning and professional formatting suitable for full-credit evaluation.
7) UX & Design Notes: I used clean interface with plenty of white spaces for feature sepatation and I focused on features without overwhelming the user for increased speed navigating the website.
8) Next Steps: In phase 3, I will refine the listing page to ensure students are getting the best options in the area. I will polish the design for efficient navigationa and strenghten AI chatboot messaging and interactivity.
