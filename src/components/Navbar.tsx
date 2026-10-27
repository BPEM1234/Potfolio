import React from 'react';
import { Language } from '../types/portfolio';
import { PROFILE_INFO } from '../data/portfolioData';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenContact }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <a href="#" className="flex items-center gap-2 text-slate-900 group shrink-0">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-emerald-700 transition-colors">
              SR
            </span>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 whitespace-nowrap">
                {lang === 'en' ? PROFILE_INFO.name : PROFILE_INFO.nameBn}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium tracking-wide">
                {lang === 'en' ? 'Fiverr Level 2 Seller' : 'ফাইভার লেভেল ২ সেলার'}
              </span>
            </div>
          </a>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#gigs" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Gigs & Services' : 'গিগ ও সার্ভিস'}
            </a>
            <a href="#demo" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Live Data Demo' : 'লাইভ ডাটা ডেমো'}
            </a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Price Estimator' : 'খরচ হিসাব'}
            </a>
            <a href="#skills" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Tools & Skills' : 'টুলস ও দক্ষতা'}
            </a>
            <a href="#reviews" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'Client Reviews' : 'ক্লায়েন্ট রিভিউ'}
            </a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {lang === 'en' ? 'FAQ' : 'প্রশ্নোত্তর'}
            </a>
          </nav>

          {/* Zone 3: Primary Action + Language Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Clean Language Switcher */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              title={lang === 'en' ? 'বাংলা ভাষায় দেখুন' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Get a Free Quote' : 'ফ্রি কোটেশন নিন'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
