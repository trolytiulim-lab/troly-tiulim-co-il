import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL } from "@/components/site/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "תנאים והגבלות | טרולי טיולים" },
      {
        name: "description",
        content:
          "תנאים והגבלות לשימוש באתר ובשירותי תכנון והזמנת חופשות של טרולי טיולים (TROLY-TIULIM).",
      },
      { property: "og:title", content: "תנאים והגבלות | טרולי טיולים" },
      {
        property: "og:description",
        content: "תנאי השימוש באתר ובשירותי תכנון החופשות של טרולי טיולים.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">תנאים והגבלות</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        עודכן לאחרונה: {new Date().getFullYear()}. השימוש באתר ובשירותי טרולי טיולים (TROLY-TIULIM)
        כפוף לתנאים שלהלן.
      </p>

      <div className="mt-8 space-y-6 leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl font-extrabold">1. השירות</h2>
          <p className="mt-2 text-muted-foreground">
            אנו מספקים שירותי ייעוץ, תכנון והזמנה של חופשות – מסלול יום־יום, טיסות, מלונות והעברות,
            בהתאם לבקשת הלקוח ולזמינות בפועל אצל ספקי השירות.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">2. מחירים והצעות</h2>
          <p className="mt-2 text-muted-foreground">
            המחירים המוצגים באתר הם מחירי פתיחה לאדם בחדר זוגי, אינם כוללים מיסים ותוספות משתנות,
            ואינם מהווים הצעה מחייבת. מחיר מחייב נקבע רק בהצעה אישית בכתב, לאחר בדיקת זמינות ותאריכים,
            וכל עוד לא בוצעה הזמנה בפועל.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">3. הזמנות ותשלום</h2>
          <p className="mt-2 text-muted-foreground">
            הזמנה נחשבת מאושרת רק לאחר אישור בכתב מצידנו וביצוע התשלום בהתאם לתנאים שנמסרו ללקוח.
            באחריות הלקוח לוודא שפרטי הנוסעים ומספרי הדרכונים מדויקים.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">4. ביטולים ושינויים</h2>
          <p className="mt-2 text-muted-foreground">
            ביטולים ושינויים כפופים לתנאי הספקים (חברות תעופה, מלונות וספקי קרקע) ולהוראות חוק הגנת
            הצרכן ותקנותיו. דמי ביטול, ככל שיחולו, יימסרו ללקוח מראש.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">5. אחריות</h2>
          <p className="mt-2 text-muted-foreground">
            אנו פועלים במקצועיות ובשקיפות מול הספקים, אך איננו אחריותם של גורמים חיצוניים – שינויי
            טיסות, עיכובים, שביתות, תנאי מלון או כוח עליון. מומלץ לרכוש ביטוח נסיעות מתאים לכל נוסע.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">6. דרכונים, ויזות ובריאות</h2>
          <p className="mt-2 text-muted-foreground">
            באחריות הנוסע להחזיק דרכון בתוקף ולעמוד בדרישות הכניסה של יעד היעד. נשמח לסייע במידע, אך
            האחריות הסופית היא על הנוסע.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">7. יצירת קשר</h2>
          <p className="mt-2 text-muted-foreground">
            לשאלות בנוגע לתנאים אלו:{" "}
            <a href={`tel:${PHONE_TEL}`} dir="ltr" className="font-bold underline">
              {PHONE_DISPLAY}
            </a>{" "}
            •{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr" className="font-bold underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </div>

      <a href="/" className="mt-10 inline-block font-bold text-primary underline">
        חזרה לעמוד הבית
      </a>
    </main>
  );
}
