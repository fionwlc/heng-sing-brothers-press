import React from 'react';

export interface HengSingLogoProps {
  className?: string;
  variant?: 'color' | 'white' | 'dark' | 'monochrome';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showRegistrationMarks?: boolean;
}

export const HengSingLogo: React.FC<HengSingLogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showRegistrationMarks = false,
}) => {
  // Brand color definitions
  const fillColor = {
    color: '#EA3A19', // The exact vermilion red from the official logo
    white: '#FFFFFF',
    dark: '#171717',
    monochrome: 'currentColor',
  }[variant];

  // Size mapping (height in px, preserving the ~3.95:1 aspect ratio of 380x96)
  const sizeStyles = {
    xs: 'h-6',
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  }[size];

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      {showRegistrationMarks && (
        <div className="absolute -inset-2 pointer-events-none opacity-30 flex items-center justify-between">
          <span className="w-1.5 h-1.5 border-t border-l border-neutral-400" />
          <span className="w-1.5 h-1.5 border-t border-r border-neutral-400" />
        </div>
      )}
      
      <svg
        viewBox="0 0 380 96"
        className={`w-auto ${sizeStyles} transition-all duration-200`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Heng Sing Brothers Press Logo"
        role="img"
      >
        <defs>
          <style>
            {`
              .hsbp-font-top {
                font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                font-weight: 800;
                font-size: 51px;
                letter-spacing: 0.04em;
              }
              .hsbp-font-sub {
                font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                font-weight: 800;
                font-size: 21.6px;
                letter-spacing: 0.298em;
              }
            `}
          </style>
        </defs>

        {/* Top Primary Line: HENG SING */}
        <text
          x="1"
          y="48"
          fill={fillColor}
          className="hsbp-font-top"
        >
          HENG SING
        </text>

        {/* Bottom Sub-Line: BROTHERS PRESS */}
        <text
          x="2.5"
          y="84"
          fill={fillColor}
          className="hsbp-font-sub"
        >
          BROTHERS PRESS
        </text>
      </svg>
    </div>
  );
};
