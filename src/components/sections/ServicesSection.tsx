import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { SERVICES } from '@/data/services';
import { Globe, Code2, Layers, ShieldCheck, Check } from 'lucide-react';

const iconMap = {
  Globe: Globe,
  Code: Code2,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="What We Do"
          subtitle="We craft digital solutions engineered for reliability, performance, and everyday usability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-brand-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with subtle hover transition */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-teal-50 group-hover:text-brand-teal-600 border border-brand-blue-100 group-hover:border-brand-teal-200 transition-colors duration-200">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-brand-blue-900 group-hover:text-brand-blue-700 transition-colors mb-2 sm:mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-4 sm:pt-5 border-t border-slate-100 space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-brand-teal-50 text-brand-teal-600 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Small subtle callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            Have a custom requirement?{' '}
            <a
              href="#contact"
              className="text-brand-blue-600 font-semibold hover:text-brand-teal-600 underline underline-offset-4 transition-colors"
            >
              Discuss your project with us &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
