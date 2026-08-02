import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, Loader2 } from "lucide-react";

const SPOTS = [
  { city: "לרנקה", country: "קפריסין", lat: 34.92, lon: 33.62 },
  { city: "בודפשט", country: "הונגריה", lat: 47.5, lon: 19.04 },
  { city: "סנטוריני", country: "יוון", lat: 36.39, lon: 25.46 },
  { city: "פראג", country: "צ׳כיה", lat: 50.08, lon: 14.44 },
  { city: "טביליסי", country: "גאורגיה", lat: 41.72, lon: 44.79 },
  { city: "רומא", country: "איטליה", lat: 41.9, lon: 12.5 },
];

type Row = { city: string; country: string; temp: number | null; code: number | null };

function icon(code: number | null) {
  if (code === null) return Cloud;
  if (code === 0 || code === 1) return Sun;
  if (code >= 71 && code <= 86) return CloudSnow;
  if (code >= 51 && code <= 67) return CloudRain;
  if (code >= 80 && code <= 99) return CloudRain;
  return Cloud;
}

export function WeatherStrip() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const results = await Promise.all(
          SPOTS.map(async (s) => {
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${s.lat}&longitude=${s.lon}&current=temperature_2m,weather_code`,
            );
            const json = await res.json();
            return {
              city: s.city,
              country: s.country,
              temp: Math.round(json?.current?.temperature_2m ?? NaN),
              code: json?.current?.weather_code ?? null,
            } as Row;
          }),
        );
        if (!cancelled) setRows(results);
      } catch {
        if (!cancelled)
          setRows(SPOTS.map((s) => ({ city: s.city, country: s.country, temp: null, code: null })));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl">
      {loading ? (
        <div className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> טוען מזג אוויר ביעדים...
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {rows.map((r, i) => {
            const Icon = icon(r.code);
            return (
              <div
                key={r.city}
                className="flex flex-col items-center rounded-2xl border border-border bg-card/80 p-4 text-center shadow-sm backdrop-blur transition-transform hover:-translate-y-1"
              >
                <Icon
                  className="h-8 w-8 text-primary animate-[float-mid_5s_ease-in-out_infinite]"
                  style={{ animationDelay: `${i * 300}ms` }}
                />
                <div className="mt-2 text-lg font-extrabold text-card-foreground" dir="ltr">
                  {r.temp === null || Number.isNaN(r.temp) ? "--" : `${r.temp}°`}
                </div>
                <div className="text-sm font-semibold text-card-foreground">{r.city}</div>
                <div className="text-[11px] text-muted-foreground">{r.country}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
