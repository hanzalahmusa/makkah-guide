"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const heroImages = [
  { src: "/images/shared/hero-hera.jpg", alt: "Trail to Cave Hira" },
  { src: "/images/shared/hero-wadi.jpg", alt: "Masjid al-Haram" },
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
      <div className="relative h-[300px] w-full md:h-[500px]">
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
        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-ink">
            Your Independent City Guide
          </p>
          <h1 className="font-heading text-4xl leading-tight text-ink md:text-7xl">
            You know the rituals.
            <br />
            <span className="text-sage">We help with everything beyond them.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-light md:text-xl">
            For those who already know the core of Makkah — this guide handles
            everything else. Discover ways to move through the city beyond the obvious.
          </p>
          <div className="mt-10">
            <Button href="/experiences" size="lg">
              Browse Experiences
            </Button>
          </div>
        </div>

        {/* Trust signal */}
        <p className="mt-12 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-light/50">
          Independent · Local · Opinionated
        </p>

        {/* Who this is for / not for */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8">
            <div className="mb-5 flex flex-col items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold">
                  <path d="M13.3 4.3L6 11.6 2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <h3 className="font-heading text-lg text-ink">This is for you if…</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-gold">&#10003;</span>
                <span>You&apos;ve <strong>already</strong> performed Umrah</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-gold">&#10003;</span>
                <span>You&apos;re looking to <strong>explore</strong> the city</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-gold">&#10003;</span>
                <span>You value <strong>honest</strong> recommendations</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-sand-dark bg-white p-8">
            <div className="mb-5 flex flex-col items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand-dark">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-ink-light">
                  <path d="M11 3L3 11M3 3l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="font-heading text-lg text-ink">This isn&apos;t for you if…</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-ink-light/40">&times;</span>
                <span>You&apos;re getting to grips with your <strong>first Umrah</strong></span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-ink-light/40">&times;</span>
                <span>You&apos;re looking for fiqh, rulings or <strong>ritual guidance</strong></span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-light">
                <span className="mt-px shrink-0 text-ink-light/40">&times;</span>
                <span>You already have a full <strong>itinerary</strong> with a tour group</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
