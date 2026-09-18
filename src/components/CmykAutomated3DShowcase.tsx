import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HengSingLogo } from './HengSingLogo';

type ProductStep = 'card' | 'signage' | 'box' | 'banner' | 'sticker';

interface MorphItem {
  id: ProductStep;
  durationMs: number;
}

const SEQUENCE: MorphItem[] = [
  { id: 'card', durationMs: 3200 },     // Foundation: Business Card
  { id: 'signage', durationMs: 3200 },  // Thickens & extrudes with glass standoffs into Acrylic Signage
  { id: 'box', durationMs: 3200 },      // Scores & folds out flaps into 3D Kraft Packaging Box
  { id: 'banner', durationMs: 3200 },   // Unrolls vertical canvas into Pull-up Roll Banner
  { id: 'sticker', durationMs: 3200 }   // Peels corner with die-cut decal from foundation liner
];

export const CmykAutomated3DShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMorphing, setIsMorphing] = useState<boolean>(false);

  const currentItem = SEQUENCE[currentIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMorphing(true);

      const nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SEQUENCE.length);
        setIsMorphing(false);
      }, 700); // 700ms smooth 3D shape morph

      return () => clearTimeout(nextTimer);
    }, currentItem.durationMs);

    return () => clearTimeout(timer);
  }, [currentIndex, currentItem.durationMs]);

  return (
    <div className="w-full flex flex-col items-center select-none pointer-events-none relative">
      {/* 3D Morphing Stage: Open container without boxes, without numbers, fully blended */}
      <div
        className="relative w-full min-h-[380px] sm:min-h-[420px] flex items-center justify-center"
        style={{ perspective: 1200 }}
      >
        {/* Soft atmospheric depth glow directly on hero background */}
        <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-amber-500/10 via-[#EA3A19]/10 to-transparent blur-3xl pointer-events-none" />

        {/* 3D Foundation Plane Shadow (Grounded 3D shadow that organically morphs shape with the object) */}
        <motion.div
          className="absolute -bottom-2 sm:bottom-0 rounded-full bg-neutral-950/15 blur-xl pointer-events-none"
          animate={{
            width:
              currentItem.id === 'banner'
                ? 170
                : currentItem.id === 'box'
                ? 260
                : currentItem.id === 'signage'
                ? 330
                : 310,
            height: currentItem.id === 'banner' ? 18 : 28,
            opacity: isMorphing ? 0.35 : 0.65,
            scale: isMorphing ? 0.85 : 1
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Dynamic 3D Object Morphing Anchor */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <AnimatePresence mode="wait">
            {/* ========================================================================= */}
            {/* 1. FOUNDATION: THE CLASSIC 350GSM BUSINESS CARD                           */}
            {/* ========================================================================= */}
            {currentItem.id === 'card' && (
              <motion.div
                key="card"
                initial={{
                  scale: 0.75,
                  rotateX: 16,
                  rotateY: -18,
                  rotateZ: 4,
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  scale: 1,
                  rotateX: [12, 6, 12],
                  rotateY: [-10, 4, -10],
                  rotateZ: [2, -1, 2],
                  opacity: 1,
                  y: [0, -6, 0],
                  transition: {
                    rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                    rotateZ: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 220, damping: 20 },
                    opacity: { duration: 0.4 }
                  }
                }}
                exit={{
                  scale: 1.05,
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  opacity: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                className="w-[290px] sm:w-[330px] aspect-[1.75/1] rounded-2xl bg-white border border-neutral-200/95 p-4 sm:p-5 flex flex-col justify-between shadow-[0_28px_56px_-12px_rgba(0,0,0,0.18),0_10px_20px_-6px_rgba(0,0,0,0.08)] relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Extrusion Edge / Paper Layering Thickness */}
                <div
                  className="absolute inset-0 rounded-2xl bg-neutral-100 border border-neutral-300 pointer-events-none"
                  style={{ transform: 'translateZ(-3px)' }}
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-neutral-200 border border-neutral-300 pointer-events-none"
                  style={{ transform: 'translateZ(-6px)' }}
                />

                {/* Prepress Registration Marks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neutral-400" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neutral-400" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neutral-400" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neutral-400" />

                <div className="flex items-start justify-between">
                  <div>
                    <HengSingLogo size="sm" />
                    <span className="text-[7px] font-mono uppercase tracking-widest text-neutral-400 block mt-1">
                      Commercial &bull; Offset &bull; Digital &bull; Signage
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 border border-amber-400 shadow-xs flex flex-col items-center justify-center text-[6px] font-mono font-black text-amber-950">
                    <span>34 YRS</span>
                    <span className="text-[4px]">KUCHING</span>
                  </div>
                </div>

                <div className="my-auto py-1">
                  <div className="w-full h-[1px] bg-gradient-to-r from-[#EA3A19] via-neutral-200 to-transparent" />
                  <div className="flex justify-between text-[7px] font-mono text-neutral-400 pt-0.5">
                    <span>350GSM COTTON ARTBOARD</span>
                    <span>VELVET MATTE + SPOT UV</span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-1 border-t border-neutral-100 text-[7.5px] font-mono text-neutral-600">
                  <div className="space-y-0.5">
                    <p className="font-bold text-neutral-900">Jalan Chan Bee Kiew, Kuching</p>
                    <p>WhatsApp: +60 13-328 2828</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF007F]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* 2. MORPHED TO: 3D ACRYLIC SIGNAGE (Extruded from Card Foundation)         */}
            {/* ========================================================================= */}
            {currentItem.id === 'signage' && (
              <motion.div
                key="signage"
                initial={{
                  scale: 0.88,
                  rotateX: 0,
                  rotateY: 0,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  rotateX: [8, 14, 8],
                  rotateY: [10, -6, 10],
                  rotateZ: [-2, 1, -2],
                  opacity: 1,
                  y: [0, -6, 0],
                  transition: {
                    rotateX: { repeat: Infinity, duration: 6.5, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7.5, ease: 'easeInOut' },
                    rotateZ: { repeat: Infinity, duration: 8.5, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 220, damping: 20 },
                    opacity: { duration: 0.4 }
                  }
                }}
                exit={{
                  scale: 0.9,
                  rotateX: 20,
                  opacity: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                className="w-[290px] sm:w-[330px] h-[190px] rounded-2xl bg-white/75 backdrop-blur-lg border border-white/90 p-4 flex flex-col justify-between relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2),0_12px_24px_-8px_rgba(0,0,0,0.08)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* 3D Acrylic Depth Glass Slab (Extruded back layers) */}
                <div
                  className="absolute inset-0 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 pointer-events-none"
                  style={{ transform: 'translateZ(-8px)' }}
                />
                <div
                  className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-xs border border-white/40 pointer-events-none"
                  style={{ transform: 'translateZ(-16px)' }}
                />

                {/* 4 Floating Standoff Bolts popping forward in 3D */}
                <div
                  className="absolute top-2.5 left-2.5 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-100 via-neutral-300 to-neutral-500 shadow-md border border-neutral-300 flex items-center justify-center"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                </div>
                <div
                  className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-100 via-neutral-300 to-neutral-500 shadow-md border border-neutral-300 flex items-center justify-center"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                </div>
                <div
                  className="absolute bottom-2.5 left-2.5 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-100 via-neutral-300 to-neutral-500 shadow-md border border-neutral-300 flex items-center justify-center"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                </div>
                <div
                  className="absolute bottom-2.5 right-2.5 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-100 via-neutral-300 to-neutral-500 shadow-md border border-neutral-300 flex items-center justify-center"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
                </div>

                <div
                  className="my-auto text-center px-4 relative z-10"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div className="flex justify-center pb-1">
                    <HengSingLogo size="md" />
                  </div>
                  <div className="inline-block mt-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-[8px] font-mono tracking-widest uppercase shadow-xs">
                    5MM CAST ACRYLIC &bull; DIRECT UV FLATBED
                  </div>
                  <p className="text-[7.5px] font-mono text-neutral-500 mt-1">
                    SARAWAK GOVERNMENT REGISTERED &bull; EST. 1990
                  </p>
                </div>

                <div
                  className="flex justify-between items-center text-[7px] font-mono text-neutral-400 border-t border-neutral-200/80 pt-1"
                  style={{ transform: 'translateZ(6px)' }}
                >
                  <span>CRYSTAL BEVELED EDGES</span>
                  <span>INDOOR / OUTDOOR MOUNT</span>
                </div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* 3. MORPHED TO: 3D PACKAGING BOX (Card Folds into 3D Carton Flaps)         */}
            {/* ========================================================================= */}
            {currentItem.id === 'box' && (
              <motion.div
                key="box"
                initial={{
                  scale: 0.85,
                  rotateX: 25,
                  rotateY: -20,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  rotateX: [14, 8, 14],
                  rotateY: [-16, 12, -16],
                  rotateZ: [2, -2, 2],
                  opacity: 1,
                  y: [0, -6, 0],
                  transition: {
                    rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                    rotateZ: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 220, damping: 20 },
                    opacity: { duration: 0.4 }
                  }
                }}
                exit={{
                  scale: 0.9,
                  rotateY: 30,
                  opacity: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                className="relative w-[230px] h-[195px] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Box Front Face (Derived directly from card proportions) */}
                <div
                  className="w-[185px] h-[145px] rounded-xl bg-[#F6F2EB] border-2 border-neutral-300 p-3 flex flex-col justify-between shadow-[0_28px_56px_-12px_rgba(0,0,0,0.18)] relative"
                  style={{
                    transform: 'translateZ(40px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex justify-between items-center text-[7px] font-mono text-neutral-500">
                    <span className="font-bold text-neutral-800">CUSTOM PACKAGING</span>
                    <span>350GSM KRAFT</span>
                  </div>

                  <div className="my-auto text-center">
                    <div className="flex justify-center scale-90">
                      <HengSingLogo size="sm" />
                    </div>
                    <span className="text-[6.5px] font-mono text-neutral-600 block mt-1 uppercase">
                      Folding Carton &bull; Auto-Lock Bottom
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-[6.5px] font-mono text-neutral-400 border-t border-neutral-200 pt-1">
                    <span>DIELINE: HSBP-BX4</span>
                    <span className="text-emerald-700 font-bold">&bull; FSC-CERTIFIED</span>
                  </div>
                </div>

                {/* Box Top Flap Opening Up in 3D */}
                <motion.div
                  initial={{ rotateX: -10 }}
                  animate={{ rotateX: [-70, -78, -70] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -top-[52px] w-[185px] h-[60px] rounded-t-xl bg-[#EDE7DD] border-2 border-b-0 border-neutral-300 p-2 flex items-center justify-center origin-bottom text-[6.5px] font-mono text-neutral-500 shadow-md"
                  style={{
                    transform: 'translateZ(40px) rotateX(-75deg)'
                  }}
                >
                  <span className="border-b border-dashed border-neutral-400 pb-0.5">
                    TUCK-IN TOP FLAP &bull; SCORED CREASE
                  </span>
                </motion.div>

                {/* Box Side Flap Folding 90 Degrees */}
                <motion.div
                  initial={{ rotateY: 10 }}
                  animate={{ rotateY: [76, 84, 76] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="absolute -right-[72px] w-[80px] h-[145px] rounded-r-xl bg-[#DFD8CC] border-2 border-l-0 border-neutral-300 p-2 flex flex-col justify-between origin-left text-[6px] font-mono text-neutral-600 shadow-md"
                  style={{
                    transform: 'translateZ(40px) rotateY(80deg)'
                  }}
                >
                  <span>SIDE FLAP</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center font-bold">
                    HSBP
                  </div>
                  <span>EST. 1990</span>
                </motion.div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* 4. MORPHED TO: PULL-UP ROLL BANNER (Extends vertically from card cassette)*/}
            {/* ========================================================================= */}
            {currentItem.id === 'banner' && (
              <motion.div
                key="banner"
                initial={{
                  scale: 0.85,
                  rotateY: -15,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  rotateX: [6, 2, 6],
                  rotateY: [-8, 8, -8],
                  rotateZ: [1, -1, 1],
                  opacity: 1,
                  y: [0, -6, 0],
                  transition: {
                    rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                    rotateZ: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 220, damping: 20 },
                    opacity: { duration: 0.4 }
                  }
                }}
                exit={{
                  scale: 0.88,
                  rotateX: -15,
                  opacity: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                className="relative h-[280px] w-[165px] flex flex-col items-center justify-between"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Top Clamp Rail */}
                <div
                  className="w-[155px] h-3 rounded-xs bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400 border border-neutral-300 shadow-md flex items-center justify-center"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div className="w-2 h-1 bg-neutral-500 rounded-full" />
                </div>

                {/* Unrolled Graphic Canvas (Morphs upward from horizontal foundation) */}
                <motion.div
                  initial={{ height: 60 }}
                  animate={{ height: 230 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[148px] flex-1 bg-white border-x border-neutral-200 shadow-[0_22px_44px_rgba(0,0,0,0.18)] p-2.5 flex flex-col justify-between text-center relative overflow-hidden my-1"
                >
                  <div className="space-y-1">
                    <span className="text-[5.5px] font-mono text-[#EA3A19] font-bold block uppercase tracking-wider">
                      GOVERNMENT REGISTERED PRINTER
                    </span>
                    <div className="flex justify-center scale-90">
                      <HengSingLogo size="xs" />
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-neutral-900 text-white space-y-1 my-auto shadow-xs">
                    <span className="text-[6.5px] font-display font-bold block leading-tight">
                      SARAWAK&apos;S TRUSTED PRESS
                    </span>
                    <div className="text-[5px] font-mono text-neutral-300 space-y-0.5">
                      <p>&bull; Corporate Reports &bull;</p>
                      <p>&bull; Exhibition Signage &bull;</p>
                      <p>&bull; Event Backdrops &bull;</p>
                    </div>
                  </div>

                  <div className="border-t border-neutral-200 pt-1 text-[5px] font-mono text-neutral-600 space-y-0.5">
                    <p className="font-bold">WhatsApp: +60 13-328 2828</p>
                    <p>Kuching &bull; Fast Turnaround</p>
                  </div>
                </motion.div>

                {/* Heavy Aluminum Roll-Up Base Cassette */}
                <div
                  className="relative w-[165px] h-4 rounded-xs bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-500 border border-neutral-400 shadow-lg flex items-center justify-center"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div className="absolute -bottom-1 w-[175px] h-1.5 bg-neutral-400 rounded-full shadow-md" />
                  <span className="text-[6px] font-mono text-neutral-700 font-bold uppercase tracking-widest">
                    ROLL-UP CASSETTE
                  </span>
                </div>
              </motion.div>
            )}

            {/* ========================================================================= */}
            {/* 5. MORPHED TO: DIE-CUT VINYL DECAL (Peeling off from backing foundation)   */}
            {/* ========================================================================= */}
            {currentItem.id === 'sticker' && (
              <motion.div
                key="sticker"
                initial={{
                  scale: 0.85,
                  rotateX: 15,
                  rotateY: -15,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  rotateX: [12, 6, 12],
                  rotateY: [-10, 8, -10],
                  rotateZ: [2, -2, 2],
                  opacity: 1,
                  y: [0, -6, 0],
                  transition: {
                    rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
                    rotateY: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
                    rotateZ: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
                    y: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
                    scale: { type: 'spring', stiffness: 220, damping: 20 },
                    opacity: { duration: 0.4 }
                  }
                }}
                exit={{
                  scale: 0.88,
                  opacity: 0,
                  transition: { duration: 0.5, ease: 'easeInOut' }
                }}
                className="relative w-[285px] h-[195px] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Release Liner Backing (Matches the card foundation) */}
                <div className="absolute inset-0 rounded-2xl bg-neutral-100 border border-neutral-300 shadow-[0_22px_44px_-12px_rgba(0,0,0,0.14)] p-3 flex flex-col justify-between text-[7px] font-mono text-neutral-400">
                  <div className="flex justify-between">
                    <span>SILICONE RELEASE LINER</span>
                    <span>WATERPROOF VINYL</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>PEEL &bull; STICK &bull; DURABLE</span>
                    <span>KISS-CUT READY</span>
                  </div>
                </div>

                {/* Peel-Off Custom Cut Decal Layer Peeling Upward in 3D */}
                <motion.div
                  animate={{
                    rotateX: [8, 14, 8],
                    rotateZ: [-2, 0, -2],
                    y: [-4, 2, -4]
                  }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="relative z-10 w-[245px] p-4 rounded-2xl bg-white border-2 border-dashed border-[#EA3A19]/80 shadow-[0_28px_50px_-8px_rgba(0,0,0,0.22)] flex flex-col items-center justify-center text-center space-y-2"
                  style={{
                    transform: 'translateZ(34px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <HengSingLogo size="sm" />
                  <p className="text-[7.5px] font-mono text-neutral-500">
                    ESTABLISHED 1990 &bull; KUCHING, SARAWAK
                  </p>
                  <div className="flex items-center gap-2 pt-1 border-t border-neutral-100 text-[7px] font-mono text-neutral-400">
                    <span>WATERPROOF VINYL</span>
                    <span>&bull;</span>
                    <span>UV-RESISTANT</span>
                    <span>&bull;</span>
                    <span>GLOSS LAMINATED</span>
                  </div>
                </motion.div>

                {/* 3D Corner Peeling Shadow Under Decal */}
                <div
                  className="absolute bottom-4 right-8 w-12 h-12 bg-gradient-to-tl from-neutral-300/80 to-transparent rounded-br-2xl pointer-events-none"
                  style={{ transform: 'translateZ(30px) rotateX(25deg)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3D Structural Morphing Wireframe Pulse (Flashes subtly only while morphing between 3D structures) */}
        {isMorphing && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.15, 0.95], opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.65, ease: 'easeInOut' }}
            className="absolute z-20 w-[320px] h-[210px] rounded-2xl border-2 border-dashed border-[#EA3A19]/60 pointer-events-none"
            style={{ transform: 'rotateX(10deg) rotateY(-8deg)' }}
          />
        )}
      </div>
    </div>
  );
};
