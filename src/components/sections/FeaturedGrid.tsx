import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import {
  getFeaturedExperiences,
  getFeaturedStays,
  getFeaturedEats,
  getFeaturedItineraries,
} from "@/lib/content";

export function FeaturedGrid() {
  const experiences = getFeaturedExperiences().slice(0, 3);
  const itineraries = getFeaturedItineraries().slice(0, 3);
  const stays = getFeaturedStays().slice(0, 3);
  const eats = getFeaturedEats().slice(0, 3);

  return (
    <>
      {/* Experiences */}
      <section className="px-6 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ink">
                Curated
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Experiences
              </h2>
            </div>
            <a
              href="/experiences"
              className="text-sm font-medium text-ink-light hover:text-ink"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp, i) => (
              <div key={exp.slug} className={i === 2 ? "hidden h-full md:block" : "h-full"}>
                <Card
                  href={`/experiences/${exp.slug}`}
                  title={exp.title}
                  subtitle={exp.subtitle}
                  coverImage={exp.coverImage}
                  badge={exp.category}
                  index={i}
                  meta={
                    <div className="flex gap-2">
                      <Tag>{exp.duration}</Tag>
                      <Tag>{exp.cost === "free" ? "Free" : exp.cost}</Tag>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries — alternating bg */}
      <section className="bg-sand-dark/40 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ink">
                Ready-Made Plans
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Itineraries
              </h2>
            </div>
            <a
              href="/itineraries"
              className="text-sm font-medium text-ink-light hover:text-ink"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {itineraries.map((itin, i) => (
              <div key={itin.slug} className={i === 2 ? "hidden h-full md:block" : "h-full"}>
                <Card
                  href={`/itineraries/${itin.slug}`}
                  title={itin.title}
                  subtitle={itin.subtitle}
                  coverImage={itin.coverImage}
                  badge={itin.durationLabel}
                  index={i}
                  meta={
                    <div className="flex gap-2">
                      <Tag>{itin.pace}</Tag>
                      <Tag>{`${itin.stops.length} stops`}</Tag>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stays */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ink">
                Recommended
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Where to Stay
              </h2>
            </div>
            <a
              href="/where-to-stay"
              className="text-sm font-medium text-ink-light hover:text-ink"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {stays.map((stay, i) => (
              <div key={stay.slug} className={i === 2 ? "hidden h-full md:block" : "h-full"}>
                <Card
                  href={`/where-to-stay/${stay.slug}`}
                  title={stay.title}
                  subtitle={stay.subtitle}
                  coverImage={stay.coverImage}
                  badge={stay.feelLabel}
                  index={i}
                  meta={
                    <div className="flex gap-2">
                      <Tag>{stay.walkingMinutes} min walk</Tag>
                      <Tag>{stay.priceRange}</Tag>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eats */}
      <section className="bg-sand-dark/40 px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ink">
                Tested & Loved
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Where to Eat
              </h2>
            </div>
            <a
              href="/where-to-eat"
              className="text-sm font-medium text-ink-light hover:text-ink"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {eats.map((eat, i) => (
              <div key={eat.slug} className={i === 2 ? "hidden h-full md:block" : "h-full"}>
                <Card
                  href={`/where-to-eat/${eat.slug}`}
                  title={eat.title}
                  subtitle={eat.subtitle}
                  coverImage={eat.coverImage}
                  badge={eat.cuisine}
                  index={i}
                  meta={
                    <div className="flex gap-2">
                      <Tag>{eat.priceRange}</Tag>
                      {eat.mustTry && <Tag>{eat.mustTry}</Tag>}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
