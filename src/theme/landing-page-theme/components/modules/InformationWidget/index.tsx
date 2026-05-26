import { Island } from '@hubspot/cms-components';
import { RichTextFieldType } from '@hubspot/cms-components/fields';
// @ts-expect-error -- ?island not typed
import InformationWidgetIsland from './islands/InformationWidgetIsland.js?island';

type SectionFields = {
  content: RichTextFieldType['default'];
};

type InformationWidgetFieldValues = {
  sections: SectionFields[];
};

type InformationWidgetProps = {
  fieldValues: InformationWidgetFieldValues;
};

export function Component({ fieldValues }: InformationWidgetProps) {
  return (
    <Island hydrateOn="load" module={InformationWidgetIsland} fieldValues={fieldValues} />
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'Information Widget',
};
