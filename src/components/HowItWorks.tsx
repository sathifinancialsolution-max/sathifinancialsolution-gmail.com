import React from 'react';
import { MessageSquare, UserCheck, FileStack, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onOpenEnquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEnquiry }) => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Tell Us Your Requirement',
      desc: 'Submit your loan type, required amount, and preferred tenure online or via WhatsApp/Phone call to our Ajoynagar desk.',
      icon: MessageSquare,
      highlight: 'Takes 2 Minutes'
    },
    {
      stepNumber: '02',
      title: 'Profile & Eligibility Discussion',
      desc: 'Our advisor analyzes your FOIR, employment stability, and CIBIL score to match you with suitable bank/NBFC guidelines.',
      icon: UserCheck,
      highlight: 'Multi-Bank Filtering'
    },
    {
      stepNumber: '03',
      title: 'Documentation Guidance',
      desc: 'We assist you in compiling, reviewing, and organizing all KYC, income statements, and property link deeds without errors.',
      icon: FileStack,
      highlight: 'Hassle-Free Checklist'
    },
    {
      stepNumber: '04',
      title: 'Application Assistance',
      desc: 'Your file is forwarded through authorized DSA channels. Note: Final approval, interest rate, and disbursal are determined solely by the lender.',
      icon: CheckCircle2,
      highlight: 'Dedicated Follow-up'
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full shadow-2xs">
            Transparent Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mt-3">
            How It Works – Simple 4-Step Process
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A frictionless, Paisa Bazaar–style structured pathway from initial consultation to loan disbursal.
          </p>
        </div>

        {/* Steps Progress Bar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between group hover:-translate-y-1 hover:border-amber-300"
              >
                <div>
                  {/* Step badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-amber-600 font-display">
                      {step.stepNumber}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    {step.highlight}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500">Step {idx + 1} of 4</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Guardrail note underneath steps */}
        <div className="mt-8 p-4 bg-slate-100/90 border border-slate-200 rounded-xl text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600">
            *Please note: SFS provides loan documentation and application facilitation. All loan approvals, interest rates, processing timelines, and disbursals are strictly governed by the respective lending institution’s policies.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
          >
            <span>Start Step 1: Submit Your Requirement</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </section>
  );
};
