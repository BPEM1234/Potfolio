import React from 'react';
import { GigItem, Language } from '../types/portfolio';
import { Star, Check, ArrowRight } from 'lucide-react';

interface GigCardProps {
  gig: GigItem;
  lang: Language;
  onOpenDetails: (gig: GigItem) => void;
  onQuickOrder: (gig: GigItem, packageName: 'basic' | 'standard' | 'premium') => void;
}

export const GigCard: React.FC<GigCardProps> = ({ gig, lang, onOpenDetails, onQuickOrder }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden group">
      {/* Gig Image Container */}
      <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-pointer" onClick={() => onOpenDetails(gig)}>
        <img
          src={gig.thumbnail}
          alt={gig.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Category & Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className="bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded">
            {lang === 'en' ? gig.categoryLabel : gig.categoryLabelBn}
          </span>
          {gig.badge && (
            <span className="bg-amber-500 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded">
              {lang === 'en' ? gig.badge : gig.badgeBn}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5 text-xs text-slate-700 mb-2">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="font-bold tabular-nums">5.0</span>
            <span className="text-slate-500 tabular-nums">({gig.reviewCount})</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-700 font-medium">
              {lang === 'en' ? 'Fiverr Pro Standard' : 'ফাইভার প্রো স্ট্যান্ডার্ড'}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetails(gig)}
            className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2 leading-snug mb-2.5"
          >
            {lang === 'en' ? gig.title : gig.titleBn}
          </h3>

          {/* Brief Summary */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {lang === 'en' ? gig.summary : gig.summaryBn}
          </p>

          {/* Key Deliverable Highlights */}
          <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
            {(lang === 'en' ? gig.clientBenefits : gig.clientBenefitsBn).slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Strip & Action Button */}
        <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
              {lang === 'en' ? 'Starting At' : 'শুরু মূল্য'}
            </span>
            <span className="text-lg font-extrabold text-slate-900 tabular-nums">
              ${gig.startingPrice}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetails(gig)}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>{lang === 'en' ? 'View Gig' : 'বিস্তারিত'}</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={() => onQuickOrder(gig, 'basic')}
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-2xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {lang === 'en' ? 'Order' : 'অর্ডার'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
