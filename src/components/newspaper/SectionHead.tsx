import { masthead } from "@/data/content";

export function SectionHead({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="fade-up">
      <hr className="rule-double" />
      <div className="flex items-center justify-center gap-4 py-6">
        <span className="text-ash">✦</span>
        <h1 className="text-center font-display text-4xl tracking-wide text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <span className="text-ash">✦</span>
      </div>
      <hr className="rule-thin" />
      <div className="flex items-center justify-between py-2">
        <span className="font-serif text-sm italic text-ash">
          {subtitle ?? "\u00A0"}
        </span>
        <span className="label-caps">{masthead.issue}</span>
      </div>
      <hr className="rule-thin" />
    </div>
  );
}
