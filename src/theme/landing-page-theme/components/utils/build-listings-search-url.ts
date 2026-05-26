type ListingsSearchParams = {
  categorySlug: string;
  cityId: number;
};

export function buildListingsSearchUrl(
  baseUrl: string,
  { categorySlug, cityId }: ListingsSearchParams,
): string {
  if (!baseUrl?.trim()) {
    return '';
  }

  try {
    const url = new URL(baseUrl);
    url.searchParams.set('query', '');
    url.searchParams.set('filters[category]', categorySlug);
    url.searchParams.set('filters[city_id]', String(cityId));
    return url.toString();
  } catch {
    return '';
  }
}
