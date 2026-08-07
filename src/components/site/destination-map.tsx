import { useState } from "react";
import { destinations } from "./destinations-data";
import { waLink } from "./site-data";

/** Approximate positions on a stylised Europe/Caucasus map (percentages). */
const spots: Record<string, { top: string; left: string }> = {
  larnaca: { top: "72%", left: "72%" },
  budapest: { top: "36%", left: "50%" },
  prague: { top: "26%", left: "41%" },
  rome: { top: "58%", left: "38%" },
  santorini: { top: "74%", left: "58%" },
  tbilisi: { top: "44%", left: "88%" },
};

export function DestinationMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-ocean-50 via-background to-ocean-100 shadow-inner sm:aspect-[16/9]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 45% 35%, var(--ocean-200) 0 18%, transparent 19%), radial-gradient(circle at 62% 62%, var(--ocean-200) 0 14%, transparent 15%), radial-gradient(circle at 82% 44%, var(--ocean-200) 0 11%, transparent 12%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.25,
        }}
      />

      {destinations.map((d) => {
        const pos = spots[d.id] ?? { top: "50%", left: "50%" };
        const open = active === d.id;
        return (
          <div key={d.id} className="absolute" style={{ top: pos.top, left: pos.left }}>
            <button
              type="button"
              aria-label={`פרטי טיול ל${d.city}`}
              aria-expanded={open}
              onClick={() => setActive(open ? null : d.id)}
              className="group relative -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 -m-3 rounded-full bg-primary/40 animate-map-ping" aria-hidden="true" />
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background transition-transform duration-300 group-hover:scale-150" />
              <span className="absolute right-1/2 top-5 translate-x-1/2 whitespace-nowrap rounded-full bg-background/90 px-2 py-0.5 text-[0.65rem] font-bold text-foreground shadow">
                {d.city}
              </span>
            </button>

            {open && (
              <div className="absolute z-20 w-56 -translate-x-1/2 -translate-y-full animate-scale-in rounded-2xl border border-border bg-card p-3 text-right shadow-2xl">
                <img
                  src={d.gallery[0].src}
                  alt={d.gallery[0].alt}
                  className="h-24 w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <p className="mt-2 text-sm font-extrabold text-card-foreground">{d.title}</p>
                <p className="mt-1 text-xs font-bold text-primary">
                  החל מ־<span dir="ltr">${d.base}</span>
                </p>
                <a
                  href={waLink(`היי, אשמח לפרטים על טיול ל${d.city}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-whatsapp px-3 py-1.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  לבדיקת מחיר
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
