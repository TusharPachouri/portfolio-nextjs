"use client";

import React, { useState } from "react";
import { z } from "zod";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

// Zod validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");
    setFormErrors({});

    try {
      // Validate form data
      const validationResult = ContactFormSchema.safeParse(formData);

      // If validation fails, set errors and stop submission
      if (!validationResult.success) {
        const errorDetails = validationResult.error.flatten().fieldErrors;
        setFormErrors({
          name: errorDetails.name?.[0],
          email: errorDetails.email?.[0],
          subject: errorDetails.subject?.[0],
          message: errorDetails.message?.[0],
        });
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus(
          "Thank you for contacting us. We will get back to you soon!"
        );
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setFormStatus(
          result.message || "Something went wrong. Please try again later."
        );
      }
    } catch (error) {
      setFormStatus("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900/60 p-6 rounded-lg max-w-lg mx-auto">
      <h2 className="text-3xl text-center text-white uppercase font-bold mb-6">Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="text-white uppercase text-lg font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none ${
              formErrors.name ? "border border-red-500" : ""
            }`}
            placeholder="Your Name"
          />
          {formErrors.name && (
            <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="text-white uppercase text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none ${
              formErrors.email ? "border border-red-500" : ""
            }`}
            placeholder="Your Email"
          />
          {formErrors.email && (
            <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
          )}
        </div>

        {/* Subject Field */}
        <div className="mb-4">
          <label htmlFor="subject" className="text-white uppercase text-lg font-bold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none ${
              formErrors.subject ? "border border-red-500" : ""
            }`}
            placeholder="Subject"
          />
          {formErrors.subject && (
            <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="text-white uppercase text-lg font-bold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full mt-2 p-3 rounded-lg bg-gray-700 text-white focus:outline-none ${
              formErrors.message ? "border border-red-500" : ""
            }`}
            rows={5}
            placeholder="Your Message"
          ></textarea>
          {formErrors.message && (
            <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
          )}
        </div>

        {/* Form Status */}
        {formStatus && (
          <div
            className={`mb-4 text-center text-lg ${
              formStatus.includes("Thank you")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <p>{formStatus}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-bold uppercase text-white py-3 rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href="https://linkedin.com/in/tushar-pachouri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white text-4xl hover:text-blue-500 transition-colors duration-300" />
        </a>
        <a
          href="https://www.instagram.com/tushar_pachouri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-4xl hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-4xl hover:text-blue-400 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
