import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Cpu,
  FileCheck,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  CheckCircle,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServiceCategoryCardProps {
  category: ServiceCategory;
  index: number;
  isActive: boolean;
  onSelectService: (serviceId: string) => void;
  onOpenEstimatorFor: (serviceId: string) => void;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  category,
  index,
  isActive,
  onSelectService,
  onOpenEstimatorFor
}) => {
  const [selectedPlateView, setSelectedPlateView] = useState<'composite' | 'c' | 'm' | 'y' | 'k'>('composite');
  const [activeTab, setActiveTab] = useState<'products' | 'equipment' | 'substrates'>('products');
  const [tactileShine, setTactileShine] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  const handleMouseMoveOnPreview = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTactileShine({ x, y });
  };

  // CMYK percentages for badges
  const { c, m, y, k } = category.cmykValues;

  return (
    <div
      id={`service-${category.id}`}
      className={`relative rounded-3xl border transition-all duration-500 overflow-hidden ${
        isActive
          ? 'bg-neutral-900/90 border-neutral-700 shadow-[0_0_40px_rgba(0,0,0,0.8)] ring-1 ring-white/10'
          : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700/60'
      }`}
    >
      {/* Dynamic top ambient glow matching category CMYK dominance */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500"
        style={{ backgroundColor: category.accentColor }}
      />

      {/* Main Container */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Top Header: Badge, Category Index, CMYK Ink Distribution Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 border border-neutral-700">
              0{index + 1}
            </span>
            <span
              className="text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${category.accentColor}15`,
                color: category.accentColor,
                border: `1px solid ${category.accentColor}30`
              }}
            >
              {category.badge}
            </span>
          </div>

          {/* Live CMYK Ink Flow Ratio Strip for this Service */}
          <div className="flex items-center gap-2 bg-neutral-950 px-3 py-1.5 rounded-lg border border-neutral-800 text-xs font-mono">
            <span className="text-neutral-400 text-[10px] uppercase">Process Mix:</span>
            <span className="text-[#00E5FF] font-bold">C:{c}%</span>
            <span className="text-[#FF007F] font-bold">M:{m}%</span>
            <span className="text-[#FFEB3B] font-bold">Y:{y}%</span>
            <span className="text-neutral-300 font-bold">K:{k}%</span>
          </div>
        </div>

        {/* Title, Tagline and Description */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <p className="text-sm sm:text-base text-cyan-400/90 font-mono">
              {category.tagline}
            </p>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {category.fullDesc}
            </p>

            {/* Quick Specs Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Max Sheet Size</span>
                <span className="text-xs font-mono font-semibold text-neutral-200 block truncate">
                  {category.specs.maxSheetSize}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Substrate Weights</span>
                <span className="text-xs font-mono font-semibold text-neutral-200 block truncate">
                  {category.specs.stockRange}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Plate Resolution</span>
                <span className="text-xs font-mono font-semibold text-cyan-400 block truncate">
                  {category.specs.resolution}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Press Velocity</span>
                <span className="text-xs font-mono font-semibold text-neutral-200 block truncate">
                  {category.specs.productionSpeed}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Drying System</span>
                <span className="text-xs font-mono font-semibold text-neutral-200 block truncate">
                  {category.specs.dryingTech}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Standard Turnaround</span>
                <span className="text-xs font-mono font-semibold text-emerald-400 block truncate">
                  {category.specs.standardTurnaround}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenEstimatorFor(category.id)}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Calculate {category.name.split(' ')[0]} Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Plate Separation & Sensory Finish Simulator */}
          <div className="lg:col-span-5 space-y-4">
            {/* Interactive Plate Inspector Widget */}
            <div className="bg-neutral-950/90 border border-neutral-800 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  Inspect 4-Color Plate Separation
                </span>
                <span className="text-[10px] font-mono text-neutral-400">CLICK TO ISOLATE</span>
              </div>

              {/* Selector Buttons */}
              <div className="grid grid-cols-5 gap-1 mb-3">
                <button
                  onClick={() => setSelectedPlateView('composite')}
                  className={`py-1 text-[10px] font-mono rounded transition-all ${
                    selectedPlateView === 'composite'
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  CMYK
                </button>
                <button
                  onClick={() => setSelectedPlateView('c')}
                  className={`py-1 text-[10px] font-mono rounded transition-all ${
                    selectedPlateView === 'c'
                      ? 'bg-[#00E5FF] text-black font-bold shadow-[0_0_8px_#00e5ff]'
                      : 'bg-neutral-900 text-cyan-400 hover:bg-neutral-800'
                  }`}
                >
                  Cyan
                </button>
                <button
                  onClick={() => setSelectedPlateView('m')}
                  className={`py-1 text-[10px] font-mono rounded transition-all ${
                    selectedPlateView === 'm'
                      ? 'bg-[#FF007F] text-white font-bold shadow-[0_0_8px_#ff007f]'
                      : 'bg-neutral-900 text-pink-400 hover:bg-neutral-800'
                  }`}
                >
                  Magenta
                </button>
                <button
                  onClick={() => setSelectedPlateView('y')}
                  className={`py-1 text-[10px] font-mono rounded transition-all ${
                    selectedPlateView === 'y'
                      ? 'bg-[#FFEB3B] text-black font-bold shadow-[0_0_8px_#ffeb3b]'
                      : 'bg-neutral-900 text-yellow-400 hover:bg-neutral-800'
                  }`}
                >
                  Yellow
                </button>
                <button
                  onClick={() => setSelectedPlateView('k')}
                  className={`py-1 text-[10px] font-mono rounded transition-all ${
                    selectedPlateView === 'k'
                      ? 'bg-neutral-200 text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  Key
                </button>
              </div>

              {/* Dynamic Simulated Plate Visualizer with Spot UV tactile reflection on hover */}
              <div
                onMouseMove={handleMouseMoveOnPreview}
                className="relative h-48 sm:h-56 w-full rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden cursor-crosshair group flex items-center justify-center"
              >
                {/* Visual tactile gloss reflection overlay moving with cursor */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"
                  style={{
                    background: `radial-gradient(circle 140px at ${tactileShine.x}% ${tactileShine.y}%, rgba(255,255,255,0.22), transparent 70%)`
                  }}
                />

                {/* Corner registration crosshairs */}
                <div className="absolute top-2 left-2 text-neutral-600 font-mono text-[9px] pointer-events-none">+ C1</div>
                <div className="absolute top-2 right-2 text-neutral-600 font-mono text-[9px] pointer-events-none">+ C2</div>
                <div className="absolute bottom-2 left-2 text-neutral-600 font-mono text-[9px] pointer-events-none">+ C3</div>
                <div className="absolute bottom-2 right-2 text-neutral-600 font-mono text-[9px] pointer-events-none">+ C4</div>

                {/* Plate View Content */}
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  {/* Composite view */}
                  {selectedPlateView === 'composite' && (
                    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-2xl relative flex items-center justify-center mb-2 shadow-2xl border border-white/10 overflow-hidden">
                        <div
                          className="absolute inset-0 opacity-80"
                          style={{
                            background: `linear-gradient(135deg, ${category.accentColor}, #0a0a0a)`
                          }}
                        />
                        <Sparkles className="w-8 h-8 text-white relative z-10 drop-shadow" />
                      </div>
                      <span className="font-display font-bold text-sm text-white">Full Process Proof</span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        All 4 plates in 100% mechanical registration
                      </span>
                    </div>
                  )}

                  {/* Cyan Plate */}
                  {selectedPlateView === 'c' && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-full border border-cyan-400/40 bg-cyan-950/40 flex items-center justify-center p-3 mb-2">
                        <div
                          className="w-full h-full rounded-full bg-[#00E5FF] shadow-[0_0_20px_#00e5ff]"
                          style={{ opacity: Math.max(0.2, c / 100) }}
                        />
                      </div>
                      <span className="font-mono text-xs text-[#00E5FF] font-bold">Cyan Plate Density: {c}%</span>
                      <span className="text-[10px] font-mono text-neutral-400">Screen Angle: 15° &bull; Suprasetter CTP</span>
                    </div>
                  )}

                  {/* Magenta Plate */}
                  {selectedPlateView === 'm' && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-full border border-pink-500/40 bg-pink-950/40 flex items-center justify-center p-3 mb-2">
                        <div
                          className="w-full h-full rounded-full bg-[#FF007F] shadow-[0_0_20px_#ff007f]"
                          style={{ opacity: Math.max(0.2, m / 100) }}
                        />
                      </div>
                      <span className="font-mono text-xs text-[#FF007F] font-bold">Magenta Plate Density: {m}%</span>
                      <span className="text-[10px] font-mono text-neutral-400">Screen Angle: 75° &bull; Suprasetter CTP</span>
                    </div>
                  )}

                  {/* Yellow Plate */}
                  {selectedPlateView === 'y' && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-full border border-yellow-400/40 bg-yellow-950/40 flex items-center justify-center p-3 mb-2">
                        <div
                          className="w-full h-full rounded-full bg-[#FFEB3B] shadow-[0_0_20px_#ffeb3b]"
                          style={{ opacity: Math.max(0.2, y / 100) }}
                        />
                      </div>
                      <span className="font-mono text-xs text-[#FFEB3B] font-bold">Yellow Plate Density: {y}%</span>
                      <span className="text-[10px] font-mono text-neutral-400">Screen Angle: 0° &bull; Suprasetter CTP</span>
                    </div>
                  )}

                  {/* Key Plate */}
                  {selectedPlateView === 'k' && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                      <div className="w-24 h-24 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center p-3 mb-2">
                        <div
                          className="w-full h-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                          style={{ opacity: Math.max(0.15, k / 100) }}
                        />
                      </div>
                      <span className="font-mono text-xs text-neutral-200 font-bold">Key Black Plate Density: {k}%</span>
                      <span className="text-[10px] font-mono text-neutral-400">Screen Angle: 45° &bull; Suprasetter CTP</span>
                    </div>
                  )}
                </div>

                {/* Tactile hint */}
                <div className="absolute bottom-2 right-3 text-[9px] font-mono text-neutral-400 bg-black/60 px-2 py-0.5 rounded">
                  Hover for Spot UV tactile sheen
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Featured Products, Press Equipment, and Paper Substrates */}
        <div className="mt-8 pt-6 border-t border-neutral-800">
          <div className="flex items-center gap-2 mb-4 border-b border-neutral-800 pb-2">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'products'
                  ? 'bg-neutral-800 text-white font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Featured Works ({category.featuredProducts.length})
            </button>
            <button
              onClick={() => setActiveTab('equipment')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'equipment'
                  ? 'bg-neutral-800 text-white font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Press Machinery
            </button>
            <button
              onClick={() => setActiveTab('substrates')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'substrates'
                  ? 'bg-neutral-800 text-white font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Certified Substrates
            </button>
          </div>

          {/* Tab 1: Products */}
          {activeTab === 'products' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {category.featuredProducts.map((prod, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h5 className="font-display font-bold text-white text-sm mb-1">{prod.title}</h5>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">{prod.description}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-neutral-800/60">
                    <div className="flex flex-wrap gap-1">
                      {prod.tags.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Machinery */}
          {activeTab === 'equipment' && (
            <div className="p-5 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Primary Production Engine
                  </span>
                  <h5 className="font-display font-bold text-base text-white">{category.equipment.model}</h5>
                  <span className="text-xs font-mono text-neutral-400">{category.equipment.maker}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Calibrated & Active</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {category.equipment.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="text-cyan-400 mt-0.5">&bull;</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Substrates */}
          {activeTab === 'substrates' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {category.substrateOptions.map((sub, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 space-y-1">
                  <h6 className="font-display font-semibold text-xs text-white truncate">{sub.name}</h6>
                  <span className="text-[11px] font-mono text-cyan-400 block">{sub.weight}</span>
                  <span className="text-[10px] text-neutral-400 block truncate">{sub.finish}</span>
                  <span className="text-[9px] font-mono text-emerald-400 block mt-1">{sub.certified}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
