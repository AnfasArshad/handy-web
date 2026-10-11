import React from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, Zap, Server, Code } from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[420px] lg:max-w-none mx-auto sm:aspect-[4/3] lg:aspect-square flex items-center justify-center select-none py-2 sm:py-0">
      {/* Background ambient gradient glow */}
      <div className="absolute w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-brand-blue-500/10 blur-3xl -top-6 -left-6 pointer-events-none" />
      <div className="absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-brand-teal-500/15 blur-3xl -bottom-6 -right-6 pointer-events-none" />

      {/* Main Glassmorphic/Card Structure */}
      <div className="relative w-full max-w-[390px] rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl p-4 sm:p-7 backdrop-blur-xs transition-transform duration-300 hover:shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium">
            <Code className="w-3 h-3 text-brand-teal-500" />
            <span>handysof.platform</span>
          </div>
        </div>

        {/* Central Geometric Canvas */}
        <div className="relative h-52 sm:h-64 flex items-center justify-center rounded-xl bg-gradient-to-b from-slate-50/80 via-brand-teal-50/20 to-slate-50/50 border border-slate-100/90 p-3 sm:p-4 overflow-hidden">
          {/* Subtle blueprint dot grid */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(#00608E 1.2px, transparent 1.2px), radial-gradient(#00A69C 1.2px, transparent 1.2px)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px',
            }}
          />

          {/* Abstract architectural connector lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="20" y1="40" x2="140" y2="40" stroke="#00608E" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="140" y1="40" x2="200" y2="100" stroke="#00A69C" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="200" y1="100" x2="320" y2="100" stroke="#00608E" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="40" y1="200" x2="160" y2="200" stroke="#00A69C" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="160" y1="200" x2="220" y2="150" stroke="#00608E" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Central Authentic Logo Emblem */}
          <div className="relative w-24 h-36 sm:w-36 sm:h-52 z-10 transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo-icon.png"
              alt="HandySof Identity Visual"
              fill
              priority
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* Interactive geometric node tags */}
          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-xs px-2 sm:px-2.5 py-1 rounded-md border border-slate-200/80 shadow-2xs text-[9px] sm:text-[10px] font-mono text-slate-600 flex items-center gap-1 sm:gap-1.5">
            <Server className="w-3 h-3 text-brand-blue-600" />
            <span>Reliable Architecture</span>
          </div>

          <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-white/90 backdrop-blur-xs px-2 sm:px-2.5 py-1 rounded-md border border-slate-200/80 shadow-2xs text-[9px] sm:text-[10px] font-mono text-slate-600 flex items-center gap-1 sm:gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>System Active</span>
          </div>
        </div>

        {/* Feature Micro-Badges */}
        <div className="mt-3.5 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-50/80 border border-slate-100 text-slate-700">
            <Zap className="w-3.5 h-3.5 text-brand-teal-500 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-medium leading-tight">Modern Web Solutions</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg bg-slate-50/80 border border-slate-100 text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-600 shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-medium leading-tight">Enterprise Quality</span>
          </div>
        </div>
      </div>

      {/* Floating accent badge on top right */}
      <div className="hidden sm:flex absolute -top-2 -right-3 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-slate-100 items-center gap-2 text-xs font-semibold text-brand-blue-900 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-brand-teal-500" />
        Built for Real-World Needs
      </div>

      {/* Floating accent badge on bottom left */}
      <div className="hidden sm:flex absolute -bottom-2 -left-3 bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-slate-100 items-center gap-2 text-xs font-semibold text-slate-700">
        <Layers className="w-3.5 h-3.5 text-brand-teal-500" />
        Clean & Modular Design
      </div>
    </div>
  );
}
