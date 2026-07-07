import type { CSSProperties } from "react";
import flowerYellow from "@/assets/flower-yellow.png";
import flowerPink from "@/assets/flower-pink.png";
import leafSage from "@/assets/leaf-sage.png";

const flowers = { yellow: flowerYellow, pink: flowerPink, sage: leafSage } as const;

/* Pressed botanical specimen — a sparse collage accent. */
export function PressedFlower({
  variant = "yellow",
  className = "",
  style,
}: {
  variant?: keyof typeof flowers;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <img
      src={flowers[variant]}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none absolute select-none opacity-90 ${className}`}
      style={style}
    />
  );
}

/* A torn strip of washi tape. */
export function WashiTape({
  color = "var(--sky)",
  className = "",
  style,
}: {
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute block h-6 w-20 opacity-60 ${className}`}
      style={{
        background: color,
        clipPath:
          "polygon(2% 12%, 98% 4%, 100% 88%, 4% 96%, 6% 50%, 1% 30%)",
        ...style,
      }}
    />
  );
}

/* A tiny cut-paper heart. */
export function PaperHeart({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 32 30"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={style}
    >
      <path
        d="M16 28C4 20 1 13 4 7c2-4 8-4 10 0 2 0 8-4 10 0 3 6 0 13-12 21Z"
        fill="var(--blush)"
        opacity="0.85"
      />
    </svg>
  );
}

/* A small hand-drawn smiley sticker. */
export function SmileySticker({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={style}
    >
      <circle cx="20" cy="20" r="18" fill="var(--mustard)" opacity="0.9" />
      <circle cx="14" cy="16" r="1.8" fill="var(--ink)" />
      <circle cx="26" cy="16" r="1.8" fill="var(--ink)" />
      <path
        d="M12 24c3 4 13 4 16 0"
        stroke="var(--ink)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Printer's registration mark — a quiet corner detail. */
export function RegistrationMark({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-40 ${className}`}
      style={style}
    >
      <circle cx="12" cy="12" r="7" fill="none" stroke="var(--ash)" strokeWidth="0.8" />
      <path d="M12 0v24M0 12h24" stroke="var(--ash)" strokeWidth="0.8" />
    </svg>
  );
}
