import { ModuleFields, TextField, FieldGroup, AdvancedVisibility } from '@hubspot/cms-components/fields';
import { ButtonContent } from '../../fieldLibrary/index.js';

export const listingsBaseUrlDefault = 'https://staging.greenlightgo.tv/listings';
export const studioPlaceholderDefault = 'Studios';
export const cityPlaceholderDefault = 'New York City';

function createHiddenLinkVisibility(listingsBaseUrlPath: string): AdvancedVisibility {
  return {
    boolean_operator: 'AND',
    criteria: [
      {
        controlling_field_path: listingsBaseUrlPath,
        controlling_value_regex: '^__never_visible__$',
        operator: 'MATCHES_REGEX',
      },
    ],
  };
}

export const buttonDefault = {
  buttonContentText: 'Explore',
  buttonContentLink: {
    open_in_new_tab: false,
  },
  buttonContentShowIcon: false,
  buttonContentIcon: {
    name: 'arrow-right',
  },
  buttonContentIconPosition: 'right',
};

export const searchListingsDefault = {
  listingsBaseUrl: listingsBaseUrlDefault,
  studioPlaceholder: studioPlaceholderDefault,
  cityPlaceholder: cityPlaceholderDefault,
  button: buttonDefault,
};

type SearchListingsNestedFieldsOptions = {
  /** Module-root path to listingsBaseUrl (e.g. searchListings.listingsBaseUrl in Intro). */
  listingsBaseUrlPath?: string;
};

/** Use inside another module's FieldGroup (e.g. Intro). Not wrapped in ModuleFields. */
export function searchListingsNestedFields({
  listingsBaseUrlPath = 'listingsBaseUrl',
}: SearchListingsNestedFieldsOptions = {}) {
  return (
    <>
      <TextField
        name="listingsBaseUrl"
        label="Listings base URL"
        default={listingsBaseUrlDefault}
      />
      <TextField
        name="studioPlaceholder"
        label="Category placeholder"
        default={studioPlaceholderDefault}
      />
      <TextField
        name="cityPlaceholder"
        label="City placeholder"
        default={cityPlaceholderDefault}
      />
      <FieldGroup name="button" label="Button" default={buttonDefault}>
        <ButtonContent
          textDefault="Explore"
          linkDefault={{
            open_in_new_tab: false,
          }}
          linkVisibility={createHiddenLinkVisibility(listingsBaseUrlPath)}
        />
      </FieldGroup>
    </>
  );
}

/** Root fields when SearchListings is rendered as its own module (dev server / CMS). */
export const fields = <ModuleFields>{searchListingsNestedFields()}</ModuleFields>;
