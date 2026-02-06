import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
          The Independent City Guide
        </p>
        <h1 className="font-heading text-4xl leading-tight text-ink md:text-7xl">
          You know the rituals.
          <br />
          <span className="text-sage">We help with everything beyond them.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-light md:text-xl">
          An opinionated guide to Makkah for repeat Umrah visitors. Where to
          stay, what to eat, and how to make the most of your time in the
          holiest city.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/start-here" size="lg">
            Start Here
          </Button>
          <Button href="/experiences" variant="outline" size="lg">
            Browse Experiences
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/5" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gold/5" />
    </section>
  );
}
