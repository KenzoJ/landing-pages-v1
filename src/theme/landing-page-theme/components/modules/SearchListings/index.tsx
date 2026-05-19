import { Island } from '@hubspot/cms-components';
// @ts-expect-error -- ?island not typed
import SearchListingsIsland from './islands/SearchListingsIsland.js?island';
import type { SearchListingsFieldValues } from './islands/SearchListingsIsland.js';

type SearchListingsProps = {
  fieldValues: SearchListingsFieldValues;
};

export function SearchListings({ fieldValues }: SearchListingsProps) {
  return (
    <Island hydrateOn="load" module={SearchListingsIsland} fieldValues={fieldValues} />
  );
}

export type { SearchListingsFieldValues };
export { fields, searchListingsDefault } from './fields.js';
