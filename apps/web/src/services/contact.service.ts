import { ApiResponse, ContactInquiryPayload } from "@/types/contact.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const submitContactInquiry = async (
  payload: ContactInquiryPayload
): Promise<ApiResponse<ContactInquiryPayload>> => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  return result;
};
