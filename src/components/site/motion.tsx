import { useEffect, useRef, useState } from "react";

/** Reveals children with a fast, pronounced fade/slide once scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-16 scale-[0.94] opacity-0 blur-[3px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/** Number that counts up from 0 when it enters the viewport. */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 1600,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.round(to * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} dir="ltr">
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** Scroll progress (0..1-ish) of an element passing through the viewport. */
export function useParallax() {
  const ref = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      setOffset(Math.max(0, -rect.top));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, offset };
}

/** Wraps a link/button so it is gently pulled toward the cursor on hover. */
export function Magnetic({
  children,
  strength = 14,
  className = "",
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px) scale(1.04)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`inline-flex transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}

/** 3D tilt container – children rotate slightly following the cursor. */
export function Tilt({
  children,
  max = 9,
  className = "",
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * max * 2}deg) rotateX(${-y * max * 2}deg) translateY(-8px) scale(1.02)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ transform: "perspective(900px)" }}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}

/** Soft cloud/star particle trail that follows the cursor (desktop only). */
export function CursorTrail({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 55) return;
      last = now;
      const r = host.getBoundingClientRect();
      const dot = document.createElement("span");
      dot.className = "trail-dot";
      dot.style.left = `${e.clientX - r.left}px`;
      dot.style.top = `${e.clientY - r.top}px`;
      const size = 5 + Math.random() * 9;
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      host.appendChild(dot);
      window.setTimeout(() => dot.remove(), 1100);
    };

    host.parentElement?.addEventListener("mousemove", onMove);
    return () => host.parentElement?.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 z-20 overflow-hidden ${className}`} />;
}
