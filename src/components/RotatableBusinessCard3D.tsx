import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { HengSingLogo } from './HengSingLogo';
import { useLanguage } from '../context/LanguageContext';

export const RotatableBusinessCard3D: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div
      className="w-full flex flex-col items-center select-none pointer-events-none relative"
      id="rotatable-business-card-container"
    >
      {/* 3D Stage with Realistic Depth Perspective */}
      <div
        className="relative w-full min-h-[380px] sm:min-h-[420px] flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* Soft background ambient illumination glow */}
        <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/10 via-[#EA3A19]/10 to-transparent blur-3xl pointer-events-none" />

        {/* Dynamic 3D Ground Shadow */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 w-80 sm:w-96 h-10 rounded-full bg-neutral-950/20 blur-xl pointer-events-none"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.65, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* 3D Floating Anchor: Gentle ambient float with realistic tilt, NO flipping */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotateX: [11, 15, 11],
            rotateY: [-16, -12, -16],
            rotateZ: [1, -1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            transformStyle: 'preserve-3d'
          }}
          className="relative w-[300px] sm:w-[350px] aspect-[1.75/1]"
        >
          {/* ========================================================================= */}
          {/* CARD 2: BEHIND THE CARD (Dark Velvet reverse side with message)           */}
          {/* ========================================================================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-[#141416] border border-neutral-700/90 p-4 sm:p-5 flex flex-col justify-between shadow-[0_24px_48px_-12px_rgba(0,0,0,0.35)] overflow-hidden"
            style={{
              transform: 'translate3d(24px, -20px, -24px) rotateZ(3.5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Subtle Metallic Specular Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50 pointer-events-none" />

            {/* Top Row: Brand Monogram & Est Tag */}
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#EA3A19] flex items-center justify-center text-white font-mono font-black text-[10px] shadow-xs">
                  HS
                </div>
                <div>
                  <span className="text-white font-display font-bold text-[11px] tracking-wider block">
                    {t.card3D.brandTag}
                  </span>
                  <span className="text-[6px] font-mono uppercase tracking-widest text-neutral-400 block">
                    {t.card3D.estTag}
                  </span>
                </div>
              </div>
              <span className="text-[6.5px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-amber-300 border border-amber-500/30">
                {t.card3D.fograTag}
              </span>
            </div>

            {/* Centerpiece: Prominent Call to Action Message Behind the Card */}
            <div className="my-auto py-1 text-center relative z-10 px-1">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EA3A19]/20 border border-[#EA3A19]/40 text-[#FF7052] text-[7.5px] font-mono uppercase tracking-wider mb-1.5">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{t.card3D.ctaTag}</span>
              </div>
              <h4 className="text-white font-display font-bold text-sm sm:text-base leading-snug tracking-tight">
                {t.card3D.ctaTitle}
              </h4>
            </div>

            {/* Bottom Footer on Back: WhatsApp & Fast Turnaround */}
            <div className="flex items-end justify-between pt-1 border-t border-neutral-800 text-[7.5px] font-mono text-neutral-300 relative z-10">
              <div className="space-y-0.5 text-left">
                <p className="text-white font-bold flex items-center gap-1 text-[7.5px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t.card3D.phoneText}
                </p>
                <p className="text-neutral-400 text-[6.5px]">{t.card3D.locationText}</p>
              </div>
              <div className="text-[6.5px] text-amber-300 bg-neutral-800/90 px-1.5 py-0.5 rounded border border-neutral-700">
                <span>{t.card3D.trustTag}</span>
              </div>
            </div>

            {/* Back Card Edge Thickness Layers */}
            <div
              className="absolute inset-0 rounded-2xl bg-neutral-800 border border-neutral-700 pointer-events-none"
              style={{ transform: 'translateZ(-1px)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl bg-neutral-900 border border-neutral-800 pointer-events-none"
              style={{ transform: 'translateZ(-2px)' }}
            />
          </div>

          {/* ========================================================================= */}
          {/* CARD 1: FOREGROUND CARD (White Cotton Artboard with Heng Sing Branding)   */}
          {/* ========================================================================= */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-white border border-neutral-200/95 p-4 sm:p-5 flex flex-col justify-between shadow-[0_28px_56px_-12px_rgba(0,0,0,0.22),0_12px_24px_-6px_rgba(0,0,0,0.1)] overflow-hidden"
            style={{
              transform: 'translate3d(-14px, 12px, 14px) rotateZ(-1.5deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Dynamic Specular Sheen (Soft Foil Reflection) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-60 pointer-events-none" />

            {/* Prepress Crop & Registration Marks */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

            {/* Top Row: Logo & 34 Years Gold Seal */}
            <div className="flex items-start justify-between relative z-10">
              <div>
                <HengSingLogo size="sm" />
                <span className="text-[7.5px] font-mono uppercase tracking-widest text-neutral-400 block mt-1">
                  {t.card3D.disciplinesTag}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 border border-amber-400 shadow-xs flex flex-col items-center justify-center text-[6.5px] font-mono font-black text-amber-950">
                <span>{t.card3D.yearsBadge}</span>
                <span className="text-[4.5px] tracking-wider">{t.card3D.kuchingBadge}</span>
              </div>
            </div>

            {/* Center Area: Core Headline Message */}
            <div className="my-auto py-1 text-center relative z-10">
              <h4 className="text-neutral-900 font-display font-bold text-[13.5px] sm:text-[15px] leading-snug tracking-tight">
                {t.card3D.ctaTitle}
              </h4>
              <div className="flex items-center justify-center gap-2 text-[7px] font-mono text-neutral-500 mt-1">
                <span className="font-semibold text-neutral-700">350GSM COTTON ARTBOARD</span>
                <span>&bull;</span>
                <span className="text-[#EA3A19] font-bold">VELVET MATTE &bull; SPOT UV</span>
              </div>
            </div>

            {/* Bottom Row: Facility Address & CMYK Control Bars */}
            <div className="flex items-end justify-between pt-1 border-t border-neutral-100 text-[8px] font-mono text-neutral-600 relative z-10">
              <div className="space-y-0.5">
                <p className="font-bold text-neutral-900">Jalan Chan Bee Kiew, Kuching, Sarawak</p>
                <p className="text-neutral-500">WhatsApp: +60 13-328 2828 &bull; orders@hengsing.com.my</p>
              </div>
              {/* CMYK Swatch Dots */}
              <div className="flex items-center gap-1 pl-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-xs" title="Cyan" />
                <span className="w-2 h-2 rounded-full bg-[#FF007F] shadow-xs" title="Magenta" />
                <span className="w-2 h-2 rounded-full bg-[#FFE600] shadow-xs" title="Yellow" />
                <span className="w-2 h-2 rounded-full bg-neutral-900 shadow-xs" title="Black / Key" />
              </div>
            </div>

            {/* Front Card Realistic 3D Edge Thickness Layers */}
            <div
              className="absolute inset-0 rounded-2xl bg-neutral-200 border border-neutral-300 pointer-events-none"
              style={{ transform: 'translateZ(-1px)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl bg-neutral-300 border border-neutral-400 pointer-events-none"
              style={{ transform: 'translateZ(-2px)' }}
            />
            <div
              className="absolute inset-0 rounded-2xl bg-neutral-200 border border-neutral-300 pointer-events-none"
              style={{ transform: 'translateZ(-3px)' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
