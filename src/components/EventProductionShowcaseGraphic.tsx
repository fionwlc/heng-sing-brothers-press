import React from 'react';
import { ShieldCheck, MapPin, QrCode, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface EventProductionShowcaseGraphicProps {
  className?: string;
  onOpenQuote?: () => void;
}

export const EventProductionShowcaseGraphic: React.FC<EventProductionShowcaseGraphicProps> = ({
  className = '',
  onOpenQuote
}) => {
  const { language } = useLanguage();

  const labels = {
    topBadge: language === 'zh'
      ? '大型公关活动与峰会现场一站式物料搭建'
      : language === 'ms'
      ? 'PENGELUARAN PENTAS & BAHAN ACARA SEHENTI'
      : 'ALL-IN-ONE EVENT & STAGE PRODUCTION RIGGING',
    topVenue: language === 'zh'
      ? 'BCCK • 古晋各大五星酒店 • 砂拉越各大展馆'
      : language === 'ms'
      ? 'BCCK • Hotel Terkemuka Kuching • Dewan Konvensyen Sarawak'
      : 'BCCK • Kuching Hotels • Sarawak Convention Centres',
    inHouseBadge: language === 'zh' ? '古晋自营生产与施工' : language === 'ms' ? 'PEMASANGAN DALAMAN KUCHING' : 'IN-HOUSE KUCHING RIGGING',
    stageBackdrop: language === 'zh' ? '主舞台巨幅张力布背景板' : language === 'ms' ? 'Latar Pentas Fabrik Ketegangan' : 'Stage Backdrop Wall (20×10ft)',
    backdropSpec: language === 'zh' ? '防摄影眩光 • 无缝平整' : language === 'ms' ? 'Anti-Silau Kamera • Tanpa Sambungan' : 'Anti-Glare Tension Fabric',
    rollupBunting: language === 'zh' ? '铝合金易拉宝' : language === 'ms' ? 'Bunting Tarik Aluminium' : 'Roll-Up Bunting (85×200cm)',
    buntingSpec: language === 'zh' ? '加厚底座 • 防卷曲PET' : language === 'ms' ? 'Kaset Berat • PET Anti-Gulung' : 'Heavy Base • Anti-Curl PET',
    lanyardBadge: language === 'zh' ? '挂绳与VIP胸卡' : language === 'ms' ? 'Lanyard & Pas VIP' : 'Lanyard & Delegate Badge',
    lanyardSpec: language === 'zh' ? '热升华缎带 • 防伪QR码' : language === 'ms' ? 'Satin Sublimasi • Kod QR' : 'Satin Ribbon + Acrylic Pass',
    programmeGuide: language === 'zh' ? '大会日程指南画册' : language === 'ms' ? 'Buku Atur Cara A5' : 'Programme Guide Booklet',
    guideSpec: language === 'zh' ? 'A5骑马钉 • 哑膜烫金' : language === 'ms' ? 'Jahit Dawai • Kulit Sentuhan Lembut' : 'A5 Saddle-Stitched Agenda',
    souvenirFlask: language === 'zh' ? '激光雕刻保温杯纪念品' : language === 'ms' ? 'Termos Cenderamata VIP' : 'Laser-Engraved Souvenir Flask',
    souvenirSpec: language === 'zh' ? '不锈钢 • 激光精雕' : language === 'ms' ? 'Keluli Tahan Karat • Ukiran Laser' : 'Matte Steel • Laser Etched',
    wovenBag: language === 'zh' ? '定制环保无纺布公文袋' : language === 'ms' ? 'Beg Kanvas / Non-Woven' : 'Custom Printed Woven Bag',
    wovenSpec: language === 'zh' ? '加厚提绳 • 丝印全彩Logo' : language === 'ms' ? 'Tali Kukuh • Cetakan Silkscreen' : 'Reinforced Non-Woven Tote',
    footerAntiGlare: language === 'zh' ? '高精数码色彩校准' : language === 'ms' ? 'Warna Berkalibrasi Tinggi' : 'True-Color Prepress Calibrated',
    footerSameDay: language === 'zh' ? '古晋现场专人提前送达并搭建' : language === 'ms' ? 'Penghantaran & Pemasangan di Tapak Kuching' : 'Delivered & Rigged On-Site in Kuching',
    quoteBtn: language === 'zh' ? '索取活动物料全套报价 &rarr;' : language === 'ms' ? 'Sebut Harga Acara Penuh &rarr;' : 'Get Full Event Quote &rarr;',
  };

  return (
    <div
      className={`relative w-full text-neutral-900 ${className}`}
      id="event-production-graphic-stage"
    >
      {/* Subtle Warm Stage Ambient Glow blending seamlessly into page */}
      <div className="absolute -top-10 left-1/4 w-96 h-96 rounded-full bg-[#C83B25]/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />

      {/* Top Header Information Bar - Blends with page */}
      <div className="relative z-10 pb-3 mb-2 border-b border-neutral-200/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#C83B25] text-white flex items-center justify-center font-display font-black text-xs shadow-xs">
            HS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-display font-bold text-neutral-900 tracking-wide">
                {labels.topBadge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{labels.inHouseBadge}</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 mt-0.5">
              <MapPin className="w-3 h-3 text-[#C83B25]" />
              <span>{labels.topVenue}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Stage Production Setup - Blended with transparent floor */}
      <div className="relative pt-2 pb-4 select-none">
        
        {/* 1. BACKSTAGE LAYER: Tension Fabric Stage Backdrop Wall with Aluminum Truss Frame */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0B1120] border border-neutral-700/60 shadow-xl shadow-neutral-900/10 p-3.5 sm:p-5 overflow-hidden">
          {/* Aluminum Truss Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400 border-b border-neutral-500 shadow-xs flex justify-between px-4">
            <span className="w-2 h-full bg-neutral-600 inline-block" />
            <span className="w-2 h-full bg-neutral-600 inline-block" />
            <span className="w-2 h-full bg-neutral-600 inline-block" />
            <span className="w-2 h-full bg-neutral-600 inline-block" />
          </div>

          {/* Stage Lighting Spotlight Cones */}
          <div className="absolute -top-10 left-12 w-36 h-48 bg-gradient-to-b from-amber-300/20 via-transparent to-transparent -rotate-12 blur-sm pointer-events-none" />
          <div className="absolute -top-10 right-20 w-36 h-48 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent rotate-12 blur-sm pointer-events-none" />

          {/* Backdrop Header & Summit Location */}
          <div className="relative z-10 flex items-center justify-between border-b border-neutral-700/60 pb-2 mb-2 mt-1">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-[7.5px] sm:text-[9px] font-mono uppercase tracking-widest text-amber-300 font-bold">
                SARAWAK BUSINESS &amp; TECH SUMMIT 2025
              </span>
            </div>
            <span className="text-[7px] font-mono text-neutral-300 bg-black/50 px-2 py-0.5 rounded border border-neutral-700">
              BCCK &bull; PLENARY HALL 1
            </span>
          </div>

          {/* Main Backdrop Conference Headline */}
          <div className="relative z-10 py-1 sm:py-2">
            <h4 className="font-display font-black text-sm sm:text-base md:text-xl text-white tracking-tight leading-tight">
              SUSTAINABLE INNOVATION &amp; ENERGY FORUM
            </h4>
            <p className="text-[8px] sm:text-[9.5px] font-mono text-neutral-300 mt-1">
              MINISTERIAL KEYNOTE &bull; GLOBAL PLENARY &bull; TRADE EXHIBITION
            </p>
          </div>

          {/* Backdrop Partner Ribbon */}
          <div className="relative z-10 mt-3 pt-2 border-t border-neutral-800 flex items-center justify-between gap-1 text-[7px] font-mono text-neutral-400">
            <span className="uppercase tracking-widest text-neutral-400 font-semibold">ORGANISING PARTNERS:</span>
            <div className="flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200 font-bold">SARAWAK GLC</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200 font-bold">MINISTRY</span>
              <span className="px-2 py-0.5 rounded bg-[#C83B25]/40 text-rose-300 font-bold border border-[#C83B25]/60">
                HENG SING PRESS
              </span>
            </div>
          </div>

          {/* Backdrop Spec Tag Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[7px] sm:text-[8px] font-mono text-emerald-300 border border-emerald-500/40">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{labels.stageBackdrop} &bull; {labels.backdropSpec}</span>
          </div>

          {/* Truss Support Feet Bottom Anchors */}
          <div className="absolute bottom-0 left-6 w-8 h-1 bg-neutral-400 rounded-t" />
          <div className="absolute bottom-0 right-6 w-8 h-1 bg-neutral-400 rounded-t" />
        </div>

        {/* 2. STAGE FLOOR PLANE WITH GROUND SHADOWS & EVENT PHYSICAL ITEMS */}
        <div className="relative z-20 -mt-6 sm:-mt-8 px-1 sm:px-2">
          
          {/* Subtle Stage Floor Gradient blending naturally into #FAFAFA */}
          <div className="absolute inset-x-0 bottom-6 top-8 bg-gradient-to-b from-neutral-200/40 via-neutral-100/20 to-transparent rounded-2xl -z-10 pointer-events-none" />

          {/* Physical Items Row */}
          <div className="grid grid-cols-12 gap-2 sm:gap-3 items-end">
            
            {/* ITEM 1: Heavy-Duty Aluminum Roll-Up Bunting (3 cols) */}
            <div className="col-span-3 flex flex-col items-center">
              {/* Banner Graphic Surface */}
              <div className="relative w-full rounded-t-sm bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-900 border-t border-x border-neutral-700 p-1.5 shadow-lg shadow-neutral-900/20 flex flex-col justify-between h-[155px] sm:h-[175px] overflow-hidden">
                <div className="space-y-1">
                  <div className="w-full h-1 bg-[#C83B25] rounded-full" />
                  <span className="text-[6px] sm:text-[7px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                    REGISTRATION
                  </span>
                  <span className="text-[7.5px] sm:text-[8.5px] font-display font-black text-white block leading-tight">
                    VIP &amp; MEDIA FOYER
                  </span>
                </div>

                {/* Directional Wayfinding */}
                <div className="py-1 text-center bg-white/10 rounded border border-white/10 my-1">
                  <span className="text-[5.5px] font-mono text-neutral-300 block">LEVEL 1 &bull; FOYER</span>
                  <span className="text-[7px] text-[#C83B25] font-bold block">&rarr; ENTRY &rarr;</span>
                </div>

                {/* Bunting Specs */}
                <div className="text-[5px] sm:text-[5.5px] font-mono text-neutral-400 flex justify-between items-center border-t border-neutral-800 pt-0.5">
                  <span>85×200CM</span>
                  <span className="text-cyan-400 font-bold">ANTI-CURL</span>
                </div>
              </div>

              {/* Aluminum Cassette Base */}
              <div className="relative w-full h-3.5 bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-400 rounded-xs shadow-md border-t border-neutral-400 flex items-center justify-between px-1.5">
                <div className="w-1 h-1 rounded-full bg-neutral-600" />
                <span className="text-[4.5px] font-mono text-neutral-800 font-black tracking-widest">
                  ALUMINUM BASE
                </span>
                <div className="w-1 h-1 rounded-full bg-neutral-600" />
              </div>
              {/* Chrome Feet */}
              <div className="w-full flex justify-between px-0.5 -mt-0.5">
                <div className="w-5 h-1 bg-neutral-400 rounded-full shadow-xs" />
                <div className="w-5 h-1 bg-neutral-400 rounded-full shadow-xs" />
              </div>

              {/* Label & Spec */}
              <div className="mt-1.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neutral-800 block">
                  {labels.rollupBunting}
                </span>
                <span className="text-[7px] font-mono text-neutral-500 block">
                  {labels.buntingSpec}
                </span>
              </div>
            </div>

            {/* ITEM 2: Custom Printed Non-Woven / Canvas Event Bag (2 cols) */}
            <div className="col-span-2 sm:col-span-2 flex flex-col items-center">
              {/* Woven Bag Fabric Handles */}
              <div className="w-7 h-5 border-x-2 border-t-2 border-amber-500/90 rounded-t-lg -mb-0.5 shadow-xs" />

              {/* Woven Bag Body */}
              <div className="relative w-full h-[110px] sm:h-[120px] rounded-sm bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-neutral-700 p-1.5 shadow-lg shadow-neutral-900/15 flex flex-col justify-between">
                {/* Bag Texture / Top Stitch */}
                <div className="w-full border-b border-dashed border-neutral-500/40 pb-0.5 flex justify-between items-center text-[4.5px] font-mono text-amber-300 font-semibold">
                  <span>REINFORCED TOTE</span>
                  <span>80 GSM</span>
                </div>

                {/* Summit Emblem printed on Bag */}
                <div className="text-center py-1 space-y-0.5">
                  <div className="w-4 h-4 rounded-full bg-[#C83B25] text-white font-display font-black text-[7.5px] flex items-center justify-center mx-auto shadow-xs">
                    S
                  </div>
                  <span className="text-[6px] sm:text-[7px] font-display font-bold text-white block leading-tight">
                    SARAWAK 2025
                  </span>
                  <span className="text-[4.5px] font-mono text-neutral-400 block">
                    DELEGATE BAG
                  </span>
                </div>

                {/* Bag Bottom gusset */}
                <div className="text-[5px] font-mono text-neutral-400 text-center border-t border-neutral-700 pt-0.5">
                  NON-WOVEN / CANV
                </div>
              </div>

              {/* Label & Spec */}
              <div className="mt-1.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neutral-800 block">
                  {labels.wovenBag}
                </span>
                <span className="text-[7px] font-mono text-neutral-500 block">
                  {labels.wovenSpec}
                </span>
              </div>
            </div>

            {/* ITEM 3: Laser-Engraved Thermal Flask VIP Souvenir (2 cols) */}
            <div className="col-span-2 sm:col-span-2 flex flex-col items-center">
              {/* Thermal Flask Cylinder */}
              <div className="relative w-10 sm:w-12 h-[105px] sm:h-[115px] rounded-t-xl rounded-b-md bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 border border-neutral-700 shadow-lg shadow-neutral-900/15 p-1 flex flex-col justify-between items-center">
                {/* Flask Digital LED Temp Lid */}
                <div className="w-7 h-2.5 rounded-t-sm bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-600 border border-neutral-500 flex items-center justify-center">
                  <span className="text-[4.5px] font-mono text-cyan-400 font-bold">55&deg;C</span>
                </div>

                {/* Laser Engraving Brand Area */}
                <div className="space-y-0.5 text-center px-0.5">
                  <span className="text-[5px] font-mono text-neutral-400 font-semibold block uppercase">
                    VIP SOUVENIR
                  </span>
                  <span className="text-[6px] sm:text-[7px] font-display font-black text-amber-300 block tracking-tight">
                    BORNEO 2025
                  </span>
                  <div className="w-4 h-0.5 bg-amber-400/80 mx-auto rounded" />
                  <span className="text-[4px] font-mono text-neutral-400 block">
                    MATTE STEEL
                  </span>
                </div>

                {/* Flask Base Rim */}
                <div className="w-8 h-1 bg-neutral-700 rounded-b-xs" />
              </div>

              {/* Label & Spec */}
              <div className="mt-1.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neutral-800 block">
                  {labels.souvenirFlask}
                </span>
                <span className="text-[7px] font-mono text-neutral-500 block">
                  {labels.souvenirSpec}
                </span>
              </div>
            </div>

            {/* ITEM 4: Delegate Satin Lanyard with VIP Acrylic Pass (2.5 cols) */}
            <div className="col-span-2 sm:col-span-2 flex flex-col items-center">
              {/* Folded Satin Lanyard Ribbon */}
              <div className="w-6 h-5 border-x-4 border-t-2 border-[#C83B25] rounded-t-lg shadow-xs" />
              {/* Metal Swivel Clasp */}
              <div className="w-2 h-1.5 bg-neutral-400 rounded-xs shadow-xs -mt-0.5" />

              {/* Rigid VIP Pass Card */}
              <div className="relative w-full h-[100px] sm:h-[110px] rounded-md bg-white border border-neutral-300 p-1 flex flex-col justify-between shadow-lg shadow-neutral-900/10">
                {/* VIP Red Banner Tag */}
                <div className="w-full py-0.5 rounded-xs bg-[#C83B25] text-white text-[5px] font-mono font-bold text-center">
                  VIP ALL-ACCESS
                </div>

                {/* Attendee Info */}
                <div className="space-y-0.5 px-0.5">
                  <span className="text-[6.5px] sm:text-[7.5px] font-display font-bold text-neutral-900 block truncate">
                    Dr. Alicia Tan
                  </span>
                  <span className="text-[5px] font-mono text-neutral-500 block truncate">
                    KEYNOTE SPEAKER
                  </span>
                </div>

                {/* QR Code Pass Section */}
                <div className="p-0.5 bg-neutral-100 rounded border border-neutral-200 flex items-center justify-between">
                  <div className="space-y-0.2 pl-0.5">
                    <span className="text-[4px] font-mono text-neutral-900 font-bold block">GATE PASS</span>
                    <span className="text-[3.5px] font-mono text-neutral-500 block">#0482</span>
                  </div>
                  <QrCode className="w-3.5 h-3.5 text-neutral-950" />
                </div>
              </div>

              {/* Label & Spec */}
              <div className="mt-1.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neutral-800 block">
                  {labels.lanyardBadge}
                </span>
                <span className="text-[7px] font-mono text-neutral-500 block">
                  {labels.lanyardSpec}
                </span>
              </div>
            </div>

            {/* ITEM 5: A5 Saddle-Stitched Conference Programme Booklet (2.5 cols) */}
            <div className="col-span-3 sm:col-span-3 flex flex-col items-center">
              {/* Booklet 3D Perspective Body */}
              <div className="relative w-full h-[100px] sm:h-[110px] rounded-r-md rounded-l-xs bg-[#1E293B] border-r-2 border-y border-[#334155] p-1.5 shadow-lg shadow-neutral-900/15 flex flex-col justify-between transform -rotate-1">
                {/* Saddle-Stitch Staples on Spine */}
                <div className="absolute left-0.5 top-3 w-0.5 h-2 bg-neutral-300 rounded" />
                <div className="absolute left-0.5 bottom-3 w-0.5 h-2 bg-neutral-300 rounded" />

                <div className="pl-1 border-b border-neutral-700 pb-0.5 flex justify-between items-center text-[5px] font-mono text-amber-300 font-bold">
                  <span>AGENDA</span>
                  <span>2025</span>
                </div>

                <div className="pl-1 space-y-0.5">
                  <span className="text-[7px] sm:text-[8px] font-display font-black text-white block leading-tight">
                    PROGRAMME GUIDE
                  </span>
                  <div className="w-6 h-0.5 bg-amber-400 rounded" />
                  <span className="text-[4.5px] font-mono text-neutral-300 block">
                    PLENARY TIMELINES
                  </span>
                </div>

                <div className="pl-1 text-[4.5px] font-mono text-neutral-400 border-t border-neutral-700 pt-0.5 flex justify-between">
                  <span>A5 SADDLE-STITCH</span>
                  <span className="text-amber-400 font-bold">SPOT UV</span>
                </div>
              </div>

              {/* Label & Spec */}
              <div className="mt-1.5 text-center">
                <span className="text-[8px] sm:text-[9px] font-mono font-bold text-neutral-800 block">
                  {labels.programmeGuide}
                </span>
                <span className="text-[7px] font-mono text-neutral-500 block">
                  {labels.guideSpec}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Spec Highlights Strip - Light and Clean */}
        <div className="mt-4 pt-3 border-t border-neutral-200/80 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] font-mono text-neutral-700">
          <div className="p-2 rounded-xl bg-white/90 border border-neutral-200/80 shadow-xs flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{labels.backdropSpec}</span>
          </div>
          <div className="p-2 rounded-xl bg-white/90 border border-neutral-200/80 shadow-xs flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{labels.buntingSpec}</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-2 rounded-xl bg-white/90 border border-neutral-200/80 shadow-xs flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">{labels.lanyardSpec}</span>
          </div>
        </div>
      </div>

      {/* Bottom Production Guarantee & Quote Bar - Blends with page */}
      <div className="relative z-10 px-4 py-2.5 rounded-2xl bg-neutral-100/80 border border-neutral-200/90 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-neutral-600">
        <div className="flex items-center gap-2 text-neutral-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{labels.footerSameDay}</span>
        </div>

        {onOpenQuote && (
          <button
            type="button"
            onClick={onOpenQuote}
            className="px-3.5 py-1.5 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-[10px] font-mono font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            {labels.quoteBtn}
          </button>
        )}
      </div>
    </div>
  );
};
