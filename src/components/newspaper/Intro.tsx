import { useEffect, useState } from "react";
import newspaperBall from "@/assets/newspaper-ball.png";
import photoClouds from "@/assets/photo-clouds.jpg";
import { masthead } from "@/data/content";

type Phase = "load" | "unfold" | "leaving";

export function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("load");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("unfold"), 2200);
    const t2 = setTimeout(() => setOpen(true), 2320);
    const t3 = setTimeout(() => setPhase("leaving"), 5200);
    const t4 = setTimeout(() => onDone(), 6300);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-paper transition-opacity duration-1000"
      style={{ opacity: phase === "leaving" ? 0 : 1, perspective: "1600px" }}
    >
      {/* Loading state */}
      {phase === "load" && (
        <div className="soft-appear flex flex-col items-center px-6 text-center">
          <img
            src={newspaperBall}
            alt="A crumpled newspaper"
            width={900}
            height={900}
            className="mb-6 w-[min(46vw,320px)]"
          />
          <h1 className="font-display text-4xl tracking-[0.12em] text-ink sm:text-5xl">
            {masthead.name}
          </h1>
          <p className="mt-1 font-serif text-lg italic text-ash">
            {masthead.tagline}
          </p>
          <p className="mt-8 label-caps">Loading today's edition…</p>
          <span className="mt-3 h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
        </div>
      )}

      {/* Unfolding state */}
      {phase !== "load" && (
        <div className="flex flex-col items-center">
          <div
            className="origin-bottom transition-all duration-[2600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
            style={{
              transform: open
                ? "rotateX(0deg) scale(1)"
                : "rotateX(86deg) scale(0.4)",
              opacity: open ? 1 : 0.5,
            }}
          >
            <div className="w-[min(88vw,560px)] border border-rule bg-paper px-6 py-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <p className="text-center font-display text-3xl tracking-[0.1em] text-ink sm:text-4xl">
                {masthead.name}
              </p>
              <p className="mt-0.5 text-center label-caps">{masthead.tagline}</p>
              <hr className="rule-double my-3" />
              <div className="flex justify-between label-caps">
                <span>{masthead.issue}</span>
                <span>{masthead.date}</span>
              </div>
              <hr className="rule-thin my-3" />
              <img
                src={photoClouds}
                alt=""
                aria-hidden="true"
                className="aspect-[16/7] w-full object-cover"
              />
              <div className="mt-3 space-y-1.5">
                {[100, 96, 92, 88].map((w) => (
                  <div
                    key={w}
                    className="h-1 bg-ash/25"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="mt-8 label-caps">Unfolding today's edition…</p>
        </div>
      )}
    </div>
  );
}
