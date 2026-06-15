import { prisma } from "../../config/prisma";
import { CreateContactInquiryInput } from "./contact.validation";
import { sendContactInquiryEmail } from "../../common/services/email.service";

export const createContactInquiry = async (data: CreateContactInquiryInput) => {
  const contactInquiry = await prisma.contactInquiry.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service || null,
      message: data.message,
    },
  });

  try {
    await sendContactInquiryEmail({
      name: contactInquiry.name,
      phone: contactInquiry.phone,
      email: contactInquiry.email,
      service: contactInquiry.service,
      message: contactInquiry.message,
    });
  } catch (error) {
    console.error("Failed to send contact inquiry email:", error);
  }

  return contactInquiry;
};
