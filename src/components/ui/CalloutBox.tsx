import type { ReactNode } from "react";

interface CalloutBoxProps {
  children: ReactNode;
  variant?: "sage" | "gold" | "clay";
  title?: string;
}

const borderColors = {
  sage: "border-l-sage bg-sage/5",
  gold: "border-l-gold bg-gold/5",
  clay: "border-l-clay bg-clay/5",
};

export function CalloutBox({
  children,
  variant = "sage",
  title,
}: CalloutBoxProps) {
  return (
    <div
      className={`rounded-r-lg border-l-4 p-6 ${borderColors[variant]}`}
    >
      {title && (
        <p className="mb-2 font-heading text-lg text-ink">{title}</p>
      )}
      <div className="text-sm leading-relaxed text-ink-light">{children}</div>
    </div>
  );
}
