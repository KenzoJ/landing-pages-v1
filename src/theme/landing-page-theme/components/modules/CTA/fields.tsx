import { ModuleFields, TextField, FieldGroup } from '@hubspot/cms-components/fields';
import { ButtonContent } from '../../fieldLibrary/index.js';

export const fields = (
  <ModuleFields>
    <TextField
      name="headline"
      label="Headline"
      default="Ready to Get Started?"
    />
    <FieldGroup
      name="button"
      label="Button"
      default={{
        buttonContentText: 'Book Now',
        buttonContentLink: {
          open_in_new_tab: true,
        },
        buttonContentShowIcon: false,
        buttonContentIcon: {
          name: 'arrow-right',
        },
        buttonContentIconPosition: 'right',
      }}
    >
      <ButtonContent
        textDefault="Book Now"
        linkDefault={{
          open_in_new_tab: true,
        }}
      />
    </FieldGroup>
  </ModuleFields>
);
