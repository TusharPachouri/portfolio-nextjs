"use client";
import React from "react";
import ContactForm from "./ContactForm";
import MapSection from "../Map/MapSection";

const ContactWithMap: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <ContactForm />
      </div>
      <div className="flex-1 pt-24">
        <MapSection />
      </div>
    </div>
  );
};

export default ContactWithMap;
