"use client";

import { useState } from "react";
import { getAllStays } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FilterBar } from "@/components/ui/FilterBar";
import { PageWrapper } from "@/components/layout/PageWrapper";

const filters = [
  { value: "quiet-grounding", label: "Quiet & Grounding" },
  { value: "close-convenient", label: "Close & Convenient" },
  { value: "family-friendly", label: "Family Friendly" },
  { value: "long-stay", label: "Long Stay" },
  { value: "budget", label: "Budget" },
];

export default function WhereToStayPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allStays = getAllStays();

  const filtered =
    activeFilter === "all"
      ? allStays
      : allStays.filter((s) => s.feel === activeFilter);

  return (
    <PageWrapper>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Reviewed & Recommended
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            Where to Stay
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Accommodation in Makkah isn&apos;t just about stars and proximity. It&apos;s
            about how a place makes you feel. We organize by vibe, not just
            price.
          </p>

          <div className="mt-10">
            <FilterBar
              filters={filters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((stay) => (
              <Card
                key={stay.slug}
                href={`/where-to-stay/${stay.slug}`}
                title={stay.title}
                subtitle={stay.subtitle}
                coverImage={stay.coverImage}
                badge={stay.feelLabel}
                meta={
                  <div className="flex gap-2">
                    <Tag>{stay.walkingMinutes} min walk</Tag>
                    <Tag>{stay.priceRange}</Tag>
                  </div>
                }
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-light">
              No stays found for this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
