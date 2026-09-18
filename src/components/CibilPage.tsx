import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Lock, 
  FileSearch, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import cibilVisual from '../assets/images/cibil_credit_visual_1789537776089.jpg';

interface CibilPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const CibilPage: React.FC<CibilPageProps> = ({ onOpenEnquiry }) => {
  const [selectedBureau, setSelectedBureau] = useState<'transunion' | 'experian' | 'crif' | 'equifax'>('transunion');

  const bureaus = [
    {
      id: 'transunion',
      name: 'TransUnion CIBIL',
      desc: 'India’s pioneer credit bureau with 300-900 score standard.',
      officialUrl: 'https://www.cibil.com/freecibilscore',
      type: 'Official RBI-Regulated Bureau'
    },
    {
      id: 'experian',
      name: 'Experian India',
      desc: 'Free monthly credit report under RBI mandate.',
      officialUrl: 'https://www.experian.in/consumer/free-credit-score',
      type: 'Official RBI-Regulated Bureau'
    },
    {
      id: 'crif',
      name: 'CRIF High Mark',
      desc: 'Comprehensive micro-lending and retail credit scoring.',
      officialUrl: 'https://www.crifhighmark.com',
      type: 'Official RBI-Regulated Bureau'
    },
    {
      id: 'equifax',
      name: 'Equifax India',
      desc: 'Detailed credit history, account records, and inquiry logs.',
      officialUrl: 'https://www.equifax.co.in',
      type: 'Official RBI-Regulated Bureau'
    }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Hero Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Authorized RBI-Regulated Credit Guidance</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
                Check Your CIBIL / <br className="hidden sm:inline" />
                <span className="text-amber-400">Credit Report</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Understand your creditworthiness, dispute incorrect trade lines, and discover actionable steps to build an optimal 750+ credit score for superior loan approval terms.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#authorized-gateway"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md active:scale-[0.98]"
                >
                  <Search className="w-4 h-4 text-slate-950" />
                  <span>Check Your Credit Report</span>
                </a>
                <button
                  onClick={() => onOpenEnquiry('CIBIL Report Advisory')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>Request Report Review Consultation</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800/80">
                <img
                  src={cibilVisual}
                  alt="Credit Report and CIBIL Score Meter 750 Plus"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency & Privacy Notice Box (Prompt Guardrail) */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-xs">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 space-y-1">
              <p className="font-bold text-sm text-amber-900">
                Authorized Credit Assessment & Privacy Notice
              </p>
              <p className="leading-relaxed">
                <strong>SFS does not fabricate or generate simulated CIBIL scores.</strong> In compliance with RBI credit information company regulations, customers obtain their legitimate credit report directly from authorized bureau portals or via explicit written OTP authorization. We never store your sensitive Aadhaar OTP, banking passwords, or personal credentials on this server.
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: What is a CIBIL score & Why Lenders Check It */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-display">
              What is a CIBIL Score?
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              A CIBIL score is a 3-digit numerical summary of your credit history, ranging from <strong>300 to 900</strong>. It is calculated based on past repayment records, credit cards, active loans, and credit utilization reported monthly by banks and financial institutions to TransUnion CIBIL and other credit bureaus.
            </p>
            <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
              <span className="font-bold text-slate-900 block mb-1">Score Benchmarks:</span>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>750 to 900:</span>
                  <strong className="text-emerald-600">Excellent (Fastest Approvals & Best Rates)</strong>
                </li>
                <li className="flex justify-between">
                  <span>700 to 749:</span>
                  <strong className="text-blue-600">Good (Standard Approval Feasible)</strong>
                </li>
                <li className="flex justify-between">
                  <span>650 to 699:</span>
                  <strong className="text-amber-600">Average (Subject to Higher Scrutiny)</strong>
                </li>
                <li className="flex justify-between">
                  <span>Below 650:</span>
                  <strong className="text-rose-600">Needs Improvement (High Risk of Rejection)</strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mb-4">
              <FileSearch className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 font-display">
              Why Lenders Check Credit History
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Before approving any loan or credit card, banks must determine the statistical probability of default. A credit check provides the lender with:
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Track Record:</strong> Confirmation that you have repaid previous debts without delays or settlements.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Over-Leverage Check:</strong> Verifying you are not carrying more active EMI liabilities than your monthly income can absorb.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Interest Pricing:</strong> Borrowers with scores above 750 frequently receive concessionary interest rates from partnered PSU and private lenders.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2: Factors Affecting Creditworthiness */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-2xl font-bold text-slate-900 font-display text-center mb-8">
            Key Factors That Impact Your Creditworthiness
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider block">Weight: ~35%</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Repayment History</h3>
              <p className="text-xs text-slate-600 mt-2">
                Paying EMIs and credit card bills before the due date is the single most influential factor. Even a single 30-day delay hurts your score.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider block">Weight: ~30%</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Credit Utilization Ratio</h3>
              <p className="text-xs text-slate-600 mt-2">
                The percentage of your credit card limit spent each month. Keeping credit utilization below 30% demonstrates disciplined financial control.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider block">Weight: ~15%</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Credit Age & Mix</h3>
              <p className="text-xs text-slate-600 mt-2">
                A healthy vintage and balanced mix of secured loans (like Home/Auto) alongside unsecured credit cards shows broad repayment experience.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider block">Weight: ~20%</span>
              <h3 className="text-base font-bold text-slate-900 mt-1">Multiple Hard Inquiries</h3>
              <p className="text-xs text-slate-600 mt-2">
                Applying to multiple banks in short succession triggers hard inquiries, signalling credit hunger to algorithmic underwriting systems.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Authorized Bureau Gateway (Secure & Compliant Flow) */}
        <div id="authorized-gateway" className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Official Bureau Links
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Access Your Official Credit Report Safely
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Every Indian citizen is entitled to 1 free credit report per calendar year from each of the 4 licensed credit information bureaus under RBI regulations. Select your preferred bureau below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bureaus.map((bureau) => (
              <div
                key={bureau.id}
                className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 hover:border-amber-400/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-base font-bold text-white font-display">{bureau.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">
                      RBI Licensed
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-4">{bureau.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-slate-400">Direct Bureau Portal</span>
                  <a
                    href={bureau.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold transition-colors"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* SFS In-Person & Advisor Support Callout */}
          <div className="mt-8 p-4 bg-slate-800/60 rounded-xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-amber-300">Need Help Reading or Auditing Your Report?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Our Ajoynagar, Kolkata team can sit with you to review account status, identify erroneous DPD entries, and map out a credit repair roadmap.
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry('CIBIL Report Review Assistance')}
              className="px-4 py-2 bg-white text-slate-950 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors shrink-0"
            >
              Talk to Our CIBIL Expert
            </button>
          </div>
        </div>

        {/* Section 4: How to Review the Report for Errors & Tips for Improving */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <span>How to Review Your Report for Errors</span>
            </h3>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Discrepancies in credit reports happen more often than you think due to administrative delays or mistaken identity. Review these 4 items carefully:
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>1. Closed Accounts Marked Open:</strong> Ensure loans you paid off show a "Closed" status and a zero balance.
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>2. Incorrect Days Past Due (DPD):</strong> Verify that payments made on time are not mistakenly marked with 30+ DPD delays.
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>3. Unrecognized Accounts or Inquiries:</strong> Look out for loan accounts you never applied for, which could indicate identity fraud.
              </li>
              <li className="p-2.5 bg-slate-50 rounded-lg">
                <strong>4. Written-Off / Settled Status:</strong> A loan marked as "Settled" harms future borrowing. SFS helps you arrange closure letters from banks.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span>General Tips for Improving Credit Habits</span>
            </h3>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed">
              Restoring or strengthening a credit score takes consistent financial habits:
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Automate EMI Debits:</strong> Set up auto-debit / NACH mandates on your primary bank account so you never miss an EMI due date.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pay Total Amount Due:</strong> Avoid just paying the "Minimum Amount Due" on credit cards, which leads to compounding 36-42% interest.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Do Not Close Old Credit Cards:</strong> Older accounts lengthen your average credit age, which boosts your score.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Space Out Loan Inquiries:</strong> Consult with SFS first to check lender policy compatibility before firing multiple bank applications.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
