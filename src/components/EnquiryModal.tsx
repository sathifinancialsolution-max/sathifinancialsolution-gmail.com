import React, { useState, useEffect } from 'react';
import { EnquirySubmission } from '../types';
import { X, Send, MessageCircle, Mail, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillLoanType?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefillLoanType = ''
}) => {
  const [formData, setFormData] = useState<EnquirySubmission>({
    name: '',
    mobile: '',
    email: '',
    loanType: prefillLoanType || 'Personal Loan',
    requiredAmount: '₹5,00,000',
    employmentType: 'Salaried',
    monthlyIncome: '₹40,000',
    city: 'Kolkata',
    message: '',
    consent: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefillLoanType) {
      setFormData(prev => ({ ...prev, loanType: prefillLoanType }));
    }
  }, [prefillLoanType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsAppForward = () => {
    const text = `*New Loan Enquiry - SFS Kolkata*%0A` +
      `*Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Mobile:* ${encodeURIComponent(formData.mobile)}%0A` +
      `*Email:* ${encodeURIComponent(formData.email)}%0A` +
      `*Loan Type:* ${encodeURIComponent(formData.loanType)}%0A` +
      `*Required Amount:* ${encodeURIComponent(formData.requiredAmount)}%0A` +
      `*Employment:* ${encodeURIComponent(formData.employmentType)}%0A` +
      `*Monthly Income:* ${encodeURIComponent(formData.monthlyIncome)}%0A` +
      `*City:* ${encodeURIComponent(formData.city)}%0A` +
      `*Message:* ${encodeURIComponent(formData.message || 'None')}`;

    window.open(`https://wa.me/916295136445?text=${text}`, '_blank');
  };

  const handleEmailForward = () => {
    const subject = encodeURIComponent(`Loan Enquiry: ${formData.loanType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello SFS Team,\n\nI would like to submit an enquiry:\nName: ${formData.name}\nMobile: ${formData.mobile}\nLoan Type: ${formData.loanType}\nAmount: ${formData.requiredAmount}\nEmployment: ${formData.employmentType}\nCity: ${formData.city}\nNotes: ${formData.message}\n`
    );
    window.location.href = `mailto:sathifinancialsolution@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Direct DSA Desk Assistance
            </span>
            <h3 className="text-xl font-bold font-display text-white mt-0.5">
              Online Loan & Services Enquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation View */
          <div className="p-8 sm:p-10 text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Enquiry Received Successfully
              </h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. An authorized financial advisor from SFS Kolkata will reach out on <strong>{formData.mobile}</strong> shortly to discuss documentation.
              </p>
            </div>

            {/* Direct Channel Triggers */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 text-left">
              <span className="text-xs font-bold text-slate-700 block uppercase">
                Need immediate response? Reach us directly:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={handleWhatsAppForward}
                  className="p-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 6295136445)</span>
                </button>
                <button
                  onClick={handleEmailForward}
                  className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email sathifinancialsolution@gmail.com</span>
                </button>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 text-left">
              <AlertCircle className="w-3.5 h-3.5 inline mr-1 text-amber-600" />
              <span>
                Disclaimers: SFS provides loan documentation and application facilitation. All loan approvals and disbursals are subject to respective lender policies.
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors"
            >
              Done & Close
            </button>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your complete name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>

              {/* Loan Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Loan / Service Type *
                </label>
                <select
                  value={formData.loanType}
                  onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none bg-white"
                >
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Home Loan">Home Loan</option>
                  <option value="Mortgage / LAP">Mortgage / Loan Against Property</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Instant Loan Assistance">Instant Loan Assistance</option>
                  <option value="Credit Card Services">Credit Card Services</option>
                  <option value="Insurance Solutions">Insurance Solutions</option>
                  <option value="CIBIL / Credit Advisory">CIBIL / Credit Advisory</option>
                </select>
              </div>

              {/* Required Amount */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Required Amount *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹5,00,000"
                  value={formData.requiredAmount}
                  onChange={(e) => setFormData({ ...formData, requiredAmount: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Employment Type *
                </label>
                <select
                  value={formData.employmentType}
                  onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none bg-white"
                >
                  <option value="Salaried">Salaried</option>
                  <option value="Self-Employed Professional">Self-Employed Professional</option>
                  <option value="Business Owner / Trader">Business Owner / Trader</option>
                </select>
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Monthly Income *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹45,000 / month"
                  value={formData.monthlyIncome}
                  onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  City / Location *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ajoynagar, Kolkata"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Additional Notes or Query (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Any specific preference, existing loans, or property details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:border-amber-500 focus:ring-1 focus:ring-amber-200 text-sm outline-none"
              />
            </div>

            {/* Mandatory Checkbox from prompt */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400"
                />
                <span className="leading-snug">
                  &ldquo;I agree to be contacted by <strong>SFS – Sathi Financial Solution</strong> regarding my enquiry via phone call, WhatsApp or email.&rdquo;
                </span>
              </label>
            </div>

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strict privacy. No unwanted spam.</span>
              </span>

              <button
                type="submit"
                disabled={loading || !formData.consent}
                id="modal-submit-enquiry-btn"
                className="w-full sm:w-auto px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
