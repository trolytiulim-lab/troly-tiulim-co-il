import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, ThumbsUp, MessageCircle } from "lucide-react";

type Review = {
  name: string;
  trip: string;
  text: string;
  initials: string;
  color: string;
};

const REVIEWS: Review[] = [
  { name: "יעל ואור כהן", trip: "בודפשט • 6 ימים", initials: "יכ", color: "bg-ocean-200 text-ocean-900", text: "חזרנו מבודפשט והיה מושלם – לא היינו צריכים לדאוג לכלום. כל המלצה קלעה בול, גם המסעדות וגם התצפיות." },
  { name: "רועי אברהמי", trip: "קפריסין • 5 ימים", initials: "רא", color: "bg-primary/30 text-ocean-900", text: "תוך חצי שעה הכל היה סגור מא׳ עד ת׳ – אפילו לא היינו צריכים לפתוח גוגל. שירות ברמה אחרת." },
  { name: "משפחת לוי", trip: "האלפים • 7 ימים", initials: "מל", color: "bg-sand-200 text-ocean-900", text: "טסנו עם שלושה ילדים ולא היה רגע אחד של לחץ. מרחקים קצרים, אוכל מתאים והכל מסודר מראש." },
  { name: "שירה פרידמן", trip: "ליסבון • 5 ימים", initials: "שפ", color: "bg-ocean-100 text-ocean-900", text: "המסלול היה מדויק לקצב שלנו – גם אקשן וגם רגעים רגועים. כבר סגרנו איתם את הטיול הבא." },
  { name: "אבי ומיכל", trip: "סנטוריני • 5 ימים", initials: "אמ", color: "bg-primary/20 text-ocean-900", text: "הליווי בוואטסאפ לאורך כל הטיול היה מה שעשה את ההבדל. תשובה לכל שאלה תוך דקות." },
];

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (delta: number) =>
    setIndex((i) => (i + delta + REVIEWS.length) % REVIEWS.length);

  return (
    <div
      className="mx-auto max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >



      <div className="relative overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(${index * 100}%)` }}
        >
          {REVIEWS.map((r) => (
            <figure key={r.name} className="w-full shrink-0 px-1">
              <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-card p-6 text-right shadow-lg sm:p-8">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full text-base font-extrabold ${r.color}`}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-base font-bold text-card-foreground">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.trip}</div>
                  </div>
                  <div className="ms-auto flex" dir="ltr" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-card-foreground sm:text-lg">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-sm font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <ThumbsUp className="h-4 w-4" /> אהבתי
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MessageCircle className="h-4 w-4" /> תגובה
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="המלצה קודמת"
          onClick={() => go(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {REVIEWS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`המלצה ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2.5 bg-border"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="המלצה הבאה"
          onClick={() => go(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
