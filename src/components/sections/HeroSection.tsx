import React from 'react';
import Button from '@/components/ui/Button';
import HeroGraphic from './HeroGraphic';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white"
    >
      {/* Decorative background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Small status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-blue-50 text-brand-blue-800 border border-brand-blue-200/70 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-teal-500 animate-pulse" />
              Software Development & Digital Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-blue-900 leading-[1.15]">
              Building Software That Makes a Difference.
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              HandySof creates modern, reliable and user-friendly digital solutions
              designed around real-world needs.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                asLink
                href="#services"
                icon={<ArrowRight className="w-4 h-4" />}
                className="group"
              >
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                size="lg"
                asLink
                href="#contact"
                icon={<MessageSquare className="w-4 h-4 text-brand-teal-600" />}
              >
                Contact Us
              </Button>
            </div>

            {/* Simple Trust / Value reassurance bar (no exaggerated claims) */}
            <div className="mt-12 pt-8 border-t border-slate-200/70 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-8 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500" />
                Custom Software Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500" />
                Modern Web Applications
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500" />
                Scalable Digital Solutions
              </span>
            </div>
          </div>

          {/* Right Column: Visual / Graphic */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
