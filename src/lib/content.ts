import { experiences, itineraries, stays, eats, pages } from "#velite";

// Experiences
export function getAllExperiences() {
  return experiences.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedExperiences() {
  return getAllExperiences().filter((e) => e.featured);
}

export function getExperiencesByCategory(category: string) {
  return getAllExperiences().filter((e) => e.category === category);
}

export function getExperienceBySlug(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

// Itineraries
export function getAllItineraries() {
  return itineraries.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedItineraries() {
  return getAllItineraries().filter((i) => i.featured);
}

export function getItineraryBySlug(slug: string) {
  return itineraries.find((i) => i.slug === slug);
}

// Stays
export function getAllStays() {
  return stays.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedStays() {
  return getAllStays().filter((s) => s.featured);
}

export function getStaysByFeel(feel: string) {
  return getAllStays().filter((s) => s.feel === feel);
}

export function getStayBySlug(slug: string) {
  return stays.find((s) => s.slug === slug);
}

// Eats
export function getAllEats() {
  return eats.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedEats() {
  return getAllEats().filter((e) => e.featured);
}

export function getEatsByCategory(category: string) {
  return getAllEats().filter((e) => e.category === category);
}

export function getEatBySlug(slug: string) {
  return eats.find((e) => e.slug === slug);
}

// Pages
export function getPageBySlug(slug: string) {
  return pages.find((p) => p.slug === slug);
}
