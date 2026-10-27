import React from 'react';
import { Language } from '../types/portfolio';
import { PROFILE_INFO } from '../data/portfolioData';
import { Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenContact }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                SR
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {lang === 'en' ? PROFILE_INFO.name : PROFILE_INFO.nameBn}
              </span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              {lang === 'en'
                ? 'Senior Data Entry Specialist & Virtual Assistant on Fiverr. Specializing in high-volume spreadsheet cleaning, B2B lead mining, and e-commerce product catalogs.'
                : 'সিনিয়র ডাটা এন্ট্রি স্পেশালিস্ট ও ফাইভার ভার্চুয়াল অ্যাসিস্ট্যান্ট। নিখুঁত এক্সেল ডাটা ক্লিনিং, বিটুবি লিড জেনারেশন ও ই-কমার্স ক্যাটালগ ম্যানেজমেন্ট।'}
            </p>
            <div className="flex items-center gap-3 text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PROFILE_INFO.location}</span>
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PROFILE_INFO.sellerBadge}</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {lang === 'en' ? 'Quick Navigation' : 'দ্রুত লিঙ্কসমূহ'}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#gigs" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Fiverr Gig Catalog' : 'গিগ ক্যাটালগ'}
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Live Spreadsheet Cleaner' : 'লাইভ স্প্রেডশিট ডেমো'}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Price & Turnaround Calculator' : 'খরচ ও সময় হিসাব'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Tools & Formulas' : 'টুলস ও ফর্মুলা'}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {lang === 'en' ? 'Client Reviews (680+)' : 'ক্লায়েন্ট রিভিউ (৬৮০+)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {lang === 'en' ? 'Direct Contact' : 'যোগাযোগ'}
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${PROFILE_INFO.contactEmail}`}
                className="hover:text-white flex items-center gap-2 text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{PROFILE_INFO.contactEmail}</span>
              </a>

              <p className="text-[11px] text-slate-400">
                {lang === 'en'
                  ? 'Ready to sign NDAs. Free 10-20 row quality test sample delivered in under 2 hours.'
                  : 'গোপনীয়তা চুক্তি সমর্থিত। ১০-২০ রো এর ফ্রি কোয়ালিটি টেস্ট স্যাম্পল মাত্র ২ ঘণ্টায়।'}
              </p>

              <button
                onClick={onOpenContact}
                className="mt-2 w-full py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Send Direct Message' : 'মেসেজ পাঠান'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PROFILE_INFO.name}.{' '}
            {lang === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </div>
          <div className="flex items-center gap-1">
            <span>{lang === 'en' ? 'Designed for high-precision data results' : 'সর্বোচ্চ নির্ভুলতার সাথে তৈরি'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
