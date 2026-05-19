import { ModuleFields, TextField, FieldGroup } from '@hubspot/cms-components/fields';
import { ButtonContent } from '../../fieldLibrary/index.js';

export const buttonDefault = {
  buttonContentText: 'Book New York Studios',
  buttonContentLink: {
    open_in_new_tab: false,
  },
  buttonContentShowIcon: false,
  buttonContentIcon: {
    name: 'arrow-right',
  },
  buttonContentIconPosition: 'right',
};

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Headline"
      default="Let us do the hard work for you"
    />
    <FieldGroup name="button" label="Button" default={buttonDefault}>
      <ButtonContent
        textDefault="Book New York Studios"
        linkDefault={{
          open_in_new_tab: false,
        }}
      />
    </FieldGroup>
  </ModuleFields>
);
