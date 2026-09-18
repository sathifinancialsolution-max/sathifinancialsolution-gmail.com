import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export const Disclaimers: React.FC = () => {
  return (
    <div className="bg-white border-t border-slate-200/90 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-start gap-3 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
              Regulatory & Financial Service Disclaimers (RBI Compliance & DSA Guidelines)
            </h4>
            <p>
              &ldquo;SFS – Sathi Financial Solution provides financial assistance and application support through its DSA network and associated financial partners. We do not guarantee loan approval, credit card approval, interest rates, loan amounts or disbursal. All applications are subject to the eligibility criteria, credit assessment, documentation, policies and terms of the respective lender or financial institution. Final decisions are made solely by the respective lender.&rdquo;
            </p>
            <p>
              &ldquo;Loan and financial product availability may vary based on customer profile, location, eligibility and lender policies.&rdquo;
            </p>
            <p className="text-[11px] text-slate-500">
              SFS – Sathi Financial Solution functions as an authorized Direct Selling Agent (DSA) / referral partner coordinating paperwork between customers and regulated scheduled commercial banks, non-banking financial companies (NBFCs), and insurance providers. SFS does not solicit or collect advance processing fees, approval deposits, or cash guarantees. All statutory fees, stamp duty, or lender processing deductions are remitted directly to the financing institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
