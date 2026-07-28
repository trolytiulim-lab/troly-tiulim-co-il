import { useEffect, useState, useCallback } from "react";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Link2,
  MousePointer2,
  PauseCircle,
  RotateCcw,
} from "lucide-react";

type A11yState = {
  fontScale: number;
  highContrast: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
  stopMotion: boolean;
  readableFont: boolean;
};

const DEFAULTS: A11yState = {
  fontScale: 100,
  highContrast: false,
  underlineLinks: false,
  bigCursor: false,
  stopMotion: false,
  readableFont: false,
};

const STORAGE_KEY = "trolley-a11y";

function applyState(s: A11yState) {
  const root = document.documentElement;
  root.style.setProperty("--a11y-font-scale", String(s.fontScale / 100));
  root.classList.toggle("a11y-contrast", s.highContrast);
  root.classList.toggle("a11y-underline", s.underlineLinks);
  root.classList.toggle("a11y-big-cursor", s.bigCursor);
  root.classList.toggle("a11y-stop-motion", s.stopMotion);
  root.classList.toggle("a11y-readable-font", s.readableFont);
  root.classList.toggle("a11y-font-scaled", s.fontScale !== 100);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as A11yState;
        setState(parsed);
        applyState(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = useCallback((patch: Partial<A11yState>) => {
    setState((prev) => {
      const next = { ...prev, ...patch };
      applyState(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    applyState(DEFAULTS);
    setState(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleBtn = (active: boolean) =>
    `flex min-h-11 w-full items-center gap-2 rounded-xl border px-3 py-2 text-right text-sm font-semibold transition-colors ${
      active
        ? "border-primary bg-primary/15 text-foreground"
        : "border-border bg-card text-card-foreground hover:bg-muted"
    }`;

  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          role="dialog"
          aria-label="תפריט נגישות"
          className="w-[19rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card p-4 text-card-foreground shadow-2xl"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-base font-extrabold">תפריט נגישות</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="סגירת תפריט הנגישות"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between text-sm font-semibold">
              <span className="flex items-center gap-2">
                <Type className="h-4 w-4" aria-hidden="true" />
                גודל טקסט
              </span>
              <span aria-hidden="true">{state.fontScale}%</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => update({ fontScale: Math.max(80, state.fontScale - 10) })}
                aria-label="הקטנת גודל הטקסט"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-lg font-bold transition-colors hover:bg-muted"
              >
                −
              </button>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${((state.fontScale - 80) / 70) * 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => update({ fontScale: Math.min(150, state.fontScale + 10) })}
                aria-label="הגדלת גודל הטקסט"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-lg font-bold transition-colors hover:bg-muted"
              >
                +
              </button>
            </div>
          </div>

          <div className="grid gap-2">
            <button
              type="button"
              aria-pressed={state.highContrast}
              onClick={() => update({ highContrast: !state.highContrast })}
              className={toggleBtn(state.highContrast)}
            >
              <Contrast className="h-4 w-4 shrink-0" aria-hidden="true" />
              ניגודיות גבוהה
            </button>
            <button
              type="button"
              aria-pressed={state.readableFont}
              onClick={() => update({ readableFont: !state.readableFont })}
              className={toggleBtn(state.readableFont)}
            >
              <Type className="h-4 w-4 shrink-0" aria-hidden="true" />
              גופן קריא
            </button>
            <button
              type="button"
              aria-pressed={state.underlineLinks}
              onClick={() => update({ underlineLinks: !state.underlineLinks })}
              className={toggleBtn(state.underlineLinks)}
            >
              <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              הדגשת קישורים
            </button>
            <button
              type="button"
              aria-pressed={state.bigCursor}
              onClick={() => update({ bigCursor: !state.bigCursor })}
              className={toggleBtn(state.bigCursor)}
            >
              <MousePointer2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              סמן עכבר גדול
            </button>
            <button
              type="button"
              aria-pressed={state.stopMotion}
              onClick={() => update({ stopMotion: !state.stopMotion })}
              className={toggleBtn(state.stopMotion)}
            >
              <PauseCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              עצירת אנימציות
            </button>
            <button
              type="button"
              onClick={reset}
              className="flex min-h-11 w-full items-center gap-2 rounded-xl border border-border bg-muted px-3 py-2 text-right text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              איפוס הגדרות
            </button>
          </div>

          <a
            href="/accessibility"
            className="mt-3 block rounded-xl border border-border px-3 py-2 text-center text-sm font-bold text-foreground underline transition-colors hover:bg-muted"
          >
            הצהרת נגישות
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="פתיחת תפריט נגישות"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-ocean-700 text-white shadow-xl ring-4 ring-ocean-700/20 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Accessibility className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
