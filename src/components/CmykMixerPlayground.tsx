import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Palette, Info, AlertTriangle, Sparkles, Sliders, Check, Copy } from 'lucide-react';
import { SAMPLE_COLOR_PRESETS, CMYK_ROSETTE_ANGLES } from '../data/printingServices';
import { CmykColor } from '../types';

export const CmykMixerPlayground: React.FC = () => {
  const [cmyk, setCmyk] = useState<CmykColor>({ c: 100, m: 35, y: 0, k: 10 });
  const [copied, setCopied] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string>('Warm Ultra Blue');

  // Subtractive mixing algorithm
  const { rgb, hex, tac, pantoneApprox } = useMemo(() => {
    const c = cmyk.c / 100;
    const m = cmyk.m / 100;
    const y = cmyk.y / 100;
    const k = cmyk.k / 100;

    const r = Math.round(255 * (1 - c) * (1 - k));
    const g = Math.round(255 * (1 - m) * (1 - k));
    const b = Math.round(255 * (1 - y) * (1 - k));

    const toHex = (val: number) => val.toString(16).padStart(2, '0');
    const hexCode = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();

    const totalAreaCoverage = Math.round(cmyk.c + cmyk.m + cmyk.y + cmyk.k);

    // Approximate closest Pantone color name
    let approx = 'Custom Process Blend';
    if (cmyk.c > 80 && cmyk.m < 30 && cmyk.y < 20) approx = 'Pantone Process Cyan C';
    else if (cmyk.m > 85 && cmyk.c < 20 && cmyk.y < 30) approx = 'Pantone Process Magenta C';
    else if (cmyk.y > 85 && cmyk.c < 20 && cmyk.m < 20) approx = 'Pantone Process Yellow C';
    else if (cmyk.k > 85 && cmyk.c < 30 && cmyk.m < 30) approx = 'Pantone Process Black C';
    else if (cmyk.c > 80 && cmyk.m > 60 && cmyk.y < 15) approx = 'Pantone Reflex Blue C';
    else if (cmyk.c < 15 && cmyk.m > 90 && cmyk.y > 80) approx = 'Pantone Warm Red C';
    else if (cmyk.c > 75 && cmyk.y > 80 && cmyk.m < 25) approx = 'Pantone 355 C (Botanical)';

    return { rgb: `rgb(${r}, ${g}, ${b})`, hex: hexCode, tac: totalAreaCoverage, pantoneApprox: approx };
  }, [cmyk]);

  const handleSlider = (key: keyof CmykColor, val: number) => {
    setCmyk((prev: CmykColor) => ({ ...prev, [key]: val }));
    setActivePreset('');
  };

  const copyHex = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const applyPreset = (preset: (typeof SAMPLE_COLOR_PRESETS)[0]) => {
    setCmyk(preset.cmyk);
    setActivePreset(preset.name);
  };

  return (
    <section id="cmyk-lab" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
          <Palette className="w-3.5 h-3.5" />
          <span>Interactive Subtractive Physics Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
          Master CMYK Pigment Mixing & Rosette Screening
        </h2>
        <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
          Unlike RGB digital screens which emit light additively, offset and digital print ink absorbs light subtractively.
          Blend the four process inks and inspect how microscopic halftone dots interlock on paper fibers.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 4 CMYK Sliders & Total Area Coverage */}
        <div className="lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              Process Ink Flow Ratios
            </h3>
            <span className="text-xs font-mono text-neutral-400">ISO 12647-2</span>
          </div>

          {/* Sliders */}
          <div className="space-y-6">
            {/* Cyan */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#00E5FF] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00e5ff]" />
                  Cyan (C)
                </span>
                <span className="font-mono text-sm text-cyan-300 font-bold">{cmyk.c}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cmyk.c}
                onChange={(e) => handleSlider('c', parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>Screen Angle: {CMYK_ROSETTE_ANGLES.c}°</span>
                <span>Light Absorption: Red Spectrum</span>
              </div>
            </div>

            {/* Magenta */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#FF007F] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF007F] shadow-[0_0_8px_#ff007f]" />
                  Magenta (M)
                </span>
                <span className="font-mono text-sm text-pink-300 font-bold">{cmyk.m}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cmyk.m}
                onChange={(e) => handleSlider('m', parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FF007F]"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>Screen Angle: {CMYK_ROSETTE_ANGLES.m}°</span>
                <span>Light Absorption: Green Spectrum</span>
              </div>
            </div>

            {/* Yellow */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#FFEB3B] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FFEB3B] shadow-[0_0_8px_#ffeb3b]" />
                  Yellow (Y)
                </span>
                <span className="font-mono text-sm text-yellow-300 font-bold">{cmyk.y}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cmyk.y}
                onChange={(e) => handleSlider('y', parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FFEB3B]"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>Screen Angle: {CMYK_ROSETTE_ANGLES.y}°</span>
                <span>Light Absorption: Blue Spectrum</span>
              </div>
            </div>

            {/* Key / Black */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-600" />
                  Key Black (K)
                </span>
                <span className="font-mono text-sm text-neutral-200 font-bold">{cmyk.k}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cmyk.k}
                onChange={(e) => handleSlider('k', parseInt(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-neutral-300"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                <span>Screen Angle: {CMYK_ROSETTE_ANGLES.k}°</span>
                <span>Contrast & Density Anchor</span>
              </div>
            </div>
          </div>

          {/* TAC (Total Area Coverage) Meter */}
          <div className="mt-8 pt-6 border-t border-neutral-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-400" />
                Total Area Coverage (TAC / TIC):
              </span>
              <span className={`font-mono text-xs font-bold ${tac > 320 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {tac}% / 320% max
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  tac > 320 ? 'bg-amber-500' : tac > 280 ? 'bg-cyan-400' : 'bg-emerald-400'
                }`}
                style={{ width: `${Math.min(100, (tac / 400) * 100)}%` }}
              />
            </div>
            {tac > 320 ? (
              <p className="text-[11px] font-mono text-amber-400 mt-2 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 shrink-0" />
                Ink density exceeds 320%. Automatically routed to LED-UV in-line curing to avoid set-off.
              </p>
            ) : (
              <p className="text-[11px] font-mono text-neutral-400 mt-2">
                Optimal ink limit for coated fine-art stocks without drying delays.
              </p>
            )}
          </div>

          {/* Sample Presets */}
          <div className="mt-6 pt-4 border-t border-neutral-800/80">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2.5">
              Curated Press Presets
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_COLOR_PRESETS.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => applyPreset(preset)}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                    activePreset === preset.name
                      ? 'bg-neutral-100 text-neutral-950 font-bold ring-2 ring-cyan-400 shadow-md'
                      : 'bg-neutral-800/90 text-neutral-300 hover:bg-neutral-700'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-black/40"
                    style={{ backgroundColor: preset.hex }}
                  />
                  <span>{preset.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Optical Result & Rosette Halftone Loupe */}
        <div className="lg:col-span-6 space-y-6">
          {/* Main Swatch Preview Card */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center pb-4 border-b border-neutral-800 mb-6">
              <h3 className="font-display font-semibold text-lg text-white">
                Subtractive Print Swatch
              </h3>
              <button
                onClick={copyHex}
                className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Hex' : hex}</span>
              </button>
            </div>

            {/* Large Interactive Color Tile with paper texture simulation */}
            <div
              className="relative w-full h-44 sm:h-52 rounded-xl border border-white/10 shadow-2xl overflow-hidden transition-colors duration-300 flex items-end p-5"
              style={{ backgroundColor: rgb }}
            >
              {/* Paper fiber subtle noise */}
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              {/* In-swatch readout badge */}
              <div className="relative z-10 bg-black/65 backdrop-blur-md border border-white/15 px-4 py-2 rounded-lg text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 block">
                  {pantoneApprox}
                </span>
                <span className="font-display font-bold text-lg sm:text-xl">{hex}</span>
                <span className="text-xs font-mono text-neutral-300 block">
                  C:{cmyk.c} M:{cmyk.m} Y:{cmyk.y} K:{cmyk.k}
                </span>
              </div>
            </div>

            {/* Color metrics strip */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">RGB Equivalent</span>
                <span className="font-mono text-xs text-neutral-200 font-semibold">{rgb}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Spectral Density</span>
                <span className="font-mono text-xs text-cyan-400 font-semibold">
                  {(1.2 + (cmyk.k * 0.01 + cmyk.c * 0.005)).toFixed(2)} D
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block">Press Match</span>
                <span className="font-mono text-xs text-emerald-400 font-semibold">&Delta;E &lt; 0.85</span>
              </div>
            </div>
          </div>

          {/* Microscopic 100x Rosette Halftone Loupe Simulator */}
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 backdrop-blur-md shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-display font-semibold text-sm text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                100× Printmaker Halftone Rosette Loupe
              </h4>
              <span className="text-[10px] font-mono text-neutral-400">AM Halftone 175 LPI</span>
            </div>
            <p className="text-xs text-neutral-400 mb-4">
              Micro-inspection reveals how individual ink dots interlock at specialized angles (C:15°, M:75°, Y:0°, K:45°) to prevent moiré optical interference.
            </p>

            {/* Simulated Rosette SVG Graphic with dynamic dot radii */}
            <div className="relative h-36 w-full rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center overflow-hidden">
              {/* Halftone Loupe Circular Reticle */}
              <div className="w-28 h-28 rounded-full border-2 border-cyan-400/40 shadow-[0_0_15px_rgba(0,229,255,0.2)] flex items-center justify-center relative bg-neutral-900/70 overflow-hidden">
                {/* SVG Rosette Pattern */}
                <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  {/* Cyan dots rotated 15 deg */}
                  <g transform="rotate(15 50 50)" fill="#00E5FF" opacity="0.85">
                    <circle cx="35" cy="35" r={Math.max(0.5, (cmyk.c / 100) * 4.5)} />
                    <circle cx="65" cy="35" r={Math.max(0.5, (cmyk.c / 100) * 4.5)} />
                    <circle cx="35" cy="65" r={Math.max(0.5, (cmyk.c / 100) * 4.5)} />
                    <circle cx="65" cy="65" r={Math.max(0.5, (cmyk.c / 100) * 4.5)} />
                    <circle cx="50" cy="50" r={Math.max(0.5, (cmyk.c / 100) * 4.5)} />
                  </g>
                  {/* Magenta dots rotated 75 deg */}
                  <g transform="rotate(75 50 50)" fill="#FF007F" opacity="0.85">
                    <circle cx="30" cy="40" r={Math.max(0.5, (cmyk.m / 100) * 4.5)} />
                    <circle cx="70" cy="40" r={Math.max(0.5, (cmyk.m / 100) * 4.5)} />
                    <circle cx="40" cy="70" r={Math.max(0.5, (cmyk.m / 100) * 4.5)} />
                    <circle cx="60" cy="70" r={Math.max(0.5, (cmyk.m / 100) * 4.5)} />
                    <circle cx="50" cy="50" r={Math.max(0.5, (cmyk.m / 100) * 4.5)} />
                  </g>
                  {/* Yellow dots 0 deg */}
                  <g fill="#FFEB3B" opacity="0.85">
                    <circle cx="25" cy="50" r={Math.max(0.5, (cmyk.y / 100) * 4.2)} />
                    <circle cx="75" cy="50" r={Math.max(0.5, (cmyk.y / 100) * 4.2)} />
                    <circle cx="50" cy="25" r={Math.max(0.5, (cmyk.y / 100) * 4.2)} />
                    <circle cx="50" cy="75" r={Math.max(0.5, (cmyk.y / 100) * 4.2)} />
                  </g>
                  {/* Key Black dots 45 deg */}
                  <g transform="rotate(45 50 50)" fill="#FFFFFF" opacity="0.9">
                    <circle cx="45" cy="45" r={Math.max(0.3, (cmyk.k / 100) * 4.8)} />
                    <circle cx="55" cy="45" r={Math.max(0.3, (cmyk.k / 100) * 4.8)} />
                    <circle cx="45" cy="55" r={Math.max(0.3, (cmyk.k / 100) * 4.8)} />
                    <circle cx="55" cy="55" r={Math.max(0.3, (cmyk.k / 100) * 4.8)} />
                  </g>
                </svg>
                {/* Cross reticle lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-px bg-white/20" />
                  <div className="h-full w-px bg-white/20 absolute" />
                </div>
              </div>
              <div className="ml-6 space-y-1 text-[11px] font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                  <span>Cyan Angle: 15°</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF007F]" />
                  <span>Magenta Angle: 75°</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFEB3B]" />
                  <span>Yellow Angle: 0°</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>Key Black Angle: 45°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
