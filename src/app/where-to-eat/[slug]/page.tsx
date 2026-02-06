import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllEats, getEatBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@/components/mdx/MDXContent";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllEats().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const eat = getEatBySlug(slug);
  if (!eat) return {};
  return createMetadata({
    title: eat.title,
    description: eat.seoDescription,
    path: `/where-to-eat/${eat.slug}`,
    image: eat.coverImage,
  });
}

export default async function EatDetailPage({ params }: Props) {
  const { slug } = await params;
  const eat = getEatBySlug(slug);
  if (!eat) notFound();

  return (
    <PageWrapper>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: eat.title,
          description: eat.seoDescription,
          servesCuisine: eat.cuisine,
          url: `${SITE_URL}/where-to-eat/${eat.slug}`,
        }}
      />

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="gold">{eat.cuisine}</Badge>
            <h1 className="mt-4 font-heading text-3xl text-ink md:text-5xl">
              {eat.title}
            </h1>
            <p className="mt-4 text-xl text-ink-light">{eat.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>{eat.priceRange}</Tag>
              <Tag>{eat.location}</Tag>
              {eat.hours && <Tag>{eat.hours}</Tag>}
            </div>
          </div>

          {/* Must try */}
          {eat.mustTry && (
            <div className="mb-12 rounded-xl border-l-4 border-l-gold bg-gold/5 p-6">
              <p className="font-heading text-lg text-ink">Must try</p>
              <p className="mt-1 text-ink-light">{eat.mustTry}</p>
            </div>
          )}

          {/* Best for */}
          {eat.bestFor.length > 0 && (
            <div className="mb-12">
              <h3 className="mb-3 font-heading text-lg text-ink">Best for</h3>
              <div className="flex flex-wrap gap-2">
                {eat.bestFor.map((item, i) => (
                  <Tag key={i}>{item}</Tag>
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <MDXContent code={eat.body} />
        </div>
      </article>
    </PageWrapper>
  );
}
