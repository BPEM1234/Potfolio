import React from 'react';
import { Language } from '../types/portfolio';
import { CLIENT_REVIEWS } from '../data/portfolioData';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

interface TestimonialsProps {
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
              <span>{lang === 'en' ? 'Verified Client Feedback' : 'যাচাইকৃত ক্লায়েন্ট রিভিউ'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'en' ? 'Fiverr 5.0 Star Rating' : 'ফাইভার ৫.০ স্টার রেটিং'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              {lang === 'en' ? 'What Global Clients Say About My Work' : 'বিশ্বের নানা প্রান্তের ক্লায়েন্টদের মূল্যায়ন'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'en'
                ? 'Over 680+ five-star reviews from business founders in the USA, UK, Canada, Australia, and Germany.'
                : 'আমেরিকা, যুক্তরাজ্য, কানাডা, অস্ট্রেলিয়া ও জার্মানির ব্যবসায়িক গ্রাহকদের বাস্তব অভিজ্ঞতা।'}
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 shrink-0">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900 tabular-nums">5.0 / 5.0</span>
            <span className="text-xs text-slate-500">(684 Reviews)</span>
          </div>
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-5 sm:p-6 bg-slate-50/70 rounded-2xl border border-slate-200 flex flex-col justify-between hover:bg-slate-50 transition-colors"
            >
              <div>
                {/* Header: Buyer Info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs">
                      {review.buyerName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">{review.buyerName}</span>
                        <span title={review.buyerCountry} className="text-sm">
                          {review.buyerCountryFlag}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block">
                        {review.buyerCountry} · {review.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Gig Title Ordered */}
                <div className="text-[11px] text-emerald-800 font-medium bg-emerald-50 border border-emerald-200/60 rounded px-2 py-0.5 mb-3 inline-block">
                  {lang === 'en' ? review.gigTitle : review.gigTitleBn}
                </div>

                {/* Comment Body */}
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                  "{lang === 'en' ? review.comment : review.commentBn}"
                </p>
              </div>

              {/* Order Footer Badge */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <div className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Verified Fiverr Buyer' : 'ভেরিফাইড ফাইভার বায়ার'}</span>
                </div>
                <span className="font-mono font-semibold text-slate-700">
                  {lang === 'en' ? `Order Value: ${review.orderValue}` : `অর্ডার: ${review.orderValue}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
