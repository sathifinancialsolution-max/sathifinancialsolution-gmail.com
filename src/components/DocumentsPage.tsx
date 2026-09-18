import React, { useState } from 'react';
import { DOCUMENTS_DATA } from '../data/documentsData';
import { 
  FileCheck, 
  CheckSquare, 
  Square, 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  AlertCircle, 
  PhoneCall, 
  Sparkles,
  Info,
  Download
} from 'lucide-react';

interface DocumentsPageProps {
  initialServiceId?: string;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const DocumentsPage: React.FC<DocumentsPageProps> = ({
  initialServiceId = 'personal-loan',
  onOpenEnquiry
}) => {
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const currentGroup = DOCUMENTS_DATA[selectedService] || DOCUMENTS_DATA['personal-loan'];

  const toggleCheck = (itemText: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemText]: !prev[itemText]
    }));
  };

  const copyChecklistToClipboard = () => {
    const text = `SFS Sathi Financial Solution - Checklist for ${currentGroup.serviceTitle}:\n\n` +
      currentGroup.groups.map(g => `${g.title}:\n` + g.items.map(i => `- ${i}`).join('\n')).join('\n\n') +
      `\n\nFor personalized assistance, contact SFS Ajoynagar, Kolkata: +91 6295136445`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const servicesList = [
    { id: 'personal-loan', name: 'Personal Loan' },
    { id: 'home-loan', name: 'Home Loan' },
    { id: 'mortgage-lap', name: 'Mortgage / Loan Against Property' },
    { id: 'car-loan', name: 'Car Loan' },
    { id: 'business-financing', name: 'Business Financing / MSME' },
    { id: 'credit-card', name: 'Credit Card Services' },
    { id: 'insurance', name: 'Insurance Solutions' }
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <FileCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Interactive Documentation Assistant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Documents Required for Loan Application
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Select your loan or service category below to view an organized, step-by-step checklist of KYC, income proofs, and property paperwork.
          </p>
        </div>

        {/* Dropdown / Tab Selector */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
          <label htmlFor="service-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Select Loan / Financial Product:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {servicesList.map((svc) => (
              <button
                key={svc.id}
                onClick={() => setSelectedService(svc.id)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center ${
                  selectedService === svc.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{svc.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Checklist Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          {/* Header Row with Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Document Checklist
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                {currentGroup.serviceTitle} Documentation
              </h2>
              <p className="text-xs text-slate-500 mt-1">{currentGroup.summary}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyChecklistToClipboard}
                className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                title="Copy checklist"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copied ? 'Copied!' : 'Copy Checklist'}</span>
              </button>

              <a
                href={`https://wa.me/916295136445?text=Hello%20SFS%2C%20I%20have%20questions%20regarding%20documents%20needed%20for%20${encodeURIComponent(currentGroup.serviceTitle)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Group Sections */}
          <div className="mt-6 space-y-6">
            {currentGroup.groups.map((grp, idx) => (
              <div key={idx} className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{grp.title}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{grp.description}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    grp.isMandatory
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {grp.isMandatory ? 'Mandatory' : 'Profile Dependent'}
                  </span>
                </div>

                <div className="space-y-2 mt-3">
                  {grp.items.map((item, itemIdx) => {
                    const isChecked = !!checkedItems[item];
                    return (
                      <button
                        key={itemIdx}
                        onClick={() => toggleCheck(item)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${
                          isChecked
                            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                            : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Square className="w-4 h-4 text-slate-400" />
                          )}
                        </span>
                        <span className={`text-xs ${isChecked ? 'line-through text-slate-500' : 'font-medium'}`}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Expert Documentation Tips */}
          {currentGroup.expertTips && currentGroup.expertTips.length > 0 && (
            <div className="mt-8 p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>DSA Documentation Guidance Tips from SFS</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-blue-800">
                {currentGroup.expertTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mandatory Prompt Disclaimer */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              &ldquo;Document requirements may vary depending on the lender, loan product, applicant profile and property/vehicle involved. The final document checklist will be confirmed by the respective lender.&rdquo;
            </p>
          </div>

          {/* Prominent Button requested by prompt */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Need assistance collecting, photocopying, or reviewing property chain deeds in Kolkata?
            </div>
            <button
              onClick={() => onOpenEnquiry(`Document Guidance: ${currentGroup.serviceTitle}`)}
              id="talk-expert-docs-btn"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Talk to an Expert About Required Documents</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
