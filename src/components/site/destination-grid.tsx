import { useEffect, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { destinations, BASE_PACKAGE, GOLD_PACKAGE, type Destination } from "./destinations-data";
import { waLink } from "./site-data";
import { Reveal } from "./motion";

function Tier({
  name,
  price,
  includes,
  gold,
  dest,
}: {
  name: string;
  price: number;
  includes: string[];
  gold?: boolean;
  dest: Destination;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        gold ? "border-primary/60 bg-ocean-50" : "border-border bg-background"
      }`}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-extrabold text-foreground">{name}</span>
        <span className="text-sm font-bold text-primary">
          החל מ־<span dir="ltr">${price}</span>
        </span>
      </div>
      <ul className="mt-2 space-y-1">
        {includes.map((it) => (
          <li key={it} className="flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(`היי, אשמח לפרטים על חבילת "${name}" ל${dest.city} (החל מ־$${price})`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-3 inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
          gold
            ? "bg-primary text-primary-foreground animate-cta-glow-primary"
            : "border border-border bg-card text-foreground hover:border-primary"
        }`}
      >
        לבדיקת מחיר ל{dest.city}
      </a>
    </div>
  );
}

function Card({ dest }: { dest: Destination }) {
  const [openGallery, setOpenGallery] = useState(false);
  const [slide, setSlide] = useState(0);
  const slides = dest.gallery;

  useEffect(() => {
    if (!openGallery || slides.length < 2) return;
    const id = window.setInterval(() => setSlide((s) => (s + 1) % slides.length), 2200);
    return () => window.clearInterval(id);
  }, [openGallery, slides.length]);

  useEffect(() => {
    if (!openGallery) setSlide(0);
  }, [openGallery]);

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
      onMouseEnter={() => setOpenGallery(true)}
      onMouseLeave={() => setOpenGallery(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {slides.map((g, i) => (
          <img
            key={g.src}
            src={g.src}
            alt={g.alt}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-110 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ocean-900/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <span className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur">
          {dest.country}
        </span>
        <div className="absolute bottom-3 right-3 flex gap-1.5" aria-hidden="true">
          {slides.map((g, i) => (
            <span
              key={g.src}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === slide ? "w-5 bg-white" : "w-1.5 bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-expanded={openGallery}
          aria-label={`תמונות נוספות מ${dest.city}`}
          onClick={() => setOpenGallery((v) => !v)}
          className="absolute bottom-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur transition-transform duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openGallery ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div
        className={`grid grid-cols-3 gap-1.5 overflow-hidden bg-muted/40 px-3 transition-all duration-500 ease-out ${
          openGallery ? "max-h-32 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {slides.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setSlide(i)}
            aria-label={g.alt}
            className={`overflow-hidden rounded-xl ring-offset-2 transition-all duration-300 ${
              i === slide ? "ring-2 ring-primary" : "hover:ring-2 hover:ring-primary/50"
            }`}
          >
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-20 w-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </button>
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5 text-right">
        <h3 className="text-lg font-extrabold text-card-foreground transition-colors duration-300 group-hover:text-primary md:text-xl">
          {dest.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{dest.description}</p>
        <div className="mt-4 grid gap-3">
          <Tier name={BASE_PACKAGE.name} price={dest.base} includes={BASE_PACKAGE.includes} dest={dest} />
          <Tier name={GOLD_PACKAGE.name} price={dest.gold} includes={GOLD_PACKAGE.includes} gold dest={dest} />
        </div>
      </div>
    </article>
  );
}

export function DestinationGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((d, i) => (
        <Reveal key={d.id} delay={(i % 3) * 110} className="h-full">
          <Card dest={d} />
        </Reveal>
      ))}
    </div>
  );
}
