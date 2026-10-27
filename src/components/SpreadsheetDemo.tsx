import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { DEMO_SPREADSHEET_DATA } from '../data/portfolioData';
import { Play, Check, Download, Search, RefreshCw, AlertTriangle } from 'lucide-react';

interface SpreadsheetDemoProps {
  lang: Language;
}

export const SpreadsheetDemo: React.FC<SpreadsheetDemoProps> = ({ lang }) => {
  const [viewMode, setViewMode] = useState<'raw' | 'clean'>('clean');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCleaning, setIsCleaning] = useState(false);
  const [cleaningStep, setCleaningStep] = useState<string | null>(null);
  const [selectedRowId, setSelectedRowId] = useState<string>(DEMO_SPREADSHEET_DATA[0].id);

  const handleSimulateClean = () => {
    setIsCleaning(true);
    setViewMode('raw');
    setCleaningStep(lang === 'en' ? 'Scanning 5 records for syntax errors...' : '৫টি রেকর্ডে সিনট্যাক্স এরর খোঁজা হচ্ছে...');

    setTimeout(() => {
      setCleaningStep(lang === 'en' ? 'Trimming rogue spaces & capitalizing Proper Case...' : 'অপ্রয়োজনীয় স্পেস রিমুভ ও প্রপার কেস রূপান্তর...');
    }, 600);

    setTimeout(() => {
      setCleaningStep(lang === 'en' ? 'Normalizing international telephone formats...' : 'আন্তর্জাতিক ফোন নম্বর স্ট্যান্ডার্ড ফরম্যাটিং...');
    }, 1200);

    setTimeout(() => {
      setCleaningStep(lang === 'en' ? 'Resolving email typos & validating MX records...' : 'ইমেইল টাইপো সমাধান ও ডোমেইন যাচাইকরণ...');
    }, 1800);

    setTimeout(() => {
      setCleaningStep(null);
      setIsCleaning(false);
      setViewMode('clean');
    }, 2400);
  };

  const handleDownloadCsv = () => {
    // Generate clean CSV
    const headers = ['First Name', 'Last Name', 'Company', 'Email', 'Phone', 'Revenue', 'State', 'Status'];
    const rows = DEMO_SPREADSHEET_DATA.map((item) => [
      item.clientClean.firstName,
      item.clientClean.lastName,
      item.clientClean.company,
      item.clientClean.email,
      item.clientClean.phone,
      item.clientClean.revenueFormatted,
      item.clientClean.stateCode,
      item.clientClean.status
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.map((val) => `"${val}"`).join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Somrat_Cleaned_Data_Sample.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredData = DEMO_SPREADSHEET_DATA.filter((row) => {
    const q = searchQuery.toLowerCase();
    if (viewMode === 'raw') {
      return (
        row.clientRaw.name.toLowerCase().includes(q) ||
        row.clientRaw.company.toLowerCase().includes(q) ||
        row.clientRaw.email.toLowerCase().includes(q)
      );
    } else {
      return (
        row.clientClean.firstName.toLowerCase().includes(q) ||
        row.clientClean.lastName.toLowerCase().includes(q) ||
        row.clientClean.company.toLowerCase().includes(q) ||
        row.clientClean.email.toLowerCase().includes(q)
      );
    }
  });

  const activeRow = DEMO_SPREADSHEET_DATA.find((r) => r.id === selectedRowId) || DEMO_SPREADSHEET_DATA[0];

  return (
    <section id="demo" className="py-16 md:py-24 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 tracking-wide uppercase mb-2">
              <span>{lang === 'en' ? 'Proof of Work' : 'কাজের প্রমাণ'}</span>
              <span aria-hidden="true">·</span>
              <span>{lang === 'en' ? 'Interactive Spreadsheet Engine' : 'ইন্টারেক্টিভ স্প্রেডশিট ইঞ্জিন'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              {lang === 'en' ? 'Before vs. After: Live Data Cleaning Showcase' : 'ক্লিনিংয়ের আগে বনাম পরে: লাইভ ডাটা স্যাম্পল'}
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              {lang === 'en'
                ? 'Test how messy client inputs (typos, bad casing, double emails, missing brackets) are transformed into structured, audit-ready data.'
                : 'দেখুন কীভাবে অগোছালো ও ভুলভ্রান্তিভরা কাঁচা ডাটা নিমেষেই নিখুঁত ও প্রফেশনাল স্প্রেডশিটে রূপান্তর করা হয়।'}
            </p>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="mt-4 md:mt-0 flex items-center gap-2 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setViewMode('raw')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'raw'
                  ? 'bg-red-50 text-red-700 border border-red-200 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? 'Raw Messy Data (Before)' : 'কাঁচা অগোছালো ডাটা (আগে)'}
            </button>
            <button
              onClick={() => setViewMode('clean')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'clean'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'en' ? 'Cleaned & Standardized (After)' : 'পরিমার্জিত ও নিখুঁত (পরে)'}
            </button>
          </div>
        </div>

        {/* Toolbar Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2 flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search records in sample sheet...' : 'রেকর্ড সার্চ করুন...'}
              className="bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleSimulateClean}
              disabled={isCleaning}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-xs transition-colors cursor-pointer disabled:opacity-50 whitespace-nowrap shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-emerald-600 ${isCleaning ? 'animate-spin' : ''}`} />
              <span>{lang === 'en' ? 'Run Transformation Routine' : 'ক্লিনিং প্রসেস চালান'}</span>
            </button>

            <button
              onClick={handleDownloadCsv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>{lang === 'en' ? 'Download Sample CSV' : 'CSV ডাউনলোড'}</span>
            </button>
          </div>
        </div>

        {/* Status Notification during Animation */}
        {cleaningStep && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2.5 text-xs font-medium text-emerald-800 animate-pulse">
            <Play className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{cleaningStep}</span>
          </div>
        )}

        {/* Live Table Container */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <th className="py-2.5 px-3.5 whitespace-nowrap">#</th>
                {viewMode === 'raw' ? (
                  <>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw Name
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw Company
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw Email
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw Phone
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw Revenue
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-red-900 bg-red-50/60">
                      Raw State
                    </th>
                  </>
                ) : (
                  <>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      First Name
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Last Name
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Company
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Verified Email
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Standard Phone
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Revenue (USD)
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      State
                    </th>
                    <th className="py-2.5 px-3.5 whitespace-nowrap text-emerald-950 bg-emerald-50/60">
                      Hygiene
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredData.map((row, index) => {
                const isSelected = row.id === selectedRowId;
                return (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedRowId(row.id)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? viewMode === 'raw'
                          ? 'bg-red-50/40'
                          : 'bg-emerald-50/40'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3 px-3.5 font-mono text-slate-400 tabular-nums">
                      0{index + 1}
                    </td>

                    {viewMode === 'raw' ? (
                      <>
                        <td className="py-3 px-3.5 font-mono text-slate-800 font-medium whitespace-nowrap">
                          {row.clientRaw.name}
                        </td>
                        <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                          {row.clientRaw.company}
                        </td>
                        <td className="py-3 px-3.5 font-mono text-red-600 whitespace-nowrap flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                          <span>{row.clientRaw.email}</span>
                        </td>
                        <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                          {row.clientRaw.phone}
                        </td>
                        <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                          {row.clientRaw.revenue}
                        </td>
                        <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                          {row.clientRaw.state}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-3 px-3.5 font-medium text-slate-900 whitespace-nowrap">
                          {row.clientClean.firstName}
                        </td>
                        <td className="py-3 px-3.5 font-medium text-slate-900 whitespace-nowrap">
                          {row.clientClean.lastName}
                        </td>
                        <td className="py-3 px-3.5 text-slate-700 whitespace-nowrap">
                          {row.clientClean.company}
                        </td>
                        <td className="py-3 px-3.5 text-emerald-700 font-mono whitespace-nowrap flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                          <span>{row.clientClean.email}</span>
                        </td>
                        <td className="py-3 px-3.5 font-mono text-slate-800 whitespace-nowrap tabular-nums">
                          {row.clientClean.phone}
                        </td>
                        <td className="py-3 px-3.5 font-semibold text-slate-900 whitespace-nowrap tabular-nums">
                          {row.clientClean.revenueFormatted}
                        </td>
                        <td className="py-3 px-3.5 font-medium text-slate-700 whitespace-nowrap">
                          {row.clientClean.stateCode}
                        </td>
                        <td className="py-3 px-3.5 whitespace-nowrap">
                          <span className="text-[11px] font-medium text-emerald-700">
                            {row.clientClean.status}
                          </span>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Row Issue & Fix Inspector Card */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
              {lang === 'en' ? 'Quality Audit Breakdown (Row Inspection)' : 'কোয়ালিটি অডিট বিশ্লেষণ'}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              ID: {activeRow.id} · {activeRow.clientClean.firstName} {activeRow.clientClean.lastName}
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {lang === 'en' ? activeRow.issueFixed : activeRow.issueFixedBn}
          </p>
        </div>
      </div>
    </section>
  );
};
