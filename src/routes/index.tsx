import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Compass,
  Zap,
  MapPinned,
  MessageSquareHeart,
  Baby,
  UtensilsCrossed,
  Mail,
  Phone,
  ArrowLeft,
  Menu,
} from "lucide-react";

import trolleyLogo from "@/assets/trolley-logo.jpg.asset.json";
import trolyPlane from "@/assets/troly-plane.png.asset.json";
import heroPhoto from "@/assets/photo-santorini-2.jpg.asset.json";
import familyPhoto from "@/assets/photo-larnaca-1.jpg.asset.json";
import planePhoto1 from "@/assets/photo-santorini-1.jpg.asset.json";
import planePhoto2 from "@/assets/photo-budapest-1.jpg.asset.json";
import planePhoto3 from "@/assets/photo-prague-1.jpg.asset.json";

const planePhotos = [planePhoto1, planePhoto2, planePhoto3];

const marqueeItems = [
  "קוסטה ריקה",
  "יפן",
  "פרו",
  "איטליה",
  "וייטנאם",
  "צרפת",
  "אקוודור",
  "מרוקו",
  "קנדה",
  "סקוטלנד",
  "ברזיל",
  "ניו זילנד",
  "הולנד",
  "בריטניה",
];



import { PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL, WHATSAPP_URL } from "@/components/site/site-data";
import { Reveal, Magnetic, useParallax, CursorTrail } from "@/components/site/motion";
import { StatsBand } from "@/components/site/stats-band";
import { DestinationMap } from "@/components/site/destination-map";
import { DepartureCalendar } from "@/components/site/departure-calendar";
import { ReviewsCarousel } from "@/components/site/reviews-carousel";
import { WeatherStrip } from "@/components/site/weather-strip";
import { MoodMatcher } from "@/components/site/mood-matcher";
import { DestinationGrid } from "@/components/site/destination-grid";

// Absolute, publicly reachable URLs are required by social crawlers.
// The custom domain (troly-tiulim.co.il) is not connected yet, so both the
// page URL and the share image use the live published Lovable domain.
const SITE = "https://troly-tiulimcoil.lovable.app";
const OG_IMAGE = "https://troly-tiulimcoil.lovable.app/og-image.jpg";
const TITLE = "טרולי טיולים";
const DESC =
  "מסלולים אקטיביים ומדויקים בהתאמה אישית – בלי לבזבז שעות מול המסך ובלי כאבי ראש.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + "/" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1079" },
      { property: "og:image:height", content: "1006" },
      { property: "og:image:alt", content: "הלוגו הרשמי של טרולי טיולים – TROLY-TIULIM" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE + "/" }],
  }),
  component: Index,
});

const navLinks = [
  { href: "#why", label: "למה טרולי" },
  { href: "#destinations", label: "יעדים ומחירים" },
  { href: "#planner", label: "תכנון" },
  { href: "#families", label: "משפחות" },
  { href: "#contact", label: "צרו קשר" },
];

const benefits = [
  {
    Icon: Compass,
    title: "מסלול יום־יום מדויק",
    description: "לא תבנית מוכנה – מסלול שנבנה סביב הקצב, התקציב והסגנון שלכם.",
  },
  {
    Icon: Zap,
    title: "אפס שעות מול המסך",
    description: "אנחנו עושים את כל הבדיקות וההשוואות. אתם מקבלים תוכנית מסודרת.",
  },
  {
    Icon: MapPinned,
    title: "היכרות מהשטח",
    description: "היינו במקומות, מכירים שכונות, מלונות ואטרקציות – לא רק דירוגים באינטרנט.",
  },
  {
    Icon: MessageSquareHeart,
    title: "שירות אישי לאורך הדרך",
    description: "איש קשר אחד בוואטסאפ – לפני הטיסה ובמהלך הטיול.",
  },
];

