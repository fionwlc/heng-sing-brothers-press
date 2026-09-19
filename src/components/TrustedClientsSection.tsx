import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRUSTED_CLIENTS } from '../data/trustedClients';

interface TrustedClientsSectionProps {
  onOpenQuote?: () => void;
  onNavigateTo?: (view: string) => void;
}

export const TrustedClientsSection: React.FC<TrustedClientsSectionProps> = () => {
  const { t, language } = useLanguage();

  return (
    <section id="trusted-by-clients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <span className="text-xs font-mono font-bold text-[#C83B25] uppercase tracking-wider block">
          &bull; {t.trustProof.tag}
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-black text-neutral-900 tracking-tight capitalize">
          {t.trustProof.title}
        </h2>
      </div>

      {/* Logos Display Grid - Purely images, non-link, consistently presented */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 items-center">
        {TRUSTED_CLIENTS.map((client, index) => {
          const clientName = client.name[language] || client.name.en;
          const isLastClient = index === TRUSTED_CLIENTS.length - 1 || client.id === 'mysed';
          // Directly reference original image asset for the last client logo
          const imageSrc = isLastClient ? (client.logoUrl || 'public/clients/mysed.svg') : client.logoUrl;

          return (
            <div
              key={client.id}
              id={`client-logo-card-${client.id}`}
              className="h-24 sm:h-28 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center justify-center p-3.5 sm:p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs"
              title={clientName}
            >
              <img
                id={`client-logo-img-${client.id}`}
                src={imageSrc}
                alt={clientName}
                className="max-h-14 sm:max-h-16 max-w-[85%] w-auto h-auto object-contain filter-none"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // If PNG path is not found, smoothly fall back to SVG asset
                  if (isLastClient && !e.currentTarget.src.endsWith('.svg')) {
                    e.currentTarget.src = 'public/clients/mysed.svg';
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
