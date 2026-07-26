import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import trolleyLogo from "@/assets/trolley-logo.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import destLarnaca from "@/assets/dest-larnaca.jpg.asset.json";
import destBudapest from "@/assets/dest-budapest.jpg.asset.json";
import trolleyPlane from "@/assets/trolley-plane.png.asset.json";
import destSantorini from "@/assets/dest-santorini.jpg";
import destAlps from "@/assets/dest-alps.jpg";
import destLisbon from "@/assets/dest-lisbon.jpg";

const PHONE_DISPLAY = "052-8556611";
const PHONE_TEL = "+972528556611";
const CONTACT_EMAIL = "trolytiulim@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/972528556611?text=" +
  encodeURIComponent("היי, ראיתי את המסלול בטרולי טיולים ואשמח לשמוע פרטים");
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const OG_IMAGE = "https://trolley-trips.lovable.app" + trolleyPlane.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "טרולי טיולים | חופשה בהתאמה אישית" },
      {
        name: "description",
        content:
          "בונים לכם מסלול אקטיבי, מדויק ומותאם אישית לחו\"ל – בלי לבזבז שעות מול המסך ובלי כאבי ראש. ליווי בוואטסאפ 052-8556611.",
      },
      { property: "og:title", content: "טרולי טיולים | חופשה בהתאמה אישית" },
      {
        property: "og:description",
        content:
          "בונים לכם מסלול אקטיבי, מדויק ומותאם אישית לחו\"ל – בלי לבזבז שעות מול המסך ובלי כאבי ראש.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://trolley-trips.lovable.app/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "מטוס ממותג של טרולי טיולים" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://trolley-trips.lovable.app/" }],
  }),
  component: Index,
});

const navLinks = [
  { href: "#why", label: "למה טרולי" },
  { href: "#destinations", label: "יעדים" },
  { href: "#itineraries", label: "מסלולים" },
  { href: "#reviews", label: "המלצות" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "צרו קשר" },
];

const stats = [
  { value: "100%", label: "מסלולים בהתאמה אישית" },
  { value: "24/7", label: "זמינות בוואטסאפ" },
  { value: "500+", label: "מטיילים מרוצים" },
  { value: "48ש׳", label: "טיוטת מסלול ראשונה" },
];

const benefits = [
  {
    n: "01",
    icon: "🧭",
    title: "מסלול מדויק בהתאמה אישית",
    description:
      "לא תבניות מוכנות. בונים לכם מסלול יום-יום שמתאים בדיוק לקצב, לתקציב ולסגנון שלכם – עם הפינות הסודיות שאף תייר לא מכיר.",
    accent: "bg-ocean-100 text-ocean-700",
  },
  {
    n: "02",
    icon: "⚡",
    title: "אפס בזבוז זמן מול המסך",
    description:
      "אתם לא צריכים לחפור בפורומים, בבלוגים או בעשרות סרטונים. אנחנו עושים את כל העבודה השחורה – אתם רק אורזים ונהנים.",
    accent: "bg-sand-200 text-foreground",
  },
  {
    n: "03",
    icon: "💬",
    title: "ליווי צמוד בוואטסאפ",
    description:
      "זמינים לפני הטיסה ובמהלכה – לכל שאלה, שינוי או המלצה של הרגע האחרון. תרגישו שיש לכם חבר מקומי בכל יעד.",
    accent: "bg-whatsapp/15 text-whatsapp-dark",
  },
];

const destinations = [
  { image: destLarnaca.url, tag: "ים ושמש", title: "קפריסין • לרנקה", duration: "5 ימים", description: "חופים, קולינריה ים תיכונית וטבע קליל – מושלם למשפחות וזוגות." },
  { image: destBudapest.url, tag: "עיר וסטייל", title: "הונגריה • בודפשט", duration: "6 ימים", description: "ספא היסטורי, תצפיות על הדנובה, סיורי אוכל ואווירה קלאסית." },
  { image: destSantorini, tag: "אי חלומי", title: "יוון • סנטוריני", duration: "5 ימים", description: "כפרים לבנים, שקיעות בלתי נשכחות ומפגשי אוכל מקומי." },
  { image: destAlps, tag: "הרפתקה", title: "שוויץ • האלפים", duration: "7 ימים", description: "רוד־טריפ בין אגמים, כפרים ומסלולי הליכה מסודרים לפי הקצב שלכם." },
  { image: destLisbon, tag: "קולינריה", title: "פורטוגל • ליסבון", duration: "5 ימים", description: "רחובות צבעוניים, טרמים היסטוריים, מסעדות שף וגלישה על הגלים." },
];

const itineraries = [
  { days: "3", title: "סופ״ש ארוך בבודפשט", highlights: ["טיסה + מלון בוטיק במרכז", "שייט על הדנובה בשקיעה", "סיור אוכל מקומי"] },
  { days: "5", title: "לרנקה בקלות", highlights: ["חוף פרטי + ספא", "יום טיול לכפרי היין", "מסעדות שף מקומיות"] },
  { days: "7", title: "רוד־טריפ באלפים", highlights: ["רכב שכור + מלונות בדרך", "מסלולי הליכה בקצב שלכם", "כפרים סודיים"] },
];

