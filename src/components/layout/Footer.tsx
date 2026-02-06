import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

const footerLinks = [
  {
    heading: "Explore",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Itineraries", href: "/itineraries" },
      { label: "Where to Stay", href: "/where-to-stay" },
      { label: "Where to Eat", href: "/where-to-eat" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "Getting Around", href: "/getting-around" },
      { label: "Practical Wisdom", href: "/practical-wisdom" },
      { label: "About", href: "/about" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Free Guide (PDF)", href: "/free-guide" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sand-dark bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link href="/" className="font-heading text-2xl">
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              You know the rituals. We help with everything beyond them. An
              independent city guide for repeat Umrah visitors.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with care for the Ummah.
          </p>
        </div>
      </div>
    </footer>
  );
}
