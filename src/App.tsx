import React, { useState } from 'react';
import { GigItem, Language } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpreadsheetDemo } from './components/SpreadsheetDemo';
import { PortfolioGrid } from './components/PortfolioGrid';
import { GigModal } from './components/GigModal';
import { PriceEstimator } from './components/PriceEstimator';
import { SkillsSection } from './components/SkillsSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);
  const [selectedGigForModal, setSelectedGigForModal] = useState<GigItem | null>(null);
  const [activeQuote, setActiveQuote] = useState<{
    service: string;
    volume: number;
    totalPrice: number;
    deliveryTime: string;
  } | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject);
    setActiveQuote(null);
    setIsContactOpen(true);
  };

  const handleOpenGigDetails = (gig: GigItem) => {
    setSelectedGigForModal(gig);
  };

  const handleCloseGigModal = () => {
    setSelectedGigForModal(null);
  };

  const handleQuickOrder = (gig: GigItem, packageName: 'basic' | 'standard' | 'premium') => {
    const pkg = gig.packages[packageName];
    setContactSubject(`${gig.title} (${pkg.name} Package - $${pkg.price})`);
    setActiveQuote({
      service: gig.title,
      volume: 1000,
      totalPrice: pkg.price,
      deliveryTime: `${pkg.deliveryDays} Days`
    });
    setIsContactOpen(true);
  };

  const handleSelectPackageOrder = (
    gig: GigItem,
    packageName: 'basic' | 'standard' | 'premium',
    price: number
  ) => {
    const pkg = gig.packages[packageName];
    setSelectedGigForModal(null);
    setContactSubject(`${gig.title} - ${pkg.name} ($${price})`);
    setActiveQuote({
      service: gig.title,
      volume: 1000,
      totalPrice: price,
      deliveryTime: `${pkg.deliveryDays} Days`
    });
    setIsContactOpen(true);
  };

  const handleProceedWithQuote = (quoteData: {
    service: string;
    volume: number;
    speed: string;
    addons: string[];
    totalPrice: number;
    deliveryTime: string;
  }) => {
    setContactSubject(`Instant Quote: ${quoteData.service}`);
    setActiveQuote({
      service: quoteData.service,
      volume: quoteData.volume,
      totalPrice: quoteData.totalPrice,
      deliveryTime: quoteData.deliveryTime
    });
    setIsContactOpen(true);
  };

  const scrollToGigs = () => {
    const element = document.getElementById('gigs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 antialiased">
      {/* 3-Zone Clean Top Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenContact={handleOpenContact}
      />

      <main>
        {/* Split Screen Hero with Verified Badges & KPI Strip */}
        <Hero
          lang={lang}
          onOpenContact={handleOpenContact}
          onExploreGigs={scrollToGigs}
          onOpenCalculator={scrollToCalculator}
        />

        {/* Live Interactive Spreadsheet Cleaning Demo (Before vs After) */}
        <SpreadsheetDemo lang={lang} />

        {/* Fiverr-Style Gigs Catalog Grid with Filters */}
        <PortfolioGrid
          lang={lang}
          onOpenGigDetails={handleOpenGigDetails}
          onQuickOrder={handleQuickOrder}
        />

        {/* Interactive Price & Turnaround Estimator Calculator */}
        <PriceEstimator
          lang={lang}
          onProceedWithQuote={handleProceedWithQuote}
        />

        {/* Technical Tools & Formula Proficiency + SOP Workflow */}
        <SkillsSection lang={lang} />

        {/* Verified Global Client Reviews */}
        <Testimonials lang={lang} />

        {/* Common Questions & FAQs */}
        <FaqSection lang={lang} />
      </main>

      {/* Clean Professional Footer */}
      <Footer
        lang={lang}
        onOpenContact={() => handleOpenContact()}
      />

      {/* Full Fiverr-Style Gig Packages & Sample Inspector Modal */}
      <GigModal
        gig={selectedGigForModal}
        lang={lang}
        onClose={handleCloseGigModal}
        onSelectPackageOrder={handleSelectPackageOrder}
      />

      {/* Instant Project Inquiry & Free Sample Request Modal */}
      <ContactModal
        isOpen={isContactOpen}
        lang={lang}
        onClose={() => setIsContactOpen(false)}
        initialService={contactSubject}
        initialQuote={activeQuote}
      />
    </div>
  );
}
