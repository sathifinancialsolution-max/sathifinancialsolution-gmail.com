import React from 'react';
import { SfsLogo } from './SfsLogo';
import { PageView } from '../types';
import { LegalModalType } from './LegalModals';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: PageView, filter?: string) => void;
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Branding & Description */}
          <div className="lg:col-span-2 space-y-4">
            <SfsLogo variant="horizontal" theme="light" />
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              SFS – Sathi Financial Solution is an authorized Direct Selling Agent (DSA) network and financial assistance service provider based in <strong>Ajoynagar, Kolkata</strong>. We assist individuals and businesses in identifying suitable loan, credit card, and insurance products through partnered banks and financial institutions.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">Ajoynagar, Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="tel:+916295136445" className="text-slate-700 hover:text-amber-700 font-semibold transition-colors">
                  +91 6295136445
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="mailto:sathifinancialsolution@gmail.com" className="text-slate-700 hover:text-amber-700 transition-colors break-all">
                  sathifinancialsolution@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-slate-700">Mon – Sat: 9:30 AM to 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Col 3: Loan Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-display mb-4">
              Loan Products
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('services', 'personal-loan')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Personal Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'home-loan')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Home Loan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'mortgage-lap')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Mortgage / LAP
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'car-loan')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Car Loan (New & Used)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'instant-loan')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Instant Loan Assistance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'business-loan')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Business / MSME Financing
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools & Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-display mb-4">
              Tools & Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Interactive EMI Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cibil')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  CIBIL / Credit Report Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('documents')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Documents Required Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eligibility')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Loan Eligibility Checker
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'credit-card')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Credit Card Assistance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services', 'insurance')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Insurance Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-display mb-4">
              Company & Legal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  About SFS Kolkata
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-700 transition-colors text-left"
                >
                  Contact & Office Map
                </button>
              </li>
              <li className="pt-2 border-t border-slate-200">
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-500 hover:text-amber-700 transition-colors text-left block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-slate-500 hover:text-amber-700 transition-colors text-left block"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('disclaimer')}
                  className="text-slate-500 hover:text-amber-700 transition-colors text-left block"
                >
                  Financial Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('grievance')}
                  className="text-slate-500 hover:text-amber-700 transition-colors text-left block"
                >
                  Grievance Redressal
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Prompt Regulatory Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 text-[11px] text-slate-600 space-y-2 leading-relaxed shadow-2xs">
          <div className="flex items-center gap-2 text-amber-700 font-bold uppercase tracking-wider text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Statutory Disclaimer & Fair Lending Notice</span>
          </div>
          <p>
            &ldquo;SFS – Sathi Financial Solution provides financial assistance and application support through its DSA network and associated financial partners. We do not guarantee loan approval, credit card approval, interest rates, loan amounts or disbursal. All applications are subject to the eligibility criteria, credit assessment, documentation, policies and terms of the respective lender or financial institution. Final decisions are made solely by the respective lender.&rdquo;
          </p>
          <p>
            &ldquo;Loan and financial product availability may vary based on customer profile, location, eligibility and lender policies.&rdquo;
          </p>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SFS – Sathi Financial Solution. All rights reserved. Ajoynagar, Kolkata, West Bengal.
          </div>
          <div className="flex items-center gap-4 font-medium text-slate-600">
            <span>Authorized Local DSA Network Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
