import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { waLink } from "./site-data";
import { destinations, BASE_PACKAGE, GOLD_PACKAGE } from "./destinations-data";

const QUESTIONS: { id: string; question: string; options: { label: string; value: string }[] }[] = [
  {
    id: "vibe",
    question: "מה מדבר אליכם יותר?",
    options: [
      { label: "🏖️ ים, חוף ורוגע", value: "beach" },
      { label: "🏙️ עיר, קולינריה ותרבות", value: "city" },
      { label: "🏔️ טבע, נופים ואקטיבי", value: "nature" },
    ],
  },
  {
    id: "who",
    question: "עם מי אתם טסים?",
    options: [
      { label: "❤️ זוגי", value: "couple" },
      { label: "👨‍👩‍👧‍👦 משפחה עם ילדים", value: "family" },
      { label: "🎒 חברים / לבד", value: "friends" },
    ],
  },
  {
    id: "tier",
    question: "איזו רמת חבילה מתאימה לכם?",
    options: [
      { label: "🧳 רק טרולי – טיסות, מלון 3★ והעברות", value: "base" },
      { label: "✨ טרולי זהב – בוטיק 4★, העברות פרטיות ו-VIP", value: "gold" },
    ],
  },
];

function pickDestinationId(a: Record<string, string>) {
  const { vibe, who } = a;
  if (vibe === "beach") return who === "family" ? "larnaca" : "santorini";
  if (vibe === "nature") return "tbilisi";
  if (who === "family") return "budapest";
  if (who === "friends") return "prague";
  return "rome";
}

export function MoodMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= QUESTIONS.length;
  const dest = done ? destinations.find((d) => d.id === pickDestinationId(answers))! : null;
  const isGold = answers.tier === "gold";
  const pack = isGold ? GOLD_PACKAGE : BASE_PACKAGE;
  const price = dest ? (isGold ? dest.gold : dest.base) : 0;

  const pick = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setStep((s) => s + 1);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
      <div className="mb-5 flex items-center justify-center gap-2 text-primary">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-bold tracking-wide">בונים לכם התאמה ראשונית</span>
      </div>

      {!done && (
        <div>
          <div className="mb-4 flex justify-center gap-1.5">
            {QUESTIONS.map((q, i) => (
              <span
                key={q.id}
                className={`h-1.5 rounded-full transition-all ${i <= step ? "w-10 bg-primary" : "w-6 bg-border"}`}
              />
            ))}
          </div>
          <h3 className="text-center text-xl font-extrabold text-card-foreground sm:text-2xl">
            {QUESTIONS[step].question}
          </h3>
          <div className="mt-5 grid gap-3">
            {QUESTIONS[step].options.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => pick(QUESTIONS[step].id, o.value)}
                className="rounded-2xl border-2 border-border bg-background px-5 py-4 text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-ocean-50 hover:shadow-md"
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {dest && (
        <div className="text-center">
          <div className="inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-bold text-ocean-700">
            ההתאמה שלנו עבורכם
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-card-foreground">{dest.title}</h3>
          <div className="mt-1 text-sm font-semibold text-primary">
            חבילת {pack.name} • החל מ־<span dir="ltr">${price}</span> לאדם
          </div>
          <p className="mt-3 leading-relaxed text-muted-foreground">{dest.description}</p>
          <ul className="mx-auto mt-4 max-w-sm space-y-1 text-right text-sm text-muted-foreground">
            {pack.includes.map((it) => (
              <li key={it}>• {it}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            המחירים הם נקודת פתיחה ומשתנים לפי תאריכים, זמינות וכמות המטיילים. הצעה מדויקת נשלחת אחרי בדיקה.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(
                `היי, בהתאמה קיבלתי ${dest.title} עם חבילת ${pack.name} – אשמח להצעה מדויקת`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-white shadow-[0_10px_30px_-8px_var(--whatsapp)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:w-auto"
            >
              קבלו הצעה מדויקת בוואטסאפ
            </a>
            <button
              type="button"
              onClick={() => {
                setAnswers({});
                setStep(0);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" /> להתחיל מחדש
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
