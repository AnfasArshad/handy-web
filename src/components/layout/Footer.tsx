import React from 'react';
import Image from 'next/image';
import { NAV_ITEMS, SOCIAL_LINKS } from '@/data/navigation';
import { Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from '@/components/ui/Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 p-1 rounded-lg bg-white/95 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-teal-500"
              aria-label="HandySof"
            >
              <div className="relative h-8 w-[125px]">
                <Image
                  src="/images/logo-horizontal.png"
                  alt="HandySof"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </a>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building practical digital solutions for a connected world.
            </p>
            <p className="text-xs text-slate-500">
              Reliable software engineering, custom business platforms, and
              responsive web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3 mb-5">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-150"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.email}
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-150"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-150"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors duration-150"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an inquiry? Send a note to{" "}
              <a
                href={SOCIAL_LINKS.email}
                className="text-brand-teal-400 hover:underline"
              >
                handysof@outlook.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} HandySof. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Modern Software Development</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Built with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
