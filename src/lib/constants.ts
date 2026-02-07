export const SITE_NAME = "Experience Makkah";
export const SITE_DESCRIPTION =
  "You know the rituals. We help with everything beyond them.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://experiencemakkah.com";

export const NAV_LINKS = [
  { label: "Experiences", href: "/experiences" },
  { label: "Where to Stay", href: "/where-to-stay" },
  { label: "Where to Eat", href: "/where-to-eat" },
  { label: "About", href: "/about" },
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
    label: "More",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
] as const;

export const EXPERIENCE_CATEGORIES = [
  "spiritual-reflective",
  "historical-makkah",
  "nature-stillness",
  "everyday-makkah",
] as const;

export const STAY_FEELS = [
  "very-close",
  "budget-conscious",
  "family-friendly",
  "quiet-grounding",
] as const;

export const EAT_CATEGORIES = [
  "near-haram",
  "worth-the-trip",
  "clean-meals",
  "makkah-markets",
] as const;

export const ITINERARY_DURATIONS = [
  "quick",
  "half-day",
  "full-day",
  "multi-day",
] as const;

export const COST_LEVELS = ["free", "$", "$$", "$$$"] as const;
