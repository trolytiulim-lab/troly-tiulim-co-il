import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  Zap,
  MessageSquareHeart,
  ShieldCheck,
  Baby,
  UtensilsCrossed,
  Accessibility,
  MapPin,
  Mail,
  Phone,
  ArrowLeft,
  Plane,
  Menu,
} from "lucide-react";

import trolleyLogo from "@/assets/trolley-logo.jpg.asset.json";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import destLarnaca from "@/assets/dest-larnaca.jpg.asset.json";
import destBudapest from "@/assets/dest-budapest.jpg.asset.json";
import trolleyPlane from "@/assets/trolley-plane.png.asset.json";
import destSantorini from "@/assets/dest-santorini.jpg";
import destAlps from "@/assets/dest-alps.jpg";
import destLisbon from "@/assets/dest-lisbon.jpg";

import { PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL, WHATSAPP_URL } from "@/components/site/site-data";
import { Reveal, Counter } from "@/components/site/motion";
import { FloatingTravelIcons, PassportStamp } from "@/components/site/floating-travel";
import { FloatingContact } from "@/components/site/floating-contact";
import { DepartureCalendar } from "@/components/site/departure-calendar";
import { ReviewsCarousel } from "@/components/site/reviews-carousel";
import { WeatherStrip } from "@/components/site/weather-strip";
import { MoodMatcher } from "@/components/site/mood-matcher";
import { MomentsMarquee } from "@/components/site/moments-marquee";

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
  { href: "#planner", label: "תאריכים" },
  { href: "#families", label: "משפחות" },
  { href: "#reviews", label: "המלצות" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "צרו קשר" },
];

const stats = [
  { to: 100, suffix: "%", label: "מסלולים בהתאמה אישית" },
  { to: 94, suffix: "%", label: "לקוחות חוזרים" },
  { to: 500, suffix: "+", label: "מטיילים מרוצים" },
  { to: 9, suffix: " שנים", label: "ניסיון בשטח" },
];

const benefits = [
  {
    n: "01",
    Icon: Compass,
    title: "מסלול מדויק בהתאמה אישית",
    description:
      "לא תבניות מוכנות. בונים לכם מסלול יום-יום שמתאים בדיוק לקצב, לתקציב ולסגנון שלכם – עם הפינות הסודיות שאף תייר לא מכיר.",
    accent: "bg-ocean-100 text-ocean-700",
  },
  {
    n: "02",
    Icon: Zap,
    title: "אפס בזבוז זמן מול המסך",
    description:
      "אתם לא צריכים לחפור בפורומים, בבלוגים או בעשרות סרטונים. אנחנו עושים את כל העבודה השחורה – אתם רק אורזים ונהנים.",
    accent: "bg-primary/25 text-ocean-900",
  },
  {
    n: "03",
    Icon: MessageSquareHeart,
    title: "ליווי צמוד בוואטסאפ",
    description:
      "זמינים לפני הטיסה ובמהלכה – לכל שאלה, שינוי או המלצה של הרגע האחרון. תרגישו שיש לכם חבר מקומי בכל יעד.",
    accent: "bg-whatsapp/20 text-whatsapp-dark",
  },
  {
    n: "04",
    Icon: ShieldCheck,
    title: "ראש שקט לחלוטין",
    description:
      "טיסות, מלונות, העברות ואטרקציות – הכל סגור מראש ומסודר במסמך אחד ברור. אתם רק מגיעים ונהנים.",
    accent: "bg-sand-200 text-ocean-900",
  },
];

const destinations = [
  { image: destLarnaca.url, tag: "ים ושמש", title: "קפריסין • לרנקה", duration: "5 ימים", description: "חופים, קולינריה ים תיכונית וטבע קליל – מושלם למשפחות וזוגות." },
  { image: destBudapest.url, tag: "עיר וסטייל", title: "הונגריה • בודפשט", duration: "6 ימים", description: "ספא היסטורי, תצפיות על הדנובה, סיורי אוכל ואווירה קלאסית." },
  { image: destSantorini, tag: "אי חלומי", title: "יוון • סנטוריני", duration: "5 ימים", description: "כפרים לבנים, שקיעות בלתי נשכחות ומפגשי אוכל מקומי." },
  { image: destAlps, tag: "הרפתקה", title: "שוויץ • האלפים", duration: "7 ימים", description: "רוד־טריפ בין אגמים, כפרים ומסלולי הליכה מסודרים לפי הקצב שלכם." },
  { image: destLisbon, tag: "קולינריה", title: "פורטוגל • ליסבון", duration: "5 ימים", description: "רחובות צבעוניים, טרמים היסטוריים, מסעדות שף וגלישה על הגלים." },
];

