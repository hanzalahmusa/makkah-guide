import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import {
  getAllExperiences,
  getAllItineraries,
  getAllStays,
  getAllEats,
} from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/experiences",
    "/itineraries",
    "/where-to-stay",
    "/where-to-eat",
    "/about",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const experiencePages = getAllExperiences().map((e) => ({
    url: `${SITE_URL}/experiences/${e.slug}`,
    lastModified: new Date(e.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const itineraryPages = getAllItineraries().map((i) => ({
    url: `${SITE_URL}/itineraries/${i.slug}`,
    lastModified: new Date(i.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const stayPages = getAllStays().map((s) => ({
    url: `${SITE_URL}/where-to-stay/${s.slug}`,
    lastModified: new Date(s.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eatPages = getAllEats().map((e) => ({
    url: `${SITE_URL}/where-to-eat/${e.slug}`,
    lastModified: new Date(e.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...experiencePages,
    ...itineraryPages,
    ...stayPages,
    ...eatPages,
  ];
}
