export type SearchCategory = {
  name: string;
  slug: string;
};

export type SearchCity = {
  id: number;
  name: string;
};

export type SearchMetadata = {
  categories: SearchCategory[];
  cities: SearchCity[];
};

export const MOCK_SEARCH_METADATA: SearchMetadata = {
  categories: [
    { name: 'Studios', slug: 'studios' },
    { name: 'Production Offices', slug: 'production-offices' },
    { name: 'Writers Rooms', slug: 'writers-rooms' },
    { name: 'Green Screen Studios', slug: 'green-screen-studios' },
    { name: 'Podcast Studios', slug: 'podcast-studios' },
    { name: 'Film Studios', slug: 'film-studios' },
    { name: 'Post Production Editorial', slug: 'post-production-editorial' },
    { name: 'AV Gear', slug: 'av-gear' },
    { name: 'REMI Production', slug: 'remi-production' },
    { name: 'Consultation', slug: 'consultation' },
  ],
  cities: [
    { id: 94, name: 'Atlanta' },
    { id: 78, name: 'Austin' },
    { id: 56, name: 'Houston' },
    { id: 12, name: 'Los Angeles' },
    { id: 33, name: 'Miami' },
    { id: 1, name: 'New York City' },
    { id: 67, name: 'St. Louis' },
  ],
};

export async function fetchSearchMetadata(): Promise<SearchMetadata> {
  // TODO: fetch(`${searchMetadataApiUrl}`)
  return Promise.resolve(MOCK_SEARCH_METADATA);
}
