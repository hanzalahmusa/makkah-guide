import Link from "next/link";

interface Stop {
  time: string;
  title: string;
  description: string;
  location?: string;
  linkedExperience?: string;
}

interface TimelineViewProps {
  stops: Stop[];
}

export function TimelineView({ stops }: TimelineViewProps) {
  return (
    <div className="relative space-y-0">
      {/* Vertical line */}
      <div className="absolute bottom-0 left-[23px] top-0 w-px bg-sand-dark" />

      {stops.map((stop, i) => (
        <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
          {/* Dot */}
          <div className="relative z-10 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sand">
            <span className="text-xs font-bold text-sage">{i + 1}</span>
          </div>

          <div className="flex-1 pt-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-sage">
              {stop.time}
            </p>
            <h3 className="mt-1 font-heading text-xl text-ink">
              {stop.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-light">
              {stop.description}
            </p>
            {stop.location && (
              <p className="mt-2 text-xs text-ink-light/60">
                {stop.location}
              </p>
            )}
            {stop.linkedExperience && (
              <Link
                href={`/experiences/${stop.linkedExperience}`}
                className="mt-2 inline-block text-xs font-medium text-sage hover:text-sage-dark"
              >
                Read more &rarr;
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
