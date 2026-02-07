import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  primary: "bg-sage text-white hover:bg-sage-dark",
  secondary: "bg-gold text-white hover:bg-gold/90",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-sand",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-ink",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
