const CAPTIONS = [
  "בודפשט • שייט בשקיעה",
  "לרנקה • חוף פרטי",
  "סנטוריני • גגות לבנים",
  "האלפים • מסלול בוקר",
  "ליסבון • טרם 28",
];

export function MomentsMarquee({ images }: { images: string[] }) {
  const items = images.map((src, i) => ({ src, caption: CAPTIONS[i % CAPTIONS.length] }));
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden" dir="ltr">
      <div className="flex w-max gap-4 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((it, i) => (
          <figure
            key={i}
            className="relative h-48 w-64 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:h-56 sm:w-80"
          >
            <img
              src={it.src}
              alt={it.caption}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <figcaption
              dir="rtl"
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-900/90 to-transparent p-3 text-right text-sm font-semibold text-white"
            >
              {it.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
