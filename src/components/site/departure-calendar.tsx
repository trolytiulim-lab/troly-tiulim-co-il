import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { waLink } from "./site-data";

const MONTHS = [
  "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
  "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר",
];
const DAYS = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

function key(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

/** Interactive departure-date calendar. */
export function DepartureCalendar() {
  const today = useMemo(() => new Date(), []);
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const [selected, setSelected] = useState<string | null>(null);

  const firstDay = new Date(view.y, view.m, 1).getDay();
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const todayKey = key(today.getFullYear(), today.getMonth(), today.getDate());

  const move = (delta: number) => {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const selectedLabel = selected
    ? `${Number(selected.slice(8))} ב${MONTHS[Number(selected.slice(5, 7)) - 1]} ${selected.slice(0, 4)}`
    : null;

  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1fr_1fr] md:items-center">
      <div className="rounded-3xl border border-border bg-card p-5 shadow-xl sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            aria-label="חודש קודם"
            onClick={() => move(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="text-center">
            <div className="text-base font-extrabold text-card-foreground">
              {MONTHS[view.m]} {view.y}
            </div>
            <div className="text-[11px] text-muted-foreground">בחרו תאריך יציאה מועדף</div>
          </div>
          <button
            type="button"
            aria-label="חודש הבא"
            onClick={() => move(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-2 grid grid-cols-7 gap-1 text-center text-xs font-bold text-muted-foreground">
          {DAYS.map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const k = key(view.y, view.m, day);
            const isPast = k < todayKey;
            const isSelected = k === selected;
            return (
              <button
                key={k}
                type="button"
                disabled={isPast}
                onClick={() => setSelected(k)}
                aria-pressed={isSelected}
                className={[
                  "flex h-10 items-center justify-center rounded-xl text-sm font-semibold transition-all",
                  isPast
                    ? "cursor-not-allowed text-muted-foreground/40"
                    : isSelected
                      ? "scale-105 bg-primary text-primary-foreground shadow-lg"
                      : "text-card-foreground hover:bg-ocean-50",
                  k === todayKey && !isSelected ? "ring-2 ring-primary/50" : "",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-gradient-to-br from-ocean-50 to-card p-6 text-center shadow-md md:text-right">
        <CalendarDays className="mx-auto mb-3 h-10 w-10 text-primary md:mx-0" />
        <h3 className="text-xl font-extrabold text-foreground">מתי בא לכם לטוס?</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          בוחרים תאריך יציאה בלוח, ואנחנו כבר בודקים זמינות טיסות ומלונות ובונים סביבו את המסלול המלא.
        </p>
        <div className="mt-4 rounded-2xl bg-card/80 p-4 text-sm font-semibold text-foreground shadow-sm">
          {selectedLabel ? `תאריך נבחר: ${selectedLabel}` : "עדיין לא נבחר תאריך"}
        </div>
        <a
          href={waLink(
            selectedLabel
              ? `היי, אשמח לבדוק חופשה עם יציאה בתאריך ${selectedLabel}`
              : "היי, אשמח לבדוק תאריכי יציאה לחופשה",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-white shadow-[0_10px_30px_-8px_var(--whatsapp)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark"
        >
          בדקו לי זמינות בתאריך הזה
        </a>
      </div>
    </div>
  );
}
