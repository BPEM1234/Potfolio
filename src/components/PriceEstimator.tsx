import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { Calculator, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface PriceEstimatorProps {
  lang: Language;
  onProceedWithQuote: (quoteData: {
    service: string;
    volume: number;
    speed: string;
    addons: string[];
    totalPrice: number;
    deliveryTime: string;
  }) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ lang, onProceedWithQuote }) => {
  const [selectedService, setSelectedService] = useState<'excel' | 'leadgen' | 'ecommerce' | 'conversion' | 'scraping'>('excel');
  const [volume, setVolume] = useState<number>(1500);
  const [speed, setSpeed] = useState<'standard' | 'express' | 'urgent'>('standard');
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [crmDirectUpload, setCrmDirectUpload] = useState(false);
  const [macroScript, setMacroScript] = useState(false);

  const services = [
    { id: 'excel', name: 'Excel Data Cleaning', nameBn: 'এক্সেল ডাটা ক্লিনিং', baseRatePer1000: 20, unit: 'Rows' },
    { id: 'leadgen', name: 'B2B Lead Generation', nameBn: 'বিটুবি লিডস কালেকশন', baseRatePer1000: 150, unit: 'Verified Leads' },
    { id: 'ecommerce', name: 'E-Commerce Product Upload', nameBn: 'ই-কমার্স প্রোডাক্ট আপলোড', baseRatePer1000: 120, unit: 'Products' },
    { id: 'conversion', name: 'PDF to Excel Conversion', nameBn: 'PDF থেকে এক্সেল রূপান্তর', baseRatePer1000: 60, unit: 'Pages' },
    { id: 'scraping', name: 'Web Directory Scraping', nameBn: 'ওয়েব ডিরেক্টরি স্ক্র্যাপিং', baseRatePer1000: 35, unit: 'Records' }
  ];

  const currentService = services.find((s) => s.id === selectedService) || services[0];

  // Base calculation
  let calculated = (volume / 1000) * currentService.baseRatePer1000;
  if (calculated < 15) calculated = 15; // minimum order floor

  // Speed multiplier
  let speedMultiplier = 1;
  let deliveryDays = Math.max(1, Math.ceil(volume / 3000));
  if (speed === 'express') {
    speedMultiplier = 1.25;
    deliveryDays = Math.max(1, Math.floor(deliveryDays * 0.6));
  } else if (speed === 'urgent') {
    speedMultiplier = 1.5;
    deliveryDays = 1; // 24h rush
  }

  // Add-ons
  let addonsCost = 0;
  const activeAddons: string[] = [];
  if (phoneValidation) {
    addonsCost += 15;
    activeAddons.push('Phone Validation');
  }
  if (crmDirectUpload) {
    addonsCost += 25;
    activeAddons.push('Direct CRM Ingest');
  }
  if (macroScript) {
    addonsCost += 35;
    activeAddons.push('Automation Macro/Script');
  }

  const finalPrice = Math.round(calculated * speedMultiplier + addonsCost);
  const deliveryText =
    speed === 'urgent'
      ? (lang === 'en' ? 'Within 24 Hours' : '২৪ ঘণ্টার মধ্যে')
      : (lang === 'en' ? `${deliveryDays} Business Days` : `${deliveryDays} কার্যদিবস`);

  const handleBookQuote = () => {
    onProceedWithQuote({
      service: lang === 'en' ? currentService.name : currentService.nameBn,
      volume,
      speed: speed === 'urgent' ? 'Urgent Rush' : speed === 'express' ? 'Express' : 'Standard',
      addons: activeAddons,
      totalPrice: finalPrice,
      deliveryTime: deliveryText
    });
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
            <span>{lang === 'en' ? 'Transparent Pricing' : 'স্বচ্ছ মূল্য তালিকা'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Instant Calculator' : 'তাৎক্ষণিক হিসাব'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            {lang === 'en' ? 'Estimate Your Project Cost & Delivery Time' : 'আপনার প্রজেক্টের খরচ ও ডেলিভারি সময় হিসাব করুন'}
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            {lang === 'en'
              ? 'Select your project scope, quantity of records, and delivery speed to get an instant quote with zero hidden fees.'
              : 'কাজের ধরণ, ডাটার পরিমাণ ও ডেলিভারির গতি নির্বাচন করে কোনো লুকানো চার্জ ছাড়াই তাৎক্ষণিক বাজেট জেনে নিন।'}
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6">
            {/* Step 1: Service Type */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2.5">
                {lang === 'en' ? '1. Select Service Type' : '১. সার্ভিসের ধরণ নির্বাচন করুন'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    onClick={() => {
                      setSelectedService(srv.id as any);
                      // Adjust reasonable default volume per service
                      if (srv.id === 'conversion') setVolume(30);
                      else if (srv.id === 'leadgen') setVolume(500);
                      else setVolume(2000);
                    }}
                    className={`p-3 text-left rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      selectedService === srv.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span>{lang === 'en' ? srv.name : srv.nameBn}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Volume Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {lang === 'en' ? '2. Volume / Quantity' : '২. ডাটার সংখ্যা / পরিমাণ'}
                </label>
                <span className="text-sm font-extrabold text-emerald-700 tabular-nums font-mono">
                  {volume.toLocaleString()} {currentService.unit}
                </span>
              </div>

              <input
                type="range"
                min={selectedService === 'conversion' ? 10 : 200}
                max={selectedService === 'conversion' ? 500 : 25000}
                step={selectedService === 'conversion' ? 10 : 250}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>{selectedService === 'conversion' ? '10 pages' : '200 records'}</span>
                <span>{selectedService === 'conversion' ? '500 pages' : '25,000+ records'}</span>
              </div>
            </div>

            {/* Step 3: Turnaround Speed */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2.5">
                {lang === 'en' ? '3. Turnaround Speed' : '৩. ডেলিভারি স্পিড'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => setSpeed('standard')}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    speed === 'standard'
                      ? 'bg-white text-slate-900 border-emerald-600 ring-1 ring-emerald-600 font-bold shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Clock className="w-4 h-4 mx-auto mb-1 text-slate-500" />
                  <span>{lang === 'en' ? 'Standard' : 'নিয়মিত'}</span>
                  <span className="block text-[11px] text-slate-400 font-normal">Base rate</span>
                </button>

                <button
                  onClick={() => setSpeed('express')}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    speed === 'express'
                      ? 'bg-white text-slate-900 border-emerald-600 ring-1 ring-emerald-600 font-bold shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Zap className="w-4 h-4 mx-auto mb-1 text-amber-500" />
                  <span>{lang === 'en' ? 'Express' : 'এক্সপ্রেস'}</span>
                  <span className="block text-[11px] text-slate-400 font-normal">+25%</span>
                </button>

                <button
                  onClick={() => setSpeed('urgent')}
                  className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                    speed === 'urgent'
                      ? 'bg-white text-slate-900 border-emerald-600 ring-1 ring-emerald-600 font-bold shadow-2xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Zap className="w-4 h-4 mx-auto mb-1 text-red-500" />
                  <span>{lang === 'en' ? '24h Urgent' : '২৪ ঘণ্টা জরুরি'}</span>
                  <span className="block text-[11px] text-slate-400 font-normal">+50%</span>
                </button>
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wide block mb-2">
                {lang === 'en' ? '4. Optional Custom Add-ons' : '৪. ঐচ্ছিক অ্যাড-অন'}
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={phoneValidation}
                      onChange={(e) => setPhoneValidation(e.target.checked)}
                      className="accent-emerald-600"
                    />
                    <span className="text-slate-700 font-medium">
                      {lang === 'en' ? 'Phone Line Carrier Verification (+ $15)' : 'ফোন লাইন ভেরিফিকেশন (+ $১৫)'}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">+$15</span>
                </label>

                <label className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={crmDirectUpload}
                      onChange={(e) => setCrmDirectUpload(e.target.checked)}
                      className="accent-emerald-600"
                    />
                    <span className="text-slate-700 font-medium">
                      {lang === 'en' ? 'Direct CRM / Shopify Integration (+ $25)' : 'সরাসরি সিআরএম বা শপিফাই আপলোড (+ $২৫)'}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">+$25</span>
                </label>

                <label className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200 cursor-pointer text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={macroScript}
                      onChange={(e) => setMacroScript(e.target.checked)}
                      className="accent-emerald-600"
                    />
                    <span className="text-slate-700 font-medium">
                      {lang === 'en' ? 'Automated Python/Excel Macro Routine (+ $35)' : 'স্বয়ংক্রিয় ম্যাক্রো স্ক্রিপ্ট ফাইল (+ $৩৫)'}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">+$35</span>
                </label>
              </div>
            </div>
          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {lang === 'en' ? 'Instant Quote Summary' : 'কোটেশন সারসংক্ষেপ'}
                </span>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2 py-0.5 rounded font-mono">
                  {lang === 'en' ? 'Fiverr Rates' : 'ফাইভার রেট'}
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{lang === 'en' ? 'Service' : 'সার্ভিস'}</span>
                  <span className="font-semibold text-slate-200">
                    {lang === 'en' ? currentService.name : currentService.nameBn}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{lang === 'en' ? 'Selected Scope' : 'পরিমাণ'}</span>
                  <span className="font-mono text-slate-200">
                    {volume.toLocaleString()} {currentService.unit}
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{lang === 'en' ? 'Estimated Delivery' : 'ডেলিভারি সময়'}</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{deliveryText}</span>
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{lang === 'en' ? 'Revisions' : 'রিভিশন'}</span>
                  <span className="font-semibold text-slate-200">
                    {lang === 'en' ? 'Unlimited until 100% Satisfied' : 'শতভাগ সন্তুষ্টি পর্যন্ত আনলিমিটেড'}
                  </span>
                </div>

                {activeAddons.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span>{lang === 'en' ? 'Add-ons included:' : 'যুক্ত করা অ্যাড-অন:'}</span>
                    <ul className="list-disc list-inside mt-1 text-slate-300">
                      {activeAddons.map((add, idx) => (
                        <li key={idx}>{add}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-slate-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {lang === 'en' ? 'Estimated Total (USD)' : 'মোট আনুমানিক বাজেট (ডলার)'}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
                    ${finalPrice}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  {lang === 'en' ? 'No upfront deposit for test rows' : 'ফ্রি স্যাম্পল টেস্ট উপলব্ধ'}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button
                onClick={handleBookQuote}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>{lang === 'en' ? `Lock In This Quote ($${finalPrice})` : `এই কোটেশনে প্রজেক্ট বুক করুন ($${finalPrice})`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{lang === 'en' ? '100% Accuracy Guarantee · Zero Risk' : '১০০% নির্ভুলতা ও মানি-ব্যাক গ্যারান্টি'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
