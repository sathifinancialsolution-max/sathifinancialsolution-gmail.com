import React from 'react';
import { 
  Shield, 
  Users, 
  FileCheck2, 
  MapPin, 
  CheckCircle, 
  Layers, 
  Headphones, 
  Scale, 
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import advisoryImg from '../assets/images/sfs_consult_advisory_1789537793862.jpg';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  const coreValues = [
    {
      title: 'Transparency',
      desc: 'Clear upfront communication about lender fees, eligibility parameters, and interest benchmarks without deceptive promises.',
      icon: Scale,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      title: 'Customer Support',
      desc: 'Dedicated single-point DSA case coordinator assisting you right from first enquiry through post-sanction formalities.',
      icon: Headphones,
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Professional Guidance',
      desc: 'In-depth domain expertise assessing bank FOIR thresholds, CIBIL health, and title deed chain requirements.',
      icon: Shield,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      title: 'Convenient Process',
      desc: 'Doorstep document pickup in Kolkata and seamless electronic file submissions to partnered lenders.',
      icon: Clock,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
    },
    {
      title: 'Responsible Financial Assistance',
      desc: 'Advising sustainable loan quantum to ensure your family’s financial stability is safeguarded without debt traps.',
      icon: CheckCircle,
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    }
  ];

  const whyChooseReasons = [
    {
      title: 'Trusted DSA Network',
      desc: 'Direct tie-ups with leading nationalized banks, private sector institutions, and top-tier NBFCs across India.',
      icon: Shield
    },
    {
      title: 'Multiple Financial Solutions',
      desc: 'One-stop hub for Personal, Home, LAP, Auto loans, Credit Cards, and Insurance without jumping between multiple offices.',
      icon: Layers
    },
    {
      title: 'Documentation Guidance',
      desc: 'Comprehensive vetting of salary proofs, ITR computations, property deeds, and municipal plans to prevent lender rejections.',
      icon: FileCheck2
    },
    {
      title: 'Customer-Friendly Process',
      desc: 'Zero harassment, honest feedback on approval feasibility, and zero upfront service charges from SFS.',
      icon: Users
    },
    {
      title: 'Local Kolkata Assistance',
      desc: 'Based in Ajoynagar, providing personalized, accessible face-to-face assistance across Kolkata and Greater West Bengal.',
      icon: MapPin
    }
  ];

  return (
    <section id="about-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Main About Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>About SFS – Sathi Financial Solution</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Making Financial Solutions Simple, Transparent & Accessible
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              <strong>SFS – Sathi Financial Solution</strong> is a premier financial service provider based in <strong>Ajoynagar, Kolkata, West Bengal</strong>. We assist salaried professionals, self-employed individuals, and business owners in exploring suitable financial products tailored to their real economic circumstances.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Navigating bank lending policies, CIBIL parameters, and complex property documentation can be intimidating. Through our experienced Direct Selling Agent (DSA) network and financial partnerships, we bridge the gap between borrowers and institutions with patient guidance, end-to-end documentation vetting, and honest advisory.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Our Foundational Promise
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never engage in high-pressure sales or false promises of &ldquo;guaranteed approval.&rdquo; Our role is to empower you with clarity, help you present clean loan files, and optimize your chances of approval with the most competitive interest rates possible.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                <span>Connect With An SFS Advisor</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 group">
              <img
                src={advisoryImg}
                alt="SFS Financial Advisor consulting with customer in Kolkata office"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Ajoynagar, Kolkata
                </span>
                <p className="text-sm font-semibold text-slate-100 mt-1">
                  Local presence. Genuine relationships. Unwavering ethical standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Guiding Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every customer conversation is anchored in these five fundamental commitments:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 border border-slate-200/80 hover:border-amber-400/80 p-5 rounded-2xl transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${val.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 font-display">{val.title}</h4>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose SFS Grid (Prompt Section 8) */}
        <div className="bg-slate-50/80 text-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
              The SFS Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              Why Borrowers in Kolkata Choose SFS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Combining the product breadth of a nationwide marketplace with the dedicated care of a local Kolkata neighborhood partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {whyChooseReasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-amber-400 hover:shadow-xs transition-all hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-display">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
