import {
  ModuleFields,
  FieldGroup,
  TextField,
  RichTextField,
  ImageField,
  RichTextFieldType,
} from '@hubspot/cms-components/fields';
import headshot1 from '../../../images/headshot_1.png';
import headshot2 from '../../../images/headshot_2.png';
import headshot3 from '../../../images/headshot_3.png';

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

const quoteDefault =
  '<p>This product transformed how our team works. We saw measurable results within the first month.</p>';

const headshotDefault = (src: string) => ({
  src,
  alt: '',
});

const testimonialDefault = (headshotSrc: string, nameAndCompany: string) => ({
  headshot: headshotDefault(headshotSrc),
  quote: quoteDefault,
  nameAndCompany,
});

const testimonialOneDefault = testimonialDefault(headshot1, 'Alex Morgan, Northwind Travel');
const testimonialTwoDefault = testimonialDefault(headshot2, 'Jordan Lee, Summit Hotels');
const testimonialThreeDefault = testimonialDefault(headshot3, 'Taylor Brooks, Harbor Resorts');

export const fields = (
  <ModuleFields>
    <FieldGroup label="Testimonial 1" name="testimonialOne" default={testimonialOneDefault}>
      <ImageField
        name="headshot"
        label="Headshot"
        resizable={true}
        default={headshotDefault(headshot1)}
      />
      <RichTextField
        name="quote"
        label="Quote"
        enabledFeatures={textFeatureSet}
        default={quoteDefault}
      />
      <TextField
        name="nameAndCompany"
        label="Name and company"
        default={testimonialOneDefault.nameAndCompany}
      />
    </FieldGroup>
    <FieldGroup label="Testimonial 2" name="testimonialTwo" default={testimonialTwoDefault}>
      <ImageField
        name="headshot"
        label="Headshot"
        resizable={true}
        default={headshotDefault(headshot2)}
      />
      <RichTextField
        name="quote"
        label="Quote"
        enabledFeatures={textFeatureSet}
        default={quoteDefault}
      />
      <TextField
        name="nameAndCompany"
        label="Name and company"
        default={testimonialTwoDefault.nameAndCompany}
      />
    </FieldGroup>
    <FieldGroup label="Testimonial 3" name="testimonialThree" default={testimonialThreeDefault}>
      <ImageField
        name="headshot"
        label="Headshot"
        resizable={true}
        default={headshotDefault(headshot3)}
      />
      <RichTextField
        name="quote"
        label="Quote"
        enabledFeatures={textFeatureSet}
        default={quoteDefault}
      />
      <TextField
        name="nameAndCompany"
        label="Name and company"
        default={testimonialThreeDefault.nameAndCompany}
      />
    </FieldGroup>
  </ModuleFields>
);
