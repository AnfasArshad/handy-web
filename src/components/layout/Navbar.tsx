'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from '@/data/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'services', 'projects', 'why-us', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 py-3 sm:py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 rounded-lg group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            aria-label="HandySof Home"
          >
            <div className="relative h-8 w-[120px] sm:h-10 sm:w-[145px] transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/logo-horizontal.png"
                alt="HandySof"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-brand-blue-600 bg-brand-blue-50/70 font-semibold'
                      : 'text-slate-600 hover:text-brand-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-blue-600 rounded-lg hover:bg-brand-blue-700 active:bg-brand-blue-800 transition-all duration-150 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 focus-visible:ring-offset-2"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-slate-700 hover:text-brand-blue-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-600 touch-manipulation"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs -z-10 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200/90 px-5 py-5 sm:px-6 sm:py-6 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto md:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-brand-blue-600 bg-brand-blue-50/80 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-600 active:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-brand-blue-600 rounded-xl hover:bg-brand-blue-700 active:bg-brand-blue-800 transition-colors shadow-sm"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
