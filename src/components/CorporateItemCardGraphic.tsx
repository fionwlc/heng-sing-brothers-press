import React from 'react';

export const CorporateItemCardGraphic: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'Annual Reports':
      return (
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[#121a29] to-[#0c121c] border border-neutral-700/80 p-2 flex items-center justify-center relative overflow-hidden group-hover:border-amber-400/50 transition-colors">
          {/* Subtle glow */}
          <div className="absolute w-20 h-20 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
          
          {/* 3D Mini Book */}
          <div className="relative w-28 h-20 rounded-r-md rounded-l-xs bg-[#19273f] border-r border-y border-[#344d77] shadow-md p-1.5 flex flex-col justify-between transform -rotate-3">
            {/* Spine */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0d1421] border-r border-neutral-700" />
            {/* Pages block */}
            <div className="absolute -right-1 top-0.5 bottom-0.5 w-1 bg-neutral-200 rounded-r-xs" />
            {/* Ribbon */}
            <div className="absolute right-3 -bottom-1.5 w-1.5 h-3 bg-[#C83B25]" />

            <div className="pl-2 flex justify-between items-center text-[5px] font-mono text-amber-300">
              <span>AGM 2025</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
            </div>
            <div className="pl-2 space-y-0.5">
              <span className="text-[6.5px] font-display font-black text-white block leading-tight">
                ANNUAL REPORT
              </span>
              <div className="w-8 h-0.5 bg-amber-400/80 rounded" />
            </div>
            <div className="pl-2 text-[4.5px] font-mono text-neutral-400">
              PUR BINDING &bull; GOLD FOIL
            </div>
          </div>
        </div>
      );

    case 'Journals & Booklets':
      return (
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-300 p-2 flex items-center justify-center relative overflow-hidden group-hover:border-neutral-400 transition-colors">
          {/* Saddle stitch booklet */}
          <div className="relative w-28 h-20 rounded-md bg-white border border-neutral-300 shadow-sm p-2 flex flex-col justify-between transform rotate-2">
            {/* Staples */}
            <div className="absolute left-0.5 top-3 w-0.5 h-2 bg-neutral-500 rounded" />
            <div className="absolute left-0.5 bottom-3 w-0.5 h-2 bg-neutral-500 rounded" />

            <div className="border-b border-neutral-200 pb-0.5 flex justify-between items-center text-[5px] font-mono text-neutral-500">
              <span>VOL. 34</span>
              <span className="text-[#C83B25] font-bold">ISSN 2289</span>
            </div>
            <div className="space-y-1">
              <div className="w-12 h-1 bg-neutral-800 rounded" />
              <div className="w-full h-0.5 bg-neutral-300 rounded" />
              <div className="w-4/5 h-0.5 bg-neutral-300 rounded" />
            </div>
            <div className="flex justify-between text-[4.5px] font-mono text-neutral-400 pt-0.5 border-t border-neutral-100">
              <span>SARAWAK RESEARCH</span>
              <span className="text-emerald-600 font-bold">CERTIFIED</span>
            </div>
          </div>
        </div>
      );

    case 'Corporate Gifts':
      return (
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[#1c1917] to-[#0c0a09] border border-neutral-800 p-2 flex items-center justify-center gap-3 relative overflow-hidden group-hover:border-[#C83B25]/50 transition-colors">
          {/* Flask */}
          <div className="w-7 h-16 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900 border border-neutral-600 flex flex-col items-center justify-between py-1 shadow-md">
            <div className="w-5 h-2 rounded-t bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full border border-neutral-400 flex items-center justify-center text-[4px] text-white font-bold">
              HS
            </div>
            <div className="w-5 h-1 bg-neutral-950 rounded-b" />
          </div>

          {/* PU Diary */}
          <div className="w-14 h-18 rounded-r-md rounded-l-xs bg-[#57190f] border-r border-y border-[#8a2a1b] shadow-md p-1 flex flex-col justify-between">
            <div className="text-center pt-0.5">
              <span className="text-[5px] font-bold text-amber-300 block">2025</span>
              <span className="text-[4px] font-mono text-amber-200">PLANNER</span>
            </div>
            <div className="w-full h-1 bg-amber-400/40 rounded-full" />
            <span className="text-[4px] font-mono text-amber-200/80 text-center">DEBOSSED</span>
          </div>

          {/* Pen */}
          <div className="w-1.5 h-16 rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-600 border border-amber-600 shadow" />
        </div>
      );

    case 'Calendars & Diaries':
      return (
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-200 border border-neutral-300 p-2 flex items-center justify-center relative overflow-hidden group-hover:border-neutral-400 transition-colors">
          {/* Desk Tent Calendar Mockup */}
          <div className="relative w-28 h-18 bg-white rounded-md border border-neutral-300 shadow-md p-1.5 flex flex-col justify-between">
            {/* Spiral binding rings at top */}
            <div className="flex justify-around px-1 -mt-2.5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-2 bg-neutral-800 rounded-full shadow-xs" />
              ))}
            </div>

            <div className="flex justify-between items-center text-[5px] font-mono border-b border-neutral-200 pb-0.5 mt-1">
              <span className="font-bold text-[#C83B25]">JANUARY 2025</span>
              <span className="text-neutral-400">DESK TENT</span>
            </div>

            {/* Calendar grid dots */}
            <div className="grid grid-cols-7 gap-0.5 py-0.5">
              {[...Array(21)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-2xs flex items-center justify-center text-[4px] font-mono ${
                    i % 7 === 0 ? 'text-red-500 font-bold' : 'text-neutral-600'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="text-[4px] font-mono text-neutral-400 text-right">
              260GSM ART CARD &bull; MATTE
            </div>
          </div>
        </div>
      );

    case 'Business Stationery':
      return (
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-300 p-2 flex items-center justify-center relative overflow-hidden group-hover:border-neutral-400 transition-colors">
          <div className="relative w-32 h-20 flex items-center justify-center">
            {/* Letterhead behind */}
            <div className="absolute left-2 top-0 w-20 h-18 bg-white rounded border border-neutral-200 shadow-xs p-1 space-y-0.5 transform -rotate-3">
              <div className="w-8 h-0.5 bg-[#C83B25] rounded" />
              <div className="w-full h-0.5 bg-neutral-200 rounded" />
              <div className="w-5/6 h-0.5 bg-neutral-200 rounded" />
              <div className="w-4/5 h-0.5 bg-neutral-200 rounded" />
            </div>

            {/* Envelope in front */}
            <div className="absolute right-1 bottom-0 w-24 h-12 bg-neutral-50 rounded border border-neutral-300 shadow-md p-1 flex flex-col justify-between transform rotate-2">
              <div className="flex justify-between items-center text-[4px] font-mono">
                <span className="font-bold text-neutral-800">DL ENVELOPE</span>
                <span className="w-2.5 h-3 border border-dashed border-[#C83B25] text-[#C83B25] flex items-center justify-center text-[3px]">
                  MY
                </span>
              </div>
              <div className="w-12 h-1.5 bg-white border border-neutral-200 rounded px-0.5 flex items-center">
                <div className="w-8 h-0.5 bg-neutral-300 rounded" />
              </div>
              <span className="text-[3.5px] font-mono text-neutral-400">PEEL &amp; SEAL</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
