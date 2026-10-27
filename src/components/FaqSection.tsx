import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { FAQS } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
            <span>{lang === 'en' ? 'Common Questions' : 'সাধারণ জিজ্ঞাসা'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Fiverr Order Guidelines' : 'অর্ডারের নিয়মাবলী'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en' ? 'Frequently Asked Questions' : 'সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'en'
              ? 'Everything you need to know about placing orders, data privacy, turnaround times, and sample tests.'
              : 'অর্ডার প্রক্রিয়া, ডাটার নিরাপত্তা, ডেলিভারি সময় এবং ফ্রি স্যাম্পল টেস্ট সংক্রান্ত যাবতীয় তথ্য।'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? faq.question : faq.questionBn}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{lang === 'en' ? faq.answer : faq.answerBn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
