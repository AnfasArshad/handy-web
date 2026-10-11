import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Target, Layers, HeartHandshake } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Practical Solutions',
      description:
        'We focus on solving actual real-world problems with direct, effective software architecture rather than unnecessary complexity.',
      icon: Target,
    },
    {
      title: 'Simple & Scalable',
      description:
        'Every line of code and database structure is crafted for clarity, maintainability, and seamless future growth.',
      icon: Layers,
    },
    {
      title: 'Client & User Centric',
      description:
        'We work closely with clients to truly understand user needs, delivering tools that make daily operations smoother.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Us"
          title="Who We Are"
        />

        {/* Core Statement Box */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 font-normal leading-relaxed">
            HandySof is a software development team passionate about turning ideas
            into practical digital solutions. We focus on creating software that is
            simple, scalable and built around the needs of our users and clients.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-5 sm:p-7 border border-slate-200/60 hover:border-brand-teal-500/40 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center mb-5 border border-brand-teal-200/50">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-brand-blue-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
