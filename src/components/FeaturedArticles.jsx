import React, { useEffect, useState } from 'react';
import { Bookmark, ArrowRight } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const fallback = [
  {
    title: 'Inside the AI Race: Breakthroughs, Risks, and What Comes Next',
    tag: 'Deep Dive',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Markets at Midnight: The Signals Driving a Volatile Week',
    tag: 'Analysis',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Earth 2030: Climate Tech That Might Actually Work',
    tag: 'Feature',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
  },
];

const FeaturedArticles = () => {
  const [articles, setArticles] = useState(fallback);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/posts?status=published&limit=6`);
        if (!res.ok) return;
        const data = await res.json();
        if (Array.isArray(data) && data.length) {
          setArticles(
            data.map((p) => ({
              id: p.id,
              title: p.title,
              tag: p.category || 'News',
              img: p.cover_image || 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
            }))
          );
        }
      } catch (e) {
        // ignore; keep fallback
      }
    };
    load();
  }, []);

  return (
    <section id="features" className="relative w-full bg-[#0a0b10] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Featured Articles</h2>
          <a href="#" className="text-sm text-[#8fdcff] underline-offset-4 hover:underline">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative h-48 w-full overflow-hidden sm:h-52">
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#0a0b10]/70 px-2 py-1 text-xs text-white/80 backdrop-blur">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-5">
                <h3 className="text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="line-clamp-3 text-sm text-white/70">
                  We break down the noise with context that matters. Practical takeaways, clear visuals, and links to go deeper.
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/90 hover:bg-white/10">
                    <Bookmark size={16} className="text-[#a897ff]" />
                    Save
                  </button>
                  <a href="#" className="group/cta inline-flex items-center gap-2 text-sm text-[#8fdcff]">
                    Read more
                    <ArrowRight size={16} className="transition-transform group-hover/cta:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
