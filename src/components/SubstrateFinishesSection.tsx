import React, { useState } from 'react';
import { Sparkles, Layers, FileSpreadsheet, Check, ArrowRight } from 'lucide-react';

interface SubstrateItem {
  id: string;
  name: string;
  maker: string;
  weight: string;
  texture: string;
  color: string;
  idealFor: string;
}

interface FinishItem {
  id: string;
  name: string;
  effect: string;
  tag: string;
  accent: string;
}

export const SubstrateFinishesSection: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [selectedSubstrate, setSelectedSubstrate] = useState<string>('munken');
  const [selectedFinish, setSelectedFinish] = useState<string>('gold-foil');

  const substrates: SubstrateItem[] = [
    {
      id: 'munken',
      name: 'Munken Lynx Pure Rough',
      maker: 'Arctic Paper (Sweden)',
      weight: '300 gsm',
      texture: 'Tactile Natural Uncoated',
      color: '#F8F6F0',
      idealFor: 'Art monographs, architectural lookbooks, high-end identity'
    },
    {
      id: 'fedrigoni',
      name: 'Fedrigoni Materica Clay',
      maker: 'Fedrigoni 1888 (Italy)',
      weight: '360 gsm',
      texture: 'Cotton & Recycled Fiber Flecked',
      color: '#D8CFC4',
      idealFor: 'Luxury packaging cartons, wine labels, editorial covers'
    },
    {
      id: 'colorplan',
      name: 'Colorplan Ebony Black',
      maker: 'G.F Smith (UK)',
      weight: '350 gsm',
      texture: 'Pure Solid-Core Dyed Black',
      color: '#1A1A1A',
      idealFor: 'Opaque white ink, hot foil stamping, duplexed VIP invitations'
    },
    {
      id: 'hahnemuhle',
      name: 'Hahnemühle Photo Rag Cotton',
      maker: 'Hahnemühle (Germany)',
      weight: '308 gsm',
      texture: '100% Archival Rag Velvet',
      color: '#FCFBF7',
      idealFor: 'Museum limited editions, fine-art giclée portfolios'
    }
  ];

  const finishes: FinishItem[] = [
    {
      id: 'gold-foil',
      name: 'Curz Luxor 24K Hot Foil',
      effect: 'Micro-etched brass die hot stamped at 130°C with mirror light reflection',
      tag: 'Metallic Stamping',
      accent: '#FFD700'
    },
    {
      id: 'spot-uv',
      name: 'Scodix 3D Liquid Spot UV',
      effect: 'Raised tactile crystal polymer rising 120 microns above velvet matte lamination',
      tag: 'Raised Tactile Gloss',
      accent: '#00E5FF'
    },
    {
      id: 'blind-deboss',
      name: 'Sculptural Multi-Level Deboss',
      effect: 'Deep precision 3-dimensional compression indenting paper fibers without ink',
      tag: 'Sculptural Depth',
      accent: '#E2E8F0'
    },
    {
      id: 'edge-gilding',
      name: 'Hand-Polished Mirror Edge Gilding',
      effect: 'Book or card block sanded, beveled and gilded with mirror foil edges',
      tag: 'Edge Artisan Craft',
      accent: '#FF007F'
    }
  ];

  const activeSub = substrates.find((s) => s.id === selectedSubstrate) || substrates[0];
  const activeFin = finishes.find((f) => f.id === selectedFinish) || finishes[0];

  return (
    <section id="substrates" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Tactile Physical Dimension</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
          Curated Substrates &amp; Artisan Finishes
        </h2>
        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          The substrate is the canvas; the finish is the sensory touch. Pair European fine papers with precision thermal foil, raised polymer, and sculpted debossing.
        </p>
      </div>

      {/* Interactive Substrate & Finish Preview Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Substrate Selector */}
        <div className="lg:col-span-4 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-4">
              Step 1: Select Paper Stock
            </span>
            <div className="space-y-3">
              {substrates.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubstrate(sub.id)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    selectedSubstrate === sub.id
                      ? 'bg-neutral-800 border-cyan-400 shadow-md ring-1 ring-cyan-400/30'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-lg border border-black/20 shrink-0 shadow-sm"
                    style={{ backgroundColor: sub.color }}
                  />
                  <div className="min-w-0">
                    <h5 className="font-display font-bold text-xs text-white truncate">{sub.name}</h5>
                    <span className="text-[10px] font-mono text-neutral-400 block">{sub.weight} &bull; {sub.maker}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
            Over 280+ specialty mill papers in permanent pressroom inventory.
          </div>
        </div>

        {/* Center: Live Tactile Simulation Card */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="h-full rounded-3xl p-6 sm:p-8 border border-neutral-700 bg-neutral-900/90 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Ambient shine reflection */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono text-neutral-400">COMBINED SPECIFICATION</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AVAILABLE IN PRINTPROOF
                </span>
              </div>

              {/* Physical Card Simulation */}
              <div
                className="w-full h-56 rounded-2xl p-6 relative flex flex-col justify-between shadow-2xl border border-black/10 overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: activeSub.color,
                  color: activeSub.id === 'colorplan' ? '#FFFFFF' : '#111111'
                }}
              >
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                {/* Simulated Foil / Spot UV Logo on the paper */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-70 block">
                      CHROMAPRESS SAMPLE
                    </span>
                    <span className="font-display font-black text-xl tracking-tight block">
                      SPECTRUM &bull; FOLIO
                    </span>
                  </div>

                  {/* Finish Stamp Badge */}
                  <div
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold shadow-lg flex items-center gap-1"
                    style={{
                      backgroundColor: activeFin.accent,
                      color: activeFin.id === 'blind-deboss' ? '#000000' : '#000000'
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>{activeFin.tag}</span>
                  </div>
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-xs font-mono font-semibold block">{activeSub.name}</span>
                  <span className="text-[11px] opacity-80 block">{activeFin.name}</span>
                  <span className="text-[10px] font-mono opacity-60 block">Plate Precision &plusmn;0.01mm</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 space-y-2">
              <span className="text-xs font-mono text-neutral-300 block">Recommended Application:</span>
              <p className="text-xs text-neutral-400 leading-relaxed">{activeSub.idealFor}</p>

              <button
                onClick={onOpenEstimator}
                className="w-full mt-3 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-cyan-400 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Request Physical Paper Sample Kit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Finishes Selector */}
        <div className="lg:col-span-4 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-4">
              Step 2: Select Specialty Finish
            </span>
            <div className="space-y-3">
              {finishes.map((fin) => (
                <button
                  key={fin.id}
                  onClick={() => setSelectedFinish(fin.id)}
                  className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                    selectedFinish === fin.id
                      ? 'bg-neutral-800 border-cyan-400 shadow-md ring-1 ring-cyan-400/30'
                      : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: `${fin.accent}25`, border: `1px solid ${fin.accent}` }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fin.accent }} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-display font-bold text-xs text-white truncate">{fin.name}</h5>
                    <span className="text-[10px] text-neutral-400 block line-clamp-1">{fin.effect}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-400">
            Inline camera registration ensures foils align to &plusmn;0.05mm register marks.
          </div>
        </div>
      </div>
    </section>
  );
};
