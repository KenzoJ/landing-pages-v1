import {
  ModuleFields,
  FieldGroup,
  TextField,
  LinkField,
  LinkFieldType,
} from '@hubspot/cms-components/fields';

const sectionTextDefault = 'Tell The Reader More';

const sectionLinkDefault: LinkFieldType['default'] = {
  open_in_new_tab: false,
  url: {
    href: 'https://example.com',
    type: 'EXTERNAL',
    content_id: null,
  },
};

const sectionGroupDefault = {
  text: sectionTextDefault,
  sectionLink: sectionLinkDefault,
};

const linkFieldSupportedTypes = [
  'EXTERNAL',
 ] as const;

export const fields = (
  <ModuleFields>
    <FieldGroup label="Section 1" name="sectionOne" default={sectionGroupDefault}>
      <TextField name="text" label="Text" default={sectionTextDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
    <FieldGroup label="Section 2" name="sectionTwo" default={sectionGroupDefault}>
      <TextField name="text" label="Text" default={sectionTextDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
    <FieldGroup label="Section 3" name="sectionThree" default={sectionGroupDefault}>
      <TextField name="text" label="Text" default={sectionTextDefault} />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
  </ModuleFields>
);
