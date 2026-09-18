import React, { useEffect, useState } from 'react';
import { PageView } from '../types';
import { 
  ArrowRight, 
  FileCheck, 
  Search, 
  ShieldCheck, 
  PhoneCall, 
  TrendingUp, 
  Users, 
  Building, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import heroImg from '../assets/images/sfs_hero_finance_1789537759535.jpg';

interface HeroProps {
  onNavigate: (view: PageView) => void;
  onOpenEnquiry: (prefillLoanType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenEnquiry }) => {
  // Animated counter state
  const [customersCount, setCustomersCount] = useState(0);
  const [partnersCount, setPartnersCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [typesCount, setTypesCount] = useState(0);

  useEffect(() => {
    // Smooth 60fps counting
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCustomersCount(Math.floor(ease * 550));
      setPartnersCount(Math.floor(ease * 25));
      setYearsCount(Math.floor(ease * 8));
      setTypesCount(Math.floor(ease * 7));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background subtle ambient warmth / light grid */}
      <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/90 text-xs font-semibold text-amber-900 mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Professional DSA Network • Kolkata & West Bengal</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span className="text-slate-600 font-medium">Ajoynagar Hub</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Paisa Bazaar CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight sm:leading-none">
              Your Trusted Financial <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                Solution Partner
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Personal Loans, Home Loans, Mortgage Loans, Car Loans, Credit Cards & Insurance Solutions – 
              <strong className="text-slate-900 font-semibold"> Professional Assistance Under One Roof</strong>.
            </p>

            {/* Micro value badges */}
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-xl text-xs text-slate-700">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Zero Upfront DSA Fees</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Documentation Support</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-xl px-3 py-2 col-span-2 sm:col-span-1 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium">Multi-Bank Comparisons</span>
              </div>
            </div>

            {/* 4 Prominent CTA Buttons requested by prompt */}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 w-full">
              {/* CTA 1: CIBIL Report */}
              <button
                onClick={() => onNavigate('cibil')}
                id="hero-cibil-btn"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-150 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <Search className="w-4 h-4 text-slate-950" />
                <span>Check Your CIBIL Report</span>
              </button>

              {/* CTA 2: Check Loan Eligibility */}
              <button
                onClick={() => onNavigate('eligibility')}
                id="hero-eligibility-btn"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-150 shadow-sm active:scale-[0.98]"
              >
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>Check Loan Eligibility</span>
              </button>

              {/* CTA 3: Apply / Get Assistance */}
              <button
                onClick={() => onOpenEnquiry()}
                id="hero-apply-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-all duration-150 shadow-2xs"
              >
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Apply / Get Assistance</span>
              </button>

              {/* CTA 4: Contact Us */}
              <button
                onClick={() => onNavigate('contact')}
                id="hero-contact-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Required Regulatory / Transparency Guardrail notice */}
            <p className="mt-4 text-xs text-slate-500 leading-relaxed max-w-xl">
              *All loan approvals, interest rates, and loan amounts are strictly subject to individual bank/NBFC credit evaluation, documentation, and lender underwriting criteria. We do not claim guaranteed approvals.
            </p>
          </div>

          {/* Right Column: AI Visual Asset with Paisa Bazaar interactive overlay cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white group">
              {/* Generated Hero visual */}
              <img
                src={heroImg}
                alt="SFS Financial Solution Growth and Loan Marketplace Visual"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Floating Quick Action Card 1: CIBIL Quick Pill */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs border border-amber-200">
                  750+
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900">Optimal Credit Profile</div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Preferred Rates Available
                  </div>
                </div>
              </div>

              {/* Floating Quick Action Card 2: Kolkata DSA Coverage */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3.5 rounded-2xl shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-amber-700 font-extrabold">
                    Ajoynagar Branch
                  </span>
                  <div className="text-xs font-semibold text-slate-900 mt-0.5">
                    Doorstep Documentation & City-wide DSA Support
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('documents')}
                  className="px-3 py-1.5 bg-amber-400 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-300 transition-colors shrink-0 shadow-xs"
                >
                  View Checklist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip / banner (Mandatory wording from prompt) */}
        <div className="mt-12 lg:mt-16 bg-amber-50/80 border border-amber-200/90 rounded-2xl p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold">
                &ldquo;Get professional guidance from our experienced DSA network with support for documentation and loan application processes.&rdquo;
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 shrink-0 uppercase tracking-wider transition-colors"
            >
              <span>Learn About SFS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Animated Stats / Trust Bar (60fps smooth counter) */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">
              <span>{customersCount}</span>
              <span>+</span>
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium flex items-center justify-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Customers Assisted</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">
              <span>{partnersCount}</span>
              <span>+</span>
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium flex items-center justify-center gap-1">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>Lender Partners & Banks</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">
              <span>{typesCount}</span>
              <span>+</span>
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-slate-400" />
              <span>Financial Products</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-amber-300 transition-all rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-extrabold text-amber-600 font-display">
              <span>{yearsCount}</span>
              <span>+</span>
            </div>
            <div className="text-xs text-slate-600 mt-1 font-medium flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Years of DSA Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
