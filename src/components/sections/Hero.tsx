"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const heroImages = [
  { src: "/images/shared/hero-hera.jpg", alt: "Hera Cultural District" },
  { src: "/images/shared/hero-wadi.jpg", alt: "Wadi Fatima" },
  { src: "/images/shared/hero-kiswa.jpg", alt: "Kiswa Exhibition" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Rotating hero images */}
      <div className="relative h-[300px] w-full md:h-[450px]">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>
        ))}
        {/* Caption */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80 drop-shadow-md">
            {heroImages[current].alt}
          </p>
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 right-6 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
            Your Independent City Guide
          </p>
          <h1 className="font-heading text-4xl leading-tight text-ink md:text-7xl">
            You know the rituals.
            <br />
            <span className="text-sage">We help with everything beyond them.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-light md:text-xl">
            For those who already know the core of Makkah — this guide handles
            everything else. Ways to move through the city beyond the obvious.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/experiences" size="lg">
              Browse Experiences
            </Button>
            <Button href="/where-to-stay" variant="outline" size="lg">
              Where to Stay
            </Button>
          </div>
        </div>

        {/* Trust signal */}
        <p className="mt-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-light/50">
          Independent · Local · Opinionated
        </p>

        {/* Who this is for / not for */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-8 text-left sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg text-ink">This is for you if…</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-light">
              <li>You&apos;ve already performed Umrah</li>
              <li>You&apos;re looking to explore the city</li>
              <li>You value honest recommendations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg text-ink">This isn&apos;t for you if…</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-light">
              <li>You&apos;re getting to grips with your first Umrah</li>
              <li>You&apos;re looking for fiqh, rulings or ritual guidance</li>
              <li>You already have a full itinerary with a tour group</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sage/5" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gold/5" />
    </section>
  );
}
