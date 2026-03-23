"use client";

import { useState } from "react";

interface ContactFormDict {
  name: string;
  email: string;
  interest: string;
  businessProposal: string;
  purchaseInquiry: string;
  corporateRelated: string;
  ideaProposal: string;
  message: string;
  enquire: string;
}

interface ContactFormProps {
  showInterest?: boolean;
  dict: ContactFormDict;
}

export default function ContactForm({ showInterest = false, dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:korbiz@neolab.net?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <div>
        <input
          type="text"
          placeholder={dict.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder={dict.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
          required
        />
      </div>
      {showInterest && (
        <div>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary text-gray-600"
          >
            <option value="">{dict.interest}</option>
            <option value="business">{dict.businessProposal}</option>
            <option value="purchase">{dict.purchaseInquiry}</option>
            <option value="corporate">{dict.corporateRelated}</option>
            <option value="idea">{dict.ideaProposal}</option>
          </select>
        </div>
      )}
      <div>
        <textarea
          placeholder={dict.message}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary h-32 resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors uppercase tracking-wider text-sm"
      >
        {dict.enquire}
      </button>
    </form>
  );
}
