import React, { useState, useMemo } from 'react';
import { X, Check, Calculator, Sparkles, FileText, Send, CheckCircle2, Clock, ShieldAlert } from 'lucide-react';
import { PRINTING_SERVICES } from '../data/printingServices';

interface PrintEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const PrintEstimatorModal: React.FC<PrintEstimatorModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'offset'
}) => {
  const [serviceId, setServiceId] = useState<string>(initialServiceId);
  const [productType, setProductType] = useState<string>('lookbook');
  const [quantity, setQuantity] = useState<number>(1000);
  const [paperStock, setPaperStock] = useState<string>('munken-300');
  const [selectedFinishes, setSelectedFinishes] = useState<string[]>(['spot-uv']);
  const [turnaround, setTurnaround] = useState<'economy' | 'standard' | 'rush'>('standard');
  const [proofType, setProofType] = useState<'pdf' | 'hardcopy'>('pdf');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  // Synchronize when initialServiceId changes
  React.useEffect(() => {
    if (initialServiceId) {
      setServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  // Product presets
  const productOptions: Record<string, { id: string; label: string; baseCost: number }[]> = {
    offset: [
      { id: 'art-book', label: 'Hardcover Fine Art Book (128 pp)', baseCost: 1800 },
      { id: 'lookbook', label: 'Retail Lookbook / Magazine (48 pp)', baseCost: 650 },
      { id: 'corporate-report', label: 'Corporate Annual Report with Gatefold', baseCost: 920 }
    ],
    digital: [
      { id: 'giclee-folio', label: 'Numbered Archival Folio (12 prints)', baseCost: 280 },
      { id: 'deck', label: 'Executive Presentation Deck (Wire-O)', baseCost: 190 },
      { id: 'vip-invite', label: 'Duplexed Event Invitations + Envelope', baseCost: 220 }
    ],
    packaging: [
      { id: 'magnetic-box', label: 'Rigid Magnetic Luxury Keepsake Box', baseCost: 1200 },
      { id: 'folding-carton', label: 'Cosmetic Folding Carton with Window', baseCost: 450 },
      { id: 'mailer-box', label: 'E-Commerce Corrugated Kraft Mailer', baseCost: 550 }
    ],
    'large-format': [
      { id: 'lightbox', label: 'SEG Backlit Fabric Display Graphic', baseCost: 350 },
      { id: 'dibond', label: 'Direct-to-Brushed Dibond Gallery Panel', baseCost: 480 },
      { id: 'glass-mural', label: 'Optically Clear Frosted Window Film', baseCost: 390 }
    ],
    finishing: [
      { id: 'gilded-cards', label: 'Triplex 900gsm Edge-Gilded Business Cards', baseCost: 380 },
      { id: 'foil-poster', label: 'Holographic Stamped Limited Edition Poster', baseCost: 420 },
      { id: 'embossed-certificate', label: 'Watermarked Security Certificate with Seal', baseCost: 310 }
    ],
    eco: [
      { id: 'algae-book', label: 'Algae Ink Carbon-Negative Catalog', baseCost: 880 },
      { id: 'hemp-box', label: 'Hemp Fiber Unbleached Packaging Box', baseCost: 750 },
      { id: 'seed-card', label: 'Plantable Wildflower Seed Botanical Cards', baseCost: 320 }
    ]
  };

  const currentProducts = productOptions[serviceId] || productOptions.offset;

  const toggleFinish = (id: string) => {
    setSelectedFinishes((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Real-time cost estimation algorithm
  const { total, unitPrice, plateSetup, stockCost, pressRunCost, finishCost } = useMemo(() => {
    const selectedProd = currentProducts.find((p) => p.id === productType) || currentProducts[0];
    const base = selectedProd ? selectedProd.baseCost : 600;

    // Plate & prepress fee: Offset requires 4 CTP plates ($180), digital ($45)
    const plateFee = serviceId === 'offset' ? 220 : serviceId === 'packaging' ? 350 : 65;

    // Unit paper and ink cost scales down with volume
    let perUnit = 0;
    if (quantity <= 250) perUnit = 3.2;
    else if (quantity <= 1000) perUnit = 1.45;
    else if (quantity <= 5000) perUnit = 0.72;
    else perUnit = 0.38;

    if (paperStock === 'hahnemuhle' || paperStock === 'colorplan-350') {
      perUnit += 0.85;
    }

    const calculatedStock = quantity * perUnit;
    const runCost = base + quantity * (serviceId === 'offset' ? 0.28 : 0.45);
    const finishesTotal = selectedFinishes.length * (140 + quantity * 0.18);

    let multiplier = 1.0;
    if (turnaround === 'rush') multiplier = 1.35;
    if (turnaround === 'economy') multiplier = 0.9;
    if (proofType === 'hardcopy') multiplier += 0.05;

    const grandTotal = Math.round((plateFee + calculatedStock + runCost + finishesTotal) * multiplier);
    const calculatedUnitPrice = (grandTotal / quantity).toFixed(2);

    return {
      total: grandTotal,
      unitPrice: calculatedUnitPrice,
      plateSetup: plateFee,
      stockCost: Math.round(calculatedStock),
      pressRunCost: Math.round(runCost),
      finishCost: Math.round(finishesTotal)
    };
  }, [serviceId, productType, quantity, paperStock, selectedFinishes, turnaround, proofType, currentProducts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    const selectedProd = currentProducts.find((p) => p.id === productType);
    const subject = `Print Estimator Inquiry: ${selectedProd?.label || productType} (${quantity} units)`;
    const body = `Hello Heng Sing Brothers Press,

I generated an estimate using your Print Estimator tool:

• Customer Email: ${email}
• Service: ${serviceId}
• Product: ${selectedProd?.label || productType}
• Quantity: ${quantity} units
• Paper Stock: ${paperStock}
• Selected Finishes: ${selectedFinishes.join(', ') || 'None'}
• Turnaround: ${turnaround}
• Proof Type: ${proofType}
• Estimated Total: $${total} ($${unitPrice}/unit)

Please review this specification and contact me.

Thank you!`;

    const mailto = `mailto:hengsing@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base sm:text-lg">
                Instant Print Specification &amp; Proof Estimator
              </h3>
              <span className="text-[10px] font-mono text-neutral-400">
                FOGRA 51 / ISO 12647-2 Spectrophotometer Calibrated
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-2xl text-white">
                Formal Print Docket &amp; Proofing Package Dispatched
              </h4>
              <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                Your detailed production specification has been routed directly to{' '}
                <strong className="text-cyan-400">hengsing@gmail.com</strong> with client contact{' '}
                <strong className="text-cyan-400">{email}</strong>. Our prepress master will review your specifications and contact you shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs font-semibold cursor-pointer"
                >
                  Return to Pressroom
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Config Left (7 Cols) */}
              <div className="lg:col-span-7 space-y-5">
                {/* 1. Discipline */}
                <div>
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    1. Print Discipline
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {PRINTING_SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => {
                          setServiceId(s.id);
                          const prods = productOptions[s.id];
                          if (prods && prods[0]) setProductType(prods[0].id);
                        }}
                        className={`p-2 rounded-xl text-left border transition-all text-xs font-mono truncate cursor-pointer ${
                          serviceId === s.id
                            ? 'bg-neutral-800 border-cyan-400 text-white font-bold ring-1 ring-cyan-400/40'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span className="block truncate">{s.name.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Product Format */}
                <div>
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    2. Product Architecture
                  </label>
                  <div className="space-y-2">
                    {currentProducts.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => setProductType(prod.id)}
                        className={`w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between text-xs cursor-pointer ${
                          productType === prod.id
                            ? 'bg-neutral-800 border-cyan-400 text-white font-bold'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        <span>{prod.label}</span>
                        {productType === prod.id && <Check className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Quantity Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-mono mb-2">
                    <span className="text-cyan-400 uppercase tracking-wider">3. Production Quantity</span>
                    <span className="text-white font-bold text-sm bg-neutral-800 px-2.5 py-0.5 rounded border border-neutral-700">
                      {quantity.toLocaleString()} units
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-neutral-400 mt-1">
                    <span>50 (Short Run)</span>
                    <span>1,000 (Standard)</span>
                    <span>10,000 (Commercial High Volume)</span>
                  </div>
                </div>

                {/* 4. Substrate */}
                <div>
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    4. Certified Paper Stock
                  </label>
                  <select
                    value={paperStock}
                    onChange={(e) => setPaperStock(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="munken-300">Munken Lynx Pure 300gsm (Rough Uncoated Premium)</option>
                    <option value="fedrigoni-340">Fedrigoni Splendorgel 340gsm (Ultra-Smooth Velvet)</option>
                    <option value="colorplan-350">Colorplan Ebony 350gsm (Dyed Solid Black Core)</option>
                    <option value="hahnemuhle">Hahnemühle 100% Cotton Rag 308gsm (Museum Archival)</option>
                    <option value="magno-silk">Magno Satin Silk 250gsm (High-Gloss Coated)</option>
                    <option value="kraft-e-flute">Unbleached FSC Recycled Kraft (E-Flute Structural)</option>
                  </select>
                </div>

                {/* 5. Embellishments */}
                <div>
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    5. Specialty Embellishments (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'spot-uv', name: 'Scodix 3D Spot UV' },
                      { id: 'gold-foil', name: '24K Hot Gold Foil' },
                      { id: 'deboss', name: 'Multi-Level Blind Deboss' },
                      { id: 'gilded-edge', name: 'Mirror Edge Gilding' }
                    ].map((fin) => (
                      <button
                        key={fin.id}
                        type="button"
                        onClick={() => toggleFinish(fin.id)}
                        className={`p-2 rounded-xl text-left border transition-all text-xs font-mono flex items-center justify-between cursor-pointer ${
                          selectedFinishes.includes(fin.id)
                            ? 'bg-neutral-800 border-yellow-400 text-white font-bold'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <span className="truncate">{fin.name}</span>
                        {selectedFinishes.includes(fin.id) && (
                          <Check className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Turnaround Speed */}
                <div>
                  <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                    6. Turnaround &amp; Schedule
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'economy', label: 'Economy (7 Days)', desc: '-10% Discount' },
                      { id: 'standard', label: 'Standard (4 Days)', desc: 'Standard Dispatch' },
                      { id: 'rush', label: 'Priority Rush (48h)', desc: 'Express Production' }
                    ].map((turn) => (
                      <button
                        key={turn.id}
                        type="button"
                        onClick={() => setTurnaround(turn.id as any)}
                        className={`p-2 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                          turnaround === turn.id
                            ? 'bg-neutral-800 border-cyan-400 text-white font-bold'
                            : 'bg-neutral-900/60 border-neutral-800 text-neutral-400'
                        }`}
                      >
                        <span className="block font-mono font-semibold">{turn.label}</span>
                        <span className="text-[10px] text-neutral-400 block">{turn.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price Breakdown & Proof Request Right (5 Cols) */}
              <div className="lg:col-span-5 bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 sm:p-6 space-y-5">
                <div className="pb-3 border-b border-neutral-800">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase block">
                    Calculated Production Cost
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-display font-black text-white">${total.toLocaleString()}</span>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">(${unitPrice} / unit)</span>
                  </div>
                </div>

                {/* Detailed cost ledger */}
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-neutral-400">
                    <span>CTP Prepress &amp; Plate Calibration</span>
                    <span className="text-neutral-200">${plateSetup}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Certified Paper Stock</span>
                    <span className="text-neutral-200">${stockCost}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Synchronized Press Inking Run</span>
                    <span className="text-neutral-200">${pressRunCost}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Bindery &amp; Tactile Embellishments</span>
                    <span className="text-neutral-200">${finishCost}</span>
                  </div>
                </div>

                {/* Contract Proof selection */}
                <div className="pt-3 border-t border-neutral-800">
                  <label className="text-xs font-mono text-neutral-300 block mb-2">Select Proof Standard</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setProofType('pdf')}
                      className={`p-2 rounded-xl text-left border text-xs font-mono cursor-pointer ${
                        proofType === 'pdf'
                          ? 'bg-neutral-800 border-cyan-400 text-white font-bold'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <span>Digital Soft Proof</span>
                      <span className="text-[9px] text-neutral-400 block mt-0.5">2-Hour PDF Check</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setProofType('hardcopy')}
                      className={`p-2 rounded-xl text-left border text-xs font-mono cursor-pointer ${
                        proofType === 'hardcopy'
                          ? 'bg-neutral-800 border-cyan-400 text-white font-bold'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <span>Contract Hard Proof</span>
                      <span className="text-[9px] text-emerald-400 block mt-0.5">Physical Press Sheet</span>
                    </button>
                  </div>
                </div>

                {/* Dispatch Form */}
                <form onSubmit={handleSubmit} className="pt-2 space-y-3">
                  <div>
                    <label className="text-xs font-mono text-neutral-400 block mb-1">
                      Email for Production Proof &amp; PDF Docket
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="design-director@studio.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 text-xs font-mono focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Lock In Specification &amp; Dispatch to hengsing@gmail.com</span>
                  </button>
                </form>

                <p className="text-[10px] font-mono text-neutral-400 text-center flex items-center justify-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-cyan-400" />
                  Direct inquiries to hengsing@gmail.com &bull; Prices valid for 30 days
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
