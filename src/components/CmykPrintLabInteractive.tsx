import React, { useState, useEffect, useRef } from 'react';
import { RefreshCw, Play, Sparkles, Layers, CheckCircle2, Eye, ShieldCheck, Info } from 'lucide-react';
import { HengSingLogo } from './HengSingLogo';

export type PrintableItemType = 'business-card' | 'acrylic-sign' | 'stickers' | 'packaging';

interface ItemSpec {
  id: PrintableItemType;
  label: string;
  badge: string;
  substrate: string;
  finish: string;
  press: string;
}

const ITEMS: ItemSpec[] = [
  {
    id: 'business-card',
    label: 'Business Card',
    badge: 'Art Card 350gsm',
    substrate: 'Super-White Cotton Artboard',
    finish: 'Spot UV Varnish + Matte Lamination',
    press: 'Heidelberg 4-Color Offset Press'
  },
  {
    id: 'acrylic-sign',
    label: 'Acrylic Signage',
    badge: '5mm Cast Acrylic',
    substrate: 'High-Clarity Cast Acrylic Plate',
    finish: 'Direct UV Flatbed with Stainless Standoffs',
    press: 'High-Resolution UV Flatbed Press'
  },
  {
    id: 'stickers',
    label: 'Die-Cut Stickers',
    badge: 'Vinyl Sheet',
    substrate: 'Waterproof Mirrorkote Vinyl',
    finish: 'Gloss Lamination + Precision Kiss-Cut',
    press: 'Digital Roll Press & CNC Cutter'
  },
  {
    id: 'packaging',
    label: 'Packaging Box',
    badge: 'Rigid Boxboard',
    substrate: '350gsm Coated Folding Boxboard',
    finish: 'Embossed Brand Seal + Crease Scoring',
    press: 'Offset Dieline & Automatic Die-Cutter'
  }
];

