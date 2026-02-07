"use client";

import { useState } from "react";
import { getAllExperiences } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { FilterBar } from "@/components/ui/FilterBar";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { EXPERIENCE_CATEGORIES } from "@/lib/constants";

const CATEGORY_LABELS: Record<string, string> = {
  "spiritual-reflective": "Spiritual & Reflective",
  "historical-makkah": "Historical Makkah",
  "nature-stillness": "Nature & Stillness",
  "everyday-makkah": "Everyday Makkah",
};

const filters = EXPERIENCE_CATEGORIES.map((c) => ({
  value: c,
  label: CATEGORY_LABELS[c] ?? c,
}));

export default function ExperiencesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allExperiences = getAllExperiences();

  const filtered =
    activeFilter === "all"
      ? allExperiences
      : allExperiences.filter((e) => e.category === activeFilter);

  return (
    <PageWrapper>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Curated
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            Experiences
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Beyond the rituals — curated things to see, do, and discover in
            Makkah. From spiritual reflections to cultural adventures.
          </p>

          <div className="mt-10">
            <FilterBar
              filters={filters}
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((exp) => (
              <Card
                key={exp.slug}
                href={`/experiences/${exp.slug}`}
                title={exp.title}
                subtitle={exp.subtitle}
                coverImage={exp.coverImage}
                badge={exp.category}
                meta={
                  <div className="flex gap-2">
                    <Tag>{exp.duration}</Tag>
                    <Tag>{exp.cost === "free" ? "Free" : exp.cost}</Tag>
                  </div>
                }
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-ink-light">
              No experiences found for this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
