import { Link } from "@tanstack/react-router";

// Row 1: P-O-E-T-R-Y circled (indices 3–8)
// Row 5: P-R-O-S-E circled (indices 0–4)
const rows = [
  "EKBPOETRY",
  "FHSBREBZC",
  "DEGBHYWUE",
  "CROBECBBG",
  "PROSEGTRB",
];

function Cell({ ch }: { ch: string }) {
  return (
    <span className="grid h-[clamp(1.4rem,4.4vw,1.9rem)] w-[clamp(1.4rem,4.4vw,1.9rem)] place-items-center font-serif text-[clamp(0.8rem,2.6vw,1rem)] tracking-wide text-charcoal">
      {ch}
    </span>
  );
}

/* A word already circled in blue pen — and now a link. */
function Circled({
  word,
  to,
  rotate,
}: {
  word: string;
  to: string;
  rotate: number;
}) {
  return (
    <Link to={to} className="group relative flex" aria-label={`Read ${word}`}>
      {word.split("").map((ch, i) => (
        <Cell key={i} ch={ch} />
      ))}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-3px] rounded-[50%] border-[1.5px] border-pen transition-opacity duration-500 group-hover:opacity-60"
        style={{ transform: `rotate(${rotate}deg) scaleY(1.05)` }}
      />
    </Link>
  );
}

export function WordSearch() {
  return (
    <div>
      <div className="inline-block">
        {rows.map((row, r) => {
          if (r === 0) {
            return (
              <div key={r} className="flex">
                {row.slice(0, 3).split("").map((ch, i) => (
                  <Cell key={i} ch={ch} />
                ))}
                <Circled word="POETRY" to="/poetry" rotate={-2} />
              </div>
            );
          }
          if (r === 4) {
            return (
              <div key={r} className="flex">
                <Circled word="PROSE" to="/prose" rotate={2.5} />
                {row.slice(5).split("").map((ch, i) => (
                  <Cell key={i} ch={ch} />
                ))}
              </div>
            );
          }
          return (
            <div key={r} className="flex">
              {row.split("").map((ch, i) => (
                <Cell key={i} ch={ch} />
              ))}
            </div>
          );
        })}
      </div>
      <p className="mt-4 font-serif text-sm italic text-ash">
        Find the hidden words.{" "}
        <span className="text-pen">Two are already circled.</span>
      </p>
    </div>
  );
}
