import { Hero } from "@/components/sections/Hero";
import { FeaturedGrid } from "@/components/sections/FeaturedGrid";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <FeaturedGrid />
    </PageWrapper>
  );
}
