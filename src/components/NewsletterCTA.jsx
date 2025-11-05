import React from 'react';
import { Send } from 'lucide-react';

const NewsletterCTA = () => {
  return (
    <section className="relative w-full bg-[#090a0f] py-16 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6f5cff]/20 blur-3xl" />
        <div className="absolute bottom-0 right-16 h-48 w-48 rounded-full bg-[#00d4ff]/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-2xl font-semibold sm:text-3xl">Stay in the signal</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Weekly briefing with the sharpest stories across tech, markets, science, and culture. No spam. Unsubscribe anytime.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-6 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="you@domain.com"
            className="w-full flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur focus:border-[#6f5cff]/50"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6f5cff] to-[#00d4ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,212,255,0.35)] transition-transform hover:scale-[1.02] active:scale-95"
          >
            Subscribe
            <Send size={16} />
          </button>
        </form>
        <p className="mt-2 text-xs text-white/50">Join 25,000+ curious readers.</p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
