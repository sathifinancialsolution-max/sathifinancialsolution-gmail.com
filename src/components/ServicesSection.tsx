import React, { useState } from 'react';
import { ServiceDetail } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  Banknote, 
  Home, 
  Building2, 
  Car, 
  Zap, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Info, 
  FileText, 
  X,
  Clock,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenEnquiry: (serviceName?: string) => void;
  onNavigateToDocs: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenEnquiry,
  onNavigateToDocs
}) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Banknote':
        return <Banknote className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      default:
        return <Banknote className="w-6 h-6" />;
    }
  };

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Paisa Bazaar–Style Financial Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Explore Financial Services Tailored to Your Needs
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Compare structured options, examine document prerequisites, and receive expert assistance from SFS’s authorized partner network in Kolkata.
          </p>
        </div>

        {/* Services Grid (Paisa Bazaar-like card grid with hover lifts) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative"
            >
              {/* Top Accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-slate-900 via-amber-500 to-slate-900 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                {/* Header Row: Icon + Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-inner group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title and Category */}
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Key Metrics Strip (Rates & Amount) */}
                <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Indicative Rate</span>
                    <span className="text-xs font-bold text-slate-900">{service.interestRateRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Tenure</span>
                    <span className="text-xs font-bold text-slate-900">{service.tenureRange}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="mt-4 space-y-2">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-colors text-center flex items-center justify-center gap-1"
                >
                  <Info className="w-3.5 h-3.5 text-slate-600" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry(service.title)}
                  className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 transition-colors text-center flex items-center justify-center gap-1 shadow-2xs"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Disclaimer Banner for Services */}
        <div className="mt-10 p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Regulatory Notice:</strong> Interest rates, loan eligibility, sanction amounts, and disbursal timelines vary across partnering banks, NBFCs, and insurer guidelines. Final decisions are solely at the discretion of the respective lending institution. SFS charges zero upfront brokerage fees.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4 sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  {getServiceIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Financial Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Indicative Rate</span>
                  <span className="text-sm font-bold text-slate-900">{selectedService.interestRateRange}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Repayment Tenure</span>
                  <span className="text-sm font-bold text-slate-900">{selectedService.tenureRange}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block">Possible Quantum</span>
                  <span className="text-sm font-bold text-slate-900">{selectedService.loanAmountRange}</span>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  General Eligibility Benchmarks
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-700 block">Age Limit:</span>
                    <span className="text-slate-600">{selectedService.eligibilityCriteria.minAge}</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-700 block">Employment:</span>
                    <span className="text-slate-600">{selectedService.eligibilityCriteria.employmentType}</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-700 block">Minimum Monthly Income:</span>
                    <span className="text-slate-600">{selectedService.eligibilityCriteria.minIncome}</span>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg">
                    <span className="font-bold text-slate-700 block">CIBIL / Credit Score:</span>
                    <span className="text-slate-600">{selectedService.eligibilityCriteria.cibilRequirement}</span>
                  </div>
                </div>
              </div>

              {/* Required Documents Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Primary Documents Required
                  </h4>
                  <button
                    onClick={() => {
                      const id = selectedService.id;
                      setSelectedService(null);
                      onNavigateToDocs(id);
                    }}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>Open Full Document Checklist</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {selectedService.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Process Steps */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Application & DSA Assistance Flow
                </h4>
                <ol className="space-y-2 text-xs text-slate-600">
                  {selectedService.processSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Lender Approval Factors */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Key Factors Considered by Lenders</span>
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {selectedService.approvalFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-slate-500 max-w-sm">
                No guaranteed loan approval. Terms subject to lender credit verification.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenEnquiry(title);
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <span>Apply for {selectedService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
