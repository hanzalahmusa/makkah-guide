import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllItineraries, getItineraryBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@/components/mdx/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { TimelineView } from "@/components/sections/TimelineView";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllItineraries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itin = getItineraryBySlug(slug);
  if (!itin) return {};
  return createMetadata({
    title: itin.title,
    description: itin.seoDescription,
    path: `/itineraries/${itin.slug}`,
    image: itin.coverImage,
  });
}

export default async function ItineraryDetailPage({ params }: Props) {
  const { slug } = await params;
  const itin = getItineraryBySlug(slug);
  if (!itin) notFound();

  return (
    <PageWrapper>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: itin.title,
          description: itin.seoDescription,
          url: `${SITE_URL}/itineraries/${itin.slug}`,
        }}
      />

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="sage">{itin.durationLabel}</Badge>
            <h1 className="mt-4 font-heading text-3xl text-ink md:text-5xl">
              {itin.title}
            </h1>
            <p className="mt-4 text-xl text-ink-light">{itin.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>{itin.pace}</Tag>
              <Tag>{itin.audience === "any" ? "Anyone" : itin.audience}</Tag>
              <Tag>{`${itin.stops.length} stops`}</Tag>
            </div>
          </div>

          {/* Timeline */}
          {itin.stops.length > 0 && (
            <div className="mb-16">
              <h2 className="mb-8 font-heading text-2xl text-ink">
                The Route
              </h2>
              <TimelineView stops={itin.stops} />
            </div>
          )}

          {/* Content */}
          <MDXContent code={itin.body} />
        </div>
      </article>
    </PageWrapper>
  );
}
