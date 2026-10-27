import React from 'react';
import { Language } from '../types/portfolio';
import { PROFILE_INFO, HERO_WORKSPACE_IMAGE } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck, Clock, Star, ArrowRight, Calculator } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenContact: (subject?: string) => void;
  onExploreGigs: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact, onExploreGigs, onOpenCalculator }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Kicker - Clean unboxed text with separator */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-3">
              <span>{lang === 'en' ? 'Fiverr Pro Verified Seller' : 'ফাইভার প্রো ভেরিফাইড সেলার'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'en' ? '99.8% Data Accuracy Rate' : '৯৯.৮% নির্ভুল ডাটা গ্যারান্টি'}</span>
            </div>

            {/* Main Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5 text-balance">
              {lang === 'en' ? (
                <>
                  High-Precision <span className="text-emerald-600">Data Entry</span> &amp; Virtual Assistant Services
                </>
              ) : (
                <>
                  উচ্চ নির্ভুলতার <span className="text-emerald-600">ডাটা এন্ট্রি</span> ও প্রফেশনাল ভার্চুয়াল অ্যাসিস্ট্যান্ট
                </>
              )}
            </h1>

            {/* Lead Prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              {lang === 'en'
                ? 'Helping e-commerce founders, agencies, and businesses turn chaotic datasets into clean, actionable, and revenue-ready spreadsheets. Fast 24-hour turnaround with zero compromise on precision.'
                : 'ই-কমার্স উদ্যোক্তা, এজেন্সি ও কোম্পানির যেকোনো জটিল ডাটাকে সুবিন্যস্ত, নির্ভুল ও ব্যবহারের উপযোগী স্প্রেডশিটে রূপান্তর করি। ২৪ ঘণ্টায় দ্রুত ডেলিভারি ও ১০০% নির্ভুলতার নিশ্চয়তা।'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onExploreGigs}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{lang === 'en' ? 'Explore Fiverr Gigs' : 'গিগ ও সার্ভিস দেখুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'en' ? 'Estimate Project Cost' : 'খরচের হিসাব করুন'}</span>
              </button>

              <button
                onClick={() => onOpenContact('Free Sample Test Request')}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 hover:text-emerald-700 hover:underline transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{lang === 'en' ? 'Request 20-Row Free Sample' : '২০ রো ফ্রি স্যাম্পল নিন'}</span>
              </button>
            </div>

            {/* Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? 'Unlimited Revisions' : 'আনলিমিটেড রিভিশন'}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? '100% Confidential / NDA' : 'গোপনীয়তা ও NDA চুক্তি'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'en' ? '24/7 Rapid Response' : '২৪/৭ দ্রুত যোগাযোগ'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-slate-900 group">
              <img
                src={HERO_WORKSPACE_IMAGE}
                alt="Somrat Data Entry Dual Monitor Workstation"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                onError={(e) => {
                  // Fallback container in case of network issue
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />

              {/* Verified Badge Overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white rounded-lg px-3 py-2 shadow-md">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold">{PROFILE_INFO.sellerBadge}</span>
                </div>
              </div>

              {/* Bottom Scrim with Stats */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-sm font-bold">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="tabular-nums">5.0</span>
                      <span className="text-slate-300 text-xs font-normal">
                        ({PROFILE_INFO.reviewCount} {lang === 'en' ? 'reviews' : 'রিভিউ'})
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {lang === 'en' ? 'Delivered with 0% data bounce' : '১০০% নিখুঁত ডেলিভারি রেকর্ড'}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">{lang === 'en' ? 'Orders Done' : 'অর্ডার সম্পন্ন'}</span>
                    <span className="text-base font-bold text-emerald-400 tabular-nums">
                      {PROFILE_INFO.ordersCompleted}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                {PROFILE_INFO.accuracyRate}
              </span>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {lang === 'en' ? 'Precision Accuracy Rate' : 'নিখুঁত ডাটা এন্ট্রি রেট'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tabular-nums">
                450K+
              </span>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {lang === 'en' ? 'Rows Processed & Cleaned' : 'রো প্রসেস ও ক্লিন করা হয়েছে'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                {PROFILE_INFO.ordersCompleted}
              </span>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {lang === 'en' ? 'Completed Orders' : 'সম্পন্ন করা প্রজেক্ট'}
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-xs">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tabular-nums">
                {PROFILE_INFO.responseTime}
              </span>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                {lang === 'en' ? 'Average Response Time' : 'গড় রেসপন্স সময়'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
