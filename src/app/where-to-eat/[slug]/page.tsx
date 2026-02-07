import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
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
          </div>

          {/* At a glance */}
          <div className="mb-12 border-b border-sand-dark">
            <h3 className="py-4 font-heading text-xl text-ink">At a glance</h3>
            <div className="flex flex-wrap gap-2 pb-6">
              <Tag>{eat.priceRange}</Tag>
              {eat.bestForTag && <Tag>{eat.bestForTag}</Tag>}
              {eat.skipIf && <Tag>Skip if {eat.skipIf}</Tag>}
              {eat.distanceFromHaram && <Tag>{eat.distanceFromHaram}</Tag>}
            </div>
          </div>

          {/* Content — contains "What to order" and "What's our take" as collapsibles */}
          <MDXContent code={eat.body} />

          {/* CTA row */}
          <div className="mt-16 rounded-2xl bg-sage p-8 text-center">
            <h3 className="font-heading text-xl text-white">
              Best bites by Al Haram
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Explore all our tested and loved restaurants near Masjid al-Haram.
            </p>
            <Link
              href="/where-to-eat"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sage-dark"
            >
              Browse All Restaurants
            </Link>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
