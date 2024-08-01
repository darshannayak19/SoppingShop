// components/ContactUs.tsx

import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0" data-aos="fade-right">
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>contact@myshoppingsite.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p>123 E-commerce Street, Online City, Web 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
