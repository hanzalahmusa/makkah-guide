import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllExperiences, getExperienceBySlug } from "@/lib/content";
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
  return getAllExperiences().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) return {};
  return createMetadata({
    title: exp.title,
    description: exp.seoDescription,
    path: `/experiences/${exp.slug}`,
    image: exp.coverImage,
  });
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const exp = getExperienceBySlug(slug);
  if (!exp) notFound();

  return (
    <PageWrapper>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: exp.title,
          description: exp.seoDescription,
          url: `${SITE_URL}/experiences/${exp.slug}`,
        }}
      />

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <Badge variant="sage">{exp.category}</Badge>
            <h1 className="mt-4 font-heading text-3xl text-ink md:text-5xl">
              {exp.title}
            </h1>
            <p className="mt-4 text-xl text-ink-light">{exp.subtitle}</p>

            {/* Meta bar */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Tag>{exp.duration}</Tag>
              <Tag>{exp.cost === "free" ? "Free" : exp.cost}</Tag>
              <Tag>{exp.location}</Tag>
              {exp.bestTime && <Tag>{exp.bestTime}</Tag>}
              {exp.difficulty && <Tag>{exp.difficulty}</Tag>}
              {exp.familyFriendly && <Tag>Family friendly</Tag>}
            </div>
          </div>

          {/* Content */}
          <MDXContent code={exp.body} />
        </div>
      </article>
    </PageWrapper>
  );
}
