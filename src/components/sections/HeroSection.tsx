import React from 'react';
import Button from '@/components/ui/Button';
import HeroGraphic from './HeroGraphic';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Small status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-brand-blue-50 text-brand-blue-800 border border-brand-blue-200/70 mb-5 sm:mb-6 shadow-2xs max-w-full text-center">
              <span className="w-2 h-2 rounded-full bg-brand-teal-500 animate-pulse shrink-0" />
              <span>Software Development & Digital Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-blue-900 leading-[1.2] sm:leading-[1.15]">
              Building Software That{' '}
              <span className="gradient-text">Makes a Difference.</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              HandySof creates modern, reliable and user-friendly digital solutions
              designed around real-world needs.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                asLink
                href="#services"
                icon={<ArrowRight className="w-4 h-4" />}
                className="group w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                size="md"
                asLink
                href="#contact"
                icon={<MessageSquare className="w-4 h-4 text-brand-teal-600" />}
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>

            {/* Simple Trust / Value reassurance bar (no exaggerated claims) */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/70 w-full flex flex-wrap items-center justify-center lg:justify-start gap-y-2.5 gap-x-5 sm:gap-x-8 text-[11px] sm:text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
                Custom Software Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
                Modern Web Applications
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal-500 shrink-0" />
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
