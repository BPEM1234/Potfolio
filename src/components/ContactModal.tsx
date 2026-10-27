import React, { useState, useEffect } from 'react';
import { Language } from '../types/portfolio';
import { PROFILE_INFO } from '../data/portfolioData';
import { X, Send, CheckCircle2, MessageSquare, Mail, ShieldCheck, Paperclip } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  initialService?: string;
  initialQuote?: {
    service: string;
    volume: number;
    totalPrice: number;
    deliveryTime: string;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  lang,
  onClose,
  initialService,
  initialQuote
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Excel Data Cleaning & Formatting');
  const [volume, setVolume] = useState(initialQuote ? `${initialQuote.volume}` : '1,000');
  const [details, setDetails] = useState('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
    if (initialQuote) {
      setService(initialQuote.service);
      setVolume(`${initialQuote.volume}`);
      setDetails(`Estimated Cost: $${initialQuote.totalPrice} · Turnaround: ${initialQuote.deliveryTime}`);
    }
  }, [initialService, initialQuote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {lang === 'en' ? 'Start Project & Get Free Sample' : 'প্রজেক্ট শুরু করুন ও ফ্রি স্যাম্পল নিন'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' ? 'Average response time: Under 1 hour' : 'গড় রেসপন্স সময়: ১ ঘণ্টার মধ্যে'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {lang === 'en' ? 'Inquiry Sent Successfully!' : 'মেসেজ সফলভাবে পাঠানো হয়েছে!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                {lang === 'en'
                  ? `Thank you, ${name || 'Client'}. I have received your request for "${service}". I will review your requirements and respond to ${email || 'your email'} within 60 minutes.`
                  : `ধন্যবাদ ${name || 'ক্লায়েন্ট'}। আপনার রিকোয়েস্ট জমা হয়েছে। পরবর্তী ৬০ মিনিটের মধ্যেই আপনার ইমেইলে যোগাযোগ করা হবে।`}
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Done / Close' : 'সম্পন্ন / বন্ধ করুন'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {initialQuote && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex justify-between items-center">
                  <div>
                    <span className="font-bold">{lang === 'en' ? 'Attached Quote:' : 'যুক্ত কোটেশন:'}</span>{' '}
                    <span>{initialQuote.service} ({initialQuote.volume} items)</span>
                  </div>
                  <span className="font-extrabold text-sm tabular-nums text-emerald-700">
                    ${initialQuote.totalPrice}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'en' ? 'Your Name' : 'আপনার নাম'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'en' ? 'Work Email' : 'ইমেইল এড্রেস'} *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'en' ? 'Service Needed' : 'প্রয়োজনীয় সার্ভিস'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Excel Data Cleaning & Formatting">Excel & Sheets Data Cleaning</option>
                    <option value="B2B Lead Generation & Mining">B2B Lead Generation</option>
                    <option value="E-Commerce Product Upload">E-Commerce Product Upload</option>
                    <option value="Scanned PDF to Excel Conversion">PDF to Excel Conversion</option>
                    <option value="Web Scraping & Directory Mining">Web Scraping & Research</option>
                    <option value="CRM Migration & Clean">CRM Data Migration</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'en' ? 'Estimated Scope / Rows' : 'আনুমানিক পরিমাণ (রো / পৃষ্ঠা)'}
                  </label>
                  <input
                    type="text"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    placeholder="e.g. 2,500 rows / 40 pages"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  {lang === 'en' ? 'Project Requirements & Instructions' : 'কাজের বিস্তারিত বিবরণ ও নির্দেশনা'}
                </label>
                <textarea
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Tell me about columns to clean, target industries, or specific formulas needed...'
                      : 'কী কী কলাম ক্লিন করতে হবে বা কোন ফরম্যাটে ফাইল দরকার লিখুন...'
                  }
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Sample File Upload Simulation */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  {lang === 'en' ? 'Attach Sample File (CSV / Excel / PDF)' : 'স্যাম্পল ফাইল সংযুক্ত করুন (ঐচ্ছিক)'}
                </label>
                <div className="relative border border-dashed border-slate-300 hover:border-emerald-500 rounded-lg p-2.5 text-center cursor-pointer transition-colors bg-slate-50/50">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                    <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {attachedFileName
                        ? attachedFileName
                        : (lang === 'en' ? 'Click to select sample file for 20-row test' : '২০ রো ফ্রি টেস্টের জন্য ফাইল সিলেক্ট করুন')}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Send Inquiry & Request Sample' : 'ইনকোয়ারি ও ফ্রি স্যাম্পল পাঠান'}</span>
              </button>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'NDA & Privacy Guaranteed' : 'গোপনীয়তার শতভাগ নিশ্চয়তা'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${PROFILE_INFO.contactEmail}`}
                    className="hover:text-slate-800 underline flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    <span>{PROFILE_INFO.contactEmail}</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
