import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL } from "@/components/site/site-data";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | טרולי טיולים" },
      {
        name: "description",
        content:
          "הצהרת הנגישות של אתר טרולי טיולים – התאמות נגישות לפי תקן ישראלי 5568 ברמה AA, פרטי רכז הנגישות ודרכי פנייה.",
      },
      { property: "og:title", content: "הצהרת נגישות | טרולי טיולים" },
      {
        property: "og:description",
        content: "פירוט התאמות הנגישות באתר טרולי טיולים ודרכי פנייה בנושא נגישות.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AccessibilityPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-xl font-extrabold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}

function AccessibilityPage() {
  return (
    <div className="min-h-dvh bg-background">
      <main className="mx-auto max-w-3xl px-6 py-14">
        <Link
          to="/"
          className="text-sm font-bold text-primary underline transition-colors hover:text-turquoise-dark"
        >
          ← חזרה לעמוד הבית
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold text-foreground sm:text-4xl">הצהרת נגישות</h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          אתר טרולי טיולים (TROLY-TIULIM) פועל להנגשת האתר והשירותים שלו לאנשים עם מוגבלות, מתוך
          תפיסה שכל אדם זכאי לקבל שירות שוויוני, מכובד ועצמאי. עמוד זה מתוחזק על ידי בעלי האתר
          ומתעדכן מעת לעת.
        </p>

        <Section title="רמת הנגישות באתר">
          <p>
            האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
            התשע"ג-2013, ובהתאם לתקן הישראלי ת"י 5568 המבוסס על הנחיות WCAG 2.1 ברמה AA, ככל שהדבר
            ניתן מבחינה טכנולוגית.
          </p>
        </Section>

        <Section title="התאמות הנגישות שבוצעו באתר">
          <ul className="list-disc space-y-2 pr-5">
            <li>תפריט נגישות קבוע בפינת המסך, הזמין בכל עמודי האתר.</li>
            <li>אפשרות להגדלה והקטנה של גודל הטקסט (בין 80% ל-150%).</li>
            <li>מצב ניגודיות גבוהה וכן אפשרות למעבר לגופן קריא יותר.</li>
            <li>הדגשה וסימון של קישורים בקו תחתון.</li>
            <li>אפשרות להגדלת סמן העכבר ולעצירת אנימציות ותנועה באתר.</li>
            <li>ניווט מלא באמצעות מקלדת (מקש Tab) וסימון ברור של פוקוס.</li>
            <li>מבנה כותרות היררכי, שימוש בתגיות סמנטיות ותמיכה בקוראי מסך.</li>
            <li>טקסט חלופי (alt) לתמונות בעלות משמעות.</li>
            <li>שמירת העדפות הנגישות של המשתמש בדפדפן לביקורים חוזרים.</li>
            <li>התאמה לצפייה במגוון גדלי מסך, כולל טלפונים ניידים.</li>
          </ul>
        </Section>

        <Section title="החרגות ומגבלות">
          <p>
            למרות מאמצינו להנגיש את כל רכיבי האתר, ייתכן שיימצאו חלקים או תכנים שטרם הונגשו במלואם,
            בין היתר תכנים או רכיבים המסופקים על ידי צדדים שלישיים (כגון מפות, סרטונים או רכיבי
            שיתוף חיצוניים). אנו ממשיכים לפעול לשיפור הנגישות באופן שוטף.
          </p>
        </Section>

        <Section title="פנייה בנושא נגישות (רכז נגישות)">
          <p>
            נתקלתם בבעיה, קושי או תקלה בנושא נגישות באתר? נשמח שתעדכנו אותנו ונטפל בכך בהקדם. ניתן
            לפנות לרכז/ת הנגישות של טרולי טיולים בדרכים הבאות:
          </p>
          <ul className="space-y-2">
            <li>
              טלפון:{" "}
              <a href={`tel:${PHONE_TEL}`} dir="ltr" className="font-bold text-primary underline">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              דוא"ל:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                dir="ltr"
                className="font-bold text-primary underline"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <p>
            בפנייתכם נשמח לקבל פירוט של הבעיה, כתובת העמוד שבו נתקלתם בה, סוג הדפדפן והטכנולוגיה
            המסייעת שבה נעשה שימוש – כדי שנוכל לטפל במהירות המרבית.
          </p>
        </Section>

        <Section title="עדכון ההצהרה">
          <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך 28 ביולי 2026.</p>
        </Section>
      </main>
    </div>
  );
}
