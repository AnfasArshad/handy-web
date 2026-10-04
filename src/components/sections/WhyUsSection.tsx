import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { WHY_POINTS } from '@/data/why-us';
import { Users, Cpu, TrendingUp } from 'lucide-react';

const iconMap = {
  Users: Users,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
};

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Why HandySof"
          subtitle="Our engineering philosophy centers on clarity, practical utility, and lasting technological value."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {WHY_POINTS.map((point, index) => {
            const Icon = iconMap[point.iconName];
            return (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-brand-teal-500/50 transition-all duration-200 flex flex-col items-start"
              >
                {/* Step / Number accent badge */}
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center border border-brand-blue-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold font-mono text-slate-200">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-blue-900 mb-3">
                  {point.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
