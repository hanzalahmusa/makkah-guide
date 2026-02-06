import { getAllItineraries } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Itineraries",
  description:
    "Ready-made day plans for your Umrah trip — from your first 24 hours to full cultural days in Makkah.",
  path: "/itineraries",
});

export default function ItinerariesPage() {
  const itineraries = getAllItineraries();

  return (
    <PageWrapper>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Ready-Made Plans
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            Itineraries
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Don&apos;t want to plan from scratch? These curated day plans give
            you a structure to follow, with room to adapt.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {itineraries.map((itin) => (
              <Card
                key={itin.slug}
                href={`/itineraries/${itin.slug}`}
                title={itin.title}
                subtitle={itin.subtitle}
                coverImage={itin.coverImage}
                badge={itin.durationLabel}
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
    </PageWrapper>
  );
}
