import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

type ContactEmailPayload = {
  name: string;
  phone: string;
  email?: string | null;
  service?: string | null;
  message: string;
};

const transportOptions = {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false,
  family: 4,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
} as SMTPTransport.Options;

const transporter = nodemailer.createTransport(transportOptions);

export async function sendContactInquiryEmail(payload: ContactEmailPayload) {
  await transporter.sendMail({
    from: `"Life Architect Sarika" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `New inquiry from ${payload.name}`,
    text: `
New contact inquiry received.

Name: ${payload.name}
Phone: ${payload.phone}
Email: ${payload.email || "Not provided"}
Service: ${payload.service || "Not selected"}

Message:
${payload.message}
    `,
  });
}