const galleryImages = [destBudapest.url, destLarnaca.url, destSantorini, destAlps, destLisbon];

const familyPerks = [
  { Icon: MapPin, title: "מרחקים קצרים", text: "אטרקציות קרובות זו לזו, בלי שעות נסיעה מיותרות עם ילדים עייפים." },
  { Icon: Accessibility, title: "נגישות ועגלות", text: "בודקים מראש נגישות לעגלות, מעליות ומסלולים נוחים לכל המשפחה." },
  { Icon: UtensilsCrossed, title: "אוכל כשר למהדרין", text: "מפה מלאה של מסעדות ומכולות כשרות בכל יעד – כולל שבת מסודרת." },
  { Icon: Baby, title: "קצב שמתאים לילדים", text: "משלבים הפוגות, פארקים וזמן חופשי – מסלול שגם הקטנים אוהבים." },
];

const faqs = [
  { q: "איך זה עובד?", a: "מדברים איתנו בוואטסאפ, מבינים את הסגנון והקצב שלכם, ובונים לכם מסלול מותאם אישית מא׳ עד ת׳." },
  { q: "האם זה כולל טיסות ומלונות?", a: "לגמרי. הכל כלול – טיסות, מלונות, אטרקציות, מסעדות וההמלצות הסודיות שלנו. אתם רק אורזים." },
  { q: "כמה זמן לוקח לקבל מסלול?", a: "טיוטה ראשונה תוך 24–48 שעות. אחרי סבב שיפורים איתכם – מסלול סופי מוכן להדפסה." },
  { q: "יש התאמה לשומרי כשרות ושבת?", a: "בהחלט. מתכננים סביב כשרות למהדרין, זמני שבת ובתי כנסת קרובים – בלי פשרות על החוויה." },
  { q: "לאילו יעדים אתם בונים מסלולים?", a: "לכל העולם. אירופה, יוון, קפריסין, האלפים, המזרח הרחוק, ארה״ב ועוד – מותאם אליכם." },
];

