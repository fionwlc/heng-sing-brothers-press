import React, { useState, useEffect, useRef } from 'react';
import { PRINTING_SERVICES } from '../data/printingServices';
import { ServiceCategoryCard } from './ServiceCategoryCard';
import { CmykLogoFormation } from './CmykLogoFormation';
import { Layers, ArrowRight, ShieldCheck, Sparkles, Filter } from 'lucide-react';

interface ServiceSectionProps {
  onCategoryChange: (index: number) => void;
  onOpenEstimatorFor: (serviceId: string) => void;
}

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  onCategoryChange,
  onOpenEstimatorFor
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('offset');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeIndex = PRINTING_SERVICES.findIndex((s) => s.id === activeCategoryId);

  useEffect(() => {
    onCategoryChange(activeIndex >= 0 ? activeIndex : 0);
  }, [activeCategoryId, activeIndex, onCategoryChange]);

  const scrollToCategory = (id: string) => {
    setActiveCategoryId(id);
    const el = document.getElementById(`service-${id}`);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono mb-4">
          <Layers className="w-3.5 h-3.5 text-cyan-400" />
          <span>Six Core Industrial Print Disciplines</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
          Comprehensive Print Architecture
        </h2>
        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          From multi-million run lithographic publications to serialized digital proofing and sensory luxury packaging.
          Each discipline is calibrated with dedicated spectral profiling.
        </p>

        {/* Category Pill Switcher */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-neutral-950/80 border border-neutral-800 backdrop-blur-md">
          {PRINTING_SERVICES.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
                activeCategoryId === cat.id
                  ? 'bg-neutral-800 text-white font-bold shadow-lg ring-1 ring-white/20'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
              }`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: cat.accentColor }}
              />
              <span>{cat.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Services List with seamless transitions */}
      <div className="space-y-16">
        {PRINTING_SERVICES.map((category, idx) => (
          <React.Fragment key={category.id}>
            <div
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              onMouseEnter={() => setActiveCategoryId(category.id)}
            >
              <ServiceCategoryCard
                category={category}
                index={idx}
                isActive={activeCategoryId === category.id}
                onSelectService={setActiveCategoryId}
                onOpenEstimatorFor={onOpenEstimatorFor}
              />
            </div>

            {/* Interstitial Brand Logo Formation & Plate Convergence Showcase midway */}
            {idx === 2 && (
              <div
                id="plate-registration"
                className="my-16 p-8 sm:p-12 rounded-3xl bg-radial from-neutral-900 via-neutral-950 to-black border border-neutral-800/90 relative overflow-hidden shadow-2xl"
              >
                {/* Visual backdrop rays */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-6 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Pressroom Brand Registration</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                      How 4 Offset Plates Form The Brand Identity
                    </h3>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      In professional print production, a full-color brand mark does not exist as a single stroke. It is divided across four physically separate aluminum plates. Watch how our precision mechanical register brings individual Cyan, Magenta, Yellow, and Key inks into sharp unity.
                    </p>

                    <div className="space-y-3 pt-2 text-xs font-mono text-neutral-300">
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-[#00E5FF]" />
                        <span>Cyan Plate: High-frequency cool values &amp; geometric base</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-[#FF007F]" />
                        <span>Magenta Plate: Warm vibrancy, skin tones &amp; red spectrum</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-[#FFEB3B]" />
                        <span>Yellow Plate: Luminance, botanical highlights &amp; solar warmth</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-neutral-200" />
                        <span>Key Black Plate: Micro-type definition &amp; optical depth</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 flex justify-center">
                    <CmykLogoFormation size="lg" interactive={true} autoAnimateOnScroll={true} />
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
