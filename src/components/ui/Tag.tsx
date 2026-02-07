import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-block rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
      {children}
    </span>
  );
}
