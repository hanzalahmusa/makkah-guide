"use client";

import { useState } from "react";
import { getAllEats } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FilterBar } from "@/components/ui/FilterBar";
import { PageWrapper } from "@/components/layout/PageWrapper";

const filters = [
  { value: "near-haram", label: "Near Haram" },
  { value: "local-favourite", label: "Local Favourite" },
  { value: "late-night", label: "Late Night" },
  { value: "family", label: "Family" },
  { value: "quick-bite", label: "Quick Bite" },
  { value: "special-occasion", label: "Special Occasion" },
];

export default function WhereToEatPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allEats = getAllEats();

  const filtered =
    activeFilter === "all"
      ? allEats
      : allEats.filter((e) => e.category === activeFilter);

  return (
    <PageWrapper>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Tested & Loved
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            Where to Eat
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            From late-night shawarma runs after Tahajjud to proper sit-down
            family meals. Every place here has been personally visited and
            eaten at.
          </p>

          <div className="mt-10">
            <FilterBar
              filters={filters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((eat) => (
              <Card
                key={eat.slug}
                href={`/where-to-eat/${eat.slug}`}
                title={eat.title}
                subtitle={eat.subtitle}
                coverImage={eat.coverImage}
                badge={eat.cuisine}
                meta={
                  <div className="flex gap-2">
                    <Tag>{eat.priceRange}</Tag>
                    <Tag>{eat.category.replace("-", " ")}</Tag>
                  </div>
                }
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-light">
              No restaurants found for this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
