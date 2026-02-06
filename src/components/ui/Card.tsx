import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { Badge } from "./Badge";

interface CardProps {
  href: string;
  title: string;
  subtitle: string;
  coverImage: string;
  badge?: string;
  meta?: ReactNode;
  featured?: boolean;
}

export function Card({
  href,
  title,
  subtitle,
  coverImage,
  badge,
  meta,
  featured,
}: CardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "md:col-span-2 md:grid md:grid-cols-[2fr_1fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/9] md:aspect-auto" : "aspect-[4/3]"
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
      <div className="p-6">
        <h3 className="font-heading text-xl text-ink transition-colors group-hover:text-sage">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-light">
          {subtitle}
        </p>
        {meta && <div className="mt-4">{meta}</div>}
      </div>
    </Link>
  );
}
