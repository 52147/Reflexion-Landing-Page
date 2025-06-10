"use client";
import React from "react";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandTwitter,
  IconMail,
  IconBrandDiscord,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer = () => (
  <footer className="w-full bg-[#F5EEE7]">
    <div className="px-5 py-6 mx-auto max-w-[1440px] bg-[#F5EEE7]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4">
        {" "}
        {/* Logo */}
        <div className="flex gap-5 items-center">
          <Link href="/" className="flex items-center gap-5">
            <img
              src="/reflexion-logo.png"
              alt="Reflexion"
              className="h-[107px] w-auto transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110"
            />
          </Link>
        </div>
        {/* Desktop nav links */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-center">
          {[
            { label: "About", href: "#about" },
            { label: "Features", href: "#features" },
            { label: "Technical Status", href: "#technical-status" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xl font-semibold text-black hover:text-[#707b9e]"
            >
              {label}
            </a>
          ))}
        </div>
        {/* Social icons */}
        <div className="flex gap-5 items-center mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandLinkedin size={28} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandYoutube size={28} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandFacebook size={28} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandTwitter size={28} />
          </a>
          <a
            href="mailto:founder@reflexionai.dev"
            className="text-black hover:text-slate-600"
          >
            <IconMail size={28} />
          </a>
          <a
            href="https://discord.gg/Mz8bBHBgyr"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandDiscord size={28} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="text-black hover:text-slate-600"
          >
            <IconBrandGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
