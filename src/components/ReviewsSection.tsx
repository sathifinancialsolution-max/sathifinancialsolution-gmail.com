import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Star, ShieldCheck, MessageSquarePlus, X, CheckCircle, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(REVIEWS_DATA);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    location: 'Kolkata',
    loanType: 'Personal Loan',
    rating: 5,
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      location: newReview.location,
      loanType: newReview.loanType,
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      verified: true
    };
    setReviews([created, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setNewReview({ name: '', location: 'Kolkata', loanType: 'Personal Loan', rating: 5, comment: '' });
    }, 1500);
  };

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Leave Review Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-3 py-1 rounded-full shadow-2xs">
              Genuine Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-display mt-2">
              What Our Kolkata Borrowers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Authentic reviews from verified salaried employees, business owners, and families assisted by SFS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              id="leave-review-btn"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 shrink-0 active:scale-[0.98]"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-400" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50/60 hover:bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 font-display">{rev.name}</h3>
                  {rev.verified && (
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center justify-between">
                  <span>{rev.location}</span>
                  <span>{rev.date}</span>
                </div>
                <span className="inline-block mt-2 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold">
                  {rev.loanType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold font-display text-slate-900">
                Leave a Client Review for SFS
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-base font-bold text-slate-900">Thank you for your feedback!</h4>
                <p className="text-xs text-slate-600">Your review helps our local Kolkata team maintain high service standards.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sen"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Location in Kolkata *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ajoynagar / Garia"
                      value={newReview.location}
                      onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Service Received *
                    </label>
                    <select
                      value={newReview.loanType}
                      onChange={(e) => setNewReview({ ...newReview, loanType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm outline-none bg-white"
                    >
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Mortgage / LAP">Mortgage / LAP</option>
                      <option value="Car Loan">Car Loan</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Insurance">Insurance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Experience & Comment *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Share how the SFS team assisted you with guidance or documentation..."
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm outline-none focus:border-amber-500"
                  />
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
                  <span>Would you also like to post on Google Maps?</span>
                  <a
                    href="https://maps.google.com/?q=Ajoynagar+Kolkata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-amber-600 hover:text-amber-700"
                  >
                    <span>Google Reviews</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-xl text-xs font-bold transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
