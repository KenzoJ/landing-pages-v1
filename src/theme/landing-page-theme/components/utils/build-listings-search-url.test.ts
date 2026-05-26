import { describe, test, expect } from 'vitest';
import { buildListingsSearchUrl } from './build-listings-search-url.js';

describe('buildListingsSearchUrl', () => {
  test('builds URL with encoded filter params and empty query', () => {
    const result = buildListingsSearchUrl('https://staging.greenlightgo.tv/listings', {
      categorySlug: 'studios',
      cityId: 94,
    });

    expect(result).toBe(
      'https://staging.greenlightgo.tv/listings?query=&filters%5Bcategory%5D=studios&filters%5Bcity_id%5D=94',
    );
  });

  test('includes empty query param', () => {
    const result = buildListingsSearchUrl('https://example.com/listings', {
      categorySlug: 'studios',
      cityId: 12,
    });

    const parsed = new URL(result);
    expect(parsed.searchParams.get('query')).toBe('');
  });

  test('returns empty string for missing base URL', () => {
    expect(
      buildListingsSearchUrl('', { categorySlug: 'studios', cityId: 94 }),
    ).toBe('');
  });

  test('returns empty string for invalid base URL', () => {
    expect(
      buildListingsSearchUrl('not-a-url', { categorySlug: 'studios', cityId: 94 }),
    ).toBe('');
  });
});
