import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Architect Sarika | Numerology, Tarot & Reiki Healing",
  description:
    "Discover guidance through numerology, tarot, and Reiki healing with Life Architect Sarika.",
    keywords: [
      "KP Astrology",
      "Vedic Numerology",
      "Life Architect Sarika",
      "Numerology",
      "Tarot",
      "Reiki Healing",
      "Spiritual Guidance",
      "Consultation",
    ],  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        {" "}
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
