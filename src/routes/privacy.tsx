import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_TEL, CONTACT_EMAIL } from "@/components/site/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "מדיניות פרטיות | טרולי טיולים" },
      {
        name: "description",
        content:
          "מדיניות הפרטיות של טרולי טיולים (TROLY-TIULIM): אילו פרטים נאספים, לאיזו מטרה, ואיך פונים אלינו למחיקה או עיון.",
      },
      { property: "og:title", content: "מדיניות פרטיות | טרולי טיולים" },
      {
        property: "og:description",
        content: "כיצד אנו אוספים, שומרים ומשתמשים בפרטים שאתם מוסרים לנו.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">מדיניות פרטיות</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        עודכן לאחרונה: {new Date().getFullYear()}. טרולי טיולים (TROLY-TIULIM) מכבדת את פרטיותכם.
      </p>

      <div className="mt-8 space-y-6 leading-relaxed text-foreground">
        <section>
          <h2 className="text-xl font-extrabold">אילו פרטים נאספים</h2>
          <p className="mt-2 text-muted-foreground">
            פרטים שאתם מוסרים לנו מיוזמתכם בפנייה בוואטסאפ, בטלפון או במייל – שם, טלפון, כתובת מייל
            ופרטי הבקשה לטיול. לצורך ביצוע הזמנה בפועל ייתכן שנידרש לפרטי נוסעים ודרכון.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">מטרת השימוש</h2>
          <p className="mt-2 text-muted-foreground">
            הפרטים משמשים למתן מענה לפנייתכם, בניית הצעה, ביצוע ההזמנה מול הספקים וליווי במהלך הטיול.
            איננו מוכרים ואיננו מעבירים את הפרטים לגורמים שאינם נדרשים לביצוע ההזמנה.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">שירותים חיצוניים</h2>
          <p className="mt-2 text-muted-foreground">
            האתר מציג מזג אוויר עדכני באמצעות שירות חיצוני (Open-Meteo) ומקשר לוואטסאפ. שימוש בשירותים
            אלה כפוף לתנאיהם. באתר אין רישום משתמשים ואין איסוף פרטי תשלום.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">שמירת מידע ואבטחה</h2>
          <p className="mt-2 text-muted-foreground">
            אנו שומרים את הפרטים למשך הזמן הנדרש לטיפול בפנייה ולחובות חוקיות, ונוקטים אמצעים סבירים
            לשמירתם. העדפות נגישות שאתם בוחרים נשמרות מקומית בדפדפן שלכם בלבד.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-extrabold">זכויות שלכם</h2>
          <p className="mt-2 text-muted-foreground">
            ניתן לבקש בכל עת לעיין בפרטים שנשמרו, לתקן אותם או למחוק אותם – בפנייה אלינו:{" "}
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
