import { TextFieldType } from '@hubspot/cms-components/fields';
import { TitleTextSection } from '../TitleText/index.js';

type TitleTextServicesFieldValues = {
  title: TextFieldType['default'];
  subtitle: TextFieldType['default'];
};

type TitleTextServicesProps = {
  fieldValues: TitleTextServicesFieldValues;
};

export function Component({ fieldValues }: TitleTextServicesProps) {
  return (
    <TitleTextSection fieldValues={fieldValues} revealId="title-text-services" />
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'Title Text (Services)',
};
