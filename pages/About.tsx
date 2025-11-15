
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            To create a trusted, empathetic, and seamless housing experience for every international student.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Challenge Students Face</h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                The journey for international students to find housing is often fragmented, confusing, and filled with risk. From navigating unfamiliar neighborhoods and complex lease agreements to avoiding sophisticated rental scams, the process can be overwhelming. Many students struggle with the lack of a U.S. credit history and face uncertainty about who they will be living with.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The Uni-Nest Solution</h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                Uni-Nest was built to solve these problems. We provide a centralized platform that brings together verified landlords and international students in a secure environment. Our key features are designed to build trust and simplify every step:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 dark:text-gray-400">
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Verified Listings:</span> We vet every property and landlord to ensure they are legitimate, eliminating the risk of scams.</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Intelligent Roommate Matching:</span> Our algorithm connects students with compatible roommates, fostering a positive living environment.</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Transparent Processes:</span> From clear pricing to guided lease applications, we remove ambiguity and empower students to make informed decisions.</li>
                <li><span className="font-semibold text-gray-800 dark:text-gray-200">Empathetic Support:</span> Our Uni-Assistant chatbot provides 24/7 guidance, answering questions and offering support throughout the journey.</li>
              </ul>
            </div>
             <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">For Landlords</h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                We connect landlords with a pool of reliable, vetted student tenants from around the world. Our platform streamlines the application and leasing process, helping property owners fill vacancies faster and manage their listings with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
