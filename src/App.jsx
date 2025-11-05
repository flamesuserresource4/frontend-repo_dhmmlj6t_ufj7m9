import React from 'react';
import Hero3D from './components/Hero3D';
import TrendingTopics from './components/TrendingTopics';
import FeaturedArticles from './components/FeaturedArticles';
import NewsletterCTA from './components/NewsletterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white">
      <Hero3D />
      <TrendingTopics />
      <FeaturedArticles />
      <NewsletterCTA />
      <footer className="border-t border-white/10 bg-[#090a0f] py-6 text-center text-xs text-white/60">
        Built for readers who want more signal, less noise. © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
