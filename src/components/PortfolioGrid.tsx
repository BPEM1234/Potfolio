import React, { useState } from 'react';
import { GigCategory, GigItem, Language } from '../types/portfolio';
import { GIGS } from '../data/portfolioData';
import { GigCard } from './GigCard';
import { Filter } from 'lucide-react';

interface PortfolioGridProps {
  lang: Language;
  onOpenGigDetails: (gig: GigItem) => void;
  onQuickOrder: (gig: GigItem, packageName: 'basic' | 'standard' | 'premium') => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  lang,
  onOpenGigDetails,
  onQuickOrder
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GigCategory>('all');

  const categories: { key: GigCategory; labelEn: string; labelBn: string }[] = [
    { key: 'all', labelEn: 'All Gigs (6)', labelBn: 'সব গিগ (৬)' },
    { key: 'excel', labelEn: 'Excel & Google Sheets', labelBn: 'এক্সেল ও গুগল শিটস' },
    { key: 'leadgen', labelEn: 'B2B Lead Generation', labelBn: 'বিটুবি লিড জেনারেশন' },
    { key: 'ecommerce', labelEn: 'E-Commerce Upload', labelBn: 'ই-কমার্স প্রোডাক্ট' },
    { key: 'conversion', labelEn: 'PDF / OCR Conversion', labelBn: 'PDF কনভার্সন' },
    { key: 'scraping', labelEn: 'Web Scraping', labelBn: 'ওয়েব স্ক্র্যাপিং' }
  ];

  const filteredGigs =
    selectedCategory === 'all'
      ? GIGS
      : GIGS.filter((gig) => gig.category === selectedCategory);

  return (
    <section id="gigs" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
              <span>{lang === 'en' ? 'Fiverr Gig Catalog' : 'ফাইভার গিগ ক্যাটালগ'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'en' ? 'Custom Orders Accepted' : 'কাস্টম অর্ডার গ্রহণযোগ্য'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              {lang === 'en' ? 'Professional Data Entry & Research Gigs' : 'ডাটা এন্ট্রি ও ভার্চুয়াল অ্যাসিস্ট্যান্ট গিগসমূহ'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'en'
                ? 'Select a gig below to view complete package tiers, sample data outputs, and turnaround times.'
                : 'আপনার পছন্দমতো যেকোনো গিগ নির্বাচন করে প্যাকেজ ও কাজের স্যাম্পল দেখুন।'}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs text-slate-500">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {lang === 'en'
                ? `Showing ${filteredGigs.length} Active Gigs`
                : `${filteredGigs.length}টি সক্রিয় গিগ`}
            </span>
          </div>
        </div>

        {/* Filter Category Segmented Controls */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelBn}
            </button>
          ))}
        </div>

        {/* 3-Column Gigs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredGigs.map((gig) => (
            <GigCard
              key={gig.id}
              gig={gig}
              lang={lang}
              onOpenDetails={onOpenGigDetails}
              onQuickOrder={onQuickOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
