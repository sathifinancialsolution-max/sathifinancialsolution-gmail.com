import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { EmiCalculator } from './components/EmiCalculator';
import { CibilPage } from './components/CibilPage';
import { DocumentsPage } from './components/DocumentsPage';
import { EligibilityChecker } from './components/EligibilityChecker';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Disclaimers } from './components/Disclaimers';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { FloatingActions } from './components/FloatingActions';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedServiceFilter, setSelectedServiceFilter] = useState<string | undefined>(undefined);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<string>('Personal Loan');
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (view: PageView, filter?: string) => {
    setCurrentView(view);
    if (filter) {
      setSelectedServiceFilter(filter);
    }
  };

  const handleOpenEnquiry = (prefillType?: string) => {
    if (prefillType) {
      setEnquiryPrefill(prefillType);
    }
    setIsEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-amber-400 selection:text-slate-950 pb-16 sm:pb-0">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenEnquiry={(type) => handleOpenEnquiry(type || 'General Loan Assistance')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <div className="space-y-0">
            {/* 1. Hero Section */}
            <Hero
              onOpenEnquiry={() => handleOpenEnquiry('General Loan Assistance')}
              onNavigate={handleNavigate}
            />

            {/* 2. Services Marketplace */}
            <ServicesSection
              onOpenEnquiry={handleOpenEnquiry}
              onNavigateToDocs={(serviceId) => handleNavigate('documents', serviceId)}
            />

            {/* 3. Interactive EMI Calculator */}
            <EmiCalculator onOpenEnquiry={handleOpenEnquiry} />

            {/* 4. How It Works - 4-Step Process */}
            <HowItWorks onOpenEnquiry={() => handleOpenEnquiry('4-Step Application')} />

            {/* 5. About & Why Choose SFS */}
            <AboutSection onOpenEnquiry={() => handleOpenEnquiry('About SFS Consultation')} />

            {/* 6. Customer Reviews */}
            <ReviewsSection />

            {/* 7. FAQ */}
            <FaqSection />

            {/* 8. Contact & Map */}
            <ContactSection />
          </div>
        )}

        {currentView === 'services' && (
          <div>
            {/* View Breadcrumb Header */}
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <div>
                  <button
                    onClick={() => handleNavigate('home')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Home</span>
                  </button>
                  <h1 className="text-3xl font-extrabold font-display text-slate-900">
                    All Loan & Financial Products
                  </h1>
                </div>
                <button
                  onClick={() => handleOpenEnquiry('Financial Marketplace')}
                  className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors"
                >
                  <span>Apply for Any Product</span>
                </button>
              </div>
            </div>
            <ServicesSection
              onOpenEnquiry={handleOpenEnquiry}
              onNavigateToDocs={(serviceId) => handleNavigate('documents', serviceId)}
            />
          </div>
        )}

        {currentView === 'calculator' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Financial Calculators
                </h1>
              </div>
            </div>
            <EmiCalculator onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {currentView === 'cibil' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  CIBIL & Credit Report Center
                </h1>
              </div>
            </div>
            <CibilPage onOpenEnquiry={handleOpenEnquiry} />
          </div>
        )}

        {currentView === 'documents' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Documentation Guide
                </h1>
              </div>
            </div>
            <DocumentsPage
              initialServiceId={selectedServiceFilter || 'personal-loan'}
              onOpenEnquiry={handleOpenEnquiry}
            />
          </div>
        )}

        {currentView === 'eligibility' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Loan Eligibility & Capacity Checker
                </h1>
              </div>
            </div>
            <EligibilityChecker
              onOpenDirectEnquiry={(details) => handleOpenEnquiry(details)}
            />
          </div>
        )}

        {currentView === 'about' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  About SFS – Sathi Financial Solution
                </h1>
              </div>
            </div>
            <AboutSection onOpenEnquiry={() => handleOpenEnquiry('About SFS Consultation')} />
            <HowItWorks onOpenEnquiry={() => handleOpenEnquiry('4-Step Application')} />
          </div>
        )}

        {currentView === 'faqs' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Frequently Asked Questions & Answers
                </h1>
              </div>
            </div>
            <FaqSection />
          </div>
        )}

        {currentView === 'reviews' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Customer Reviews & Experiences
                </h1>
              </div>
            </div>
            <ReviewsSection />
          </div>
        )}

        {currentView === 'contact' && (
          <div>
            <div className="bg-slate-50 text-slate-900 py-8 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => handleNavigate('home')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-700 transition-colors mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </button>
                <h1 className="text-3xl font-extrabold font-display text-slate-900">
                  Contact SFS Ajoynagar, Kolkata
                </h1>
              </div>
            </div>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Mandatory Regulatory Financial Disclaimers Section */}
      <Disclaimers />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Online Loan Enquiry & Application Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        prefillLoanType={enquiryPrefill}
      />

      {/* Legal & Privacy Policy Modals */}
      <LegalModals
        modalType={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating WhatsApp and Mobile Sticky Actions */}
      <FloatingActions
        onOpenEnquiry={() => handleOpenEnquiry('Instant Mobile Enquiry')}
      />
    </div>
  );
}

export default App;
