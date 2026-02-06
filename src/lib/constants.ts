export const SITE_NAME = "Makkah Guide";
export const SITE_DESCRIPTION =
  "You know the rituals. We help with everything beyond them.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://makkahguide.com";

export const NAV_LINKS = [
  { label: "Start Here", href: "/start-here" },
  { label: "Experiences", href: "/experiences" },
  { label: "Where to Stay", href: "/where-to-stay" },
  { label: "Where to Eat", href: "/where-to-eat" },
  { label: "Getting Around", href: "/getting-around" },
  { label: "Practical Wisdom", href: "/practical-wisdom" },
] as const;

export const MOBILE_NAV_GROUPS = [
  {
    label: "Explore",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Itineraries", href: "/itineraries" },
      { label: "Where to Stay", href: "/where-to-stay" },
      { label: "Where to Eat", href: "/where-to-eat" },
    ],
  },
  {
    label: "Know",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "Getting Around", href: "/getting-around" },
      { label: "Practical Wisdom", href: "/practical-wisdom" },
      { label: "About", href: "/about" },
    ],
  },
] as const;

export const EXPERIENCE_CATEGORIES = [
  "spiritual-depth",
  "history-heritage",
  "nature-reflection",
  "culture-daily-life",
] as const;

export const STAY_FEELS = [
  "quiet-grounding",
  "close-convenient",
  "family-friendly",
  "long-stay",
  "budget",
] as const;

export const EAT_CATEGORIES = [
  "near-haram",
  "local-favourite",
  "late-night",
  "family",
  "quick-bite",
  "special-occasion",
] as const;

export const ITINERARY_DURATIONS = [
  "quick",
  "half-day",
  "full-day",
  "multi-day",
] as const;

export const COST_LEVELS = ["free", "$", "$$", "$$$"] as const;
