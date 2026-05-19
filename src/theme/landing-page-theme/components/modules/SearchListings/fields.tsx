import { TextField, FieldGroup } from '@hubspot/cms-components/fields';
import { ButtonContent } from '../../fieldLibrary/index.js';

export const studioPlaceholderDefault = 'Studios';
export const cityPlaceholderDefault = 'New York City';

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
  studioPlaceholder: studioPlaceholderDefault,
  cityPlaceholder: cityPlaceholderDefault,
  button: buttonDefault,
};

export const fields = (
  <>
    <TextField
      name="studioPlaceholder"
      label="Studio placeholder"
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
      />
    </FieldGroup>
  </>
);