const reviews = [
  { name: "יעל ואור", trip: "בודפשט • 6 ימים", text: "חזרנו מבודפשט והיה מושלם, לא היינו צריכים לדאוג לכלום. כל המלצה קלעה בול." },
  { name: "רועי", trip: "קפריסין • 5 ימים", text: "תוך חצי שעה הכל היה סגור מא׳ עד ת׳ – אפילו לא היינו צריכים לפתוח גוגל." },
  { name: "משפחת לוי", trip: "אלפים • 7 ימים", text: "הילדים לא הפסיקו לחייך. הקצב היה בדיוק שלנו, כולל הפינות הכי שוות." },
];

const faqs = [
  { q: "איך זה עובד?", a: "מדברים איתנו בוואטסאפ, מבינים את הסגנון והקצב שלכם, ובונים לכם מסלול מותאם אישית מא׳ עד ת׳." },
  { q: "האם זה כולל טיסות ומלונות?", a: "לגמרי. הכל כלול – טיסות, מלונות, אטרקציות, מסעדות וההמלצות הסודיות שלנו. אתם רק אורזים." },
  { q: "כמה זמן לוקח לקבל מסלול?", a: "טיוטה ראשונה תוך 24–48 שעות. אחרי סבב שיפורים איתכם – מסלול סופי מוכן להדפסה." },
  { q: "לאילו יעדים אתם בונים מסלולים?", a: "לכל העולם. אירופה, יוון, קפריסין, האלפים, המזרח הרחוק, ארה״ב ועוד – מותאם אליכם." },
];

