import { Plane, Luggage, Compass, Ticket } from "lucide-react";

/** Ambient floating travel icons + a plane that glides across the section. */
export function FloatingTravelIcons({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "dark" ? "text-white/25" : "text-primary/25";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute top-[12%] w-full">
        <Plane className={`h-8 w-8 ${color} animate-[fly-across_26s_linear_infinite]`} />
      </div>
      <div className="absolute bottom-[18%] w-full">
        <Plane className={`h-5 w-5 ${color} animate-[fly-across_38s_linear_infinite]`} style={{ animationDelay: "6s" }} />
      </div>
      <Luggage className={`absolute right-[8%] top-[28%] h-10 w-10 ${color} animate-[float-slow_7s_ease-in-out_infinite]`} />
      <Compass className={`absolute left-[10%] top-[55%] h-9 w-9 ${color} animate-[float-mid_5s_ease-in-out_infinite]`} />
      <Ticket className={`absolute right-[16%] bottom-[14%] h-8 w-8 ${color} animate-[float-mid_6.5s_ease-in-out_infinite]`} />
    </div>
  );
}

/** Rotating / wobbling passport stamp badge. */
export function PassportStamp({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none animate-[stamp-wobble_6s_ease-in-out_infinite] ${className}`}
    >
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-dashed border-primary/70 text-center text-primary">
        <span className="text-[10px] font-bold tracking-widest">TROLLEY</span>
        <span className="text-lg font-extrabold leading-none">✈</span>
        <span className="text-[9px] font-semibold tracking-wider">APPROVED</span>
      </div>
    </div>
  );
}
