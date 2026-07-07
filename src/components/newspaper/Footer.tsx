import { masthead } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <hr className="rule-double" />
        <div className="flex flex-col items-center gap-1 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="label-caps">© {masthead.name}</span>
          <span className="label-caps">All Rights Reserved</span>
          <span className="label-caps">Published in {masthead.location}</span>
          <span className="label-caps">{masthead.edition}</span>
        </div>
      </div>
    </footer>
  );
}
