import { getPageBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { MDXContent } from "@/components/mdx/MDXContent";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Experience Makkah — an independent, editorial city guide for repeat Umrah visitors.",
  path: "/about",
});

export default function AboutPage() {
  const page = getPageBySlug("about");
  if (!page) return null;

  return (
    <PageWrapper>
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Our Story
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="mt-4 text-xl text-ink-light">{page.subtitle}</p>
          )}
          <div className="mt-12">
            <MDXContent code={page.body} />
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
