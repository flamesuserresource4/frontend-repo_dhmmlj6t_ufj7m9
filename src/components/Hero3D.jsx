import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ArrowRight } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      {/* Decorative gradient glows (don't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#6f5cff]/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#00d4ff]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,92,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<?xml version=\'1.0\' encoding=\'UTF-8\'?> <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'2\' stitchTiles=\'stitch\'/><feColorMatrix type=\'saturate\' values=\'0\'/><feComponentTransfer><feFuncA type=\'discrete\' tableValues=\'0 0 0.2 0\'/></feComponentTransfer></filter><rect width=\'400\' height=\'400\' filter=\'url(%23n)\'/></svg>' )' }} />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        {/* Left copy */}
        <div className="flex flex-col items-start justify-center gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star size={14} className="text-[#a897ff]" />
            Handpicked stories. Real-time trends.
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Dive into Tomorrow’s News
            <span className="block bg-gradient-to-r from-[#a897ff] via-[#7aa8ff] to-[#4be1ff] bg-clip-text text-transparent">— bold, vibrant, and alive</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A next‑gen news and blog hub blending interactive 3D visuals with a sleek reading experience. Stay ahead with trending topics, deep dives, and community voices.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <a href="#trending" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6f5cff] to-[#00d4ff] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,212,255,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.99]">
              Explore Trends
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10">
              <Rocket size={18} className="text-[#a897ff]" />
              Read Featured
            </a>
          </div>
          <div className="mt-4 flex items-center gap-6 text-xs text-white/60">
            <span>Curated hourly</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>Zero clutter, maximum signal</span>
          </div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative h-[50vh] w-full md:h-[60vh] lg:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
