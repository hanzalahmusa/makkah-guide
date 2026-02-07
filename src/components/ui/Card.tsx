"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { Badge } from "./Badge";

interface CardProps {
  href: string;
  title: string;
  subtitle: string;
  coverImage: string;
  badge?: string;
  meta?: ReactNode;
  featured?: boolean;
  index?: number;
}

export function Card({
  href,
  title,
  subtitle,
  coverImage,
  badge,
  meta,
  featured,
  index = 0,
}: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={featured ? "h-full md:col-span-2" : "h-full"}
    >
      <Link
        href={href}
        className={`group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          featured ? "md:grid md:grid-cols-[2fr_1fr]" : ""
        }`}
      >
        <div
          className={`relative shrink-0 overflow-hidden ${
            featured ? "aspect-[16/9] md:aspect-auto" : "aspect-[3/2]"
          }`}
        >
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          />
          {badge && (
            <div className="absolute left-4 top-4">
              <Badge>{badge}</Badge>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-heading text-xl text-ink transition-colors group-hover:text-gold">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-light">
            {subtitle}
          </p>
          {meta && <div className="mt-auto pt-4">{meta}</div>}
        </div>
      </Link>
    </motion.div>
  );
}