export const CmykPrintLabInteractive: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PrintableItemType>('business-card');
  const [printProgress, setPrintProgress] = useState<number>(100); // 0 to 100
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [activePlate, setActivePlate] = useState<'all' | 'c' | 'm' | 'y' | 'k'>('all');
  
  // 3D tilt effect on mouse hover
  const [tilt, setTilt] = useState<{ x: number; y: number; sheenX: number; sheenY: number }>({
    x: 0,
    y: 0,
    sheenX: 50,
    sheenY: 50
  });

  const stageRef = useRef<HTMLDivElement>(null);

  // Trigger the animated CMYK printing run
  const runCmykPrint = () => {
    if (isPrinting) return;
    setIsPrinting(true);
    setPrintProgress(0);

    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds sweep

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setPrintProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setIsPrinting(false);
      }
    };

    requestAnimationFrame(animate);
  };

  // Auto-run print animation once when switching items
  const handleItemChange = (item: PrintableItemType) => {
    setSelectedItem(item);
    setActivePlate('all');
    setPrintProgress(0);
    setIsPrinting(true);

    const startTime = performance.now();
    const duration = 1400;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(100, Math.round((elapsed / duration) * 100));
      setPrintProgress(progress);

      if (progress < 100) {
        requestAnimationFrame(animate);
      } else {
        setIsPrinting(false);
      }
    };

    requestAnimationFrame(animate);
  };

  // Mouse move handler for realistic card 3D tilt and specular reflection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized coordinates -1 to +1
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setTilt({
      x: -normY * 8, // rotation around X axis
      y: normX * 10,  // rotation around Y axis
      sheenX: (x / rect.width) * 100,
      sheenY: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  };

  const currentSpec = ITEMS.find((it) => it.id === selectedItem) || ITEMS[0];

  // Helper color calculation depending on active plate
  const getInkOpacity = (plate: 'c' | 'm' | 'y' | 'k') => {
    if (activePlate === 'all') return 1;
    return activePlate === plate ? 1 : 0.05;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Header: CMYK Process Print Simulator */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <span className="w-2 h-2 rounded-full bg-[#FF007F] animate-pulse delay-75" />
          <span className="w-2 h-2 rounded-full bg-[#FFEB3B] animate-pulse delay-150" />
          <span className="w-2 h-2 rounded-full bg-neutral-900" />
          <span className="text-[11px] font-mono font-bold text-neutral-800 tracking-wider uppercase ml-1">
            CMYK Print Lab
          </span>
        </div>

        <button
          onClick={runCmykPrint}
          disabled={isPrinting}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 hover:bg-neutral-800 disabled:opacity-50 text-white text-[10px] font-mono font-semibold transition-all shadow-xs cursor-pointer active:scale-95"
          title="Watch CMYK inks layer onto the product"
        >
          <RefreshCw className={`w-3 h-3 ${isPrinting ? 'animate-spin text-[#00E5FF]' : 'text-amber-300'}`} />
          <span>{isPrinting ? `Printing ${printProgress}%...` : 'Re-Print Item'}</span>
        </button>
      </div>

      {/* Item Selector Pills (Business Card, Signage, Stickers, Packaging) */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-2xl bg-neutral-100 border border-neutral-200/80 mb-4">
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemChange(item.id)}
            className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center truncate ${
              selectedItem === item.id
                ? 'bg-white text-neutral-900 shadow-sm font-bold border border-neutral-200/60'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-white/50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 3D Interactive Print Bed / Stage */}
      <div
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-md h-64 sm:h-72 rounded-3xl bg-radial from-neutral-900 via-neutral-950 to-black p-4 flex items-center justify-center border border-neutral-800 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: 1000 }}
      >
        {/* Prepress Registration Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Prepress Calibration Scale in Corners */}
        <div className="absolute top-2.5 left-3 flex items-center gap-1 opacity-40 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          <span className="w-2 h-2 border-t border-l border-neutral-400" />
          <span>PRESS-BED &bull; KUCHING</span>
        </div>
        <div className="absolute top-2.5 right-3 flex items-center gap-1 opacity-40 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          <span>{currentSpec.press}</span>
          <span className="w-2 h-2 border-t border-r border-neutral-400" />
        </div>
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1 opacity-40 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          <div className="w-2 h-2 rounded-full border border-neutral-400 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-neutral-400 rounded-full" />
          </div>
          <span>FOGRA 51 REGISTRATION &plusmn;0.02mm</span>
        </div>
        <div className="absolute bottom-2.5 right-3 opacity-40 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          ZERO MOQ
        </div>

        {/* The 3D Floating Physical Printable Object */}
        <div
          className="relative w-full max-w-[340px] aspect-[16/10] transition-transform duration-150 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Specular Light Reflection / Foil Sheen */}
          <div
            className="absolute inset-0 z-30 pointer-events-none rounded-2xl transition-opacity duration-300 opacity-60"
            style={{
              background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`,
              mixBlendMode: 'overlay'
            }}
          />

          {/* ========================================================= */}
          {/* 1. BUSINESS CARD SUBSTRATE                                 */}
          {/* ========================================================= */}
          {selectedItem === 'business-card' && (
            <div className="w-full h-full rounded-2xl bg-[#FCFCFD] border border-neutral-200/90 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
              {/* Card Prepress Crop Marks in corners */}
              <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-neutral-300" />
              <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-neutral-300" />
              <div className="absolute bottom-1.5 left-1.5 w-2.5 h-1.5 border-b border-l border-neutral-300" />
              <div className="absolute bottom-1.5 right-1.5 w-2.5 h-1.5 border-b border-r border-neutral-300" />

              {/* Top Row: Official Heng Sing Logo */}
              <div className="flex items-start justify-between relative z-10">
                <div className="flex flex-col">
                  {/* The Official Heng Sing Brothers Press Wordmark */}
                  <HengSingLogo size="sm" />
                  <span className="text-[8px] font-mono tracking-wider text-neutral-400 mt-1 uppercase">
                    Commercial &bull; Offset &bull; Digital &bull; Signage
                  </span>
                </div>

                {/* Spot UV Foil Stamp Seal */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-400 border border-amber-300/80 shadow-xs flex flex-col items-center justify-center text-amber-900 text-[6.5px] font-mono font-bold leading-tight select-none">
                  <span>34 YRS</span>
                  <span className="text-[5px]">KUCHING</span>
                </div>
              </div>

              {/* Middle Row: Gold Accent Trim & Micro Registration Bar */}
              <div className="relative z-10 my-auto py-1">
                <div className="w-full h-[1px] bg-gradient-to-r from-[#EA3A19] via-neutral-300 to-transparent mb-1" />
                <div className="flex items-center justify-between text-[7px] font-mono text-neutral-400">
                  <span>FSC-CERTIFIED 350GSM</span>
                  <span>MATTE VELVET FINISH</span>
                </div>
              </div>

              {/* Bottom Row: Contact & Address */}
              <div className="flex items-end justify-between relative z-10 pt-1 border-t border-neutral-100 text-[8px] font-mono text-neutral-600">
                <div className="space-y-0.5">
                  <p className="font-bold text-neutral-800">No. 37, Lot 75, Section 63, Jalan Chan Bee Kiew</p>
                  <p>Kuching, Sarawak &bull; WhatsApp: +60 13-328 2828</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF007F]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFEB3B]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 2. ACRYLIC STOREFRONT SIGNAGE SUBSTRATE                    */}
          {/* ========================================================= */}
          {selectedItem === 'acrylic-sign' && (
            <div className="w-full h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/40 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
              {/* Glass Inner Reflection Bevel */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none" />

              {/* 4 Stainless Steel Standoff Mount Bolts */}
              <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-md border border-neutral-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-md border border-neutral-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>
              <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-md border border-neutral-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>
              <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 via-neutral-400 to-neutral-600 shadow-md border border-neutral-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
              </div>

              {/* Main Signage Content */}
              <div className="my-auto text-center px-4 relative z-10">
                <div className="flex justify-center pb-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
                  <HengSingLogo size="md" />
                </div>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-xs text-white text-[8px] sm:text-[9px] font-mono tracking-widest uppercase">
                  HIGH-PRECISION UV FLATBED &bull; ON-SITE INSTALLATION
                </div>
                <p className="text-[7.5px] font-mono text-neutral-300/80 mt-1">
                  SARAWAK GOVERNMENT REGISTERED PRINTER &bull; EST. 1990
                </p>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 3. DIE-CUT STICKER SHEET SUBSTRATE                         */}
          {/* ========================================================= */}
          {selectedItem === 'stickers' && (
            <div className="w-full h-full rounded-2xl bg-[#EFEFEA] border border-neutral-300 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)] p-3 sm:p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Sticker Release Backing Grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-500 pb-1 border-b border-neutral-300/60">
                <span>MIRRORKOTE VINYL DIE-CUT</span>
                <span>WEATHERPROOF &bull; UV RESISTANT</span>
              </div>

              {/* Stickers arrangement */}
              <div className="grid grid-cols-12 gap-2 my-auto items-center relative z-10">
                {/* Sticker 1: Rectangular Brand Decal */}
                <div className="col-span-7 p-3 rounded-xl bg-white border border-dashed border-[#EA3A19]/50 shadow-md hover:scale-105 transition-transform">
                  <HengSingLogo size="xs" />
                  <div className="text-[6.5px] font-mono text-neutral-500 mt-1 flex justify-between">
                    <span>KUCHING PRINT</span>
                    <span>&bull; PEEL HERE &bull;</span>
                  </div>
                </div>

                {/* Sticker 2: Round Badge */}
                <div className="col-span-5 flex flex-col items-center justify-center p-2 rounded-full aspect-square bg-[#EA3A19] text-white shadow-lg border-2 border-dashed border-white/80 hover:scale-105 transition-transform text-center">
                  <span className="font-display font-black text-[9px] leading-tight">HSBP</span>
                  <span className="text-[5.5px] font-mono tracking-widest uppercase">QUALITY</span>
                  <span className="text-[5px] font-mono opacity-80">EST. 1990</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-400 pt-1 border-t border-neutral-300/60">
                <span>PEEL &amp; STICK VINYL</span>
                <span className="text-emerald-700 font-bold">&bull; DIE-CUT READY</span>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. PACKAGING BOX SUBSTRATE                                 */}
          {/* ========================================================= */}
          {selectedItem === 'packaging' && (
            <div className="w-full h-full rounded-2xl bg-[#E8E4DC] border-2 border-neutral-400 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.6)] p-3.5 sm:p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Die-cut Score / Fold Crease Lines */}
              <div className="absolute inset-x-0 top-1/3 border-b border-dashed border-neutral-400/80 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-1/3 border-b border-dashed border-neutral-400/80 pointer-events-none" />
              <div className="absolute inset-y-0 left-1/4 border-r border-dashed border-neutral-400/80 pointer-events-none" />
              <div className="absolute inset-y-0 right-1/4 border-r border-dashed border-neutral-400/80 pointer-events-none" />

              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-600 relative z-10">
                <span className="text-[7.5px] bg-neutral-200/80 px-1.5 py-0.5 rounded font-bold">TOP FLAP [CREASE: 0.5mm]</span>
                <span>KRAFT RIGID BOXBOARD</span>
              </div>

              {/* Main Box Face Branding */}
              <div className="my-auto text-center px-4 relative z-10 py-1 bg-white/90 rounded-xl shadow-xs border border-neutral-300/80 mx-2">
                <div className="flex justify-center pb-0.5">
                  <HengSingLogo size="sm" />
                </div>
                <div className="text-[7.5px] font-mono text-neutral-600 tracking-wider mt-0.5">
                  CUSTOM DIE-CUT CARTONS &bull; PRODUCT PACKAGING &bull; KUCHING
                </div>
              </div>

              <div className="flex justify-between items-center text-[7.5px] font-mono text-neutral-500 relative z-10">
                <span>AUTO-LOCK BOTTOM</span>
                <span className="text-[#EA3A19] font-bold">FOOD-GRADE &bull; FSC CERTIFIED</span>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* THE CMYK INK SWEEP / PRINT ROLLER OVERLAY                 */}
          {/* ========================================================= */}
          {/* Unprinted Substrate Mask: Masks the printed artwork based on printProgress */}
          <div
            className="absolute inset-0 bg-neutral-100 pointer-events-none transition-all duration-75 flex flex-col justify-between p-4 border border-dashed border-neutral-300 rounded-2xl"
            style={{
              clipPath: `inset(0 0 0 ${printProgress}%)`,
              opacity: printProgress < 100 ? 0.96 : 0
            }}
          >
            <div className="flex justify-between items-center text-[8px] font-mono text-neutral-400">
              <span>RAW SUBSTRATE &bull; UNPRINTED</span>
              <span>FEED ROLLERS ACTIVE</span>
            </div>
            <div className="text-center my-auto">
              <span className="text-[10px] font-mono text-neutral-400 font-bold block">
                [ BLANK SUBSTRATE ]
              </span>
              <span className="text-[8px] font-mono text-neutral-400">
                Waiting for 4-Color CMYK Ink Laydown
              </span>
            </div>
            <div className="text-[7.5px] font-mono text-neutral-400 flex justify-between">
              <span>GRIPPER MARGIN: 12mm</span>
              <span>CALIPER: {currentSpec.badge}</span>
            </div>
          </div>

          {/* Moving CMYK Laser / Print Head Cursor Line */}
          {isPrinting && (
            <div
              className="absolute top-0 bottom-0 w-2 pointer-events-none z-40 transition-all duration-75 flex flex-col items-center justify-between"
              style={{ left: `${printProgress}%`, transform: 'translateX(-50%)' }}
            >
              {/* Cyan, Magenta, Yellow, Key laser glow bar */}
              <div className="w-1.5 h-full rounded-full bg-gradient-to-b from-[#00E5FF] via-[#FF007F] via-[#FFEB3B] to-neutral-900 shadow-[0_0_16px_4px_rgba(0,229,255,0.7)]" />
              
              {/* Print Head Indicator Pill */}
              <div className="absolute top-1 bg-black text-white text-[7px] font-mono px-1 py-0.5 rounded shadow-md whitespace-nowrap">
                CMYK HEAD
              </div>
            </div>
          )}
        </div>

        {/* Hover / Tilt Hint Pill */}
        <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
          <span className="px-3 py-0.5 rounded-full bg-black/75 border border-neutral-700/80 text-[9px] font-mono text-neutral-300 flex items-center gap-1.5 backdrop-blur-xs shadow-md">
            <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            <span>Move cursor to tilt &bull; Inspect Spot UV &amp; Foil</span>
          </span>
        </div>
      </div>

      {/* Bottom Controls: Process Plate Selector & Live Specs */}
      <div className="w-full mt-3 space-y-2">
        {/* Plate Selector Tabs (All, C, M, Y, K) */}
        <div className="flex items-center justify-between gap-1 p-1 rounded-xl bg-neutral-100 border border-neutral-200 text-[10px] font-mono">
          <span className="text-neutral-500 px-1 font-semibold flex items-center gap-1">
            <Layers className="w-3 h-3 text-neutral-600" />
            <span>Plate:</span>
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setActivePlate('all')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'all'
                  ? 'bg-neutral-900 text-white font-bold shadow-2xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              All CMYK
            </button>
            <button
              onClick={() => setActivePlate('c')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'c'
                  ? 'bg-[#00E5FF]/20 text-cyan-800 font-bold border border-[#00E5FF]/60'
                  : 'text-neutral-500 hover:text-cyan-700'
              }`}
            >
              Cyan (C)
            </button>
            <button
              onClick={() => setActivePlate('m')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'm'
                  ? 'bg-[#FF007F]/20 text-rose-800 font-bold border border-[#FF007F]/60'
                  : 'text-neutral-500 hover:text-rose-700'
              }`}
            >
              Magenta (M)
            </button>
            <button
              onClick={() => setActivePlate('y')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'y'
                  ? 'bg-[#FFEB3B]/30 text-amber-900 font-bold border border-[#FFEB3B]/80'
                  : 'text-neutral-500 hover:text-amber-800'
              }`}
            >
              Yellow (Y)
            </button>
            <button
              onClick={() => setActivePlate('k')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'k'
                  ? 'bg-neutral-800 text-white font-bold border border-neutral-600'
                  : 'text-neutral-500 hover:text-neutral-950'
              }`}
            >
              Black (K)
            </button>
          </div>
        </div>

        {/* Live Substrate & Finishing Specs Card */}
        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-between text-[11px] font-mono text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-bold text-neutral-900">{currentSpec.substrate}</span>
          </div>
          <span className="text-[10px] text-neutral-500 truncate max-w-[180px] text-right">
            {currentSpec.finish}
          </span>
        </div>
      </div>
    </div>
  );
};
