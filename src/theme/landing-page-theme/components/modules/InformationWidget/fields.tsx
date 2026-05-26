import {
  ModuleFields,
  RepeatedFieldGroup,
  RichTextField,
  RichTextFieldType,
} from '@hubspot/cms-components/fields';

const textFeatureSet = [
  'block',
  'alignment',
  'indents',
  'lists',
  'standard_emphasis',
  'advanced_emphasis',
  'link',
  'personalize',
  'nonbreaking_space',
  'source_code',
  'visual_blocks',
] as RichTextFieldType['enabledFeatures'];

const sectionDefault = {
  content: '<p>Content for this section.</p>',
};

const sectionsDefault = [
  { content: '<p>Flexible production office spaces designed for focused work and team collaboration.</p>' },
  { content: '<p>Post-production edit suites equipped for editing, color, and finishing workflows.</p>' },
  { content: '<p>Screening rooms built for client reviews and internal playback.</p>' },
  { content: '<p>Creative studio environments with natural light and production-ready amenities.</p>' },
  { content: '<p>Cutting-edge technology infrastructure to support modern production needs.</p>' },
  { content: '<p>Full grip and electric packages for on-set and stage production.</p>' },
  { content: '<p>Expert consultation to plan and execute your next project.</p>' },
];

export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
      label="Sections"
      name="sections"
      occurrence={{
        min: 7,
        max: 7,
        default: 7,
      }}
      default={sectionsDefault}
    >
      <RichTextField
        name="content"
        label="Content"
        enabledFeatures={textFeatureSet}
        default={sectionDefault.content}
      />
    </RepeatedFieldGroup>
  </ModuleFields>
);
