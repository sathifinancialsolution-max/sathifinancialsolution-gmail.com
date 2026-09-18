import React, { useState } from 'react';
import { PageView } from '../types';
import { SfsLogo } from './SfsLogo';
import { Phone, MessageCircle, Menu, X, Shield, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenEnquiry: (prefillLoanType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About Us', view: 'about' },
    { label: 'Services', view: 'services' },
    { label: 'CIBIL Report', view: 'cibil' },
    { label: 'Documents', view: 'documents' },
    { label: 'Eligibility', view: 'eligibility' },
    { label: 'FAQs', view: 'faqs' },
    { label: 'Contact', view: 'contact' }
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top micro bar for trust & quick contact */}
      <div className="bg-slate-50 border-b border-slate-200/70 text-slate-600 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              Verified Local DSA Network
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:inline text-slate-600">
              Ajoynagar, Kolkata, West Bengal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+916295136445"
              className="inline-flex items-center gap-1.5 text-slate-800 hover:text-amber-600 transition-colors font-semibold"
              id="topbar-call-btn"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>+91 6295136445</span>
            </a>
            <span className="text-slate-300 hidden md:inline">|</span>
            <a
              href="mailto:sathifinancialsolution@gmail.com"
              className="hidden md:inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
            >
              sathifinancialsolution@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none focus:ring-2 focus:ring-amber-500/20 rounded-md py-1"
            id="brand-logo-btn"
            aria-label="SFS – Sathi Financial Solution Home"
          >
            <SfsLogo className="h-12 sm:h-14" variant="horizontal" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  id={`nav-${item.view}`}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 relative ${
                    isActive
                      ? 'text-slate-950 bg-slate-100 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/916295136445?text=Hello%20SFS%20Team%2C%20I%20would%20like%20to%20enquire%20about%20financial%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-lg hover:bg-emerald-100 transition-colors shadow-2xs"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              id="header-get-assistance-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>Get Assistance</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="sm:hidden px-3 py-1.5 rounded-md text-xs font-bold text-slate-950 bg-amber-400"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1 mb-4">
            {navLinks.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentView === item.view
                    ? 'bg-amber-50 text-amber-900 font-bold border-l-2 border-amber-500'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 text-center shadow-xs flex items-center justify-center gap-2"
            >
              <span>Get Financial Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:+916295136445"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call 6295136445</span>
              </a>
              <a
                href="https://wa.me/916295136445?text=Hello%20SFS%20Team%2C%20I%20would%20like%20to%20enquire%20about%20financial%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 text-white rounded-lg text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
