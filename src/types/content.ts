export type ExperienceCategory =
  | "spiritual"
  | "cultural"
  | "reflective"
  | "practical"
  | "culinary"
  | "nature";

export type StayFeel =
  | "quiet-grounding"
  | "close-convenient"
  | "family-friendly"
  | "long-stay"
  | "budget";

export type EatCategory =
  | "near-haram"
  | "local-favourite"
  | "late-night"
  | "family"
  | "quick-bite"
  | "special-occasion";

export type ItineraryDuration = "quick" | "half-day" | "full-day" | "multi-day";

export type CostLevel = "free" | "$" | "$$" | "$$$";

export type Audience = "solo" | "couple" | "family" | "group" | "any";

export interface Stop {
  time: string;
  title: string;
  description: string;
  location?: string;
  linkedExperience?: string;
}
