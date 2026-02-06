import { EmailForm } from "@/components/ui/EmailForm";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Get the Free Makkah Guide",
  description:
    "Download our free PDF pocket guide to Makkah — top picks, packing lists, and insider tips for repeat Umrah visitors.",
  path: "/free-guide",
});

export default function FreeGuidePage() {
  return (
    <PageWrapper>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sage">
            Free Download
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            The Makkah Pocket Guide
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-light">
            Everything you need in one beautifully designed PDF. Our top hotel
            picks, restaurant recommendations, packing checklist, and insider
            tips — all in a format you can save on your phone.
          </p>

          <div className="mx-auto mt-10 max-w-md">
            <EmailForm
              buttonText="Send Me the Guide"
              placeholder="your@email.com"
            />
          </div>

          <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 text-sage">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-ink">Top Stays</h3>
              <p className="mt-2 text-sm text-ink-light">
                Our curated picks organized by vibe — from budget-friendly to
                luxury Haram-view.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-ink">Packing List</h3>
              <p className="mt-2 text-sm text-ink-light">
                The essential packing checklist refined over multiple Umrah
                trips.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-clay/10 text-clay">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg text-ink">Insider Tips</h3>
              <p className="mt-2 text-sm text-ink-light">
                The practical wisdom that only comes from repeat visits — save
                time, money, and stress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
