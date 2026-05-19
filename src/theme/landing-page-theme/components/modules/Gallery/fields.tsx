import {
  ModuleFields,
  FieldGroup,
  TextField,
  LinkField,
  LinkFieldType,
  ImageField,
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

/**
 * Empty image default here avoids dev-only `/@fs/...` URLs from bundled imports in fields JSON.
 * On `landing-page.hubl.html`, pass theme assets via HubL like Intro’s `hero_image`:
 * `get_asset_url("../images/vertical-placeholder-gray.jpg")`.
 */
const imageDefault = {
  src: '',
  alt: '',
};

const sectionGroupDefault = {
  title: titleDefault,
  location: locationDefault,
  sectionLink: sectionLinkDefault,
  image: imageDefault,
};

const linkFieldSupportedTypes = [
  'EXTERNAL',
 ] as const;

export const fields = (
  <ModuleFields>
    <FieldGroup label="Section 1" name="sectionOne" default={sectionGroupDefault}>
      <TextField name="title" label="Title" default={titleDefault} />
      <TextField name="location" label="Location" default={locationDefault} />
      <ImageField
        name="image"
        label="Image"
        required={false}
        locked={false}
        resizable={true}
        showLoading={false}
        default={imageDefault}
      />
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
      <ImageField
        name="image"
        label="Image"
        required={false}
        locked={false}
        resizable={true}
        showLoading={false}
        default={imageDefault}
      />
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
      <ImageField
        name="image"
        label="Image"
        required={false}
        locked={false}
        resizable={true}
        showLoading={false}
        default={imageDefault}
      />
      <LinkField
        name="sectionLink"
        label="Link"
        supportedTypes={[...linkFieldSupportedTypes]}
        default={sectionLinkDefault}
      />
    </FieldGroup>
  </ModuleFields>
);
