"use client";
import React, { useEffect } from "react";
import { FaRocket, FaPhone, FaEnvelope, FaCertificate } from "react-icons/fa";
import { Spotlight } from "@/components/ui/Spotlight";
import ContactForm from "@/components/ui/ContactForm"; // Assuming the contact form is in this path
import ContactWithMap from "@/components/ui/ContactWithMap"; // Assuming the contact form is in this path
import PaymentPage from "@/components/ui/PaymentPage"; // Assuming the RazorpayButton component is in this path

const Contact: React.FC = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center min-h-screen mx-auto sm:px-10 px-5 py-36">
      {/* Spotlight component with z-index set to 0 */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 left- md:left-60 md:-top-20 z-0"
          fill="white"
        />
        <Spotlight className="h-[40vh] w-[50vw] top-10 left-80" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Main content with higher z-index */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
          CONTACT ME
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Info */}
          <div className="bg-gray-900/60 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <FaRocket />
            </div>
            <h5 className="text-xl uppercase font-bold mb-8">My Location:</h5>
            <p className="text-gray-300">
              9a/632, Murshadpur, Sadar Bazar, Mathura, 281001, Uttar Pradesh,
              India
            </p>
          </div>

          {/* Phone and Email Info */}
          <div className="bg-gray-900/60 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center text-green-500 text-5xl mb-4 space-x-4">
              <FaPhone />
              <FaEnvelope />
            </div>
            <h5 className="text-xl font-bold uppercase mb-8">
              Phone and Email
            </h5>
            <p className="text-gray-300">
              +91-821-850-4473
              <br />
              <a
                href="mailto:tusharpachouri@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                tusharpachouri001@gmail.com
              </a>
              <br />
            </p>
          </div>

          {/* Online Payment Info */}
          <div className="bg-gray-900/60 rounded-lg p-6 flex flex-col items-center text-center ">
            <div className="text-purple-500 text-5xl mb-4">
              <FaCertificate />
            </div>
            <h5 className="text-xl font-bold uppercase mb-4">Online Payment</h5>
            <p className="text-gray-300 mb-4">
              UPI - tusharpachouri@oksbi
              <br />
              <a
                href="https://paypal.me/tusharpachouri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                PayPal - @tusharpachouri
              </a>
            </p>
            <PaymentPage />
            {/* <button
              // onClick={handlePayment}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Pay Now
            </button> */}
            <p className="text-xs text-gray-400 text-center mt-2">
              *Secured by Razorpay*
            </p>
          </div>
        </div>

        {/* Include the ContactForm component */}

        <div className="p-6">
          <ContactWithMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
