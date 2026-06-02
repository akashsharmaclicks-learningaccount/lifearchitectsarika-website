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

type FormErrors = Partial<Record<keyof ContactInquiryPayload, string>>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactInquiryPayload>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: undefined,
    }));
  };
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service?.trim()) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      setIsSuccess(false);
      setResponseMessage("Please fix the highlighted fields before submitting.");
      return;
    }
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await submitContactInquiry(formData);

      if (response.success) {
        setIsSuccess(true);

        setResponseMessage("Thank you! Your inquiry has been submitted successfully.");

        setFormData(initialFormData);
        setErrors({});
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
    <form noValidate onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-5">
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your full name"
        required
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />

      <Input
        label="Phone Number"
        name="phone"
        placeholder="Enter your phone number"
        required
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <Select
        label="Service Interested In"
        name="service"
        required
        value={formData.service}
        onChange={(event) => {
          setFormData((previousData) => ({
            ...previousData,
            service: event.target.value,
          }));

          setErrors((previousErrors) => ({
            ...previousErrors,
            service: undefined,
          }));
        }}
        options={[...SERVICE_OPTIONS]}
        error={errors.service}
      />

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us what you are looking for"
        required
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <Button type="submit" isLoading={isSubmitting}>
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
