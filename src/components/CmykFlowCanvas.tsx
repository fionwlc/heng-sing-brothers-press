import React, { useEffect, useRef } from 'react';
import { HENG_SING_CATEGORIES } from '../data/hengSingContent';

interface CmykFlowCanvasProps {
  activeCategoryIndex: number;
  scrollProgress: number;
}

export const CmykFlowCanvas: React.FC<CmykFlowCanvasProps> = ({
  activeCategoryIndex,
  scrollProgress
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Ink particles and flow waves
    let mouseX = width * 0.5;
    let mouseY = height * 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.008;

      // Base clear
      ctx.clearRect(0, 0, width, height);

      // Get target CMYK values from current active category
      const currentCat = HENG_SING_CATEGORIES[activeCategoryIndex] || HENG_SING_CATEGORIES[0];
      const { c, m, y, k } = currentCat.cmykValues;

      // Calculate fluid stream wave parameters modulated by scroll and CMYK weights
      const cyanIntensity = (c / 100) * 0.16 + 0.04;
      const magentaIntensity = (m / 100) * 0.16 + 0.04;
      const yellowIntensity = (y / 100) * 0.18 + 0.05;

      ctx.save();
      ctx.globalCompositeOperation = 'multiply';

      // 1. CYAN FLUID WAVE (Top to bottom gentle sweep)
      ctx.fillStyle = `rgba(0, 163, 224, ${cyanIntensity})`;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= width; x += 40) {
        const wave =
          Math.sin(x * 0.002 + time + scrollProgress * 4) * 60 +
          Math.cos(x * 0.005 - time * 0.8) * 35;
        const mouseEffect = Math.max(0, 100 - Math.abs(x - mouseX)) * 0.3;
        ctx.lineTo(x, height * 0.28 + wave + mouseEffect);
      }
      ctx.lineTo(width, 0);
      ctx.closePath();
      ctx.fill();

      // 2. MAGENTA FLUID WAVE (Diagonal sweeping wave)
      ctx.fillStyle = `rgba(230, 0, 126, ${magentaIntensity})`;
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 40) {
        const wave =
          Math.cos(x * 0.0025 + time * 1.2 + scrollProgress * 3.5) * 70 +
          Math.sin(x * 0.004 + time) * 30;
        const mouseEffect = Math.max(0, 100 - Math.abs(x - mouseX)) * 0.25;
        ctx.lineTo(x, height * 0.65 - wave - mouseEffect);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();

      // 3. YELLOW FLUID STREAM (Center warm glow intersection)
      ctx.fillStyle = `rgba(255, 237, 0, ${yellowIntensity})`;
      ctx.beginPath();
      const centerY = height * (0.45 + scrollProgress * 0.15);
      ctx.arc(
        width * 0.8 + Math.cos(time) * 40,
        centerY + Math.sin(time * 1.2) * 30,
        width * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeCategoryIndex, scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-700"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