function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, phone: form.phone, _subject: "ליד חדש מטרולי טיולים", _template: "table" }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setErrorMsg("שליחה נכשלה. אפשר לפנות אלינו ישירות בוואטסאפ.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={trolleyLogo.url} alt="לוגו טרולי" className="h-10 w-10 rounded-full object-cover ring-2 ring-ocean-100" />
            <div className="leading-tight">
              <div className="text-base font-extrabold tracking-tight">טרולי</div>
              <div className="text-[11px] text-muted-foreground">לגלגל בקלות לכל העולם</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-whatsapp-dark sm:inline-flex"
            >
              דברו איתנו
            </a>
            <button
              type="button"
              aria-label="פתח תפריט"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
            >
              <span aria-hidden="true">☰</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80 last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Floating side contact buttons */}
      <div className="fixed bottom-6 left-4 z-50 flex flex-col gap-3 sm:left-6">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="פתח שיחת וואטסאפ"
          className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-5px_hsl(142_70%_49%/0.6)] ring-4 ring-whatsapp/20 transition-transform hover:scale-110"
        >
          <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label="התקשרו אלינו"
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_30px_-5px_oklch(0.55_0.12_220/0.6)] ring-4 ring-primary/20 transition-transform hover:scale-110"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.2l-1.9 1.05a11 11 0 005.5 5.5l1.05-1.9a1 1 0 011.2-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
          </svg>
        </a>
      </div>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg.url})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/85" aria-hidden="true" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-14 text-center sm:px-6 md:py-20">
          <div className="mb-6 flex justify-center">
            <img
              src={trolleyLogo.url}
              alt="לוגו טרולי טיולים"
              className="h-28 w-28 rounded-full object-cover shadow-2xl ring-4 ring-white/40 sm:h-36 sm:w-36"
              loading="eager"
            />
          </div>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md">
            טרולי <span dir="ltr" aria-hidden="true">🧳</span> לגלגל בקלות לכל העולם
          </span>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            חופשה בהתאמה אישית – בונים לכם את הטיול המושלם
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100 drop-shadow sm:text-lg md:text-xl">
            מסלולים אקטיביים ומדויקים לחו"ל, כולל טיסות ומלונות – בלי לבזבז שעות מול המסך ובלי כאבי ראש.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_hsl(142_70%_49%/0.6)] transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark sm:text-lg"
            >
              <span>לתכנון החופשה בוואטסאפ</span>
              <span aria-hidden="true">←</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <span aria-hidden="true">📞</span>
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="mt-10 w-full">
            <img
              src={trolleyPlane.url}
              alt="מטוס ממותג של טרולי טיולים בשמיים"
              className="mx-auto w-full max-w-3xl rounded-3xl shadow-2xl ring-1 ring-white/20"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 sm:px-6 md:grid-cols-4 md:py-14">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-ocean-100 to-ocean-50 text-xl font-extrabold text-ocean-700 shadow-inner ring-4 ring-ocean-50 md:h-28 md:w-28 md:text-2xl">
                {s.value}
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground md:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why / stacking cards */}
      <section id="why" className="bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700">
              למה טרולי
            </div>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">שלושה יתרונות שאתם תרגישו בטיול</h2>
            <p className="mt-3 text-muted-foreground">גללו כדי לראות איך הקלפים נערמים – בדיוק כמו החוויה שלנו.</p>
          </div>

          <div className="relative mx-auto max-w-3xl space-y-6">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="sticky rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8"
                style={{ top: `${90 + i * 24}px` }}
              >
                <div className="flex items-start gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${b.accent}`}>
                    {b.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-xs font-bold tracking-widest text-muted-foreground">{b.n}</div>
                    <h3 className="text-xl font-extrabold text-card-foreground md:text-2xl">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{b.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-sand-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
              יעדים חמים
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">היעדים המבוקשים שלנו</h2>
            <p className="mt-3 text-muted-foreground">כל יעד נבנה מחדש עבורכם – זו רק טעימה.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d) => (
              <article
                key={d.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
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
                <div className="flex flex-1 flex-col p-5 text-right">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold text-ocean-700">{d.tag}</span>
                    <span className="text-xs font-medium text-muted-foreground">{d.duration}</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-card-foreground md:text-xl">{d.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-between rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>לפרטים ותכנון</span>
                    <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-dashed border-border bg-muted/40 p-6 text-center">
            <p className="text-base font-medium text-foreground">
              🌍 התאמה אישית לכל יעד בעולם – מעצבים כל חופשה לפי החלומות שלכם.
            </p>
          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section id="itineraries" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700">
              מסלולים לדוגמה
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">איך נראה מסלול של טרולי?</h2>
            <p className="mt-3 text-muted-foreground">כמה דוגמאות ממה שבנינו למטיילים אחרים.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {itineraries.map((it) => (
              <div key={it.title} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ocean-100 to-ocean-50 text-2xl font-bold text-ocean-700">
                    {it.days}
                  </div>
                  <div className="text-sm text-muted-foreground">ימים</div>
                </div>
                <h3 className="text-lg font-bold text-card-foreground">{it.title}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                  {it.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean-700" aria-hidden="true" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-between rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  <span>לבנות מסלול דומה</span>
                  <span aria-hidden="true">←</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-sand-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-foreground/70">
              המלצות
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">מה מטיילים מספרים</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div dir="ltr" className="mb-3 text-lg" aria-hidden="true">⭐⭐⭐⭐⭐</div>
                <blockquote className="flex-1 text-base leading-relaxed text-card-foreground">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-4 text-sm">
                  <div className="font-bold text-foreground">{r.name}</div>
                  <div className="text-muted-foreground">{r.trip}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA band */}
      <section id="contact" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-extrabold md:text-3xl">מוכנים לתכנן את הטיול הבא?</h2>
              <p className="mt-2 text-slate-300">דברו איתנו – ישירות בטלפון, במייל או בוואטסאפ.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                  <span aria-hidden="true">📞</span>
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                  <span aria-hidden="true">✉️</span>
                  <span dir="ltr">{CONTACT_EMAIL}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-base font-semibold text-white shadow-[0_0_30px_hsl(142_70%_49%/0.5)] transition-all hover:bg-whatsapp-dark">
                  שיחה בוואטסאפ
                </a>
              </div>
            </div>
            <img
              src={trolleyLogo.url}
              alt="לוגו טרולי טיולים"
              className="mx-auto hidden h-32 w-32 rounded-full object-cover ring-4 ring-white/20 md:block"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/40">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-ocean-700">
              שאלות נפוצות
            </div>
            <h2 className="text-2xl font-extrabold md:text-3xl">כל מה שרציתם לדעת</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all open:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-right text-base font-semibold text-card-foreground md:text-lg">
                  {f.q}
                  <span className="text-ocean-700 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-ocean-50 to-sand-50 p-6 shadow-md sm:p-10">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-extrabold md:text-3xl">מעדיפים שנחזור אליכם?</h2>
              <p className="mt-2 text-muted-foreground">
                השאירו שם וטלפון – נחזור אליכם עוד היום ל־<span dir="ltr">{CONTACT_EMAIL}</span>.
              </p>
            </div>
            {sent ? (
              <div className="rounded-2xl bg-whatsapp/10 p-6 text-center text-whatsapp-dark">
                <p className="text-lg font-semibold">קיבלנו! 🎉</p>
                <p className="mt-1 text-sm">נחזור אליכם ממש בקרוב.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text" required placeholder="שם מלא" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-ocean-200 focus:ring-2 focus:ring-ocean-200"
                />
                <input
                  type="tel" required placeholder="טלפון" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-ocean-200 focus:ring-2 focus:ring-ocean-200"
                />
                <button
                  type="submit" disabled={submitting}
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "שולח..." : "שיחזרו אליי"}
                </button>
                {errorMsg && <p className="sm:col-span-2 text-center text-sm text-destructive">{errorMsg}</p>}
              </form>
            )}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              או פשוט{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-whatsapp-dark underline">
                דברו איתנו בוואטסאפ עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/40 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
          <img src={trolleyLogo.url} alt="לוגו טרולי" className="h-14 w-14 rounded-full object-cover ring-2 ring-ocean-100" />
          <p className="text-sm font-semibold text-foreground">טרולי טיולים • חופשה בהתאמה אישית</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-muted-foreground">
            <a href={`tel:${PHONE_TEL}`} className="hover:text-foreground" dir="ltr">{PHONE_DISPLAY}</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground" dir="ltr">{CONTACT_EMAIL}</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} טרולי (Trolley Trips). כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
