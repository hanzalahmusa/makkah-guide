import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllStays, getStayBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllStays().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) return {};
  return createMetadata({
    title: stay.title,
    description: stay.seoDescription,
    path: `/where-to-stay/${stay.slug}`,
    image: stay.coverImage,
  });
}

export default async function StayDetailPage({ params }: Props) {
  const { slug } = await params;
  const stay = getStayBySlug(slug);
  if (!stay) notFound();

  return (
    <PageWrapper>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: stay.title,
          description: stay.seoDescription,
          url: `${SITE_URL}/where-to-stay/${stay.slug}`,
        }}
      />

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="sage">{stay.feelLabel}</Badge>
            <h1 className="mt-4 font-heading text-3xl text-ink md:text-5xl">
              {stay.title}
            </h1>
            <p className="mt-4 text-xl text-ink-light">{stay.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>{stay.distanceToHaram} from Haram</Tag>
              <Tag>{stay.walkingMinutes} min walk</Tag>
              <Tag>{stay.priceRange}</Tag>
            </div>
            {stay.priceNote && (
              <p className="mt-3 text-sm italic text-ink-light">
                {stay.priceNote}
              </p>
            )}
          </div>

          {/* Book this if */}
          <div className="border-b border-sand-dark">
            <h3 className="py-4 font-heading text-xl text-ink">Book this if</h3>
            <ul className="space-y-2 pb-6">
              {stay.pros.map((pro, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 text-sage">&#10003;</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Skip this if */}
          <div className="border-b border-sand-dark">
            <h3 className="py-4 font-heading text-xl text-ink">Skip this if</h3>
            <ul className="space-y-2 pb-6">
              {stay.cons.map((con, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-ink-light">
                  <span className="mt-0.5 text-gold">&times;</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>

          {/* Best for */}
          {stay.bestFor.length > 0 && (
            <div className="border-b border-sand-dark">
              <h3 className="py-4 font-heading text-xl text-ink">Best for</h3>
              <div className="flex flex-wrap gap-2 pb-6">
                {stay.bestFor.map((item, i) => (
                  <Tag key={i}>{item}</Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </PageWrapper>
  );
}
