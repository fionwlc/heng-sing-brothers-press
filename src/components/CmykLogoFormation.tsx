import React, { useState, useEffect } from 'react';
import { Sparkles, Sliders, CheckCircle2, RefreshCw } from 'lucide-react';

interface CmykLogoFormationProps {
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  autoAnimateOnScroll?: boolean;
}

export const CmykLogoFormation: React.FC<CmykLogoFormationProps> = ({
  size = 'md',
  interactive = true,
  autoAnimateOnScroll = false,
}) => {
  // Misregistration offset: 0 is perfect alignment, 1 is separated plates
  const [offset, setOffset] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [activePlate, setActivePlate] = useState<'all' | 'c' | 'm' | 'y' | 'k'>('all');

  // Auto-pulse or scroll-triggered convergence
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoAnimateOnScroll && !isHovered) {
      let step = 0;
      interval = setInterval(() => {
        step = (step + 1) % 180;
        const wave = Math.abs(Math.sin((step * Math.PI) / 90)) * 0.45;
        setOffset(wave);
      }, 50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoAnimateOnScroll, isHovered]);

  const dims = {
    sm: { box: 'w-full max-w-xs h-36', viewBox: '0 0 380 140' },
    md: { box: 'w-full max-w-md h-44 sm:h-48', viewBox: '0 0 380 140' },
    lg: { box: 'w-full max-w-lg h-56 sm:h-64', viewBox: '0 0 380 140' },
  }[size];

  // Plate displacement calculations based on standard offset screen angles:
  // Cyan: 15° | Magenta: 75° | Yellow: 0° | Key: 45°
  const maxDisplacement = size === 'lg' ? 22 : size === 'md' ? 16 : 10;
  const currentDisplacement = offset * maxDisplacement;

  const cyanX = Math.cos((15 * Math.PI) / 180) * currentDisplacement;
  const cyanY = Math.sin((15 * Math.PI) / 180) * currentDisplacement;

  const magX = Math.cos((75 * Math.PI) / 180) * currentDisplacement * -1;
  const magY = Math.sin((75 * Math.PI) / 180) * currentDisplacement;

  const yelX = currentDisplacement * 0.85;
  const yelY = currentDisplacement * -0.65;

  const keyX = Math.cos((45 * Math.PI) / 180) * currentDisplacement * 0.35;
  const keyY = Math.sin((45 * Math.PI) / 180) * currentDisplacement * 0.35;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Interactive Registration Stage */}
      <div
        className={`relative ${dims.box} flex items-center justify-center p-4 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl backdrop-blur-xl group cursor-pointer transition-all overflow-hidden`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setOffset(offset === 0 ? 0.65 : 0)}
      >
        {/* Subtle Prepress Registration Grid Background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Registration crosshairs in corners */}
        <div className="absolute top-2.5 left-3 flex items-center gap-1 opacity-50 font-mono text-[9px] text-neutral-400 select-none pointer-events-none">
          <span className="w-2.5 h-2.5 border-t border-l border-neutral-400" />
          <span>REG &bull; C1</span>
        </div>
        <div className="absolute top-2.5 right-3 flex items-center gap-1 opacity-50 font-mono text-[9px] text-neutral-400 select-none pointer-events-none">
          <span>&plusmn;0.01mm</span>
          <span className="w-2.5 h-2.5 border-t border-r border-neutral-400" />
        </div>
        <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 opacity-50 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full border border-neutral-400 flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-neutral-400 rounded-full" />
          </div>
          <span>OFFSET PLATES</span>
        </div>
        <div className="absolute bottom-2.5 right-3 opacity-50 font-mono text-[8px] text-neutral-400 select-none pointer-events-none">
          FOGRA 51 &bull; 2400 DPI
        </div>

        {/* The 4-Plate Layered Brand Mark */}
        <svg
          viewBox="0 0 380 140"
          className="w-full h-full filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)] select-none"
        >
          <defs>
            <style>
              {`
                .cmyk-title {
                  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  font-weight: 800;
                  font-size: 48px;
                  letter-spacing: 0.04em;
                }
                .cmyk-sub {
                  font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  font-weight: 800;
                  font-size: 20px;
                  letter-spacing: 0.298em;
                }
              `}
            </style>
          </defs>

          {/* Registration Crosshair Center Marker */}
          <g opacity="0.25" stroke="#737373" strokeWidth="0.8">
            <line x1="190" y1="10" x2="190" y2="130" strokeDasharray="2 3" />
            <line x1="20" y1="70" x2="360" y2="70" strokeDasharray="2 3" />
            <circle cx="190" cy="70" r="16" fill="none" />
            <circle cx="190" cy="70" r="8" fill="none" />
          </g>

          {/* If Offset is 0 and All Plates Active: Render Perfectly Registered Brand Logo */}
          {offset === 0 && activePlate === 'all' ? (
            <g className="transition-all duration-300">
              {/* Subtle Cyan and Yellow edge halo for authentic print luster */}
              <text x="25" y="66" fill="#00E5FF" opacity="0.2" className="cmyk-title" transform="translate(-0.5, -0.5)">
                HENG SING
              </text>
              <text x="26.5" y="102" fill="#00E5FF" opacity="0.2" className="cmyk-sub" transform="translate(-0.5, -0.5)">
                BROTHERS PRESS
              </text>

              {/* Master Vermilion Brand Color */}
              <text x="25" y="66" fill="#EA3A19" className="cmyk-title">
                HENG SING
              </text>
              <text x="26.5" y="102" fill="#EA3A19" className="cmyk-sub">
                BROTHERS PRESS
              </text>
            </g>
          ) : (
            /* CMYK Plates Layering */
            <>
              {/* 1. CYAN PLATE (15° screen angle) */}
              {(activePlate === 'all' || activePlate === 'c') && (
                <g
                  transform={`translate(${cyanX}, ${cyanY})`}
                  className="transition-transform duration-200"
                  style={{ mixBlendMode: 'screen', opacity: activePlate === 'c' ? 1 : 0.85 }}
                >
                  <text x="25" y="66" fill="#00E5FF" className="cmyk-title">
                    HENG SING
                  </text>
                  <text x="26.5" y="102" fill="#00E5FF" className="cmyk-sub">
                    BROTHERS PRESS
                  </text>
                </g>
              )}

              {/* 2. MAGENTA PLATE (75° screen angle) */}
              {(activePlate === 'all' || activePlate === 'm') && (
                <g
                  transform={`translate(${magX}, ${magY})`}
                  className="transition-transform duration-200"
                  style={{ mixBlendMode: 'screen', opacity: activePlate === 'm' ? 1 : 0.85 }}
                >
                  <text x="25" y="66" fill="#FF007F" className="cmyk-title">
                    HENG SING
                  </text>
                  <text x="26.5" y="102" fill="#FF007F" className="cmyk-sub">
                    BROTHERS PRESS
                  </text>
                </g>
              )}

              {/* 3. YELLOW PLATE (0° screen angle) */}
              {(activePlate === 'all' || activePlate === 'y') && (
                <g
                  transform={`translate(${yelX}, ${yelY})`}
                  className="transition-transform duration-200"
                  style={{ mixBlendMode: 'screen', opacity: activePlate === 'y' ? 1 : 0.85 }}
                >
                  <text x="25" y="66" fill="#FFEB3B" className="cmyk-title">
                    HENG SING
                  </text>
                  <text x="26.5" y="102" fill="#FFEB3B" className="cmyk-sub">
                    BROTHERS PRESS
                  </text>
                </g>
              )}

              {/* 4. KEY BLACK / BRAND PLATE (45° screen angle) */}
              {(activePlate === 'all' || activePlate === 'k') && (
                <g
                  transform={`translate(${keyX}, ${keyY})`}
                  className="transition-transform duration-200"
                  style={{ mixBlendMode: activePlate === 'all' ? 'screen' : 'normal', opacity: activePlate === 'k' ? 1 : 0.9 }}
                >
                  <text x="25" y="66" fill={activePlate === 'k' ? '#FFFFFF' : '#E63917'} className="cmyk-title">
                    HENG SING
                  </text>
                  <text x="26.5" y="102" fill={activePlate === 'k' ? '#FFFFFF' : '#E63917'} className="cmyk-sub">
                    BROTHERS PRESS
                  </text>
                </g>
              )}
            </>
          )}

          {/* Color Registration Control Bar at base */}
          <g transform="translate(60, 126)">
            <rect x="0" y="0" width="30" height="4" fill="#00E5FF" rx="1" />
            <rect x="35" y="0" width="30" height="4" fill="#FF007F" rx="1" />
            <rect x="70" y="0" width="30" height="4" fill="#FFEB3B" rx="1" />
            <rect x="105" y="0" width="30" height="4" fill="#FFFFFF" rx="1" />
            <rect x="140" y="0" width="30" height="4" fill="#EA3A19" rx="1" />
            <text x="180" y="4" fill="#737373" fontSize="6.5" fontFamily="monospace">
              KUCHING OFFSET PRESS &bull; CALIBRATED 100%
            </text>
          </g>
        </svg>

        {/* Hover / Click Hint Pill */}
        <div className="absolute bottom-2 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-3 py-1 rounded-full bg-black/85 border border-neutral-700 text-[10px] font-mono text-cyan-400 flex items-center gap-1.5 shadow-md">
            <RefreshCw className="w-2.5 h-2.5" />
            <span>{offset === 0 ? 'Click to Separate CMYK Plates' : 'Click to Register & Lock Logo'}</span>
          </span>
        </div>
      </div>

      {/* Interactive Plate Controls (If interactive mode) */}
      {interactive && (
        <div className="mt-4 w-full max-w-sm space-y-3">
          {/* Plate Selector Tabs */}
          <div className="flex items-center justify-between gap-1 p-1 rounded-xl bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] font-mono">
            <button
              onClick={() => setActivePlate('all')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'all'
                  ? 'bg-neutral-800 text-white font-bold shadow-xs'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Plates
            </button>
            <button
              onClick={() => setActivePlate('c')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'c'
                  ? 'bg-[#00E5FF]/20 text-[#00E5FF] font-bold border border-[#00E5FF]/40'
                  : 'text-neutral-400 hover:text-[#00E5FF]'
              }`}
            >
              Cyan (15°)
            </button>
            <button
              onClick={() => setActivePlate('m')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'm'
                  ? 'bg-[#FF007F]/20 text-[#FF007F] font-bold border border-[#FF007F]/40'
                  : 'text-neutral-400 hover:text-[#FF007F]'
              }`}
            >
              Magenta (75°)
            </button>
            <button
              onClick={() => setActivePlate('y')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'y'
                  ? 'bg-[#FFEB3B]/20 text-[#FFEB3B] font-bold border border-[#FFEB3B]/40'
                  : 'text-neutral-400 hover:text-[#FFEB3B]'
              }`}
            >
              Yellow (0°)
            </button>
            <button
              onClick={() => setActivePlate('k')}
              className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
                activePlate === 'k'
                  ? 'bg-white/20 text-white font-bold border border-white/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Key (45°)
            </button>
          </div>

          {/* Registration Offset Slider */}
          <div className="px-1">
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1">
              <span className="flex items-center gap-1">
                <Sliders className="w-3 h-3 text-cyan-400" />
                <span>Plate Misregistration:</span>
              </span>
              <span className={offset === 0 ? 'text-emerald-400 font-bold flex items-center gap-1' : 'text-amber-400 font-bold'}>
                {offset === 0 ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>0.00 mm (True Register)</span>
                  </>
                ) : (
                  <span>&plusmn;{(offset * 2.5).toFixed(2)} mm</span>
                )}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={offset}
              onChange={(e) => setOffset(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};
