import React, { useState, useEffect } from 'react';
import { GigItem, Language } from '../types/portfolio';
import { X, Check, Clock, RotateCcw, Star, ShieldCheck, Sparkles } from 'lucide-react';

interface GigModalProps {
  gig: GigItem | null;
  lang: Language;
  onClose: () => void;
  onSelectPackageOrder: (gig: GigItem, packageName: 'basic' | 'standard' | 'premium', price: number) => void;
}

export const GigModal: React.FC<GigModalProps> = ({ gig, lang, onClose, onSelectPackageOrder }) => {
  const [activeTier, setActiveTier] = useState<'basic' | 'standard' | 'premium'>('standard');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!gig) return null;

  const currentPackage = gig.packages[activeTier];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="text-emerald-700">{lang === 'en' ? gig.categoryLabel : gig.categoryLabelBn}</span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1 text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="font-bold tabular-nums">5.0</span>
              <span className="text-slate-500 tabular-nums">({gig.reviewCount} reviews)</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Main Title & Gig Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3]">
              <img
                src={gig.thumbnail}
                alt={gig.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                  {lang === 'en' ? gig.title : gig.titleBn}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {lang === 'en' ? gig.summary : gig.summaryBn}
                </p>
              </div>

              {/* Sample Quick Stats */}
              <div className="grid grid-cols-3 gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center">
                {gig.sampleStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-sm font-bold text-slate-900 block tabular-nums">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {lang === 'en' ? stat.label : stat.labelBn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fiverr-Style 3-Tier Package Switcher */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            {/* Tier Tabs */}
            <div className="grid grid-cols-3 bg-slate-100 border-b border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setActiveTier('basic')}
                className={`py-3 px-3 transition-colors cursor-pointer text-center ${
                  activeTier === 'basic'
                    ? 'bg-white text-slate-900 border-b-2 border-emerald-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{lang === 'en' ? 'Basic' : 'বেসিক'}</span>
                <span className="block text-emerald-700 font-bold tabular-nums">${gig.packages.basic.price}</span>
              </button>

              <button
                onClick={() => setActiveTier('standard')}
                className={`py-3 px-3 transition-colors cursor-pointer text-center relative ${
                  activeTier === 'standard'
                    ? 'bg-white text-slate-900 border-b-2 border-emerald-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center justify-center gap-1">
                  <span>{lang === 'en' ? 'Standard' : 'স্ট্যান্ডার্ড'}</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1 rounded font-normal">
                    {lang === 'en' ? 'Best' : 'সেরা'}
                  </span>
                </div>
                <span className="block text-emerald-700 font-bold tabular-nums">${gig.packages.standard.price}</span>
              </button>

              <button
                onClick={() => setActiveTier('premium')}
                className={`py-3 px-3 transition-colors cursor-pointer text-center ${
                  activeTier === 'premium'
                    ? 'bg-white text-slate-900 border-b-2 border-emerald-600 font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{lang === 'en' ? 'Premium' : 'প্রিমিয়াম'}</span>
                <span className="block text-emerald-700 font-bold tabular-nums">${gig.packages.premium.price}</span>
              </button>
            </div>

            {/* Active Tier Details */}
            <div className="p-5 bg-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    {lang === 'en' ? currentPackage.name : currentPackage.nameBn}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {lang === 'en' ? currentPackage.description : currentPackage.descriptionBn}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-black text-slate-900 tabular-nums">
                    ${currentPackage.price}
                  </span>
                </div>
              </div>

              {/* Delivery & Revision badges */}
              <div className="flex items-center gap-4 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span className="tabular-nums">
                    {currentPackage.deliveryDays} {lang === 'en' ? 'Days Delivery' : 'দিনের ডেলিভারি'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>
                    {lang === 'en' ? currentPackage.revisions : currentPackage.revisionsBn}{' '}
                    {lang === 'en' ? 'Revisions' : 'রিভিশন'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? '100% Moneyback Guarantee' : 'টাকা ফেরত নিশ্চয়তা'}</span>
                </div>
              </div>

              {/* Included Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {(lang === 'en' ? currentPackage.features : currentPackage.featuresBn).map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onSelectPackageOrder(gig, activeTier, currentPackage.price)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {lang === 'en'
                      ? `Continue ($${currentPackage.price}) - Inquire Now`
                      : `অর্ডার এগিয়ে নিন ($${currentPackage.price})`}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Sample Dataset Preview for this Gig */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                {lang === 'en' ? 'Sample Output Data Preview' : 'কাজের স্যাম্পল আউটপুট প্রিভিউ'}
              </h4>
              <span className="text-[11px] text-slate-500">
                {lang === 'en' ? 'Verified 100% Cleaned' : '১০০% নিখুঁত ফরম্যাট'}
              </span>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-slate-100 border-b border-slate-200 font-semibold text-slate-700">
                  <tr>
                    {gig.sampleColumns.map((col, idx) => (
                      <th key={idx} className="py-2 px-3 whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {gig.sampleRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="py-2 px-3 whitespace-nowrap text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
