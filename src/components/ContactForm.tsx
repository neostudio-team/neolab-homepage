"use client";

import { useState } from "react";
import {
  FormRoot,
  SelectField,
  SubmitButton,
  TextArea,
  TextInput,
} from "./ContactForm.styles";

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:korbiz@neolab.net?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, name: e.target.value });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, email: e.target.value });
  }

  function handleInterestChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFormData({ ...formData, interest: e.target.value });
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({ ...formData, message: e.target.value });
  }

  return (
    <FormRoot onSubmit={handleSubmit}>
      <div>
        <TextInput
          type="text"
          placeholder={dict.name}
          value={formData.name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <TextInput
          type="email"
          placeholder={dict.email}
          value={formData.email}
          onChange={handleEmailChange}
          required
        />
      </div>
      {showInterest && (
        <div>
          <SelectField
            value={formData.interest}
            onChange={handleInterestChange}
          >
            <option value="">{dict.interest}</option>
            <option value="business">{dict.businessProposal}</option>
            <option value="purchase">{dict.purchaseInquiry}</option>
            <option value="corporate">{dict.corporateRelated}</option>
            <option value="idea">{dict.ideaProposal}</option>
          </SelectField>
        </div>
      )}
      <div>
        <TextArea
          placeholder={dict.message}
          value={formData.message}
          onChange={handleMessageChange}
          required
        />
      </div>
      <SubmitButton type="submit">{dict.enquire}</SubmitButton>
    </FormRoot>
  );
}
