import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Header } from "@/components/newspaper/Header";
import { Footer } from "@/components/newspaper/Footer";
import { Intro } from "@/components/newspaper/Intro";
import { WordSearch } from "@/components/newspaper/WordSearch";
import { FeaturedPhotos } from "@/components/newspaper/FeaturedPhotos";
import { PressedFlower, RegistrationMark } from "@/components/newspaper/Decor";
import { editorial, featuredNote, masthead } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

const sections = [
  { to: "/poetry", label: "Poetry" },
  { to: "/prose", label: "Prose" },
  { to: "/photography", label: "Photography" },
  { to: "/notebook", label: "Notebook" },
] as const;

function Index() {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("zl-intro-seen");
    if (seen) {
      setReady(true);
    } else {
      setShowIntro(true);
    }
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("zl-intro-seen", "1");
    setShowIntro(false);
    setReady(true);
  };

  return (
    <>
      {showIntro && <Intro onDone={finishIntro} />}

      <div
        className="relative min-h-screen transition-opacity duration-1000"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <Header />

        <main className="relative mx-auto max-w-6xl px-5 pb-4 sm:px-8">
          {/* Masthead */}
          <div className="relative pt-8">
            <PressedFlower
              variant="pink"
              className="right-0 top-2 z-10 hidden w-24 rotate-12 sm:block"
            />
            <RegistrationMark className="left-1 top-6 hidden h-4 w-4 sm:block" />
            <h1 className="text-center font-display text-6xl tracking-[0.06em] text-ink sm:text-8xl md:text-[7rem]">
              {masthead.name}
            </h1>
            <div className="mx-auto mt-1 flex max-w-xs items-center gap-3">
              <span className="h-px flex-1 bg-rule" />
              <span className="label-caps whitespace-nowrap">{masthead.tagline}</span>
              <span className="h-px flex-1 bg-rule" />
            </div>
          </div>

          <hr className="rule-double mt-6" />
          <div className="flex items-center justify-between py-2 text-center">
            <span className="label-caps">{masthead.issue}</span>
            <span className="label-caps hidden sm:block">{masthead.location}</span>
            <span className="label-caps">{masthead.date}</span>
          </div>
          <hr className="rule-double" />

          {/* Top: editorial + word search */}
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1.15fr_1fr] md:gap-10">
            <section>
              <p className="eyebrow">Editorial Column</p>
              <hr className="rule-thin my-2" />
              <h2 className="mb-3 font-display text-xl italic text-ink">
                {editorial.heading}
              </h2>
              {editorial.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`mb-3 font-serif text-[0.95rem] leading-relaxed text-charcoal ${i === 0 ? "drop-cap" : ""}`}
                >
                  {p}
                </p>
              ))}
              <p className="font-serif text-sm italic text-ash">{editorial.signature}</p>
            </section>

            <section className="md:border-l md:border-border md:pl-10">
              <p className="eyebrow">Daily Word Search</p>
              <hr className="rule-thin my-2" />
              <WordSearch />
            </section>
          </div>

          <hr className="rule-thin" />

          {/* Featured photography + newspaper feature */}
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1.15fr_1fr] md:gap-10">
            <section>
              <p className="eyebrow mb-3">Featured Photographs</p>
              <FeaturedPhotos />
            </section>

            <section className="relative md:border-l md:border-border md:pl-10">
              <PressedFlower
                variant="sage"
                className="-right-2 bottom-0 hidden w-16 -rotate-12 md:block"
              />
              <p className="eyebrow">Newspaper Feature</p>
              <hr className="rule-thin my-2" />
              <p className="label-caps mb-1">From the Notebook · No. {featuredNote.no}</p>
              <h3 className="mb-3 font-display text-3xl leading-tight text-ink">
                {featuredNote.title}
              </h3>
              <p className="mb-4 font-serif leading-relaxed text-charcoal">
                {featuredNote.excerpt} Little observations, stray thoughts, things
                worth keeping — collected here between issues.
              </p>
              <Link to="/notebook" className="read-link">
                Continue Reading →
              </Link>
            </section>
          </div>

          <hr className="rule-thin" />

          {/* Micro-detail strip */}
          <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-3">
            <div>
              <p className="eyebrow mb-1">Today's Weather</p>
              <p className="font-serif text-sm text-charcoal">
                Overcast, warm, a chance of rain by evening. Ideal for reading
                indoors.
              </p>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-6">
              <p className="eyebrow mb-1">Corrections</p>
              <p className="font-serif text-sm text-charcoal">
                In our last edition, we called forgetting a failure. It is, more
                often, a mercy. We regret the error.
              </p>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-6">
              <p className="eyebrow mb-1">Letters to the Editor</p>
              <p className="font-serif text-sm text-charcoal">
                “I read the whole issue and missed my train.” — A reader, contentedly
                late.
              </p>
            </div>
          </div>

          <hr className="rule-double" />

          {/* Bottom section navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-6 sm:gap-x-10">
            {sections.map((s, i) => (
              <div key={s.to} className="flex items-center gap-6 sm:gap-10">
                <Link
                  to={s.to}
                  className="font-display text-lg tracking-[0.14em] text-ink link-underline"
                >
                  {s.label.toUpperCase()}
                </Link>
                {i < sections.length - 1 && <span className="text-ash">·</span>}
              </div>
            ))}
          </nav>
        </main>

        <Footer />
      </div>
    </>
  );
}
