import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Navigation
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Personal Loan',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsApp = () => {
    const text = `Hello SFS Team,%0AMy name is ${encodeURIComponent(formData.name)}.%0AI am interested in: ${encodeURIComponent(formData.serviceInterest)}.%0AMy phone: ${encodeURIComponent(formData.phone)}.%0AMessage: ${encodeURIComponent(formData.message || 'Need assistance')}`;
    window.open(`https://wa.me/916295136445?text=${text}`, '_blank');
  };

  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner CTA */}
        <div className="bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 text-slate-900 rounded-3xl p-8 sm:p-10 shadow-xs border border-amber-200/90 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
              Get In Touch With Our Kolkata Office
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-1">
              Need Financial Assistance? Contact SFS Today.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl">
              Visit our Ajoynagar desk or reach out via phone/WhatsApp for prompt loan eligibility and documentation guidance.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+916295136445"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-xs active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 6295136445</span>
            </a>
            <a
              href="https://wa.me/916295136445?text=Hello%20SFS%20Team%2C%20I%20would%20like%20to%20contact%20you%20for%20financial%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-2xs active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Contact Details & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                  Official Business Details
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900 mt-1">
                  SFS – Sathi Financial Solution
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Loan, Credit Card and Insurance Assistance through a network of trusted DSA agents and financial partners.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Office Address:</strong>
                    <span>Ajoynagar, Kolkata, West Bengal, India</span>
                    <span className="block text-slate-500 text-xs mt-0.5">Near EM Bypass connector, South Kolkata</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone / WhatsApp:</strong>
                    <a href="tel:+916295136445" className="text-amber-700 font-semibold hover:underline">
                      +91 6295136445
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Official Email:</strong>
                    <a href="mailto:sathifinancialsolution@gmail.com" className="text-amber-700 font-semibold hover:underline break-all">
                      sathifinancialsolution@gmail.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold">Working Hours:</strong>
                    <span>Monday to Saturday: 9:30 AM – 7:00 PM</span>
                    <span className="block text-slate-500 text-xs mt-0.5">Sunday: By prior appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-xs overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ajoynagar, Kolkata Location</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Ajoynagar+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-600 hover:underline"
                >
                  Open in Maps
                </a>
              </div>
              <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-100 relative">
                <iframe
                  title="SFS Location Ajoynagar Kolkata"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.15277150993!2d88.39050735!3d22.49392275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713f0190cfeb%3A0xe54345ea556133eb!2sAjoy%20Nagar%2C%20Mukundapur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs">
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Direct Communication
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900 mt-1">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill out the details below and an SFS advisor will get in touch with you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900 font-display">Message Sent!</h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to <strong>SFS – Sathi Financial Solution</strong>. We will review your query and contact you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={handleWhatsApp}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Debabrata Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Service of Interest *
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none bg-white focus:border-amber-500"
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Mortgage / LAP">Mortgage / Loan Against Property</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="Instant Loan Assistance">Instant Loan Assistance</option>
                      <option value="Credit Card Services">Credit Card Services</option>
                      <option value="Insurance Solutions">Insurance Solutions</option>
                      <option value="CIBIL Score Advisory">CIBIL Score Advisory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Message / Specific Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your loan amount, documentation questions, or preferred bank..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-slate-500 leading-snug">
                    By submitting, you consent to being contacted by SFS regarding your financial enquiry. All loan terms are subject to lender verification.
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    <span>{loading ? 'Submitting...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
