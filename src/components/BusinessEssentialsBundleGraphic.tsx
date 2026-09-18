import React from 'react';

export const BusinessEssentialsBundleGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[190px] sm:min-h-[220px] flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* Ambient soft glow */}
      <div className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/10 via-amber-500/10 to-[#EA3A19]/15 blur-2xl pointer-events-none" />

      {/* Stationery Layout Stage */}
      <div className="relative w-[280px] sm:w-[320px] h-[190px] sm:h-[210px] flex items-center justify-center">
        
        {/* ========================================================================= */}
        {/* 1. LAYER 1: A4 Corporate Letterhead (Backdrop)                            */}
        {/* ========================================================================= */}
        <div
          className="absolute left-4 top-2 w-[150px] sm:w-[170px] h-[180px] sm:h-[195px] bg-white rounded-lg border border-neutral-200/90 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12)] p-2.5 flex flex-col justify-between transform -rotate-3 transition-transform duration-300 hover:-rotate-1"
          style={{ transformOrigin: 'bottom left' }}
        >
          {/* Letterhead Header Bar */}
          <div className="border-b border-neutral-200/80 pb-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-xs bg-[#EA3A19] flex items-center justify-center text-white font-mono text-[5px] font-bold">
                  HS
                </div>
                <span className="text-[6px] font-mono font-bold tracking-wider text-neutral-800">
                  HENG SING PRESS
                </span>
              </div>
              <span className="text-[4.5px] font-mono text-neutral-400">SARAWAK</span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#EA3A19] via-neutral-300 to-transparent mt-1" />
          </div>

          {/* Letterhead Body Lines Simulation */}
          <div className="space-y-1.5 py-1 px-0.5 opacity-60">
            <div className="w-1/3 h-1 bg-neutral-300 rounded-full" />
            <div className="w-full h-0.5 bg-neutral-200 rounded-full" />
            <div className="w-5/6 h-0.5 bg-neutral-200 rounded-full" />
            <div className="w-4/5 h-0.5 bg-neutral-200 rounded-full" />
            <div className="w-full h-0.5 bg-neutral-200 rounded-full" />
            <div className="w-3/4 h-0.5 bg-neutral-200 rounded-full" />
          </div>

          {/* Letterhead Footer */}
          <div className="pt-1 border-t border-neutral-100 flex justify-between items-center text-[4.5px] font-mono text-neutral-400">
            <span>A4 100GSM WOODFREE</span>
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="w-1 h-1 rounded-full bg-[#EA3A19]" />
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. LAYER 2: NCR Duplicate Invoice / Receipt Book                          */}
        {/* ========================================================================= */}
        <div
          className="absolute right-3 top-3 w-[120px] sm:w-[136px] h-[145px] sm:h-[160px] bg-amber-50/70 rounded-md border border-amber-200/90 shadow-[0_14px_30px_-8px_rgba(0,0,0,0.15)] overflow-hidden transform rotate-6 transition-transform duration-300 hover:rotate-4"
          style={{ transformOrigin: 'bottom right' }}
        >
          {/* Book Binding Spine Tape */}
          <div className="w-full h-3.5 bg-neutral-800 flex items-center justify-between px-2 text-[5px] font-mono text-neutral-300">
            <span className="text-amber-400 font-bold">NCR INVOICE</span>
            <span className="text-[4px] tracking-widest text-neutral-400">#004821</span>
          </div>

          {/* Perforation Line Indicator */}
          <div className="w-full border-b border-dashed border-amber-300/80 my-1" />

          {/* Table Grid Mockup */}
          <div className="p-1.5 space-y-1">
            <div className="grid grid-cols-4 gap-0.5 text-[4px] font-mono text-neutral-500 bg-amber-100/60 p-0.5 rounded">
              <span>QTY</span>
              <span className="col-span-2">DESCRIPTION</span>
              <span className="text-right">TOTAL</span>
            </div>
            <div className="h-0.5 bg-amber-200/60 rounded w-full" />
            <div className="h-0.5 bg-amber-200/60 rounded w-5/6" />
            <div className="h-0.5 bg-amber-200/60 rounded w-4/5" />
          </div>

          {/* Carbonless Duplicate Sheet Peeking */}
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-amber-300/70 to-transparent flex items-end justify-end p-1">
            <span className="text-[4.5px] font-mono font-bold text-amber-900">2-PLY</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. LAYER 3: Corporate DL Envelope with Flap & Sarawak Stamp               */}
        {/* ========================================================================= */}
        <div
          className="absolute left-10 bottom-3 w-[165px] sm:w-[185px] h-[90px] sm:h-[100px] bg-neutral-50 rounded-lg border border-neutral-300/90 shadow-[0_16px_36px_-8px_rgba(0,0,0,0.18)] p-2.5 flex flex-col justify-between transform -rotate-1 transition-transform duration-300 hover:rotate-0"
        >
          {/* Envelope Top Edge & Flap Simulation */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#EA3A19]/15 flex items-center justify-center text-[#EA3A19] text-[6px] font-black">
                HS
              </div>
              <div className="leading-tight">
                <p className="text-[5px] font-mono font-bold text-neutral-800">HENG SING BROTHERS</p>
                <p className="text-[4px] font-mono text-neutral-400">Jalan Chan Bee Kiew, Kuching</p>
              </div>
            </div>

            {/* Sarawak Postage Stamp Mockup */}
            <div className="w-5 h-6 rounded-xs border border-dashed border-[#EA3A19]/60 bg-amber-50 flex flex-col items-center justify-center text-[4px] font-mono text-[#EA3A19] font-bold">
              <span>MY</span>
              <span className="text-[3.5px] text-neutral-500">POS</span>
            </div>
          </div>

          {/* Address Box Window Mockup */}
          <div className="w-2/3 h-5 bg-white rounded border border-neutral-200/80 px-1.5 py-0.5 flex flex-col justify-center space-y-0.5 shadow-2xs">
            <div className="w-3/4 h-0.5 bg-neutral-300 rounded" />
            <div className="w-1/2 h-0.5 bg-neutral-200 rounded" />
          </div>

          {/* Envelope Spec Line */}
          <div className="flex justify-between items-center text-[4.5px] font-mono text-neutral-400 border-t border-neutral-200/60 pt-0.5">
            <span>DL SIZE (220 &times; 110 MM)</span>
            <span className="text-emerald-600 font-semibold">PEEL &amp; SEAL</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. LAYER 4: Foreground Premium Business Cards (Stack + Angled Card)       */}
        {/* ========================================================================= */}
        <div
          className="absolute right-5 bottom-2 w-[115px] sm:w-[126px] h-[66px] sm:h-[72px] bg-white rounded-md border border-neutral-200/90 shadow-[0_20px_40px_-6px_rgba(0,0,0,0.22)] p-2 flex flex-col justify-between transform rotate-4 transition-transform duration-300 hover:rotate-2 hover:scale-105"
        >
          {/* Card Dynamic Specular Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none rounded-md" />

          {/* Card Top: Logo & Registration Dot */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-xs bg-[#EA3A19] flex items-center justify-center text-white font-mono text-[5px] font-black">
                HS
              </div>
              <span className="text-[5.5px] font-mono font-bold tracking-tight text-neutral-900">
                HENG SING
              </span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span className="w-1 h-1 rounded-full bg-[#EA3A19]" />
            </div>
          </div>

          {/* Card Middle: Name & Title */}
          <div className="relative z-10 space-y-0.5">
            <p className="text-[6.5px] font-display font-bold text-neutral-900 leading-none">
              Director / Manager
            </p>
            <p className="text-[4.5px] font-mono text-neutral-500">
              Commercial Printing &bull; Kuching
            </p>
          </div>

          {/* Card Bottom: Finish Spec Pill */}
          <div className="relative z-10 flex items-center justify-between border-t border-neutral-100 pt-0.5 text-[4.5px] font-mono">
            <span className="text-neutral-500">+60 13-328 2828</span>
            <span className="text-[#EA3A19] font-bold">350GSM &bull; UV</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Floating Bundle Badge Pill                                                */}
        {/* ========================================================================= */}
        <div className="absolute -top-1 right-2 px-2.5 py-1 rounded-full bg-neutral-900 text-white border border-neutral-700 shadow-md flex items-center gap-1.5 text-[9px] font-mono z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EA3A19] animate-pulse" />
          <span className="font-bold">ALL-IN-ONE BUNDLE</span>
        </div>

      </div>
    </div>
  );
};
