import React from 'react';
import { Language } from '../types/portfolio';
import { TOOL_SKILLS } from '../data/portfolioData';
import { Database, FileSpreadsheet, Search, ShoppingBag } from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/60 border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
            <span>{lang === 'en' ? 'Technical Competency' : 'টেকনিক্যাল দক্ষতা'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Software & Stacks' : 'সফটওয়্যার ও টুলস'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en' ? 'Specialized Tools & Formula Expertise' : 'বিশেষায়িত টুলস ও ফর্মুলা দক্ষতা'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'en'
              ? 'Deep mastery of advanced spreadsheet formulas, web scraping engines, CRM architectures, and e-commerce bulk inventory tools.'
              : 'অ্যাডভান্সড স্প্রেডশিট ফর্মুলা, ডাটা স্ক্র্যাপিং ইঞ্জিন, সিআরএম আর্কিটেকচার এবং ই-কমার্স টুলসের গভীর দক্ষতা।'}
          </p>
        </div>

        {/* 2-Column Grid of Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {TOOL_SKILLS.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{tool.name}</h3>
                    <span className="text-[11px] text-slate-500">
                      {lang === 'en' ? tool.category : tool.categoryBn} · {lang === 'en' ? tool.experience : tool.experienceBn}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-extrabold text-emerald-700 tabular-nums">
                    {tool.proficiency}%
                  </span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                    {lang === 'en' ? 'Proficiency' : 'দক্ষতা'}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4 overflow-hidden">
                <div
                  className="bg-emerald-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${tool.proficiency}%` }}
                />
              </div>

              {/* Unboxed Tags with Separator Dot Discipline */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600">
                {tool.tags.map((tag, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="font-mono text-[11px] text-slate-700">{tag}</span>
                    {tIdx < tool.tags.length - 1 && <span className="text-slate-300">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Standard Operating Procedure (Workflow) */}
        <div className="p-7 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              {lang === 'en' ? 'Standard Operating Procedure (SOP)' : 'কাজের স্ট্যান্ডার্ড ধাপসমূহ'}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              {lang === 'en' ? 'How Every Project is Processed with Zero Errors' : 'যেভাবে প্রতিটি কাজ শতভাগ নির্ভুলভাবে সম্পন্ন হয়'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                {lang === 'en' ? 'Audit & Scope Check' : 'ফাইল অডিট ও বিশ্লেষণ'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Inspect raw file architecture, identify delimiter discrepancies, check encoding (UTF-8) and verify client requirements.'
                  : 'ক্লায়েন্টের মূল ফাইলটি চেক করা, সিনট্যাক্স ও কলামের অসামঞ্জস্যতা চিহ্নিত করা।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                {lang === 'en' ? 'Power Query Cleaning' : 'ক্লিনিং ও স্ট্যান্ডার্ডাইজেশন'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Apply deduplication algorithms, trim trailing spaces, normalize phone numbers to E.164, and structure records.'
                  : 'ডুপ্লিকেট রিমুভ, টেক্সট কেস ঠিক করা, আন্তর্জাতিক ফোন ও ইমেইল ভ্যালিডেশন সম্পন্ন করা।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                {lang === 'en' ? 'Double-Pass Verification' : 'ডাবল-চেক কোয়ালিটি কন্ট্রোল'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Cross-verify totals with mathematical SUM formulas, spot-check random batches (15%), and test email bounces.'
                  : 'অংক ও যোগফল ক্রস-ভেরিফাই করা, র্যান্ডম ১৫% স্যাম্পল ম্যানুয়ালি যাচাই করা।'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                04
              </div>
              <h4 className="text-xs font-bold text-slate-900 uppercase">
                {lang === 'en' ? 'Final Secure Handover' : 'চূড়ান্ত ফাইল হস্তান্তর'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'en'
                  ? 'Deliver formatted Excel/Google Sheet along with summary report, with 100% confidentiality protection.'
                  : 'ক্লায়েন্টকে পরিচ্ছন্ন ও গোছানো ফাইলে কাজ বুঝিয়ে দেওয়া এবং প্রয়োজনে ফ্রি আফটার-সাপোর্ট।'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
