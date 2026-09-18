import React from 'react';
import { X, Shield, Lock, FileText, AlertCircle } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | 'grievance' | null;

interface LegalModalsProps {
  modalType: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ modalType, onClose }) => {
  if (!modalType) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-bold font-display text-slate-900">
              {modalType === 'privacy' && 'Privacy Policy'}
              {modalType === 'terms' && 'Terms & Conditions'}
              {modalType === 'disclaimer' && 'Financial & Legal Disclaimer'}
              {modalType === 'grievance' && 'Grievance Redressal Officer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed">
          {modalType === 'privacy' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">Privacy Policy for SFS – Sathi Financial Solution</h4>
              <p>
                At <strong>SFS – Sathi Financial Solution</strong> (operating in Ajoynagar, Kolkata, West Bengal), we respect and protect your privacy. This policy outlines our data collection, usage, and sharing practices:
              </p>
              <div>
                <strong className="block text-slate-800 font-bold mb-1">1. Information We Collect:</strong>
                <p>
                  We collect information voluntarily submitted through our enquiry forms, WhatsApp conversations, or direct document handovers, including full name, contact numbers, email address, monthly income estimates, employment status, loan requirement type, and city of residence. For loan application processing, physical or electronic copies of KYC proofs (PAN, Aadhaar, address proofs) and financial records (salary slips, bank statements, ITR) are gathered with your explicit consent.
                </p>
              </div>
              <div>
                <strong className="block text-slate-800 font-bold mb-1">2. Why We Collect This Information:</strong>
                <p>
                  To assess preliminary loan/credit eligibility against partner lender policies, assist in compiling correct documentation, submit loan dossiers to authorized partner banks/NBFCs on your behalf, and provide customer support.
                </p>
              </div>
              <div>
                <strong className="block text-slate-800 font-bold mb-1">3. Who We Share It With:</strong>
                <p>
                  Your information is shared exclusively with RBI-registered lending banks, non-banking financial companies (NBFCs), or licensed insurers where you have requested application submission through our DSA desk. We do NOT sell, lease, or rent customer personal data to third-party telemarketers.
                </p>
              </div>
              <div>
                <strong className="block text-slate-800 font-bold mb-1">4. Credit Score & Bureau Data:</strong>
                <p>
                  We do NOT store customer Aadhaar biometric data or unauthorized bureau credentials. Bureau reports are fetched directly through official credit rating agencies (CIBIL, Experian, CRIF, Equifax) using authorized OTP protocols.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="block text-slate-800 font-bold mb-1">5. Contact Regarding Your Data:</strong>
                <p>
                  If you wish to review, update, or request deletion of your submitted contact information, please email us directly at: <br />
                  <a href="mailto:sathifinancialsolution@gmail.com" className="text-amber-700 font-bold underline">
                    sathifinancialsolution@gmail.com
                  </a> or write to our Ajoynagar, Kolkata office.
                </p>
              </div>
            </>
          )}

          {modalType === 'terms' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">Terms of Service</h4>
              <p>
                Welcome to the website of <strong>SFS – Sathi Financial Solution</strong>. By accessing this platform or submitting loan queries, you agree to these terms:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>DSA Referral & Guidance Role:</strong> SFS acts solely as a financial loan coordinator / DSA referral partner. SFS is neither a bank nor an NBFC and does not lend money directly.
                </li>
                <li>
                  <strong>No Guarantee:</strong> SFS does not promise or guarantee loan sanctions, credit card approvals, specific interest rates, or disbursals. Final credit decisions are made solely by the respective lender.
                </li>
                <li>
                  <strong>Accurate Information:</strong> Customers agree to provide genuine, accurate details regarding income, identity, and active debt liabilities. Submission of fraudulent documents can lead to immediate rejection by partner banks.
                </li>
                <li>
                  <strong>Zero Upfront Fees:</strong> SFS does not charge advance processing cash fees to borrowers. Any legal/valuation or bank administrative charges are levied directly by the lender.
                </li>
              </ul>
            </>
          )}

          {modalType === 'disclaimer' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">Financial Disclaimer</h4>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-950 font-medium">
                &ldquo;SFS – Sathi Financial Solution provides financial assistance and application support through its DSA network and associated financial partners. We do not guarantee loan approval, credit card approval, interest rates, loan amounts or disbursal. All applications are subject to the eligibility criteria, credit assessment, documentation, policies and terms of the respective lender or financial institution. Final decisions are made solely by the respective lender.&rdquo;
              </div>
              <p>
                Calculators, EMI estimates, and interest rates featured on this website are for general illustrative and educational purposes only. Lenders compute interest and repayment schedules based on individual risk profile and prevailing market rates.
              </p>
            </>
          )}

          {modalType === 'grievance' && (
            <>
              <h4 className="font-bold text-slate-900 text-base">Grievance Redressal & Customer Escalations</h4>
              <p>
                We strive for the highest level of professional ethics. If you have any concern, complaint, or feedback regarding your DSA assistance, please reach out directly:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div>
                  <span className="font-bold text-slate-800">Entity:</span> SFS – Sathi Financial Solution
                </div>
                <div>
                  <span className="font-bold text-slate-800">Officer:</span> Customer Care & Redressal Desk
                </div>
                <div>
                  <span className="font-bold text-slate-800">Address:</span> Ajoynagar, Kolkata, West Bengal, India
                </div>
                <div>
                  <span className="font-bold text-slate-800">Email:</span>{' '}
                  <a href="mailto:sathifinancialsolution@gmail.com" className="text-amber-700 font-bold underline">
                    sathifinancialsolution@gmail.com
                  </a>
                </div>
                <div>
                  <span className="font-bold text-slate-800">Phone:</span> +91 6295136445 (Mon–Sat, 10 AM to 6 PM)
                </div>
              </div>
              <p className="text-xs text-slate-500">
                All escalations are acknowledged within 24 hours and addressed with the utmost priority.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
