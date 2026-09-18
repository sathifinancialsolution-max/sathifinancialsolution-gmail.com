import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faqData';
import { FaqItem } from '../types';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'loans', name: 'Loans & Products' },
    { id: 'cibil', name: 'CIBIL & Credit Score' },
    { id: 'documents', name: 'Documents' },
    { id: 'eligibility', name: 'Eligibility' },
    { id: 'general', name: 'General & Fees' }
  ];

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Clear, transparent facts about loan options, CIBIL reporting, and DSA application support.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, e.g. CIBIL score, interest rate, documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-500 focus:bg-white transition-all shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-sm">
              No matching questions found. Feel free to contact our team directly via WhatsApp or phone.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-amber-300 bg-amber-50/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-display">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 p-6 sm:p-8 bg-amber-50/70 border border-amber-200/90 text-slate-900 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div>
            <h3 className="text-base font-bold font-display text-slate-900">Have a specific question not covered here?</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Talk directly to our Kolkata loan advisors for personalized guidance.
            </p>
          </div>
          <a
            href="https://wa.me/916295136445?text=Hello%20SFS%2C%20I%20have%20a%20question%20regarding%20loans%20and%20financial%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs rounded-xl flex items-center gap-2 transition-all shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
