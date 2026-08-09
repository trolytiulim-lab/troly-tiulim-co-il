import { useState } from "react";
import { destinations } from "./destinations-data";
import { waLink } from "./site-data";

type Spot = {
  id: string;
  city: string;
  /** Optional link to a full destination (packages/pricing popup). */
  destId?: string;
  top: string;
  left: string;
  labelAbove?: boolean;
};

/** Approximate positions on a stylised world map (percentages). */
const spots: Spot[] = [
  { id: "canada", city: "קנדה", top: "17%", left: "19%" },
  { id: "costa-rica", city: "קוסטה ריקה", top: "44%", left: "24%" },
  { id: "ecuador", city: "אקוודור", top: "54%", left: "27%", labelAbove: true },
  { id: "peru", city: "פרו", top: "62%", left: "31%" },
  { id: "brazil", city: "ברזיל", top: "57%", left: "38%" },
  { id: "scotland", city: "סקוטלנד", top: "12%", left: "46%", labelAbove: true },
  { id: "uk", city: "בריטניה", top: "20%", left: "42%" },
  { id: "netherlands", city: "הולנד", top: "14%", left: "54%", labelAbove: true },
  { id: "france", city: "צרפת", top: "27%", left: "45%" },
  { id: "morocco", city: "מרוקו", top: "41%", left: "40%" },
  { id: "prague", city: "פראג", destId: "prague", top: "20%", left: "60%", labelAbove: true },
  { id: "budapest", city: "בודפשט", destId: "budapest", top: "30%", left: "58%" },
  { id: "italy", city: "איטליה", destId: "rome", top: "35%", left: "50%" },
  { id: "santorini", city: "סנטוריני", destId: "santorini", top: "41%", left: "60%" },
  { id: "larnaca", city: "לרנקה", destId: "larnaca", top: "33%", left: "68%" },
  { id: "tbilisi", city: "טביליסי", destId: "tbilisi", top: "22%", left: "72%", labelAbove: true },
  { id: "vietnam", city: "וייטנאם", top: "45%", left: "80%" },
  { id: "japan", city: "יפן", top: "27%", left: "88%" },
  { id: "new-zealand", city: "ניו זילנד", top: "72%", left: "92%" },
];

export function DestinationMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-ocean-50 via-background to-ocean-100 shadow-inner sm:aspect-[16/9]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 35%, var(--ocean-200) 0 14%, transparent 15%), radial-gradient(circle at 33% 58%, var(--ocean-200) 0 11%, transparent 12%), radial-gradient(circle at 52% 27%, var(--ocean-200) 0 13%, transparent 14%), radial-gradient(circle at 82% 36%, var(--ocean-200) 0 15%, transparent 16%), radial-gradient(circle at 92% 72%, var(--ocean-200) 0 7%, transparent 8%)",
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

      {spots.map((s) => {
        const open = active === s.id;
        const dest = s.destId ? destinations.find((d) => d.id === s.destId) : undefined;
        return (
          <div key={s.id} className="absolute" style={{ top: s.top, left: s.left }}>
            <button
              type="button"
              aria-label={`פרטי טיול ל${s.city}`}
              aria-expanded={open}
              onClick={() => setActive(open ? null : s.id)}
              className="group relative -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute inset-0 -m-3 rounded-full bg-primary/40 animate-map-ping" aria-hidden="true" />
              <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background transition-transform duration-300 group-hover:scale-150" />
              <span className={`absolute right-1/2 translate-x-1/2 ${s.labelAbove ? "bottom-5" : "top-5"} whitespace-nowrap rounded-full bg-background/90 px-2 py-0.5 text-[0.6rem] font-bold text-foreground shadow sm:text-[0.65rem]`}>
                {s.city}
              </span>
            </button>

            {open && (
              <div className="absolute z-20 w-56 -translate-x-1/2 -translate-y-full animate-scale-in rounded-2xl border border-border bg-card p-3 text-right shadow-2xl">
                {dest && (
                  <>
                    <img
                      src={dest.gallery[0].src}
                      alt={dest.gallery[0].alt}
                      className="h-24 w-full rounded-xl object-cover"
                      loading="lazy"
                    />
                    <p className="mt-2 text-sm font-extrabold text-card-foreground">{dest.title}</p>
                    <p className="mt-1 text-xs font-bold text-primary">
                      החל מ־<span dir="ltr">${dest.base}</span>
                    </p>
                  </>
                )}
                {!dest && (
                  <>
                    <p className="text-sm font-extrabold text-card-foreground">{s.city}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      מסלול אישי ל{s.city} – טיסות, מלונות והמסלול המדויק. נבנה לכם הצעה מותאמת.
                    </p>
                  </>
                )}
                <a
                  href={waLink(`היי, אשמח לפרטים על טיול ל${s.city}`)}
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
