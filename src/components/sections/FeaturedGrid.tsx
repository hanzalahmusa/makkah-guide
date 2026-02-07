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
  const stays = getFeaturedStays().slice(0, 2);
  const eats = getFeaturedEats().slice(0, 2);

  return (
    <>
      {/* Experiences */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                Curated
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Featured Experiences
              </h2>
            </div>
            <a
              href="/experiences"
              className="hidden text-sm font-medium text-sage-dark hover:text-sage md:block"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {experiences.map((exp, i) => (
              <Card
                key={exp.slug}
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
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries — alternating bg */}
      <section className="bg-sand-dark/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                Ready-Made Plans
              </p>
              <h2 className="mt-1 font-heading text-3xl text-ink md:text-4xl">
                Itineraries
              </h2>
            </div>
            <a
              href="/itineraries"
              className="hidden text-sm font-medium text-sage-dark hover:text-sage md:block"
            >
              View all &rarr;
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {itineraries.map((itin, i) => (
              <Card
                key={itin.slug}
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
            ))}
          </div>
        </div>
      </section>

      {/* Stays & Eats side by side */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                  Recommended
                </p>
                <h2 className="mt-1 font-heading text-3xl text-ink">
                  Where to Stay
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                {stays.map((stay, i) => (
                  <Card
                    key={stay.slug}
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
                ))}
              </div>
            </div>

            <div>
              <div className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-sage">
                  Tested & Loved
                </p>
                <h2 className="mt-1 font-heading text-3xl text-ink">
                  Where to Eat
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                {eats.map((eat, i) => (
                  <Card
                    key={eat.slug}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
