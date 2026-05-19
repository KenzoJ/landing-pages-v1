import { ModuleFields, FieldGroup } from '@hubspot/cms-components/fields';
import {
  galleryItemNestedFields,
  galleryItemDefault,
} from '../GalleryItem/fields.js';

export const fields = (
  <ModuleFields>
    <FieldGroup label="Section 1" name="sectionOne" default={galleryItemDefault}>
      {galleryItemNestedFields}
    </FieldGroup>
    <FieldGroup label="Section 2" name="sectionTwo" default={galleryItemDefault}>
      {galleryItemNestedFields}
    </FieldGroup>
    <FieldGroup label="Section 3" name="sectionThree" default={galleryItemDefault}>
      {galleryItemNestedFields}
    </FieldGroup>
  </ModuleFields>
);
