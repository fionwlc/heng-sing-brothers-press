import React, { useState } from 'react';
import { MessageCircle, Mail, Upload, Link as LinkIcon, CheckCircle2, ArrowRight, Copy, Check, RotateCcw, Send } from 'lucide-react';
import { HENG_SING_CATEGORIES, HENG_SING_INFO } from '../data/hengSingContent';
import { HengSingLogo } from './HengSingLogo';
import { useLanguage } from '../context/LanguageContext';

interface QuoteViewProps {
  initialCategory?: string;
  onViewGuidelines: () => void;
}

export const QuoteView: React.FC<QuoteViewProps> = ({ initialCategory = 'Business Essentials', onViewGuidelines }) => {
  const { t, language } = useLanguage();
  const page = t.quotePage;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [quantity, setQuantity] = useState('100 pcs');
  const [driveLink, setDriveLink] = useState('');
  const [needDesignHelp, setNeedDesignHelp] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submittedViaEmail, setSubmittedViaEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const constructWhatsAppMessage = () => {
    const greeting = language === 'zh' 
      ? '恒新兄弟印务，您好！我想索取打印报价：'
      : language === 'ms'
      ? 'Halo Heng Sing Brothers Press! Saya ingin meminta sebut harga cetakan:'
      : 'Hello Heng Sing Brothers Press! I would like to request a quote:';

    const text = `${greeting}
- Name: ${name || 'Not specified'}
- Contact: ${contact || 'Not specified'}
- Service / Item: ${category}
- Quantity: ${quantity || 'Not specified'}
- Design Help: ${needDesignHelp ? 'Yes, I need design help' : 'I have artwork'}
${driveLink ? `- Artwork Link: ${driveLink}` : ''}
${fileName ? `- File Attached: ${fileName}` : ''}

Looking forward to your quotation!`;
    return `https://wa.me/60133282828?text=${encodeURIComponent(text)}`;
  };

  const constructMailtoUrl = () => {
    const subject = `Print Quotation Request: ${category} - ${name || 'Customer'}`;
    const body = `Hello Heng Sing Brothers Press,

I would like to request a quotation for printing services:

• Customer / Organization: ${name || 'Not specified'}
• Contact (Phone / WhatsApp / Email): ${contact || 'Not specified'}
• Service / Category: ${category}
• Estimated Quantity: ${quantity || 'Not specified'}
• Design Assistance Needed: ${needDesignHelp ? 'Yes (Need design/artwork assistance)' : 'No (Ready artwork provided)'}
${driveLink ? `• Cloud Artwork Link: ${driveLink}\n` : ''}${fileName ? `• Sample / Draft File: ${fileName}\n` : ''}

Please send the quotation and turnaround time to my contact above.

Thank you,
${name || 'Customer'}`;

    return `mailto:hengsing@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getSummaryText = () => {
    return `Print Quotation Request - Heng Sing Brothers Press
Destination Email: hengsing@gmail.com
Customer: ${name || 'Not specified'}
Contact: ${contact || 'Not specified'}
Service Category: ${category}
Quantity: ${quantity || 'Not specified'}
Design Help: ${needDesignHelp ? 'Yes, need artwork assistance' : 'No, artwork ready'}
${driveLink ? `Artwork Link: ${driveLink}\n` : ''}${fileName ? `Attached File: ${fileName}\n` : ''}`;
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(getSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedViaEmail(true);
    const mailto = constructMailtoUrl();
    window.location.href = mailto;
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-[#EA3A19] uppercase tracking-wider block mb-2">
            &bull; {page.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-900 tracking-tight">
            {page.title}
          </h1>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            {page.desc}
          </p>
        </div>
        <div className="hidden sm:block pb-1">
          <HengSingLogo size="sm" />
        </div>
      </div>

      {submittedViaEmail ? (
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-neutral-200 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 inline-block">
              {language === 'zh' ? '已定向至 hengsing@gmail.com' : language === 'ms' ? 'Dihantar ke hengsing@gmail.com' : 'Routed to hengsing@gmail.com'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-black text-neutral-900 tracking-tight">
              {page.quoteReceivedTitle}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto leading-relaxed">
              {page.quoteReceivedDesc}
            </p>
          </div>

          {/* Form Summary Card */}
          <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 text-left max-w-lg mx-auto space-y-2.5 font-mono text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-200">
              <span className="text-neutral-500 font-bold uppercase tracking-wider text-[10px]">
                {language === 'zh' ? '接收邮箱' : language === 'ms' ? 'Penerima E-mel' : 'Destination'}
              </span>
              <span className="font-bold text-[#C83B25]">hengsing@gmail.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">{language === 'zh' ? '客户 / 机构' : language === 'ms' ? 'Pelanggan' : 'Customer'}:</span>
              <span className="text-neutral-900 font-medium truncate max-w-[240px]">{name || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">{language === 'zh' ? '联络方式' : language === 'ms' ? 'Hubungan' : 'Contact'}:</span>
              <span className="text-neutral-900 font-medium truncate max-w-[240px]">{contact || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">{language === 'zh' ? '印刷品类' : language === 'ms' ? 'Kategori' : 'Category'}:</span>
              <span className="text-neutral-900 font-medium truncate max-w-[240px]">{category}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">{language === 'zh' ? '印制数量' : language === 'ms' ? 'Kuantiti' : 'Quantity'}:</span>
              <span className="text-neutral-900 font-medium">{quantity || '-'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-neutral-500">{language === 'zh' ? '设计协助' : language === 'ms' ? 'Bantuan Reka' : 'Design Help'}:</span>
              <span className="text-neutral-900 font-medium">{needDesignHelp ? (language === 'zh' ? '需要设计协助' : language === 'ms' ? 'Perlu bantuan' : 'Needed') : (language === 'zh' ? '已有完稿' : language === 'ms' ? 'Sedia ada' : 'Ready artwork')}</span>
            </div>
            {(driveLink || fileName) && (
              <div className="flex justify-between items-center pt-1 border-t border-neutral-200/80">
                <span className="text-neutral-500">{language === 'zh' ? '稿件 / 附件' : language === 'ms' ? 'Fail' : 'File / Link'}:</span>
                <span className="text-neutral-700 truncate max-w-[240px] text-[11px]">{fileName || driveLink}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
            <a
              href={constructMailtoUrl()}
              className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-[#C83B25] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'zh' ? '在电邮客户端打开' : language === 'ms' ? 'Buka E-mel Semula' : 'Open in Email Client'}</span>
            </a>

            <button
              type="button"
              onClick={handleCopySummary}
              className="py-3 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">{language === 'zh' ? '已复制明细！' : language === 'ms' ? 'Disalin!' : 'Copied Details!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-neutral-500" />
                  <span>{language === 'zh' ? '复制报价明细' : language === 'ms' ? 'Salin Butiran' : 'Copy Summary'}</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
            <a
              href={constructWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{page.whatsappImmediateBtn}</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmittedViaEmail(false)}
              className="py-3 px-4 rounded-xl border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{language === 'zh' ? '修改或重新填写' : language === 'ms' ? 'Ubah Semula' : 'Edit Request'}</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleEmailSubmit} className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200/90 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                {page.nameLabel}
              </label>
              <input
                type="text"
                required
                placeholder={page.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden text-sm bg-neutral-50/50"
              />
            </div>

            {/* Phone / Email */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                {page.contactLabel}
              </label>
              <input
                type="text"
                required
                placeholder={page.contactPlaceholder}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden text-sm bg-neutral-50/50"
              />
            </div>

            {/* What do you need? */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                {page.catLabel}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden text-sm bg-neutral-50/50"
              >
                <option value="Small Quantity / Personal">{page.smallQuantityPersonal}</option>
                {HENG_SING_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name} ({c.shortDesc})
                  </option>
                ))}
                <option value="Corporate Annual Report / Journal">{page.corporateReportOption}</option>
                <option value="Business Starter Kit">{page.starterKitOption}</option>
                <option value="Event Essentials Kit">{page.eventKitOption}</option>
                <option value="Custom Packaging / Gift Box">{page.customPackagingOption}</option>
                <option value="Other / Not Sure">{page.otherOption}</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2 font-mono">
                {page.qtyLabel}
              </label>
              <input
                type="text"
                placeholder={page.qtyPlaceholder}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden text-sm bg-neutral-50/50"
              />
            </div>
          </div>

          {/* Artwork Upload Section */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider font-mono">
                {page.artworkSectionTitle}
              </label>
              <button
                type="button"
                onClick={onViewGuidelines}
                className="text-xs text-[#C83B25] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>{page.seeGuidelinesBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* File Upload Box */}
              <div className="relative border-2 border-dashed border-neutral-300 hover:border-neutral-400 rounded-2xl p-6 text-center bg-neutral-50/50 transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-rose-50 text-[#C83B25] flex items-center justify-center mb-2">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-neutral-800">
                    {fileName ? fileName : page.uploadFileTitle}
                  </span>
                  <span className="text-[11px] text-neutral-500 mt-1">
                    {fileName ? 'File attached' : page.uploadFileSub}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 mt-0.5">
                    {page.uploadFileFormats}
                  </span>
                </div>
              </div>

              {/* Drive / Dropbox Link */}
              <div className="border border-neutral-300 rounded-2xl p-6 flex flex-col justify-between bg-neutral-50/50">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-neutral-800">
                    <LinkIcon className="w-4 h-4 text-neutral-500" />
                    <span>{page.driveLinkTitle}</span>
                  </div>
                  <input
                    type="url"
                    placeholder={page.driveLinkPlaceholder}
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-300 focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 outline-hidden text-xs bg-white"
                  />
                </div>
                <span className="text-[11px] text-neutral-500 mt-2 block leading-relaxed">
                  {page.driveLinkSub}
                </span>
              </div>
            </div>
          </div>

          {/* Design Help Checkbox */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
            <input
              type="checkbox"
              id="design-help"
              checked={needDesignHelp}
              onChange={(e) => setNeedDesignHelp(e.target.checked)}
              className="w-4 h-4 accent-[#C83B25] rounded cursor-pointer"
            />
            <label htmlFor="design-help" className="text-xs font-medium text-neutral-700 cursor-pointer">
              {page.designHelpCheckbox}
            </label>
          </div>

          {/* Dual Submission Buttons */}
          <div className="pt-4 border-t border-neutral-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="text-xs font-mono text-neutral-500 block">
                {page.sendViaTitle}
              </span>
              <span className="text-[11px] font-mono text-[#C83B25] font-semibold flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{language === 'zh' ? '直达邮箱：hengsing@gmail.com' : language === 'ms' ? 'Penerima: hengsing@gmail.com' : 'Direct to: hengsing@gmail.com'}</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={constructWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#C83B25] hover:bg-[#B3311D] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{page.whatsappBtn}</span>
              </a>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl border-2 border-neutral-900 bg-neutral-900 hover:bg-[#C83B25] hover:border-[#C83B25] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {language === 'zh'
                    ? '发送至 hengsing@gmail.com'
                    : language === 'ms'
                    ? 'Hantar ke hengsing@gmail.com'
                    : 'Submit to hengsing@gmail.com'}
                </span>
              </button>
            </div>

            <p className="text-[11px] font-mono text-neutral-500 text-center">
              {page.whatsappNote}
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
