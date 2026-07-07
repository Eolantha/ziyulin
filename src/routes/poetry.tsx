import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/newspaper/Header";
import { Footer } from "@/components/newspaper/Footer";
import { SectionHead } from "@/components/newspaper/SectionHead";
import {
  PressedFlower,
  PaperHeart,
  SmileySticker,
  WashiTape,
} from "@/components/newspaper/Decor";
import { poems, type Poem, masthead } from "@/data/content";

export const Route = createFileRoute("/poetry")({
  head: () => ({
    meta: [
      { title: "Poetry — The Forecast · Ziyu Lin" },
      {
        name: "description",
        content:
          "The Forecast: poems set as weekly horoscopes. Small readings for each sign, from the Paper Portfolio of Ziyu Lin.",
      },
      { property: "og:title", content: "Poetry — The Forecast · Ziyu Lin" },
      {
        property: "og:description",
        content: "Poems set as weekly horoscopes, one for each sign.",
      },
    ],
  }),
  component: PoetryPage,
});

function PoetryPage() {
  const [active, setActive] = useState<Poem | null>(null);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <SectionHead title="The Forecast" subtitle="Your weekly reading." />

        <p className="py-4 text-right label-caps">Week of {masthead.date}</p>

        {/* Decorations */}
        <div className="relative">
          <PressedFlower
            variant="pink"
            className="left-1 -top-12 z-10 hidden w-16 rotate-6 lg:block"
          />
          <PressedFlower
            variant="yellow"
            className="-right-2 top-[60%] z-10 hidden w-14 rotate-12 lg:block"
          />
          <PaperHeart className="right-6 -top-4 z-10 hidden h-6 w-6 rotate-12 lg:block" />
          <SmileySticker className="left-1/2 -top-3 z-10 hidden h-7 w-7 md:block" />

          <div className="grid grid-cols-1 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem) => (
              <button
                key={poem.sign}
                onClick={() => setActive(poem)}
                className="group border-b border-r border-border p-5 text-left transition-colors duration-500 hover:bg-paper-panel"
              >
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow">{poem.sign}</span>
                  <span className="font-serif text-lg text-ash">{poem.glyph}</span>
                </div>
                <h3 className="mt-2 font-display text-xl italic text-ink">
                  {poem.title}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-charcoal">
                  {poem.preview.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="read-link mt-4 inline-flex">Read Poem →</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Reading overlay */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-5 py-10"
          onClick={() => setActive(null)}
        >
          <article
            className="soft-appear relative max-h-full w-full max-w-lg overflow-y-auto border border-rule bg-paper px-8 py-10"
            onClick={(e) => e.stopPropagation()}
          >
            <WashiTape
              color="var(--sky)"
              className="-top-2 left-8 -rotate-6"
            />
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-5 top-4 font-serif text-xl text-ash transition-opacity hover:opacity-60"
            >
              ×
            </button>
            <div className="flex items-baseline justify-between">
              <span className="eyebrow">{active.sign}</span>
              <span className="font-serif text-2xl text-ash">{active.glyph}</span>
            </div>
            <hr className="rule-thin my-3" />
            <h2 className="font-display text-3xl italic text-ink">{active.title}</h2>
            <div className="mt-6 space-y-2">
              {active.body.map((line, i) => (
                <p key={i} className="font-serif text-lg leading-relaxed text-charcoal">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 label-caps">Paper Portfolio · The Forecast</p>
          </article>
        </div>
      )}
    </div>
  );
}
