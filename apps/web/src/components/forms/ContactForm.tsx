"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { submitContactInquiry } from "@/services/contact.service";
import { ContactInquiryPayload } from "@/types/contact.types";
import { SERVICE_OPTIONS } from "@/constants/service-options";

const initialFormData: ContactInquiryPayload = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactInquiryPayload>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await submitContactInquiry(formData);

      if (response.success) {
        setIsSuccess(true);

        setResponseMessage("Thank you! Your inquiry has been submitted successfully.");

        setFormData(initialFormData);
      } else {
        setIsSuccess(false);

        setResponseMessage(response.message || "Something went wrong. Please try again.");
      }
    } catch {
      setIsSuccess(false);

      setResponseMessage("Unable to submit inquiry. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-5">
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your full name"
        required
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        label="Phone Number"
        name="phone"
        placeholder="Enter your phone number"
        required
        value={formData.phone}
        onChange={handleChange}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <Select
        label="Service Interested In"
        name="service"
        required
        value={formData.service}
        onChange={(event) =>
          setFormData((previousData) => ({
            ...previousData,
            service: event.target.value,
          }))
        }
        options={[...SERVICE_OPTIONS]}
      />

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us what you are looking for"
        required
        value={formData.message}
        onChange={handleChange}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>

      {responseMessage && (
        <p
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            isSuccess ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {responseMessage}
        </p>
      )}
    </form>
  );
}
