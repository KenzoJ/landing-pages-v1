import {
  ModuleFields,
  FieldGroup,
  TextField,
  LinkField,
  LinkFieldType,
} from '@hubspot/cms-components/fields';

const titleDefault = 'Section Title';
const locationDefault = 'Location';

const sectionLinkDefault: LinkFieldType['default'] = {
  open_in_new_tab: false,
  url: {
    href: 'https://example.com',
    type: 'EXTERNAL',
    content_id: null,
  },
};

const sectionGroupDefault = {
  title: titleDefault,
  location: locationDefault,
  sectionLink: sectionLinkDefault,
};

const linkFieldSupportedTypes = [
  'EXTERNAL',
 ] as const;

export const fields = (
  <ModuleFields>
    <FieldGroup label="Section 1" name="sectionOne" default={sectionGroupDefault}>
      <TextField name="title" label="Title" default={titleDefault} />
      <TextField name="location" label="Location" default={locationDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
    <FieldGroup label="Section 2" name="sectionTwo" default={sectionGroupDefault}>
      <TextField name="title" label="Title" default={titleDefault} />
      <TextField name="location" label="Location" default={locationDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
    <FieldGroup label="Section 3" name="sectionThree" default={sectionGroupDefault}>
      <TextField name="title" label="Title" default={titleDefault} />
      <TextField name="location" label="Location" default={locationDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
  </ModuleFields>
);
