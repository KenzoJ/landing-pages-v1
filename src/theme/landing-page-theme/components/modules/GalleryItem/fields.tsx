import {
  ModuleFields,
  TextField,
  LinkField,
  ImageField,
  LinkFieldType,
} from '@hubspot/cms-components/fields';
import placeholderImage from '../../../images/vertical-placeholder-gray.jpg';

export const titleDefault = 'Section Title';
export const locationDefault = 'Location';

export const sectionLinkDefault: LinkFieldType['default'] = {
  open_in_new_tab: false,
  url: {
    href: 'https://example.com',
    type: 'EXTERNAL',
    content_id: null,
  },
};

export const imageDefault = {
  src: placeholderImage,
  alt: '',
};

export const galleryItemDefault = {
  title: titleDefault,
  location: locationDefault,
  image: imageDefault,
  sectionLink: sectionLinkDefault,
};

/** Use inside another module's FieldGroup (e.g. Gallery). Not wrapped in ModuleFields. */
export const galleryItemNestedFields = (
  <>
    <TextField name="title" label="Title" default={titleDefault} />
    <TextField name="location" label="Location" default={locationDefault} />
    <ImageField
      name="image"
      label="Image"
      resizable={true}
      default={imageDefault}
    />
    <LinkField
      name="sectionLink"
      label="Link"
      supportedTypes={['EXTERNAL']}
      default={sectionLinkDefault}
    />
  </>
);

export const fields = <ModuleFields>{galleryItemNestedFields}</ModuleFields>;
