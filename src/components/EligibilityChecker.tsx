import React, { useState } from 'react';
import { EligibilityQuery } from '../types';
import { 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Send, 
  MessageCircle, 
  Clock, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface EligibilityCheckerProps {
  onOpenDirectEnquiry?: (details: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onOpenDirectEnquiry }) => {
  const [formData, setFormData] = useState<EligibilityQuery>({
    fullName: '',
    mobile: '',
    employmentType: 'salaried',
    monthlyIncome: 45000,
    requiredAmount: 500000,
    loanType: 'Personal Loan',
    existingEmi: 5000,
    approxCreditScore: '750+',
    city: 'Kolkata'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FOIR Calculation: (Existing EMI / Monthly Income) * 100
  const income = Math.max(1, formData.monthlyIncome);
  const currentFoir = Math.round((formData.existingEmi / income) * 100);
  const maxAllowableEmi = Math.round(income * 0.5 - formData.existingEmi);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  const sendViaWhatsApp = () => {
    const text = `*SFS Loan Eligibility Enquiry*%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `*Mobile:* ${encodeURIComponent(formData.mobile)}%0A` +
      `*City:* ${encodeURIComponent(formData.city)}%0A` +
      `*Loan Type:* ${encodeURIComponent(formData.loanType)}%0A` +
      `*Required Amount:* ₹${formData.requiredAmount.toLocaleString('en-IN')}%0A` +
      `*Employment:* ${formData.employmentType}%0A` +
      `*Monthly Income:* ₹${formData.monthlyIncome.toLocaleString('en-IN')}%0A` +
      `*Existing EMI:* ₹${formData.existingEmi.toLocaleString('en-IN')}%0A` +
      `*Credit Score:* ${formData.approxCreditScore}`;

    window.open(`https://wa.me/916295136445?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-amber-500" />
            <span>Transparent Credit Evaluation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Loan Eligibility Checker
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Estimate your borrowing capacity and Debt-to-Income (FOIR) alignment before approaching lenders.
          </p>
        </div>

        {/* Checker Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {submitted ? (
            /* Submission Success State */
            <div className="p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Thank You, {formData.fullName || 'Valued Customer'}!
              </h2>
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-sm font-medium">
                &ldquo;Thank you. Our team will review your enquiry and contact you regarding available options.&rdquo;
              </div>

              {/* Strict Disclaimer Guardrail */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 text-left flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>No guaranteed approval:</strong> Eligibility and loan approval are subject to the respective lender&apos;s policies, credit assessment, documentation and other applicable criteria.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <button
                  onClick={sendViaWhatsApp}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify SFS on WhatsApp Instantly</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Check Another Loan Query
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="eligibility-fullname" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="eligibility-fullname"
                    type="text"
                    required
                    placeholder="e.g. Sourav Banerjee"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                {/* 2. Mobile Number */}
                <div>
                  <label htmlFor="eligibility-mobile" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Number (WhatsApp Preferred) *
                  </label>
                  <input
                    id="eligibility-mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                {/* 3. Employment Type */}
                <div>
                  <label htmlFor="eligibility-employment-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Employment Type *
                  </label>
                  <select
                    id="eligibility-employment-type"
                    value={formData.employmentType}
                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none bg-white transition-all"
                  >
                    <option value="salaried">Salaried (MNC / Corporate / Govt)</option>
                    <option value="self-employed">Self-Employed Professional (Doctor, CA, Lawyer)</option>
                    <option value="business">Business Owner / Trader / Proprietor</option>
                  </select>
                </div>

                {/* 4. Preferred Loan Type */}
                <div>
                  <label htmlFor="eligibility-loan-type" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Preferred Loan Type *
                  </label>
                  <select
                    id="eligibility-loan-type"
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none bg-white transition-all"
                  >
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Mortgage / LAP">Mortgage / Loan Against Property</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Instant Loan">Instant Loan Assistance</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Insurance">Insurance Protection</option>
                  </select>
                </div>

                {/* 5. Monthly Income */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="eligibility-monthly-income" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Net Monthly Income (₹) *
                    </label>
                    <span className="text-xs font-bold text-amber-700">
                      ₹{formData.monthlyIncome.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="eligibility-monthly-income"
                    type="number"
                    min={10000}
                    step={1000}
                    value={formData.monthlyIncome}
                    onChange={(e) => setFormData({ ...formData, monthlyIncome: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                {/* 6. Required Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="eligibility-required-amount" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Required Loan Amount (₹) *
                    </label>
                    <span className="text-xs font-bold text-amber-700">
                      ₹{formData.requiredAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="eligibility-required-amount"
                    type="number"
                    min={25000}
                    step={25000}
                    value={formData.requiredAmount}
                    onChange={(e) => setFormData({ ...formData, requiredAmount: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                {/* 7. Existing EMI */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="eligibility-existing-emi" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Existing Monthly EMI Outgo (₹)
                    </label>
                    <span className="text-xs text-slate-500">
                      ₹{formData.existingEmi.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="eligibility-existing-emi"
                    type="number"
                    min={0}
                    step={500}
                    value={formData.existingEmi}
                    onChange={(e) => setFormData({ ...formData, existingEmi: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                {/* 8. Approximate Credit Score */}
                <div>
                  <label htmlFor="eligibility-credit-score" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Approximate Credit Score (If Known)
                  </label>
                  <select
                    id="eligibility-credit-score"
                    value={formData.approxCreditScore}
                    onChange={(e) => setFormData({ ...formData, approxCreditScore: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none bg-white transition-all"
                  >
                    <option value="750+">750+ (Excellent / Preferred)</option>
                    <option value="700-749">700 - 749 (Good)</option>
                    <option value="650-699">650 - 699 (Fair / Average)</option>
                    <option value="Below 650">Below 650 (Needs Guidance)</option>
                    <option value="No History / Don't Know">No History / First-Time Borrower</option>
                  </select>
                </div>

                {/* 9. City / Location */}
                <div className="md:col-span-2">
                  <label htmlFor="eligibility-city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    City / Location in West Bengal *
                  </label>
                  <input
                    id="eligibility-city"
                    type="text"
                    required
                    placeholder="e.g. Ajoynagar, Kolkata"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* FOIR & Debt Capacity Live Assessment Card */}
              <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                      Underwriting Metric
                    </span>
                    <h3 className="text-base font-bold font-display text-white">
                      Fixed Obligation to Income Ratio (FOIR): {currentFoir}%
                    </h3>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    currentFoir <= 40
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      : currentFoir <= 55
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-rose-950 text-rose-400 border border-rose-800'
                  }`}>
                    {currentFoir <= 40 ? 'Healthy FOIR' : currentFoir <= 55 ? 'Moderate FOIR' : 'High Obligation'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Most banks in India cap total monthly EMIs at 40% to 50% of your net monthly income. 
                  Based on your current numbers, you have an estimated headroom of ~<strong>₹{Math.max(0, maxAllowableEmi).toLocaleString('en-IN')}</strong> in new monthly EMI capacity.
                </p>
              </div>

              {/* Mandatory Prompt Disclaimer Notice */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  &ldquo;Eligibility and loan approval are subject to the respective lender&apos;s policies, credit assessment, documentation and other applicable criteria.&rdquo; SFS provides documentation and DSA coordination; final sanction remains with the bank.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-xs text-slate-500">
                  Quick review within 2-4 business hours by our local Kolkata DSA desk.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  id="eligibility-submit-btn"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  {loading ? (
                    <span>Assessing...</span>
                  ) : (
                    <>
                      <span>Submit For Profile Review</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
