import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/data/projects';
import { Sparkles } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Portfolio & Products"
          title="What We're Building"
          subtitle="A look at the dedicated digital platforms and software systems our engineering team is actively building."
        />

        {/* Project cards container - mapped from data so more projects can easily be added */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note on upcoming works */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium bg-slate-50 text-slate-600 border border-slate-200 max-w-full text-center">
            <Sparkles className="w-3.5 h-3.5 text-brand-teal-500 shrink-0" />
            <span>More client and internal software projects will be announced soon.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
