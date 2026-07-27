import { useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { waLink } from "./site-data";

type Answer = { label: string; value: string };

const QUESTIONS: { id: string; question: string; options: Answer[] }[] = [
  {
    id: "vibe",
    question: "מה מדבר אליכם יותר?",
    options: [
      { label: "🏔️ טבע פראי ונופים", value: "nature" },
      { label: "🏙️ עיר תוססת וקולינריה", value: "city" },
      { label: "🏖️ ים, חוף ורוגע", value: "beach" },
    ],
  },
  {
    id: "length",
    question: "כמה זמן יש לכם?",
    options: [
      { label: "✈️ חופשה קצרה (3-4 ימים)", value: "short" },
      { label: "🧳 חופשה ארוכה (6+ ימים)", value: "long" },
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
];

type Result = { title: string; days: string; text: string; emoji: string };

function recommend(a: Record<string, string>): Result {
  const { vibe, length, who } = a;
  if (vibe === "nature" && length === "long")
    return { emoji: "🏔️", title: "רוד־טריפ באלפים השוויצריים", days: "7 ימים", text: "אגמים, כפרים ומסלולי הליכה בקצב שלכם – עם רכב שכור ומלונות לאורך הדרך." };
  if (vibe === "nature")
    return { emoji: "🌄", title: "טבע ואקשן בצפון איטליה", days: "4 ימים", text: "דולומיטים, אגם גארדה ותצפיות מטורפות – מקסימום נוף במינימום זמן." };
  if (vibe === "city" && who === "family")
    return { emoji: "🏙️", title: "בודפשט למשפחות", days: "5 ימים", text: "מרחקים קצרים, ספא מים חמים, שייט על הדנובה ופארקים – בלי ילדים עייפים." };
  if (vibe === "city")
    return { emoji: "🍷", title: "ליסבון קולינרית", days: "5 ימים", text: "רחובות צבעוניים, טרמים היסטוריים, מסעדות שף ושקיעות מעל הנהר." };
  if (vibe === "beach" && who === "family")
    return { emoji: "🏝️", title: "לרנקה בקלות למשפחות", days: "5 ימים", text: "חופים רגועים, אטרקציות קרובות ואוכל שמתאים לכולם – טיסה קצרה, אפס טרטור." };
  if (vibe === "beach" && length === "long")
    return { emoji: "🌊", title: "איי יוון – סנטוריני ומסביב", days: "7 ימים", text: "כפרים לבנים, שקיעות בלתי נשכחות, שייט וחופים נסתרים." };
  return { emoji: "☀️", title: "סופ״ש מושלם בקפריסין", days: "3-4 ימים", text: "בטן־גב, סיורים קלילים וקולינריה ים תיכונית – מרענן בדיוק במידה." };
}

export function MoodMatcher() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= QUESTIONS.length;
  const result = done ? recommend(answers) : null;

  const pick = (id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: value }));
    setStep((s) => s + 1);
  };

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
      <div className="mb-5 flex items-center justify-center gap-2 text-primary">
        <Sparkles className="h-5 w-5 animate-[float-mid_4s_ease-in-out_infinite]" />
        <span className="text-sm font-bold tracking-wide">מחשבון הטיול לפי מצב רוח</span>
      </div>

      {!done && result === null && (
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

      {result && (
        <div className="text-center">
          <div className="text-5xl">{result.emoji}</div>
          <div className="mt-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-bold text-ocean-700">
            הטיול שהכי מתאים לכם
          </div>
          <h3 className="mt-3 text-2xl font-extrabold text-card-foreground">{result.title}</h3>
          <div className="mt-1 text-sm font-semibold text-primary">{result.days}</div>
          <p className="mt-3 leading-relaxed text-muted-foreground">{result.text}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(`היי, המחשבון המליץ לי על "${result.title}" – אשמח לפרטים`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-base font-bold text-white shadow-[0_10px_30px_-8px_var(--whatsapp)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:w-auto"
            >
              תכננו לי את הטיול הזה
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
