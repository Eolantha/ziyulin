import { useEffect, useState } from "react";
import { images } from "@/data/content";

const slides = [
  { src: images.daisies, label: "Chamomile, unremarkable field" },
  { src: images.ocean, label: "Light, learning to swim" },
];

export function FeaturedPhotos() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 10000);
    return () => clearInterval(t);
  }, []);

  const go = (n: number) => setI((v) => (v + n + slides.length) % slides.length);

  return (
    <figure className="group relative overflow-hidden border border-rule">
      <div className="relative aspect-[4/3] w-full">
        {slides.map((s, idx) => (
          <img
            key={idx}
            src={s.src}
            alt={s.label}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: idx === i ? 1 : 0 }}
          />
        ))}
      </div>

      <button
        aria-label="Previous photograph"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/70 px-2 py-3 font-serif text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        ‹
      </button>
      <button
        aria-label="Next photograph"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/70 px-2 py-3 font-serif text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      >
        ›
      </button>
    </figure>
  );
}
