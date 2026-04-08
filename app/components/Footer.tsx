"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa6";

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export default function Footer() {
  const quickLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];

  const legalLinks: NavLink[] = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  const socials: SocialLink[] = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/prince-bajgain",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/prince-bajgain-39376b363/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/prince.bajagain/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="w-full bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & Branding */}
          <div className="flex flex-col gap-4">
            <div id="left">
              <span className="font-dancing font-bold text-white text-xl">PB</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Building digital experiences that value every user. Focused on
              performance, aesthetics, and scalability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col gap-6 lg:items-end">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs lg:hidden">
              Connect
            </h3>
            <div className="flex flex-wrap gap-5">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-500 hover:text-indigo-400 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="lg:text-right">
              <p className="text-xs">
                © {new Date().getFullYear()}{" "}
                <a
                  href="https://prebuiltui.com"
                  className="text-stone-300 hover:text-white underline underline-offset-4"
                >
                  Prince Bajgain
                </a>
              </p>
              <p className="text-[10px] mt-1 text-stone-600">
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
