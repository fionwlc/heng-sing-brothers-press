import React, { useState } from 'react';
import { Leaf, Droplets, Sun, Recycle, CheckCircle2, ArrowRight } from 'lucide-react';

export const EcoLabSection: React.FC<{ onOpenEstimator: () => void }> = ({ onOpenEstimator }) => {
  const [printVolume, setPrintVolume] = useState<number>(5000);

  // Environmental impact savings formula
  const petroleumSavedKg = ((printVolume / 1000) * 1.85).toFixed(1);
  const carbonSequesteredKg = ((printVolume / 1000) * 4.2).toFixed(1);
  const waterSavedLiters = Math.round((printVolume / 1000) * 620);

  return (
    <section id="ecolab" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-neutral-900/90 border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Subtle green ambient light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
              <Leaf className="w-3.5 h-3.5" />
              <span>EcoLab Circular Printing Standard</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight">
              Carbon-Negative Algae Inks &amp; Closed-Loop Presses
            </h2>

            <p className="text-neutral-300 text-base leading-relaxed">
              Petroleum-derived carbon black has dominated commercial printing for 150 years. In our EcoLab, we have replaced fossil fuel black with{' '}
              <strong className="text-emerald-400 font-semibold">Living Ink Algae Black</strong>, coupled with 100% vegetable soy carriers and chemistry-free thermal CTP plates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-start gap-3">
                <Recycle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Processless Kodak Plates</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Eliminates 100% of chemical developer and acid rinse baths.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-start gap-3">
                <Droplets className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Vegetable Soy &amp; Flax Inks</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Volatile Organic Compounds (VOCs) reduced by 98.4%.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-start gap-3">
                <Sun className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Solar-Powered Facility</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">420 kW rooftop solar array powers all Heidelberg presses.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-white text-sm">FSC Recycled &amp; Agri-Waste</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Tree-free papers using hemp, wheat straw, and cotton rags.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Environmental Savings Calculator */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 shadow-xl space-y-5">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
                <h4 className="font-display font-bold text-white text-sm">
                  Interactive Ecological Ledger
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">LIVE OFFSET ESTIMATE</span>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <span className="text-neutral-300">Projected Run Quantity:</span>
                  <span className="text-emerald-400 font-bold">{printVolume.toLocaleString()} units</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={printVolume}
                  onChange={(e) => setPrintVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Metrics Output */}
              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Petroleum Inks Displaced</span>
                    <span className="text-xs text-neutral-200">Replaced with botanical pigments</span>
                  </div>
                  <span className="font-mono text-base font-bold text-emerald-400">{petroleumSavedKg} kg</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Atmospheric CO₂ Sequestered</span>
                    <span className="text-xs text-neutral-200">Algae spirulina biosequestration</span>
                  </div>
                  <span className="font-mono text-base font-bold text-cyan-400">{carbonSequesteredKg} kg CO₂</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Freshwater Conserved</span>
                    <span className="text-xs text-neutral-200">Waterless dampening loop</span>
                  </div>
                  <span className="font-mono text-base font-bold text-blue-400">{waterSavedLiters} Liters</span>
                </div>
              </div>

              <button
                onClick={onOpenEstimator}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <span>Order Certified Eco-Run With Proof</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
