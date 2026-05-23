import { z } from "zod";

export const createContactInquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.email("Invalid email address").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type CreateContactInquiryInput = z.infer<typeof createContactInquirySchema>;
