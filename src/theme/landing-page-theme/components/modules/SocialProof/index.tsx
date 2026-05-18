import { Island } from '@hubspot/cms-components';
import { ImageFieldType, RichTextFieldType, TextFieldType } from '@hubspot/cms-components/fields';
// @ts-expect-error -- ?island not typed
import SocialProofIsland from './islands/SocialProofIsland.js?island';

type TestimonialFields = {
  headshot: ImageFieldType['default'];
  quote: RichTextFieldType['default'];
  nameAndCompany: TextFieldType['default'];
};

type SocialProofFieldValues = {
  testimonialOne: TestimonialFields;
  testimonialTwo: TestimonialFields;
  testimonialThree: TestimonialFields;
};

type SocialProofProps = {
  fieldValues: SocialProofFieldValues;
};

export function Component({ fieldValues }: SocialProofProps) {
  return (
    <Island hydrateOn="load" module={SocialProofIsland} fieldValues={fieldValues} />
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'Social Proof',
};
