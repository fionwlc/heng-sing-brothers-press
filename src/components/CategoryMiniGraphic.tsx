import React from 'react';

interface CategoryMiniGraphicProps {
  categoryId: string;
  accentColor: string;
  isHovered?: boolean;
}

export const CategoryMiniGraphic: React.FC<CategoryMiniGraphicProps> = ({
  categoryId,
  accentColor,
  isHovered = false
}) => {
  switch (categoryId) {
    case 'packaging-boxes':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Isometric Packaging Box Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Box Base shadow */}
            <ellipse cx="20" cy="34" rx="14" ry="4" fill="rgba(0,0,0,0.12)" />
            {/* Box Top Flap */}
            <polygon
              points="20,8 32,14 20,20 8,14"
              fill={isHovered ? '#FDE047' : '#FBBF24'}
              stroke="#D97706"
              strokeWidth="0.8"
            />
            {/* Box Left Panel */}
            <polygon
              points="8,14 20,20 20,32 8,26"
              fill={isHovered ? '#F59E0B' : '#D97706'}
              stroke="#B45309"
              strokeWidth="0.8"
            />
            {/* Box Right Panel */}
            <polygon
              points="20,20 32,14 32,26 20,32"
              fill={isHovered ? '#D97706' : '#B45309'}
              stroke="#92400E"
              strokeWidth="0.8"
            />
            {/* Center Fold crease line */}
            <line x1="20" y1="20" x2="20" y2="32" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
          </svg>
        </div>
      );

    case 'signage-large-format':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Roll-up Banner / Signage Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Base Stand */}
            <rect x="10" y="32" width="20" height="3" rx="1.5" fill="#475569" />
            <line x1="20" y1="8" x2="20" y2="32" stroke="#64748B" strokeWidth="1.2" />
            {/* Banner Canvas */}
            <rect
              x="12"
              y="9"
              width="16"
              height="22"
              rx="1"
              fill={isHovered ? '#60A5FA' : '#3B82F6'}
              stroke="#2563EB"
              strokeWidth="0.8"
            />
            {/* Banner Graphic Elements */}
            <rect x="14" y="12" width="12" height="3" rx="0.5" fill="#FFFFFF" opacity="0.9" />
            <rect x="14" y="17" width="8" height="1.5" rx="0.5" fill="#DBEAFE" />
            <rect x="14" y="20" width="10" height="1.5" rx="0.5" fill="#DBEAFE" />
            <circle cx="23" cy="25" r="2.5" fill="#EA3A19" />
          </svg>
        </div>
      );

    case 'apparel-fabric':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* T-Shirt / Fabric Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Shirt Silhouette */}
            <path
              d="M13,11 L16,14 C17.5,15 22.5,15 24,14 L27,11 L35,16 L31,21 L28,19 L28,33 L12,33 L12,19 L9,21 L5,16 Z"
              fill={isHovered ? '#FB7185' : '#E11D48'}
              stroke="#BE123C"
              strokeWidth="0.8"
            />
            {/* Collar Neckline */}
            <path d="M16,11 C17.5,13.5 22.5,13.5 24,11" fill="none" stroke="#FFF" strokeWidth="1" />
            {/* Chest Logo Emblem */}
            <rect x="17" y="19" width="6" height="4" rx="1" fill="#FFF" opacity="0.9" />
          </svg>
        </div>
      );

    case 'promotional-gifts':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Insulated Flask & Pen Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Flask Body */}
            <rect x="11" y="14" width="10" height="19" rx="2" fill={isHovered ? '#64748B' : '#475569'} />
            {/* Flask Cap */}
            <rect x="12" y="10" width="8" height="4" rx="1" fill="#94A3B8" />
            {/* Flask Band Accent */}
            <rect x="11" y="20" width="10" height="3" fill="#EA3A19" />
            {/* Pen Beside */}
            <rect x="25" y="12" width="3" height="20" rx="1.5" fill="#38BDF8" />
            <polygon points="25,32 28,32 26.5,35" fill="#1E293B" />
            <rect x="24.5" y="15" width="4" height="2" fill="#E2E8F0" />
          </svg>
        </div>
      );

    case 'photo-canvas':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Framed Canvas Art Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Shadow */}
            <rect x="8" y="10" width="24" height="20" rx="1.5" fill="rgba(0,0,0,0.15)" />
            {/* Canvas Outer Frame */}
            <rect
              x="7"
              y="9"
              width="24"
              height="20"
              rx="1.5"
              fill="#FFFFFF"
              stroke="#D1D5DB"
              strokeWidth="1"
            />
            {/* Canvas Artwork (Mountain & Sun) */}
            <rect x="9" y="11" width="20" height="16" fill="#ECFDF5" />
            <circle cx="15" cy="15" r="2.5" fill="#F59E0B" />
            <polygon points="9,27 16,19 23,27" fill={isHovered ? '#34D399' : '#10B981'} />
            <polygon points="17,27 23,21 29,27" fill={isHovered ? '#059669' : '#047857'} opacity="0.85" />
          </svg>
        </div>
      );

    case 'stickers-labels':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Kiss-cut Peelable Sticker Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Backing Sheet */}
            <rect x="8" y="8" width="24" height="24" rx="3" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="0.8" />
            {/* Circle Sticker with Peeling Corner */}
            <path
              d="M20,12 C24.4,12 28,15.6 28,20 C28,24.4 24.4,28 20,28 C15.6,28 12,24.4 12,20 C12,15.6 15.6,12 20,12 Z"
              fill={isHovered ? '#FB7185' : '#F43F5E'}
            />
            {/* Peeling Tab Effect */}
            <polygon points="26,14 28,20 22,20" fill="#FFFFFF" opacity="0.95" />
            <line x1="22" y1="20" x2="28" y2="20" stroke="#E11D48" strokeWidth="0.5" />
            {/* Center Star / Smile */}
            <circle cx="19" cy="20" r="2" fill="#FFFFFF" />
          </svg>
        </div>
      );

    case 'souvenirs':
      return (
        <div className="w-10 h-10 relative flex items-center justify-center">
          {/* Gold Crested Certificate / Keepsake Graphic */}
          <svg viewBox="0 0 40 40" className="w-9 h-9 transition-transform duration-200 group-hover:scale-110">
            {/* Certificate Paper */}
            <rect
              x="9"
              y="9"
              width="22"
              height="22"
              rx="1.5"
              fill="#FAF5FF"
              stroke="#D8B4FE"
              strokeWidth="0.8"
            />
            {/* Border Inset */}
            <rect x="11" y="11" width="18" height="18" fill="none" stroke="#C084FC" strokeWidth="0.5" strokeDasharray="1,1" />
            {/* Gold Seal with Ribbons */}
            <circle cx="20" cy="18" r="4" fill="#FBBF24" stroke="#D97706" strokeWidth="0.5" />
            <polygon points="18,21 17,27 20,25 23,27 22,21" fill="#DC2626" />
            <circle cx="20" cy="18" r="2.2" fill="#F59E0B" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-2xs"
          style={{ backgroundColor: accentColor }}
        >
          <div className="w-3.5 h-3.5 rounded-full bg-white/40" />
        </div>
      );
  }
};
