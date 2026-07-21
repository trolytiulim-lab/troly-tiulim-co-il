import { createFileRoute } from "@tanstack/react-router";
import trolleyLogo from "@/assets/trolley-logo.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import destBudapest from "@/assets/dest-budapest.jpg.asset.json";
import destLarnaca from "@/assets/dest-larnaca.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "טרולי | תארזו את הטרולי – החופשה שלכם על גלגלים" },
      { name: "description", content: "מתכננים לכם מסלולים אקטיביים ומדויקים בחו\"ל – בלי להסתבך במפות, בלי לבזבז זמן ובלי כאבי ראש. אתם רק תארזו, הטרול כבר יסגור לכם ת'טיול." },
      { property: "og:title", content: "טרולי | תארזו את הטרולי – החופשה שלכם על גלגלים" },
      { property: "og:description", content: "מתכננים לכם מסלולים אקטיביים ומדויקים בחו\"ל – בלי להסתבך במפות, בלי לבזבז זמן ובלי כאבי ראש." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroBg.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBg.url },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: "🧳",
    title: "חכמת הטרול",
    description: "מסלולים מדויקים לפי הקצב שלכם, כולל הפינות הסודיות והמקומות שאף תייר לא מכיר.",
  },
  {
    icon: "✈️",
    title: "לגלגל בלי להתעכב",
    description: "שילוב מושלם בין חוויות אקטיביות, אדרנלין ורגעים רגועים לספוג את הנוף. 0 זמן מבוזבז.",
  },
  {
    icon: "🎯",
    title: "אפס סיבוכים, 100% חופש",
    description: "סוגרים לכם את כל הפינות מעכשיו ועד הנחיתה – כדי שתוכלו פשוט ליהנות.",
  },
];

const destinations = [
  {
    emoji: "📸",
    image: destBudapest.url,
    title: "בודפשט אקטיבית",
    description: "ספא, תצפיות וקצב נכון",
  },
  {
    emoji: "📸",
    image: destLarnaca.url,
    title: "לרנקה בקלות",
    description: "חופים, קולינריה ואקשן",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg.url})` }}
          aria-hidden="true"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/60 to-slate-950/85" aria-hidden="true" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-ocean-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sand-300/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
          <img
            src={trolleyLogo.url}
            alt="לוגו טרולי טיולים – הטרול עם המזוודה מטייל בעולם"
            className="mb-8 h-44 w-auto rounded-full shadow-2xl ring-4 ring-white/20 md:h-56"
            loading="eager"
          />

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md">
            טרולי <span className="inline-block whitespace-nowrap" dir="ltr" aria-hidden="true">🧳</span> לגלגל בקלות לכל העולם
          </span>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-2xl font-medium text-ocean-200 md:text-3xl lg:text-4xl">טרולי</span>
            <span className="mt-2 block">תארזו את הטרולי.</span>
            <span className="mt-2 block">החופשה שלכם על גלגלים.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-100/95 drop-shadow md:text-xl">
            מתכננים לכם מסלולים אקטיביים ומדויקים בחו"ל – בלי להסתבך במפות, בלי לבזבז זמן ובלי כאבי ראש.
            <br className="hidden sm:block" />
            אתם רק תארזו, הטרול כבר יסגור לכם ת'טיול.
          </p>

          <a
            href="https://wa.me/?text=היי%20טרולי,%20איפה%20בא%20לכם%20לגלגל?"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex animate-pulse-glow items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_hsl(142_70%_49%/0.6)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark hover:shadow-[0_0_60px_hsl(142_70%_49%/0.85)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>איפה בא לכם לגלגל?</span>
            <span className="inline-block whitespace-nowrap" dir="ltr" aria-hidden="true">💬</span>
          </a>

          <p className="mt-4 text-sm text-slate-200/90">
            תגובה מהירה בוואטסאפ • ליווי אישי מהרגע הראשון
          </p>

          {/* Social Proof */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
              <span dir="ltr" aria-hidden="true">⭐⭐⭐⭐⭐</span>
              <span>100% מסלולים מותאמים אישית</span>
            </div>
            <blockquote className="max-w-xl text-sm italic leading-relaxed text-slate-100/90 md:text-base">
              „תוך חצי שעה הכל היה סגור מא' עד ת', אפילו לא היינו צריכים לפתוח גוגל!"
              <span className="mt-1 block text-xs not-italic text-slate-200/80">— מטיילת מרוצה</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Destinations / Proof */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            טעימה קטנה מהמסלולים שלנו
          </h2>
          <p className="mt-2 text-muted-foreground">
            מסלולים לדוגמה שאנחנו סוגרים לכם – מותאמים אישית לקצב וליעד שלכם.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {destinations.map((d) => (
            <article
              key={d.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-6 text-right">
                <div className="mb-1 text-sm font-medium text-ocean-200">
                  <span dir="ltr" aria-hidden="true">{d.emoji}</span> יעד מומלץ
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">{d.title}</h3>
                <p className="mt-1 text-sm text-slate-100/90">{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-4 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-ocean-200 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-3xl transition-colors group-hover:bg-ocean-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">
            © {new Date().getFullYear()} טרולי (Trolley Trips). כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
