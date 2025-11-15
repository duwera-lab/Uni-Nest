import React from 'react';
import { EnvelopeIcon, BuildingIcon } from '../components/icons';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-white dark:bg-gray-800 flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]"
                  />
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[--nd-gold] focus:border-[--nd-gold]"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[--nd-blue] hover:bg-[--nd-gold] hover:text-[--nd-blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--nd-gold] transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
                 <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <EnvelopeIcon className="w-6 h-6 text-[--nd-gold]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h4>
                        <p className="text-gray-600 dark:text-gray-400">Reach out for any inquiries.</p>
                        <a href="mailto:support@un-nest.com" className="text-[--nd-gold] dark:text-[--nd-gold-light] hover:underline">
                            support@un-nest.com
                        </a>
                    </div>
                 </div>
                 <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <BuildingIcon className="w-6 h-6 text-[--nd-gold]" />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Office</h4>
                        <p className="text-gray-600 dark:text-gray-400">123 University Ave<br/>City, State 12345</p>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};