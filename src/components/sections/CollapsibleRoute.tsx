"use client";

import { useState } from "react";
import Link from "next/link";

interface Stop {
  time: string;
  title: string;
  description: string;
  location?: string;
  linkedExperience?: string;
}

interface CollapsibleRouteProps {
  stops: Stop[];
}

function CollapsibleBlock({
  title,
  level = "h3",
  children,
}: {
  title: string;
  level?: "h2" | "h3" | "h4";
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const styles = {
    h2: "text-2xl md:text-3xl",
    h3: "text-xl md:text-2xl",
    h4: "text-base md:text-lg",
  };

  return (
    <div className={level === "h2" ? "border-b border-sand-dark" : ""}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between text-left ${
          level === "h2" ? "py-5" : level === "h3" ? "py-4" : "py-3"
        }`}
      >
        <span className={`font-heading ${styles[level]} text-ink`}>
          {title}
        </span>
        <svg
          width={level === "h4" ? "16" : "20"}
          height={level === "h4" ? "16" : "20"}
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-ink-light transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[10000px] pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function StopItem({ stop, index }: { stop: Stop; index: number }) {
  return (
    <div className="relative flex gap-4 pb-6 last:pb-0">
      <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-sage bg-sand">
        <span className="text-xs font-bold text-sage">{index + 1}</span>
      </div>
      <div className="flex-1 pt-0.5">
        <h4 className="font-heading text-lg text-ink">{stop.title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-ink-light">
          {stop.description}
        </p>
        {stop.location && (
          <p className="mt-1 text-xs text-ink-light/60">{stop.location}</p>
        )}
        {stop.linkedExperience && (
          <Link
            href={`/experiences/${stop.linkedExperience}`}
            className="mt-1 inline-block text-xs font-medium text-sage hover:text-sage-dark"
          >
            Read more &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}

export function CollapsibleRoute({ stops }: CollapsibleRouteProps) {
  // Check if stops follow "Day X — Period" pattern
  const isDayGrouped = stops.some((s) => /^Day \d+/i.test(s.time));

  if (!isDayGrouped) {
    // Flat list — just show stops in a collapsible route
    return (
      <CollapsibleBlock title="The route" level="h2">
        <div className="space-y-0 pl-2">
          {stops.map((stop, i) => (
            <StopItem key={i} stop={stop} index={i} />
          ))}
        </div>
      </CollapsibleBlock>
    );
  }

  // Group by day, then by period — track original index
  const days: { day: string; periods: { period: string; stops: { stop: Stop; origIndex: number }[] }[] }[] = [];
  const dayMap = new Map<string, Map<string, { stop: Stop; origIndex: number }[]>>();

  stops.forEach((stop, i) => {
    const match = stop.time.match(/^(Day \d+)\s*[—–-]\s*(.+)$/i);
    if (match) {
      const day = match[1];
      const period = match[2].trim();
      if (!dayMap.has(day)) dayMap.set(day, new Map());
      const periodMap = dayMap.get(day)!;
      if (!periodMap.has(period)) periodMap.set(period, []);
      periodMap.get(period)!.push({ stop, origIndex: i });
    }
  });

  for (const [day, periodMap] of dayMap) {
    const periods = Array.from(periodMap.entries()).map(([period, stps]) => ({
      period,
      stops: stps,
    }));
    days.push({ day, periods });
  }

  return (
    <CollapsibleBlock title="The route" level="h2">
      <div className="space-y-2">
        {days.map(({ day, periods }) => (
          <CollapsibleBlock key={day} title={day} level="h3">
            <div className="space-y-4 pl-2">
              {periods.map(({ period, stops: periodStops }) => (
                <div key={period}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-light">
                    {period}
                  </p>
                  <div className="space-y-0 pl-2">
                    {periodStops.map(({ stop, origIndex }) => (
                      <StopItem key={origIndex} stop={stop} index={origIndex} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleBlock>
        ))}
      </div>
    </CollapsibleBlock>
  );
}
