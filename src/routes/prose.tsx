import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/newspaper/Header";
import { Footer } from "@/components/newspaper/Footer";
import { SectionHead } from "@/components/newspaper/SectionHead";
import { PressedFlower } from "@/components/newspaper/Decor";
import { articles } from "@/data/content";

export const Route = createFileRoute("/prose")({
  head: () => ({
    meta: [
      { title: "Prose — Feature Stories · Ziyu Lin" },
      {
        name: "description",
        content:
          "Feature Stories: essays and long-form prose on solitude, labour and language, from the Paper Portfolio of Ziyu Lin.",
      },
      { property: "og:title", content: "Prose — Feature Stories · Ziyu Lin" },
      {
        property: "og:description",
        content: "Essays and long-form prose, set as newspaper features.",
      },
    ],
  }),
  component: ProsePage,
});

function ProsePage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative mx-auto max-w-5xl px-5 pt-6 sm:px-8">
        <SectionHead title="Feature Stories" subtitle="Essays and prose." />

        <PressedFlower
          variant="yellow"
          className="-left-2 top-56 hidden w-16 rotate-6 lg:block"
        />

        <div className="mx-auto max-w-3xl">
          {articles.map((a, i) => {
            const isOpen = open === a.slug;
            return (
              <article key={a.slug} className="border-b border-border py-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[220px_1fr]">
                  <figure className="order-1 border border-rule">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </figure>
                  <div className="order-2">
                    <span className="label-caps">
                      No. {String(i + 1).padStart(2, "0")} · {a.kicker}
                    </span>
                    <h2 className="mt-1 font-display text-4xl leading-none text-ink">
                      {a.title}
                    </h2>
                    <p className="mt-3 font-serif text-lg leading-relaxed text-charcoal">
                      {a.excerpt}
                    </p>
                    {!isOpen && (
                      <button
                        onClick={() => setOpen(a.slug)}
                        className="read-link mt-4"
                      >
                        Read Article →
                      </button>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="soft-appear mx-auto mt-6 max-w-2xl">
                    <hr className="rule-thin mb-6" />
                    {a.body.map((p, j) => (
                      <p
                        key={j}
                        className={`mb-5 font-serif text-[1.05rem] leading-[1.85] text-charcoal ${j === 0 ? "drop-cap" : ""}`}
                      >
                        {p}
                      </p>
                    ))}
                    <button
                      onClick={() => setOpen(null)}
                      className="read-link"
                    >
                      ← Close Article
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="py-8 text-center label-caps">Continued in the next edition</p>
      </main>
      <Footer />
    </div>
  );
}
