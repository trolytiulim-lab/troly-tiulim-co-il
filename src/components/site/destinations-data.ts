import budapest1 from "@/assets/photo-budapest-1.jpg.asset.json";
import budapest2 from "@/assets/photo-budapest-2.jpg.asset.json";
import budapest3 from "@/assets/photo-budapest-3.jpg.asset.json";
import santorini1 from "@/assets/photo-santorini-1.jpg.asset.json";
import santorini2 from "@/assets/photo-santorini-2.jpg.asset.json";
import santorini3 from "@/assets/photo-santorini-3.jpg.asset.json";
import prague1 from "@/assets/photo-prague-1.jpg.asset.json";
import prague2 from "@/assets/photo-prague-2.jpg.asset.json";
import prague3 from "@/assets/photo-prague-3.jpg.asset.json";
import larnaca1 from "@/assets/photo-larnaca-1.jpg.asset.json";
import larnaca2 from "@/assets/photo-larnaca-2.jpg.asset.json";
import larnaca3 from "@/assets/photo-larnaca-3.jpg.asset.json";
import tbilisi1 from "@/assets/photo-tbilisi-1.jpg.asset.json";
import tbilisi2 from "@/assets/photo-tbilisi-2.jpg.asset.json";
import tbilisi3 from "@/assets/photo-tbilisi-3.jpg.asset.json";
import rome1 from "@/assets/photo-rome-1.jpg.asset.json";
import rome2 from "@/assets/photo-rome-2.jpg.asset.json";
import rome3 from "@/assets/photo-rome-3.jpg.asset.json";

export type Destination = {
  id: string;
  country: string;
  city: string;
  title: string;
  description: string;
  image: string;
  gallery: { src: string; alt: string }[];
  base: number;
  gold: number;
};

export const BASE_PACKAGE = {
  name: "רק טרולי",
  includes: ["טיסות הלוך־חזור", "מלון 3 כוכבים במרכז", "העברות משדה התעופה"],
};

export const GOLD_PACKAGE = {
  name: "טרולי זהב",
  includes: [
    "טיסות הלוך־חזור",
    "מלון בוטיק 4 כוכבים / ריזורט מפנק",
    "העברות פרטיות",
    "תוספות VIP וליווי אישי בוואטסאפ",
  ],
};

export const destinations: Destination[] = [
  {
    id: "larnaca",
    country: "קפריסין",
    city: "לרנקה",
    title: "קפריסין • לרנקה",
    description: "טיסה קצרה, חופים רגועים ומרחקים קטנים – היעד הקל לחופשה משפחתית.",
    image: larnaca1.url,
    gallery: [
      { src: larnaca1.url, alt: "חוף פיניקודס בלרנקה, קפריסין" },
      { src: larnaca2.url, alt: "העיר העתיקה של לרנקה מהחוף" },
      { src: larnaca3.url, alt: "טיילת החוף בלרנקה" },
    ],
    base: 310,
    gold: 490,
  },
  {
    id: "budapest",
    country: "הונגריה",
    city: "בודפשט",
    title: "הונגריה • בודפשט",
    description: "ספא מים חמים, שייט על הדנובה ואוכל טוב – עיר שמתאימה לכל הגילים.",
    image: budapest1.url,
    gallery: [
      { src: budapest1.url, alt: "הפרלמנט ההונגרי והדנובה בלילה" },
      { src: budapest2.url, alt: "גשר השלשלאות בבודפשט" },
      { src: budapest3.url, alt: "הדנובה ומבנה הפרלמנט בבודפשט" },
    ],
    base: 340,
    gold: 520,
  },
  {
    id: "santorini",
    country: "יוון",
    city: "סנטוריני",
    title: "יוון • סנטוריני",
    description: "כפרים לבנים, שקיעות מעל הקלדרה ושייט ליום שלם – חופשה זוגית קלאסית.",
    image: santorini2.url,
    gallery: [
      { src: santorini2.url, alt: "הכפר אויה בסנטוריני" },
      { src: santorini1.url, alt: "שקיעה באויה, סנטוריני" },
      { src: santorini3.url, alt: "נמל אויה בסנטוריני בשקיעה" },
    ],
    base: 400,
    gold: 690,
  },
  {
    id: "prague",
    country: "צ׳כיה",
    city: "פראג",
    title: "צ׳כיה • פראג",
    description: "עיר עתיקה שמתהלכת ברגל, גשר קארל ושווקים – עיר קומפקטית ומשתלמת.",
    image: prague1.url,
    gallery: [
      { src: prague1.url, alt: "גשר קארל בפראג" },
      { src: prague2.url, alt: "קו הרקיע של פראג בזריחה" },
      { src: prague3.url, alt: "גשר קארל והעיר העתיקה בפראג" },
    ],
    base: 370,
    gold: 560,
  },
  {
    id: "tbilisi",
    country: "גאורגיה",
    city: "טביליסי",
    title: "גאורגיה • טביליסי",
    description: "טבע פראי, יינות מקומיים ומחירים נוחים – טיול אקטיבי בטיסה קצרה.",
    image: tbilisi1.url,
    gallery: [
      { src: tbilisi1.url, alt: "העיר העתיקה של טביליסי" },
      { src: tbilisi2.url, alt: "רחובות העיר העתיקה בטביליסי" },
      { src: tbilisi3.url, alt: "מבט על טביליסי והמצודה" },
    ],
    base: 360,
    gold: 540,
  },
  {
    id: "rome",
    country: "איטליה",
    city: "רומא",
    title: "איטליה • רומא",
    description: "היסטוריה בכל פינה, קולינריה איטלקית וסיורים ברגל – עיר שלא נגמרת.",
    image: rome1.url,
    gallery: [
      { src: rome1.url, alt: "הקולוסאום והפורום הרומי" },
      { src: rome2.url, alt: "הקולוסאום ברומא" },
      { src: rome3.url, alt: "הקולוסאום ברומא באור יום" },
    ],
    base: 420,
    gold: 750,
  },
];
