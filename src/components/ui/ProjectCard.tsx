import React from 'react';
import Image from 'next/image';
import { ProjectItem } from '@/types';
import { CheckCircle2, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-teal-500/50 transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-5 sm:p-8 lg:p-10">
        {/* Left: Project Visual / Logo */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-brand-teal-50/20 to-brand-blue-50/30 rounded-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 transition-transform duration-300 group-hover:scale-105">
            {project.logoSrc ? (
              <Image
                src={project.logoSrc}
                alt={project.logoAlt || project.title}
                fill
                sizes="(max-width: 640px) 128px, 176px"
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-brand-blue-900 bg-white rounded-xl shadow-sm">
                {project.title}
              </div>
            )}
          </div>
          <span className="mt-3.5 sm:mt-4 text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide uppercase text-center">
            Product In Active Development
          </span>
        </div>

        {/* Right: Content details */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-3">
              {project.badge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/70">
                  <Clock className="w-3.5 h-3.5" />
                  {project.badge}
                </span>
              )}
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue-900 tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-slate-600 font-medium text-base sm:text-lg mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5 sm:mb-6">
              {project.description}
            </p>

            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Capabilities
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 text-xs text-slate-500 border-t border-slate-100">
            <span className="flex items-center gap-1.5 font-medium text-slate-600">
              <span className="w-2 h-2 rounded-full bg-brand-teal-500 animate-pulse shrink-0" />
              Designed & Engineered by HandySof
            </span>
            <span className="text-slate-400">
              Stay tuned for the official launch
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
