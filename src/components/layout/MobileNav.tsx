"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { MOBILE_NAV_GROUPS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-sand"
        >
          <div className="flex h-full flex-col px-6 py-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={onClose}
                className="font-heading text-2xl text-ink"
              >
                Makkah Guide
              </Link>
              <button onClick={onClose} aria-label="Close menu">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav groups */}
            <div className="mt-12 flex flex-1 flex-col gap-10">
              {MOBILE_NAV_GROUPS.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-light">
                    {group.label}
                  </p>
                  <div className="flex flex-col gap-4">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="font-heading text-2xl text-ink transition-colors hover:text-sage"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pb-8"
            >
              <Link
                href="/free-guide"
                onClick={onClose}
                className="block w-full rounded-full bg-sage py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-sage-dark"
              >
                Get the Free Guide
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
