import { defineConfig, defineCollection, s } from "velite";

const experiences = defineCollection({
  name: "Experience",
  pattern: "experiences/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    slug: s.slug("experiences"),
    category: s.enum([
      "spiritual-reflective",
      "historical-makkah",
      "nature-stillness",
      "everyday-makkah",
    ]),
    duration: s.string(),
    bestTime: s.string().optional(),
    difficulty: s.string().optional(),
    familyFriendly: s.boolean().default(true),
    cost: s.enum(["free", "$", "$$", "$$$"]).default("free"),
    location: s.string(),
    coverImage: s.string(),
    featured: s.boolean().default(false),
    publishedAt: s.string(),
    seoDescription: s.string(),
    body: s.mdx(),
  }),
});

const itineraries = defineCollection({
  name: "Itinerary",
  pattern: "itineraries/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    slug: s.slug("itineraries"),
    duration: s.enum(["quick", "half-day", "full-day", "multi-day"]),
    durationLabel: s.string(),
    audience: s.enum(["solo", "couple", "family", "group", "any"]).default("any"),
    pace: s.string(),
    stops: s
      .array(
        s.object({
          time: s.string(),
          title: s.string(),
          description: s.string(),
          location: s.string().optional(),
          linkedExperience: s.string().optional(),
        })
      )
      .default([]),
    coverImage: s.string(),
    featured: s.boolean().default(false),
    publishedAt: s.string(),
    seoDescription: s.string(),
    body: s.mdx(),
  }),
});

const stays = defineCollection({
  name: "Stay",
  pattern: "stays/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    slug: s.slug("stays"),
    feel: s.enum([
      "very-close",
      "budget-conscious",
      "family-friendly",
      "quiet-grounding",
    ]),
    feelLabel: s.string(),
    distanceToHaram: s.string(),
    walkingMinutes: s.number(),
    priceRange: s.string(),
    priceNote: s.string().optional(),
    pros: s.array(s.string()).default([]),
    cons: s.array(s.string()).default([]),
    bestFor: s.array(s.string()).default([]),
    coverImage: s.string(),
    featured: s.boolean().default(false),
    publishedAt: s.string(),
    seoDescription: s.string(),
    body: s.mdx(),
  }),
});

const eats = defineCollection({
  name: "Eat",
  pattern: "eats/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string(),
    slug: s.slug("eats"),
    category: s.enum([
      "near-haram",
      "worth-the-trip",
      "clean-meals",
      "makkah-markets",
      "post-fajr-breakfast",
      "local-kitchen-delivery",
    ]),
    cuisine: s.string(),
    location: s.string(),
    priceRange: s.string(),
    bestForTag: s.string().optional(),
    skipIf: s.string().optional(),
    distanceFromHaram: s.string().optional(),
    bestFor: s.array(s.string()).default([]),
    hours: s.string().optional(),
    mustTry: s.string().optional(),
    coverImage: s.string(),
    featured: s.boolean().default(false),
    publishedAt: s.string(),
    seoDescription: s.string(),
    body: s.mdx(),
  }),
});

const pages = defineCollection({
  name: "Page",
  pattern: "pages/**/*.mdx",
  schema: s.object({
    title: s.string(),
    subtitle: s.string().optional(),
    slug: s.slug("pages"),
    coverImage: s.string().optional(),
    publishedAt: s.string(),
    seoDescription: s.string(),
    body: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { experiences, itineraries, stays, eats, pages },
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
