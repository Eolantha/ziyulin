import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/newspaper/Header";
import { Footer } from "@/components/newspaper/Footer";
import { SectionHead } from "@/components/newspaper/SectionHead";
import { WashiTape, PressedFlower } from "@/components/newspaper/Decor";
import { photos } from "@/data/content";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Photos as Memories · Ziyu Lin" },
      {
        name: "description",
        content:
          "Photo as Memories: photographs assembled by hand, taped and clipped like a newspaper collage, from the Paper Portfolio of Ziyu Lin.",
      },
      { property: "og:title", content: "Photography — Photo as Memories · Ziyu Lin" },
      {
        property: "og:description",
        content: "Photographs assembled by hand, taped and clipped.",
      },
    ],
  }),
  component: PhotographyPage,
});

type Item = {
  i: number;
  left: number;
  top: number;
  w: number;
  rot: number;
  tape?: string;
};

// Desktop collage placements (percentages).
const layout: Item[] = [
  { i: 0, left: 3, top: 1, w: 30, rot: -2, tape: "var(--sky)" },
  { i: 1, left: 37, top: 5, w: 25, rot: 2 },
  { i: 2, left: 68, top: 0, w: 28, rot: -3 },
  { i: 5, left: 2, top: 42, w: 34, rot: 1.5, tape: "var(--mustard)" },
  { i: 3, left: 40, top: 40, w: 30, rot: -2 },
  { i: 4, left: 73, top: 34, w: 24, rot: 3, tape: "var(--blush)" },
  { i: 6, left: 33, top: 75, w: 36, rot: -1 },
];

function PhotographyPage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <SectionHead title="Photos as Memories" subtitle="Moments, captured." />

        {/* Desktop collage */}
        <div className="relative mt-10 hidden h-[1180px] lg:block">
          <PressedFlower
            variant="sage"
            className="-left-2 top-2 z-20 w-16 -rotate-6"
          />
          {layout.map(({ i, left, top, w, rot, tape }, idx) => {
            const p = photos[i];
            return (
              <figure
                key={p.label}
                className="absolute border border-rule bg-paper p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${w}%`,
                  transform: `rotate(${rot}deg)`,
                  zIndex: idx + 1,
                }}
              >
                {tape && (
                  <WashiTape
                    color={tape}
                    className="-top-3 left-1/2 -translate-x-1/2 -rotate-3"
                  />
                )}
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="mt-1 text-center label-caps">
                  {p.label}
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Mobile / tablet stacked collage */}
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:hidden">
          {photos.map((p, idx) => (
            <figure
              key={p.label}
              className="border border-rule bg-paper p-1.5"
              style={{
                transform: `rotate(${idx % 2 === 0 ? -1.5 : 1.5}deg)`,
                marginTop: idx % 3 === 1 ? "1.5rem" : 0,
              }}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-1 text-center label-caps">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-24 text-center font-serif italic text-ash">
          Sunlight. Buildings. People. Flowers. Life.
        </p>
      </main>
      <Footer />
    </div>
  );
}