function Index() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [agree, setAgree] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !agree) return;
    setSubmitting(true);
    setErrorMsg("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          _subject: "ליד חדש מטרולי טיולים",
          _template: "table",
        }),
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
      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <span className="rounded-full bg-gradient-to-br from-primary to-ocean-700 p-[3px] shadow-md">
              <img
                src={trolleyLogo.url}
                alt="לוגו טרולי טיולים"
                width={112}
                height={112}
                className="h-11 w-11 rounded-full bg-white object-cover sm:h-14 sm:w-14"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold tracking-tight text-ocean-700 sm:text-lg">טרולי טיולים</span>
              <span className="block text-[11px] text-muted-foreground">לגלגל בקלות לכל העולם</span>
            </span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 sm:inline-flex"
            >
              דברו איתנו
            </a>
            <button
              type="button"
              aria-label="פתיחת תפריט"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm font-semibold text-foreground/80 last:border-b-0"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <FloatingContact />

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg.url})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-900/60 to-ocean-900/85" aria-hidden="true" />
        <FloatingTravelIcons tone="dark" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 py-14 text-center sm:px-6 md:py-20">
          <div className="mb-6 rounded-full bg-gradient-to-br from-primary via-ocean-200 to-ocean-700 p-1.5 shadow-2xl">
            <img
              src={trolleyLogo.url}
              alt="לוגו טרולי טיולים"
              width={320}
              height={320}
              className="h-28 w-28 rounded-full bg-white object-cover sm:h-36 sm:w-36"
              loading="eager"
            />
          </div>

          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
            טרולי <span dir="ltr" aria-hidden="true">🧳</span> לגלגל בקלות לכל העולם
          </span>

          <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            חופשה בהתאמה אישית – בונים לכם את הטיול המושלם
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg md:text-xl">
            מסלולים אקטיביים ומדויקים לחו"ל, כולל טיסות ומלונות – בלי לבזבז שעות מול המסך ובלי כאבי ראש.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-base font-extrabold text-primary-foreground shadow-[0_0_45px_-5px_var(--turquoise)] transition-all hover:-translate-y-0.5 sm:text-lg"
            >
              <span>לתכנון החופשה בוואטסאפ</span>
              <ArrowLeft className="h-5 w-5" />
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/25"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="relative mt-10 w-full">
            <img
              src={trolleyPlane.url}
              alt="מטוס ממותג של טרולי טיולים בשמיים"
              className="mx-auto w-full max-w-3xl animate-[float-slow_7s_ease-in-out_infinite] rounded-3xl shadow-2xl ring-1 ring-white/20"
              loading="eager"
            />
            <PassportStamp className="absolute -bottom-4 right-2 hidden text-white sm:block" />
          </div>
        </div>
      </section>

      {/* Stats counters */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 sm:px-6 md:grid-cols-4 md:py-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-ocean-50 text-xl font-extrabold text-ocean-700 ring-4 ring-ocean-50 md:h-28 md:w-28 md:text-2xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-3 text-sm font-semibold text-muted-foreground md:text-base">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why – stacking cards */}
      <section id="why" className="relative overflow-hidden bg-muted/60">
        <FloatingTravelIcons />
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-10 text-center md:mb-14">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              למה טרולי
            </div>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">היתרונות שאתם תרגישו בטיול</h2>
            <p className="mt-3 text-muted-foreground">גללו כדי לראות איך הקלפים נערמים – בדיוק כמו החוויה שלנו.</p>
          </div>

          <div className="mx-auto max-w-3xl">
            {benefits.map((b, i) => (
              <div key={b.title} className="h-[58vh] min-h-[320px]">
              <div
                className="sticky"
                style={{ top: `${96 + i * 26}px`, zIndex: 10 + i }}
              >
                <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-25px_var(--ocean-700)] sm:p-8">
                  <div className="flex items-start gap-5">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${b.accent}`}>
                      <b.Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 text-xs font-bold tracking-widest text-primary">{b.n}</div>
                      <h3 className="text-xl font-extrabold text-card-foreground md:text-2xl">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{b.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              יעדים חמים
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">היעדים המבוקשים שלנו</h2>
            <p className="mt-3 text-muted-foreground">כל יעד נבנה מחדש עבורכם – זו רק טעימה.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-2xl">
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
                      <span className="rounded-full bg-ocean-100 px-3 py-1 text-xs font-bold text-ocean-700">{d.tag}</span>
                      <span className="text-xs font-semibold text-muted-foreground">{d.duration}</span>
                    </div>
                    <h3 className="text-lg font-extrabold text-card-foreground md:text-xl">{d.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-between rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition-colors hover:border-primary hover:bg-ocean-50"
                    >
                      <span>לפרטים ותכנון</span>
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-dashed border-primary/50 bg-ocean-50 p-6 text-center">
            <p className="text-base font-semibold text-ocean-700">
              🌍 התאמה אישית לכל יעד בעולם – מעצבים כל חופשה לפי החלומות שלכם.
            </p>
          </div>
        </div>
      </section>

      {/* Weather */}
      <section className="border-y border-border bg-muted/60">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">מה מזג האוויר עכשיו ביעדים?</h2>
            <p className="mt-2 text-muted-foreground">מתעדכן אוטומטית – כדי שתדעו בדיוק מה לארוז.</p>
          </div>
          <WeatherStrip />
        </div>
      </section>

      {/* Mood matcher + calendar */}
      <section id="planner" className="relative overflow-hidden bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              תכנון בקליק
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">בחרו מצב רוח – ותאריך יציאה</h2>
            <p className="mt-3 text-muted-foreground">שתי דקות, ואתם כבר יודעים לאן ומתי טסים.</p>
          </div>
          <MoodMatcher />
          <div className="mt-14">
            <DepartureCalendar />
          </div>
        </div>
      </section>

      {/* Families */}
      <section id="families" className="relative overflow-hidden border-y border-border bg-muted/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              התאמה למשפחות
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">חשבנו על כל הפרטים הקטנים שחשובים להורים</h2>
            <p className="mt-3 text-muted-foreground">
              טיולים למשפחות ולציבור הדתי – עם כשרות למהדרין, נגישות ומרחקים קצרים.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {familyPerks.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/25 text-ocean-700">
                    <p.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-card-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moments gallery */}
      <section className="overflow-hidden bg-card py-14">
        <div className="mx-auto mb-8 max-w-6xl px-5 text-center sm:px-6">
          <h2 className="text-2xl font-extrabold md:text-3xl">רגעים מהשטח</h2>
          <p className="mt-2 text-muted-foreground">תמונות מטיולים שבנינו למטיילים שלנו.</p>
        </div>
        <MomentsMarquee images={galleryImages} />
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border bg-muted/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-block rounded-full bg-primary/20 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              המלצות
            </div>
            <h2 className="text-3xl font-extrabold md:text-4xl">מה מטיילים מספרים</h2>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Contact band */}
      <section id="contact" className="relative overflow-hidden bg-ocean-900 text-white">
        <FloatingTravelIcons tone="dark" />
        <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-right">
              <h2 className="text-2xl font-extrabold md:text-3xl">מוכנים לתכנן את הטיול הבא?</h2>
              <p className="mt-2 text-white/80">דברו איתנו – ישירות בטלפון, במייל או בוואטסאפ.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/25">
                  <Phone className="h-4 w-4" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-3 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/25">
                  <Mail className="h-4 w-4" />
                  <span dir="ltr">{CONTACT_EMAIL}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-extrabold text-primary-foreground shadow-[0_0_35px_-6px_var(--turquoise)] transition-all hover:-translate-y-0.5">
                  שיחה בוואטסאפ
                </a>
              </div>
            </div>
            <div className="mx-auto hidden rounded-full bg-gradient-to-br from-primary to-ocean-200 p-1.5 shadow-xl md:block">
              <img
                src={trolleyLogo.url}
                alt="לוגו טרולי טיולים"
                className="h-32 w-32 animate-[float-slow_8s_ease-in-out_infinite] rounded-full bg-white object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-block rounded-full bg-ocean-100 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ocean-700">
              שאלות נפוצות
            </div>
            <h2 className="text-2xl font-extrabold md:text-3xl">כל מה שרציתם לדעת</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-background p-5 shadow-sm transition-all open:border-primary open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right text-base font-bold text-foreground md:text-lg">
                  {f.q}
                  <span className="text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="border-t border-border bg-muted/60">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 md:py-20">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
            <div className="mb-6 text-center">
              <Plane className="mx-auto mb-3 h-9 w-9 animate-[float-mid_5s_ease-in-out_infinite] text-primary" />
              <h2 className="text-2xl font-extrabold md:text-3xl">מעדיפים שנחזור אליכם?</h2>
              <p className="mt-2 text-muted-foreground">השאירו פרטים – נחזור אליכם עוד היום.</p>
            </div>
            {sent ? (
              <div className="rounded-2xl bg-whatsapp/10 p-6 text-center text-whatsapp-dark">
                <p className="text-lg font-extrabold">קיבלנו! 🎉</p>
                <p className="mt-1 text-sm">נחזור אליכם ממש בקרוב.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text" required placeholder="שם מלא" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                <input
                  type="tel" required placeholder="טלפון" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                <input
                  type="email" placeholder="אימייל (לא חובה)" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="sm:col-span-2 rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                <label className="sm:col-span-2 flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[var(--turquoise)]"
                  />
                  <span>אני מאשר/ת שתחזרו אליי ומסכים/ה למדיניות הפרטיות ולשמירת הפרטים שלי לצורך יצירת קשר בלבד.</span>
                </label>
                <button
                  type="submit" disabled={submitting || !agree}
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "שולח..." : "שיחזרו אליי"}
                </button>
                {errorMsg && <p className="sm:col-span-2 text-center text-sm text-destructive">{errorMsg}</p>}
              </form>
            )}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              או פשוט{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-whatsapp-dark underline">
                דברו איתנו בוואטסאפ עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-ocean-900 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center sm:grid-cols-3 sm:text-right">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <img src={trolleyLogo.url} alt="לוגו טרולי טיולים" className="h-16 w-16 rounded-full bg-white object-cover ring-2 ring-primary" />
            <p className="text-sm font-bold">טרולי טיולים • חופשה בהתאמה אישית</p>
            <p className="text-xs text-white/70">בונים לכם מסלול מדויק לכל יעד בעולם.</p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-extrabold">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-primary">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-extrabold">פרטי קשר</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href={`tel:${PHONE_TEL}`} dir="ltr" className="transition-colors hover:text-primary">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="transition-colors hover:text-primary">{CONTACT_EMAIL}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">וואטסאפ</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} טרולי טיולים (Trolley Trips). כל הזכויות שמורות.
        </p>
      </footer>
    </div>
  );
}
