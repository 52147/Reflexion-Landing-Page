import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { icons } from "icons-react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reflexion | Emotional AI for Self-Insight",
  description:
    "Reflexion is a self-guided emotional reflection landing page that introduces an AI-powered tool for turning emotions into cognitive insight — accessible, private, and stigma-free.",
  icons: {
    icon: "/reflexion-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen bg-[#F5EEE7]">{children}</main>
        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
