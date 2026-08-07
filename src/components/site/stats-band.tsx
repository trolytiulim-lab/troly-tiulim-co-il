import { Counter } from "./motion";

const stats = [
  { to: 15, suffix: "K+", label: "מטיילים שיצאו איתנו" },
  { to: 94, suffix: "%", label: "לקוחות חוזרים" },
  { to: 6, suffix: "", label: "יעדים מובילים" },
  { to: 24, suffix: "/7", label: "זמינות בוואטסאפ" },
];

export function StatsBand() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="group rounded-3xl border border-border bg-background p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-xl"
        >
          <div className="text-3xl font-extrabold text-primary transition-transform duration-300 group-hover:scale-110 md:text-4xl">
            <Counter to={s.to} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-xs font-bold text-muted-foreground sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
