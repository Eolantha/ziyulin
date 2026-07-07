import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { masthead } from "@/data/content";

const nav = [
  { to: "/", label: "Front Page" },
  { to: "/poetry", label: "Poetry" },
  { to: "/prose", label: "Prose" },
  { to: "/photography", label: "Photography" },
  { to: "/notebook", label: "Notebook" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link to="/" className="font-display text-sm tracking-[0.28em] text-ink">
          {masthead.name}
        </Link>
        <span className="label-caps hidden sm:block opacity-0">{masthead.tagline}</span>
        <button
          aria-label="Open sections"
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-500 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-opacity duration-500 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-500 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      <hr className="rule-thin" />

      {open && (
        <div className="soft-appear absolute inset-x-0 top-full border-b border-rule bg-paper">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-border py-3 last:border-0"
                activeProps={{ className: "italic" }}
              >
                <span className="label-caps w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl text-ink">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
