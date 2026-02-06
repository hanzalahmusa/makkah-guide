import { EmailForm } from "@/components/ui/EmailForm";

export function CTABanner() {
  return (
    <section className="bg-ink px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl">
          Get the free Makkah pocket guide
        </h2>
        <p className="mt-4 text-lg text-white/70">
          A beautifully designed PDF with our top picks, packing lists, and
          insider tips. Delivered straight to your inbox.
        </p>
        <div className="mt-8">
          <EmailForm
            buttonText="Send Me the Guide"
            placeholder="your@email.com"
          />
        </div>
      </div>
    </section>
  );
}