const familyPerks = [
  {
    Icon: Baby,
    title: "מסלול שמתאים לילדים",
    text: "מרחקים קצרים בין אטרקציות, הפוגות מתוכננות וקצב שלא שובר את היום – כדי שגם ההורים יחזרו נחים.",
  },
  {
    Icon: UtensilsCrossed,
    title: "כשרות ושבת בלי פשרות",
    text: "מיפוי מסעדות ומכולות כשרות, מלון בקרבת בית כנסת וסידור מלא לשבת – מתוך היכרות אמיתית עם צרכי הציבור הדתי.",
  },
];

const faqs = [
  {
    q: "איך זה עובד?",
    a: "פונים אלינו בוואטסאפ, מספרים מה מחפשים ומתי, ואנחנו בודקים זמינות ומחזירים הצעה עם מסלול מוצע ומחיר.",
  },
  {
    q: "מה כלול בחבילות?",
    a: "בחבילת \"רק טרולי\": טיסות, מלון 3 כוכבים במרכז והעברות. בחבילת \"טרולי זהב\": טיסות, מלון בוטיק 4 כוכבים או ריזורט, העברות פרטיות ותוספות VIP וליווי אישי.",
  },
  {
    q: "המחירים באתר סופיים?",
    a: "המחירים הם נקודת פתיחה לאדם והם משתנים לפי תאריכים, זמינות וכמות המטיילים. מחיר מחייב נמסר בהצעה אישית.",
  },
  {
    q: "כמה זמן לוקח לקבל הצעה?",
    a: "בדרך כלל תוך יום עסקים אחד, ובתאריכים לוחצים גם באותו יום.",
  },
  {
    q: "יש התאמה לשומרי כשרות ושבת?",
    a: "כן. מתכננים סביב כשרות, זמני שבת ובתי כנסת קרובים – כולל התאמות למשפחות עם ילדים.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref: heroRef, offset } = useParallax();



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <a href="#top" className="flex shrink-0 items-center gap-3">
            <img
              src={trolleyLogo.url}
              alt="לוגו טרולי טיולים – TROLY-TIULIM"
              width={112}
              height={112}
              className="h-11 w-11 rounded-full bg-white object-cover ring-2 ring-primary sm:h-12 sm:w-12"
            />
            <span className="text-base font-extrabold tracking-tight text-ocean-700 sm:text-lg">
              טרולי טיולים
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-l from-primary to-ocean-700 px-4 py-2 text-white shadow-lg ring-2 ring-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl animate-cta-glow-primary sm:inline-flex"
            >
              <Phone className="h-4 w-4 animate-soft-pulse" />
              <span className="text-[0.7rem] font-bold opacity-90">לחצו לחיוג</span>
              <span dir="ltr" className="text-base font-extrabold tracking-wider tabular-nums">
                {PHONE_DISPLAY}
              </span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`התקשרו אלינו ${PHONE_DISPLAY}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-l from-primary to-ocean-700 text-white shadow-md animate-cta-glow-primary sm:hidden"
            >
              <Phone className="h-4 w-4" />
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

      {/* Hero */}
      <section
        id="top"
        ref={heroRef as React.RefObject<HTMLElement>}
        className="relative overflow-hidden"
      >
        {/* Parallax sky layer – moves slower than the content above it */}
        <img
          src={heroPhoto.url}
          alt="הכפר אויה בסנטוריני, יוון"
          className="absolute inset-0 h-[120%] w-full scale-105 object-cover will-change-transform"
          style={{ transform: `translateY(${offset * 0.35}px)` }}
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ocean-900/85 via-ocean-900/65 to-ocean-900/90"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary/25 blur-3xl animate-float-slow"
          style={{ transform: `translateY(${offset * 0.18}px)` }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-primary/20 blur-3xl animate-float-mid"
          style={{ transform: `translateY(${offset * -0.12}px)` }}
          aria-hidden="true"
        />
        <CursorTrail />

        <div
          className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center will-change-transform sm:px-6 md:py-24"
          style={{ transform: `translateY(${offset * -0.12}px)` }}
        >

          <img
            src={trolleyLogo.url}
            alt="לוגו טרולי טיולים"
            width={320}
            height={320}
            className="mb-6 h-24 w-24 rounded-full bg-white object-cover ring-4 ring-primary/60 animate-float-mid sm:h-28 sm:w-28"
            loading="eager"
          />
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-5xl">
            חופשה מותאמת אישית – מסלול מדויק, בלי כאב ראש
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg">
            מסלולים אקטיביים ומדויקים לחו"ל, כולל טיסות ומלונות – בלי לבזבז שעות מול המסך ובלי כאבי
            ראש
          </p>
          <div className="relative z-20 mt-8 flex flex-col items-center gap-4">
            <Magnetic strength={16}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-3.5 text-base font-extrabold text-white transition-all duration-300 hover:bg-whatsapp-dark animate-cta-glow sm:text-lg"
              >
                <span>לתכנון החופשה בוואטסאפ</span>
                <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
              </a>
            </Magnetic>

            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`התקשרו אלינו ${PHONE_DISPLAY}`}
              className="animate-phone-bounce inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/45 bg-white/10 px-5 py-3 text-white backdrop-blur-md transition-all hover:bg-white/25 sm:gap-3 sm:px-7"
            >
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-xs font-bold text-white/85 sm:text-sm">לחצו לחיוג</span>
              <span
                dir="ltr"
                className="whitespace-nowrap text-2xl font-extrabold tracking-wider tabular-nums sm:text-3xl"
              >
                052-8
                <span className="animate-digit-flash text-primary">55</span>
                <span className="animate-digit-flash text-primary">66</span>
                11
              </span>
            </a>
          </div>


          <div
            className="relative z-0 mt-20 w-full max-w-2xl will-change-transform sm:mt-24"
            style={{ transform: `translateY(${offset * -0.14}px)` }}
          >

            <div className="animate-plane-in">
            <div className="relative animate-float-slow">


              {/* Destination photos cycling behind the plane, softly faded at the edges */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-5 overflow-hidden rounded-[2.5rem] opacity-60 blur-[2px]"
                style={{
                  maskImage:
                    "radial-gradient(120% 110% at 50% 50%, rgba(0,0,0,0.95) 35%, transparent 78%)",
                  WebkitMaskImage:
                    "radial-gradient(120% 110% at 50% 50%, rgba(0,0,0,0.95) 35%, transparent 78%)",
                }}
              >
                {planePhotos.map((p, i) => (
                  <img
                    key={p.url}
                    src={p.url}
                    alt=""
                    className="absolute inset-0 h-full w-full animate-photo-cycle object-cover"
                    style={{ animationDelay: `${i * 5}s` }}
                  />
                ))}
              </div>
              <img
                src={trolyPlane.url}
                alt="מטוס ממותג של טרולי טיולים – TROLY-TIULIM"
                loading="eager"
                className="relative z-10 w-full rounded-2xl drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
              />
            </div>
            </div>
          </div>


        </div>
      </section>

      {/* Infinite text marquee */}
      <section className="overflow-hidden border-y border-border bg-ocean-900 py-3 text-white">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-8" aria-hidden={dup === 1}>
              {marqueeItems.map((t) => (
                <span key={t} className="flex items-center gap-3 text-sm font-bold sm:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:py-16">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">למה טרולי?</h2>
            <p className="mt-2 text-muted-foreground">ארבע סיבות פשוטות, בלי סיפורים.</p>
          </Reveal>
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-3 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 110}
                className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-auto"
              >
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-ocean-700 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <b.Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-foreground">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">המספרים של טרולי</h2>
          </Reveal>
          <Reveal delay={80}><StatsBand /></Reveal>
        </div>
      </section>


      {/* Destinations + packages */}
      <section id="destinations" className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              הלהיטים של התקופה האחרונה – היעדים שמובילים בגדול
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              (מתעדכן אוטומטית לפי ההזמנות החמות ביותר)
            </p>
          </Reveal>
          <Reveal delay={90}><DestinationGrid /></Reveal>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            המחירים הם החל מ־, לאדם בחדר זוגי, ומשתנים לפי תאריכים וזמינות. מחיר מחייב נמסר בהצעה אישית.
          </p>
          <Reveal className="mt-14 text-center">
            <h3 className="text-xl font-extrabold md:text-2xl">מפת היעדים – לחצו על נקודה</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              כל נקודה פותחת פרטי טיול קצרים ומחיר פתיחה.
            </p>
          </Reveal>
          <Reveal delay={90} className="mt-6"><DestinationMap /></Reveal>
        </div>
      </section>


      {/* Weather */}
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
          <Reveal className="mb-6 text-center">
            <h2 className="text-xl font-extrabold md:text-2xl">מזג האוויר עכשיו ביעדים שלנו</h2>
          </Reveal>
          <Reveal><WeatherStrip /></Reveal>
        </div>
      </section>

      {/* Planner */}
      <section id="planner" className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">שתי דקות – ונדע מאיפה להתחיל</h2>
            <p className="mt-3 text-muted-foreground">
              עונים על שלוש שאלות, מקבלים יעד וחבילה מתאימים, ובוחרים תאריך יציאה.
            </p>
          </Reveal>
          <Reveal delay={90}><MoodMatcher /></Reveal>
          <div className="mt-14">
            <Reveal><DepartureCalendar /></Reveal>
          </div>
        </div>
      </section>

      {/* Families */}
      <section id="families" className="bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <Reveal>
                <h2 className="text-2xl font-extrabold md:text-3xl">
                  משפחות עם ילדים ושומרי כשרות – זה הבית שלנו
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  אנחנו מתכננים בפועל טיולים למשפחות ולציבור הדתי, ומכירים את הפרטים שעושים את ההבדל –
                  איפה כדאי לישון, לאיזה חוף להגיע בבוקר ואיפה קונים אוכל כשר בלי לחפש שעה.
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4">
                {familyPerks.map((p, i) => (
                  <Reveal key={p.title} delay={140 + i * 120}>
                    <div className="flex gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-ocean-700">
                        <p.Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-foreground">{p.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <img
                src={familyPhoto.url}
                alt="חוף פיניקודס בלרנקה, קפריסין"
                loading="lazy"
                className="h-64 w-full rounded-3xl object-cover shadow-lg transition-transform duration-700 hover:scale-[1.02] md:h-[26rem]"
              />
            </Reveal>
          </div>

        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">מה מטיילים מספרים</h2>
          </Reveal>
          <Reveal><ReviewsCarousel /></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">שאלות נפוצות</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 80}>
                <details className="group rounded-2xl border border-border bg-background p-5 shadow-sm transition-all open:border-primary open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-right text-base font-bold text-foreground md:text-lg">
                    {f.q}
                    <span
                      className="text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* Contact band */}
      <section id="contact" className="bg-ocean-900 text-white">
        <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 md:py-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold md:text-3xl">מוכנים לתכנן את החופשה הבאה?</h2>
            <p className="mt-2 text-white/80">דברו איתנו ישירות – וואטסאפ, טלפון או מייל.</p>
          </Reveal>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Magnetic strength={14}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-base font-extrabold text-white transition-all duration-300 hover:bg-whatsapp-dark animate-cta-glow"
              >
                שיחה בוואטסאפ
              </a>
            </Magnetic>

            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">{PHONE_DISPLAY}</span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-6 py-3 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <Mail className="h-4 w-4" />
              <span dir="ltr">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ocean-900 py-10 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
          <img
            src={trolleyLogo.url}
            alt="לוגו טרולי טיולים – TROLY-TIULIM"
            className="h-14 w-14 rounded-full bg-white object-cover ring-2 ring-primary"
          />
          <p className="text-sm font-bold">טרולי טיולים • TROLY-TIULIM</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-white/80">
            <a href="/terms" className="underline transition-colors hover:text-primary">
              תנאים והגבלות
            </a>
            <a href="/privacy" className="underline transition-colors hover:text-primary">
              מדיניות פרטיות
            </a>
            <a href="/accessibility" className="underline transition-colors hover:text-primary">
              הצהרת נגישות
            </a>
          </div>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} TROLY-TIULIM. כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
