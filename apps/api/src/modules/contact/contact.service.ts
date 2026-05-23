import { prisma } from "../../config/prisma";
import { CreateContactInquiryInput } from "./contact.validation";

export const createContactInquiry = async (data: CreateContactInquiryInput) => {
  return prisma.contactInquiry.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service || null,
      message: data.message,
    },
  });
};