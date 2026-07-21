import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "טרולי טיולים | עפים על החופשה הבאה שלכם 🎒✈️" },
      { name: "description", content: "מתכננים לכם טיולים אקטיביים, חוויות מטורפות ומסלולים מדויקים – בלי להתברבר ובראש שקט." },
      { property: "og:title", content: "טרולי טיולים | עפים על החופשה הבאה שלכם 🎒✈️" },
      { property: "og:description", content: "מתכננים לכם טיולים אקטיביים, חוויות מטורפות ומסלולים מדויקים – בלי להתברבר ובראש שקט." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: "🧘",
    title: "אפס כאב ראש",
    description: "אנחנו מסדרים הכל – טיסות, לינה, מסלולים וטרמפים – כדי שתוכלו פשוט ליהנות.",
  },
  {
    icon: "⚡",
    title: "קצב נכון ואקשן",
    description: "שילוב מושלם בין הרפתקאות מלאות אדרנלין לבין רגעים רגועים לספוג את הנוף.",
  },
  {
    icon: "💬",
    title: "זמינות מלאה בוואטסאפ",
    description: "ליווי אישי לאורך כל הדרך, עם תשובות מהירות ועדכונים בזמן אמת.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-ocean-50 via-background to-sand-50 opacity-80" />
        <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-ocean-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sand-200/40 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-ocean-700 shadow-sm backdrop-blur-sm">
            <span>🌍</span>
            טרולי – לגלגל בקלות לכל העולם
          </span>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-2xl font-medium text-ocean-700 md:text-3xl lg:text-4xl">טרולי טיולים</span>
            <span className="mt-2 block">
              עפים על החופשה הבאה שלכם
              <bdi dir="ltr" className="mr-2 text-ocean-700" aria-hidden="true">🎒✈️</bdi>
              &lrm;
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            מתכננים לכם טיולים אקטיביים, חוויות מטורפות ומסלולים מדויקים – בלי להתברבר ובראש שקט.
          </p>

          <a
            href="https://wa.me/?text=היי%20טרולי%20טיולים,%20אני%20רוצה%20לתכנן%20טיול!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.13 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            תכננו לי טיול בוואטסאפ
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            תגובה תוך דקות • ליווי אישי מהרגע הראשון
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 md:pb-32">
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
            © {new Date().getFullYear()} טרולי טיולים (Trolley Trips). כל הזכויות שמורות.
          </p>
        </div>
      </footer>
    </div>
  );
}
