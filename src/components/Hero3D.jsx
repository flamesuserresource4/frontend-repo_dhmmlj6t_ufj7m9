import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-white text-[#0b1020]">
      {/* Subtle gradients and texture that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c9d7ff]/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#b8f1ff]/30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,92,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.08),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left copy */}
        <div className="flex flex-col items-start justify-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/70 backdrop-blur">
            <Star size={14} className="text-[#6f5cff]" />
            Handpicked stories. Real-time trends.
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Explore the Future of Media
            <span className="block bg-gradient-to-r from-[#6f5cff] via-[#7aa8ff] to-[#00d4ff] bg-clip-text text-transparent">through immersive storytelling</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
            A clean, minimal reading experience powered by interactive 3D. Follow the trends, dive deeper, and discover voices shaping what’s next.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#trending" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6f5cff] to-[#00d4ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,212,255,0.25)] transition-transform hover:scale-[1.02] active:scale-[0.99]">
              Explore Trends
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-black/[0.04] px-5 py-3 text-sm font-semibold text-black/80 backdrop-blur hover:bg-black/[0.06]">
              <Rocket size={18} className="text-[#6f5cff]" />
              Read Featured
            </a>
          </div>
          <div className="mt-4 flex items-center gap-6 text-xs text-black/50">
            <span>Curated hourly</span>
            <span className="h-1 w-1 rounded-full bg-black/30" />
            <span>Zero clutter, maximum signal</span>
          </div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative h-[50vh] w-full md:h-[60vh] lg:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Soft divider into darker sections below */}
      <div className="pointer-events-none relative z-0 h-24 w-full bg-gradient-to-b from-white to-[#0a0b10]" />
    </section>
  );
};

export default Hero3D;
