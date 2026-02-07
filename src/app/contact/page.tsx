import { createMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the Experience Makkah team — suggestions, corrections, and contributions welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageWrapper>
      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-ink">
            Say Hello
          </p>
          <h1 className="mt-2 font-heading text-3xl text-ink md:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-ink-light">
            Have a suggestion? Found an error? Want to contribute? We&apos;d
            love to hear from you.
          </p>

          <div className="mt-12 space-y-8">
            <div className="rounded-2xl border border-sand-dark bg-white p-8">
              <h2 className="font-heading text-xl text-ink">
                Suggestions & Corrections
              </h2>
              <p className="mt-3 text-ink-light">
                If you&apos;ve visited a place we recommend and have an update,
                or if you&apos;ve found a hidden gem we should know about, we
                want to hear from you. Every recommendation on this site is
                based on real visits — your input keeps it accurate.
              </p>
            </div>

            <div className="rounded-2xl border border-sand-dark bg-white p-8">
              <h2 className="font-heading text-xl text-ink">
                Contribute
              </h2>
              <p className="mt-3 text-ink-light">
                Are you a local or a frequent visitor with knowledge to share?
                We&apos;re always looking for contributors who can bring new
                perspectives and experiences to the guide.
              </p>
            </div>

            <div className="rounded-2xl border border-sand-dark bg-white p-8">
              <h2 className="font-heading text-xl text-ink">
                Reach Out
              </h2>
              <p className="mt-3 text-ink-light">
                The best way to reach us is via email at{" "}
                <a
                  href="mailto:hello@experiencemakkah.com"
                  className="font-medium text-gold underline decoration-gold/30 underline-offset-3 transition-colors hover:text-gold"
                >
                  hello@experiencemakkah.com
                </a>
                . We read every message and aim to respond within a few days.
              </p>
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
