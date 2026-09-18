import React from 'react';
import { MessageCircle, Phone, Send, Sparkles } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiry }) => {
  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        <a
          href="https://wa.me/916295136445?text=Hello%20SFS%20%E2%80%93%20Sathi%20Financial%20Solution%2C%20I%20would%20like%20assistance%20with%20a%20loan%20or%20financial%20service."
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp with SFS Kolkata"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30 pointer-events-none" />

          <MessageCircle className="w-7 h-7 relative z-10" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
            Chat with SFS Kolkata on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Action Bar (Fixed at bottom on screens < 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center gap-2">
        <a
          href="tel:+916295136445"
          id="mobile-call-sticky"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-600" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/916295136445?text=Hello%20SFS%2C%20I%20need%20assistance%20regarding%20loans."
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-whatsapp-sticky"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenEnquiry}
          id="mobile-apply-sticky"
          className="flex-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold shadow-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Apply Now</span>
        </button>
      </div>
    </>
  );
};
