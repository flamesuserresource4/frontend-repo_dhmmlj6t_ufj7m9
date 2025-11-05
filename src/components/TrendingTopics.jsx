import React, { useState } from 'react';
import { Flame, TrendingUp, Sparkles } from 'lucide-react';

const topics = [
  'AI & Tech',
  'World News',
  'Finance',
  'Climate',
  'Culture',
  'Sports',
  'Space',
  'Health',
];

const TrendingTopics = () => {
  const [active, setActive] = useState('AI & Tech');

  return (
    <section id="trending" className="relative w-full bg-[#0a0b10] pb-12 pt-4 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-2">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#6f5cff]/40 to-[#00d4ff]/40">
            <TrendingUp size={16} />
          </div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Trending Now</h2>
        </div>

        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
          {topics.map((t) => {
            const isActive = active === t;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ${
                  isActive
                    ? 'border-transparent bg-gradient-to-r from-[#6f5cff] to-[#00d4ff] text-white shadow-[0_8px_24px_rgba(0,212,255,0.25)]'
                    : 'border-white/10 bg-white/[0.06] text-white/80 hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center gap-2 text-xs text-white/60">
                <Flame size={14} className="text-[#ff7ab6]" />
                Hot in {active}
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug">
                {active}: {i === 1 ? 'What Everyone’s Missing' : i === 2 ? 'Signals That Matter' : 'The Next 48 Hours'}
              </h3>
              <p className="mb-4 line-clamp-3 text-sm text-white/70">
                Fast insights on {active.toLowerCase()} curated from top sources. We surface the signal, not the noise—so you stay a step ahead.
              </p>
              <div className="flex items-center justify-between text-xs text-white/60">
                <div className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
                    <Sparkles size={14} className="text-[#a897ff]" />
                    5 min read
                  </span>
                  <span>• Updated just now</span>
                </div>
                <a href="#features" className="text-[#8fdcff] underline-offset-4 hover:underline">
                  Open
                </a>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-8 h-28 w-28 rounded-full bg-[#00d4ff]/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
