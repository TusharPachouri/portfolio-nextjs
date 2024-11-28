"use client";
import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<string>("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    // Simple validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus("Please fill in all the fields.");
      setIsSubmitting(false);
      return;
    }

    // Send form data to backend (API endpoint)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Thank you for contacting us. We will get back to you soon!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setFormStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900/60 p-6 rounded-lg max-w-lg mx-auto">
      <h2 className="text-3xl text-center text-white mb-6">Get In Touch</h2>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="text-white text-lg">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="text-white text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Your Email"
          />
        </div>

        {/* Subject Field */}
        <div className="mb-4">
          <label htmlFor="subject" className="text-white text-lg">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            placeholder="Subject"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="text-white text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
            rows={5}
            placeholder="Your Message"
          ></textarea>
        </div>

        {/* Form Status */}
        {formStatus && (
          <div className="mb-4 text-center text-lg text-white">
            <p>{formStatus}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 space-x-4">
        <a href="nkedin.com/in/tushar-pachouri/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/tushar_pachouri/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-2xl hover:text-blue-400 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
