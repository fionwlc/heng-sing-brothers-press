import React, { useState } from 'react';
import { BookOpen, FileText, Gift, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CorporateShowcaseGraphicProps {
  className?: string;
  variant?: 'featured' | 'compact';
}

export const CorporateShowcaseGraphic: React.FC<CorporateShowcaseGraphicProps> = ({
  className = '',
  variant = 'featured'
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'annual-report' | 'journals' | 'gifts'>('all');
  const { language } = useLanguage();

  const labels = {
    topTitle: language === 'zh'
      ? '机构级印务与企业礼品定制'
      : language === 'ms'
      ? 'PERCETAKAN INSTITUSI & CENDERAHATI KORPORAT'
      : 'INSTITUTIONAL PRINT & MERCHANDISE',
    topSub: language === 'zh'
      ? '砂拉越州属机构 • 联营公司 (GLC) • 年度股东大会'
      : language === 'ms'
      ? 'Agensi Sarawak • GLC • Mesyuarat Agung Tahunan'
      : 'Sarawak State • GLC • Corporate AGMs',
    tabAll: language === 'zh' ? '全部项目' : language === 'ms' ? 'Semua Item' : 'All Items',
    tabReports: language === 'zh' ? '年报报告' : language === 'ms' ? 'Laporan' : 'Reports',
    tabJournals: language === 'zh' ? '学术期刊' : language === 'ms' ? 'Jurnal' : 'Journals',
    tabGifts: language === 'zh' ? '礼品礼盒' : language === 'ms' ? 'Cenderahati' : 'Gifts',
    reportsTitle: language === 'zh' ? '股东大会年度报告' : language === 'ms' ? 'Laporan Tahunan AGM' : 'AGM Annual Reports',
    reportsDesc: language === 'zh' ? '精装硬壳、平装与折页装订' : language === 'ms' ? 'Kulit Keras, Kulit Lembut & Lipatan' : 'Hardcover, Softcover & Gatefold',
    journalsTitle: language === 'zh' ? '学术与政府部门期刊' : language === 'ms' ? 'Jurnal Akademik & Kementerian' : 'Academic & Ministry Journals',
    journalsDesc: language === 'zh' ? '严谨色彩校准与牢固装订' : language === 'ms' ? 'Penentukuran Warna Ketat & Jilidan' : 'Strict Color Calibration & Binding',
    giftsTitle: language === 'zh' ? '企业礼品与高级礼盒' : language === 'ms' ? 'Cenderahati & Kotak Korporat' : 'Corporate Gifts & Boxes',
    giftsDesc: language === 'zh' ? '激光刻字保温杯、日记本与VIP套装' : language === 'ms' ? 'Termos Ukiran, Diari & Set VIP' : 'Engraved Flasks, Diaries & VIP Sets',
  };

  return (
    <div
      className={`relative w-full rounded-3xl bg-[#0F1115] border border-neutral-800 text-white overflow-hidden shadow-2xl ${className}`}
      id="corporate-showcase-stage"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#C83B25]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="relative z-10 px-5 sm:px-6 pt-5 pb-3 border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C83B25] to-[#A02816] flex items-center justify-center font-display font-black text-xs text-white shadow-xs">
            HS
          </div>
          <div>
            <span className="text-[11px] font-display font-bold text-white tracking-wide block">
              {labels.topTitle}
            </span>
            <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest block">
              {labels.topSub}
            </span>
          </div>
        </div>

        {/* Interactive Focus Pills */}
        <div className="flex items-center gap-1 bg-neutral-900/90 p-1 rounded-xl border border-neutral-800 text-[10px] font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#C83B25] text-white font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {labels.tabAll}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('annual-report')}
            className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'annual-report'
                ? 'bg-neutral-800 text-amber-300 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {labels.tabReports}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('journals')}
            className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'journals'
                ? 'bg-neutral-800 text-cyan-300 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {labels.tabJournals}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('gifts')}
            className={`px-2 py-1 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'gifts'
                ? 'bg-neutral-800 text-rose-300 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {labels.tabGifts}
          </button>
        </div>
      </div>

      {/* Main Visual Stage Area */}
      <div className="relative p-5 sm:p-7 min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
        
        {/* Dynamic Canvas with 3 Core Corporate Deliverables */}
        <div className="relative w-full max-w-[480px] h-[260px] sm:h-[280px] flex items-center justify-center">
          
          {/* ===================================================================== */}
          {/* 1. GRAPHICAL ITEM: LUXURY HARDCOVER ANNUAL REPORT                    */}
          {/* ===================================================================== */}
          <div
            className={`absolute left-2 sm:left-6 top-3 w-[155px] sm:w-[185px] h-[210px] sm:h-[235px] rounded-r-xl rounded-l-xs bg-gradient-to-r from-neutral-900 via-[#131d2e] to-[#1a2942] border-r-2 border-y border-[#2a3e60] shadow-[0_20px_45px_-8px_rgba(0,0,0,0.6)] p-3.5 flex flex-col justify-between transition-all duration-300 ${
              activeTab === 'journals' || activeTab === 'gifts'
                ? 'opacity-35 scale-95'
                : 'opacity-100 scale-100 z-10'
            }`}
            style={{
              transform: 'perspective(1000px) rotateY(-12deg) rotateX(4deg) translateZ(10px)',
              transformOrigin: 'left center'
            }}
          >
            {/* Book Spine Texture */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-neutral-950 via-[#101927] to-transparent border-r border-neutral-700/50" />
            
            {/* Book Edge Pages Block */}
            <div className="absolute -right-2.5 top-1.5 bottom-1.5 w-2.5 bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-200 rounded-r-xs shadow-inner flex flex-col justify-around py-2 opacity-90">
              <div className="h-[1px] bg-neutral-300 w-full" />
              <div className="h-[1px] bg-neutral-300 w-full" />
              <div className="h-[1px] bg-neutral-300 w-full" />
              <div className="h-[1px] bg-neutral-300 w-full" />
            </div>

            {/* Red Bookmark Ribbon Dropping Below */}
            <div className="absolute right-6 -bottom-4 w-3.5 h-7 bg-[#C83B25] shadow-md clip-ribbon"
                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }} />

            {/* Top Cover Header: Corporate Seal */}
            <div className="pl-3 relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full border border-amber-400/80 bg-gradient-to-br from-amber-300/30 to-amber-500/30 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                </div>
                <span className="text-[6.5px] font-mono tracking-widest text-amber-300/90 font-bold">
                  GOVT &amp; GLC REPORT
                </span>
              </div>
              <span className="text-[6px] font-mono px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                FSC&reg;
              </span>
            </div>

            {/* Cover Title in Metallic Foil Stamped Effect */}
            <div className="pl-3 my-auto py-2 space-y-1 relative z-10">
              <span className="text-[6.5px] font-mono uppercase tracking-widest text-cyan-300 block">
                Financial Year 2025
              </span>
              <h4 className="text-white font-display font-black text-xs sm:text-sm tracking-tight leading-snug">
                ANNUAL REPORT &amp; SUSTAINABILITY
              </h4>
              <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
              <p className="text-[6px] font-mono text-neutral-400 leading-tight">
                Hardcover PUR Binding &bull; Gold Stamping &bull; Gatefold Charts
              </p>
            </div>

            {/* Cover Footer Specs */}
            <div className="pl-3 pt-2 border-t border-neutral-700/60 flex items-center justify-between text-[6.5px] font-mono text-neutral-400 relative z-10">
              <span className="text-amber-200/90">Heng Sing Press</span>
              <span>180GSM MATTE ART</span>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 2. GRAPHICAL ITEM: ACADEMIC / INSTITUTIONAL JOURNAL                  */}
          {/* ===================================================================== */}
          <div
            className={`absolute right-14 sm:right-24 top-7 w-[130px] sm:w-[150px] h-[180px] sm:h-[200px] rounded-lg bg-neutral-100 border border-neutral-300 shadow-[0_18px_35px_-8px_rgba(0,0,0,0.5)] p-3 flex flex-col justify-between transition-all duration-300 text-neutral-900 ${
              activeTab === 'annual-report' || activeTab === 'gifts'
                ? 'opacity-35 scale-95'
                : 'opacity-100 scale-100 z-15'
            }`}
            style={{
              transform: 'perspective(1000px) rotateY(-4deg) rotateZ(3deg) translateZ(25px)',
              transformOrigin: 'bottom center'
            }}
          >
            {/* Saddle-Stitch Binding Staples simulation */}
            <div className="absolute left-1 top-6 w-1 h-3.5 bg-neutral-400 rounded-full" />
            <div className="absolute left-1 bottom-6 w-1 h-3.5 bg-neutral-400 rounded-full" />

            {/* Top Journal Metadata */}
            <div className="border-b border-neutral-200 pb-1.5">
              <div className="flex justify-between items-center text-[5.5px] font-mono text-neutral-500">
                <span>VOL. 34 &bull; NO. 2</span>
                <span className="text-[#C83B25] font-bold">ISSN 2289-4780</span>
              </div>
              <h5 className="font-display font-black text-[9.5px] tracking-tight text-neutral-900 mt-1 leading-snug">
                SARAWAK ECONOMIC &amp; FORESTRY JOURNAL
              </h5>
            </div>

            {/* Journal Abstract & Layout Preview */}
            <div className="space-y-1.5 py-1">
              <div className="h-1 bg-neutral-300 rounded w-1/2" />
              <div className="space-y-0.5">
                <div className="h-0.5 bg-neutral-200 rounded w-full" />
                <div className="h-0.5 bg-neutral-200 rounded w-5/6" />
                <div className="h-0.5 bg-neutral-200 rounded w-4/5" />
              </div>
              <div className="p-1 rounded bg-neutral-200/60 border border-neutral-300/60 text-[5px] font-mono text-neutral-600">
                Peer-reviewed &bull; Colour charts certified
              </div>
            </div>

            {/* Journal Bottom */}
            <div className="border-t border-neutral-200 pt-1 flex justify-between items-center text-[5px] font-mono text-neutral-500">
              <span>UNIMAS / MINISTRY ARCHIVE</span>
              <span className="text-emerald-700 font-bold">APPROVED</span>
            </div>
          </div>

          {/* ===================================================================== */}
          {/* 3. GRAPHICAL ITEM: CORPORATE GIFTS SUITE (Tumbler, PU Diary, Box)    */}
          {/* ===================================================================== */}
          <div
            className={`absolute right-1 sm:right-4 bottom-2 w-[145px] sm:w-[170px] h-[190px] sm:h-[205px] transition-all duration-300 z-20 ${
              activeTab === 'annual-report' || activeTab === 'journals'
                ? 'opacity-35 scale-95'
                : 'opacity-100 scale-100'
            }`}
            style={{
              transform: 'perspective(1000px) rotateY(10deg) translateZ(40px)',
              transformOrigin: 'right bottom'
            }}
          >
            {/* VIP Rigid Magnetic Gift Box (Base) */}
            <div className="absolute inset-x-0 bottom-0 h-[105px] rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-700 shadow-2xl p-2 flex flex-col justify-between">
              {/* Box Gold Edge Inset Line */}
              <div className="absolute inset-1 rounded-lg border border-amber-500/20 pointer-events-none" />
              
              <div className="flex items-center justify-between text-[6px] font-mono text-amber-300 px-1 relative z-10">
                <span>VIP GIFT BOX</span>
                <span className="text-[5px] text-neutral-400">MAGNETIC FLAP</span>
              </div>

              {/* Foam Insert with Cutouts for Tumbler and Diary */}
              <div className="h-14 rounded bg-neutral-950 border border-neutral-800 p-1 flex items-center justify-around relative z-10">
                <span className="text-[5.5px] font-mono text-neutral-500">Custom EVA Foam Lining</span>
              </div>

              <div className="text-[5.5px] font-mono text-neutral-400 text-center relative z-10 border-t border-neutral-800 pt-0.5">
                Laser Engraving &amp; Hot-Stamping
              </div>
            </div>

            {/* Standing Thermal Tumbler (Stainless Steel Matte Black & Copper) */}
            <div className="absolute left-2.5 bottom-8 w-[40px] h-[95px] rounded-full bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900 border border-neutral-600 shadow-xl flex flex-col items-center justify-between py-2 z-30">
              {/* Cap / Lid */}
              <div className="w-[32px] h-[12px] rounded-t-lg bg-gradient-to-r from-amber-400 to-amber-600 border-b border-amber-700 flex items-center justify-center">
                <div className="w-2.5 h-1 rounded-full bg-amber-900/60" />
              </div>

              {/* Laser Engraved Logo on Flask */}
              <div className="text-center px-0.5">
                <div className="w-3.5 h-3.5 rounded-full border border-neutral-400 mx-auto flex items-center justify-center text-[5px] font-bold text-neutral-200">
                  HS
                </div>
                <span className="text-[4px] font-mono text-neutral-300 tracking-tighter block mt-0.5">
                  500ML
                </span>
              </div>

              {/* Base Ring */}
              <div className="w-[32px] h-[4px] rounded-b-md bg-neutral-950 border-t border-neutral-700" />
            </div>

            {/* Executive PU Leather Diary with Elastic Band */}
            <div className="absolute right-2 bottom-8 w-[68px] h-[90px] rounded-r-md rounded-l-xs bg-gradient-to-r from-[#501c13] to-[#802c1f] border-r-2 border-y border-[#a83c2c] shadow-xl p-1.5 flex flex-col justify-between z-25">
              {/* Debossed Gold Crest */}
              <div className="text-center pt-1">
                <div className="w-4 h-4 rounded border border-amber-300/80 mx-auto flex items-center justify-center text-[5.5px] font-bold text-amber-300">
                  2025
                </div>
                <span className="text-[4.5px] font-mono text-amber-200 tracking-tighter block mt-0.5">
                  EXECUTIVE DIARY
                </span>
              </div>

              {/* Black Elastic Band Wrap */}
              <div className="absolute right-2.5 top-0 bottom-0 w-1.5 bg-neutral-950 shadow-sm" />

              {/* Gilded Gold Paper Edges peek */}
              <div className="absolute -right-1 top-1 bottom-1 w-1 bg-amber-300/90 rounded-r-xs" />

              <div className="text-[4px] font-mono text-amber-200/70 border-t border-[#a83c2c] pt-0.5">
                Debossed PU
              </div>
            </div>

            {/* Laser-cut Executive Metal Pen */}
            <div
              className="absolute left-11 bottom-12 w-[8px] h-[75px] rounded-full bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 border border-amber-600 shadow-md z-35"
              style={{ transform: 'rotate(-12deg)' }}
            >
              <div className="w-full h-2 bg-neutral-900 rounded-t-full" />
              <div className="absolute top-3 -left-1 w-1 h-3 bg-neutral-800 rounded-xs" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Features Grid Bar */}
      <div className="px-5 sm:px-6 py-4 bg-neutral-950 border-t border-neutral-800/90 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-[#162238] border border-[#2a3e60] text-amber-300 flex items-center justify-center shrink-0">
            <FileText className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-white font-bold block text-[11px]">{labels.reportsTitle}</span>
            <span className="text-neutral-400 text-[9.5px]">{labels.reportsDesc}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-700 text-cyan-300 flex items-center justify-center shrink-0">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-white font-bold block text-[11px]">{labels.journalsTitle}</span>
            <span className="text-neutral-400 text-[9.5px]">{labels.journalsDesc}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-neutral-900 border border-neutral-700 text-rose-300 flex items-center justify-center shrink-0">
            <Gift className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-white font-bold block text-[11px]">{labels.giftsTitle}</span>
            <span className="text-neutral-400 text-[9.5px]">{labels.giftsDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
