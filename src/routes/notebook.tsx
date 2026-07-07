import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/newspaper/Header";
import { Footer } from "@/components/newspaper/Footer";
import { SectionHead } from "@/components/newspaper/SectionHead";
import { PressedFlower, RegistrationMark } from "@/components/newspaper/Decor";
import { notes } from "@/data/content";

export const Route = createFileRoute("/notebook")({
  head: () => ({
    meta: [
      { title: "Notebook — From the Notebook · Ziyu Lin" },
      {
        name: "description",
        content:
          "From the Notebook: short observations set as newspaper columns — the heart of Ziyu Lin's Paper Portfolio.",
      },
      { property: "og:title", content: "Notebook — From the Notebook · Ziyu Lin" },
      {
        property: "og:description",
        content: "Short observations, set as newspaper columns.",
      },
    ],
  }),
  component: NotebookPage,
});

function NotebookPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative mx-auto max-w-6xl px-5 pt-6 sm:px-8">
        <SectionHead
          title="From the Notebook"
          subtitle="Observations from the notebook."
        />

        <PressedFlower
          variant="pink"
          className="-right-2 top-40 hidden w-20 rotate-12 lg:block"
        />
        <RegistrationMark className="left-1 top-44 hidden h-4 w-4 lg:block" />

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((n) => {
            const isOpen = open === n.no;
            return (
              <article
                key={n.no}
                className="flex flex-col border-t border-rule pt-4"
              >
                <span className="font-display text-2xl text-ash">
                  No. {n.no}
                </span>
                <h3 className="mt-1 font-display text-xl italic text-ink">
                  {n.title}
                </h3>
                <figure className="my-4 border border-rule bg-paper p-1.5">
                  <img
                    src={n.image}
                    alt={n.title}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover"
                  />
                </figure>
                <p className="font-serif text-[0.95rem] leading-relaxed text-charcoal">
                  {isOpen || n.excerpt.length <= 82
                    ? n.excerpt
                    : `${n.excerpt.slice(0, 82).trim()}…`}
                </p>
                <button
                  onClick={() => setOpen(isOpen ? null : n.no)}
                  className="read-link mt-3 self-start"
                >
                  {isOpen ? "← Less" : "Read More →"}
                </button>
              </article>
            );
          })}
        </div>

        <p className="mt-16 text-center font-serif italic text-ash">
          Kept between issues. More to come.
        </p>
      </main>
      <Footer />
    </div>
  );
}
