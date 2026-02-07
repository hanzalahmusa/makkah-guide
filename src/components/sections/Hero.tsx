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
      {/* Hero with overlay text */}
      <div className="relative h-[85vh] min-h-[500px] w-full">
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
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white" />

        {/* Overlay text content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/90 drop-shadow-md">
            Your Independent City Guide
          </p>
          <h1 className="max-w-4xl text-center font-heading text-4xl leading-tight text-white drop-shadow-lg md:text-7xl">
            You know the rituals.
            <br />
            <span className="text-white/80">We help with everything beyond them.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-white/80 drop-shadow-md md:text-xl">
            For those who already know the core of Makkah — this guide handles
            everything else. Ways to move through the city beyond the obvious.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/experiences" size="lg">
              Browse Experiences
            </Button>
            <Button href="/where-to-stay" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-ink">
              Where to Stay
            </Button>
          </div>
        </div>

        {/* Caption */}
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-light/60">
            {heroImages[current].alt}
          </p>
        </div>
        {/* Dots */}
        <div className="absolute bottom-20 right-6 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? "bg-ink" : "bg-ink/30"
              }`}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-24 md:py-32">
        {/* Trust signal */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-light/50">
          Independent · Local · Opinionated
        </p>

        {/* Who this is for / not for */}
        <div className="mx-auto mt-16 grid max-w-2xl gap-8 text-left sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg text-ink">This is for you if…</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-light">
              <li>You&apos;ve <strong>already</strong> performed Umrah</li>
              <li>You&apos;re looking to <strong>explore</strong> the city</li>
              <li>You value <strong>honest</strong> recommendations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg text-ink">This isn&apos;t for you if…</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-light">
              <li>You&apos;re getting to grips with your <strong>first Umrah</strong></li>
              <li>You&apos;re looking for fiqh, rulings or <strong>ritual guidance</strong></li>
              <li>You already have a full <strong>itinerary</strong> with a tour group</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
