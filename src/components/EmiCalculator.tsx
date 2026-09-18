import React, { useState, useId } from 'react';
import { ArrowRight, Calculator, CheckCircle, HelpCircle } from 'lucide-react';

interface EmiCalculatorProps {
  onOpenEnquiry: (prefillLoanType?: string) => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ onOpenEnquiry }) => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakh
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years

  const loanAmountId = useId();
  const interestRateId = useId();
  const tenureYearsId = useId();

  // EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const principal = loanAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const monthlyEmi = Math.round(
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalPercentage = Math.round((principal / totalPayment) * 100);
  const interestPercentage = 100 - principalPercentage;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Financial Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Plan Your Repayment with Our Loan EMI Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Estimate your monthly outgo and interest share before applying to lenders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={loanAmountId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Required Loan Amount
                </label>
                <span className="text-base font-extrabold text-slate-900 font-display">
                  {formatCurrency(loanAmount)}
                </span>
              </div>
              <input
                id={loanAmountId}
                type="range"
                min={50000}
                max={10000000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>₹50,000</span>
                <span>₹50 Lakh</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={interestRateId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Expected Interest Rate (% p.a.)
                </label>
                <span className="text-base font-extrabold text-slate-900 font-display">
                  {interestRate}%
                </span>
              </div>
              <input
                id={interestRateId}
                type="range"
                min={8}
                max={24}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>8.0% (Home Loan)</span>
                <span>10.5% (Personal)</span>
                <span>24.0%</span>
              </div>
            </div>

            {/* Slider 3: Tenure */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor={tenureYearsId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Loan Tenure (Years)
                </label>
                <span className="text-base font-extrabold text-slate-900 font-display">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                id={tenureYearsId}
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>1 Year</span>
                <span>5 Years</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Micro guidance note */}
            <div className="text-xs text-slate-500 flex items-start gap-2 pt-2 border-t border-slate-200">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Calculations are indicative for illustration purposes. Actual EMIs and processing fees depend on lender amortization schedules and fixed/floating rate benchmarks.
              </span>
            </div>
          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-white text-slate-900 border-2 border-amber-400/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-700 block">
                Estimated Monthly Repayment
              </span>
              <div className="text-3xl sm:text-4xl font-black font-display text-slate-900 mt-1">
                {formatCurrency(monthlyEmi)}
                <span className="text-xs font-semibold text-slate-500 block sm:inline sm:ml-1">/ month</span>
              </div>

              {/* Breakdown Bar */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">Principal Amount ({principalPercentage}%)</span>
                  <span className="text-slate-700">Total Interest ({interestPercentage}%)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 border border-slate-200 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalPercentage}%` }} className="bg-amber-500 h-full" />
                  <div style={{ width: `${interestPercentage}%` }} className="bg-blue-600 h-full" />
                </div>
              </div>

              {/* Data Summary Grid */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    Principal Loan:
                  </span>
                  <span className="font-bold text-slate-900">{formatCurrency(principal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    Total Interest Outgo:
                  </span>
                  <span className="font-bold text-amber-700">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center pt-2.5 border-t border-slate-100">
                  <span className="text-slate-800 font-bold">Total Repayment:</span>
                  <span className="font-extrabold text-slate-950 text-base font-display">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onOpenEnquiry(`Loan Amount: ${formatCurrency(principal)}`)}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                <span>Check Eligibility For This Amount</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
