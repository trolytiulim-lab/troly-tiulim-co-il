import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import trolleyLogo from "@/assets/trolley-logo.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import destLarnaca from "@/assets/dest-larnaca.jpg.asset.json";
import destBudapest from "@/assets/dest-budapest.jpg.asset.json";

const WHATSAPP_URL =
  "https://wa.me/972500000000?text=" +
  encodeURIComponent("היי, ראיתי את המסלול בטרולי טיולים ואשמח לשמוע פרטים");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "טרולי טיולים | חופשה בהתאמה אישית מאפס" },
      {
        name: "description",
        content:
          "בלי לבזבז שעות מול המסך, בלי כאבי ראש – בונים לכם מסלול אקטיבי, מדויק ומושלם עד הפרט האחרון.",
      },
      { property: "og:title", content: "טרולי טיולים | חופשה בהתאמה אישית מאפס" },
      {
        property: "og:description",
        content:
          "בונים לכם מסלול אקטיבי, מדויק ומושלם – טיסות, מלונות ואטרקציות. אתם רק אורזים.",
      },
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
    icon: "🧘",
    title: "ראש שקט לחלוטין",
    description: "דואגים לכל הטיסות, בתי המלון והאטרקציות – מא' ועד ת'.",
  },
  {
    icon: "⚡",
    title: "חופשה אקטיבית ודינמית",
    description:
      "מסלולים שמתאימים בדיוק לקצב ולסגנון שלכם – בלי מוזיאונים משעממים או ישיבה מיותרת.",
  },
  {
    icon: "💬",
    title: "ליווי צמוד",
    description: "זמינות מלאה איתכם לפני הטיסה ובמהלכה – לכל שאלה, שינוי או בקשה.",
  },
];

const destinations = [
  {
    image: destLarnaca.url,
    tag: "יעד חם",
    title: "לרנקה, קפריסין",
    description: "חופשה ים-תיכונית מושלמת – שילוב של בטן-גב וסיורים קלילים.",
  },
  {
    image: destBudapest.url,
    tag: "יעד מומלץ",
    title: "בודפשט אקטיבית",
    description: "ספא, תצפיות, קולינריה וקצב שמתאים בדיוק לכם.",
  },
];

const faqs = [
  {
    q: "איך זה עובד?",
    a: "מדברים איתנו בוואטסאפ, מבינים את הסגנון והקצב שלכם, ובונים לכם מסלול מותאם אישית מא' עד ת'.",
  },
  {
    q: "האם זה כולל טיסות ומלונות?",
    a: "לגמרי. הכל כלול – טיסות, מלונות, אטרקציות, מסעדות וההמלצות הסודיות שלנו. אתם רק אורזים.",
  },
  {
    q: "כמה זמן לוקח לקבל מסלול?",
    a: "טיוטה ראשונה תוך 24–48 שעות. אחרי סבב שיפורים איתכם – מסלול סופי מוכן להדפסה.",
  },
];

function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="פתח שיחת וואטסאפ"
        className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_0_30px_hsl(142_70%_49%/0.7)] transition-transform hover:scale-110 md:h-16 md:w-16"
      >
        <svg className="h-7 w-7 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg.url})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/45 to-slate-950/75" aria-hidden="true" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-ocean-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sand-300/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-16 text-center sm:px-6 md:py-24">
          {/* Logo centered */}
          <div className="mb-8 flex justify-center">
            <img
              src={trolleyLogo.url}
              alt="לוגו טרולי טיולים"
              className="h-36 w-36 rounded-full object-cover shadow-2xl ring-4 ring-white/30 sm:h-44 sm:w-44 md:h-52 md:w-52"
              loading="eager"
            />
          </div>

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md">
            טרולי <span dir="ltr" aria-hidden="true">🧳</span> לגלגל בקלות לכל העולם
          </span>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            טרולי טיולים – חופשה בהתאמה אישית מאפס
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100/95 drop-shadow sm:text-lg md:text-xl">
            בלי לבזבז שעות מול המסך, בלי כאבי ראש – בונים לכם מסלול אקטיבי, מדויק ומושלם עד הפרט האחרון.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white shadow-[0_0_40px_hsl(142_70%_49%/0.6)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark hover:shadow-[0_0_60px_hsl(142_70%_49%/0.85)]"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>לתכנון החופשה בוואטסאפ</span>
          </a>

          <p className="mt-4 text-sm text-slate-200/90">
            תגובה מהירה בוואטסאפ • ליווי אישי מהרגע הראשון
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
              <span dir="ltr" aria-hidden="true">⭐⭐⭐⭐⭐</span>
              <span>100% מסלולים מותאמים אישית</span>
            </div>
            <blockquote className="max-w-xl text-sm italic leading-relaxed text-slate-100/90 md:text-base">
              „חזרנו מבודפשט והיה מושלם, לא היינו צריכים לדאוג לכלום!"
              <span className="mt-1 block text-xs not-italic text-slate-200/80">— מטיילת מרוצה</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">למה לבחור בטרולי?</h2>
          <p className="mt-2 text-muted-foreground">3 סיבות שבזכותן החופשה שלכם פשוט עובדת.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-ocean-200 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-3xl transition-colors group-hover:bg-ocean-100">
                {b.icon}
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">היעדים החמים שלנו</h2>
          <p className="mt-2 text-muted-foreground">מסלולים לדוגמה – מותאמים אישית לקצב וליעד שלכם.</p>
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
                <div className="mb-1 text-sm font-medium text-ocean-200">{d.tag}</div>
                <h3 className="text-xl font-bold text-white md:text-2xl">{d.title}</h3>
                <p className="mt-1 text-sm text-slate-100/90">{d.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-dashed border-border bg-muted/40 p-6 text-center">
          <p className="text-base font-medium text-foreground">
            🌍 התאמה אישית לכל יעד בעולם – מעצבים כל חופשה לפי החלומות שלכם.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">שאלות נפוצות</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-right text-base font-semibold text-card-foreground md:text-lg">
                {f.q}
                <span className="text-ocean-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-ocean-50 to-sand-50 p-6 shadow-md sm:p-10">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">מעדיפים שנחזור אליכם?</h2>
            <p className="mt-2 text-muted-foreground">השאירו שם וטלפון – נחזור אליכם עוד היום.</p>
          </div>
          {sent ? (
            <div className="rounded-2xl bg-whatsapp/10 p-6 text-center text-whatsapp-dark">
              <p className="text-lg font-semibold">קיבלנו! 🎉</p>
              <p className="mt-1 text-sm">נחזור אליכם ממש בקרוב.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="שם מלא"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-ocean-200 focus:ring-2 focus:ring-ocean-200"
              />
              <input
                type="tel"
                required
                placeholder="טלפון"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-ocean-200 focus:ring-2 focus:ring-ocean-200"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                שיחזרו אליי
              </button>
            </form>
          )}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            או פשוט{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-whatsapp-dark underline">
              דברו איתנו בוואטסאפ עכשיו
            </a>
          </div>
        </div>
      </section>

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
