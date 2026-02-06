import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "sage" | "gold" | "clay";
}

const variants = {
  default: "bg-sand-dark text-ink-light",
  sage: "bg-sage/10 text-sage-dark",
  gold: "bg-gold/10 text-gold",
  clay: "bg-clay/10 text-clay",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
