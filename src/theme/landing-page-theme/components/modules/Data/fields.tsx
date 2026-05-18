import { ModuleFields, TextField, FieldGroup } from '@hubspot/cms-components/fields';

const metricDefault = '15k+';
const descriptionDefault = 'Customers of Elevate';

const metricGroupDefault = {
  metric: metricDefault,
  description: descriptionDefault,
};

export const fields = (
  <ModuleFields>
    <FieldGroup label="Metric 1" name="metricOne" default={metricGroupDefault}>
      <TextField label="Metric value" name="metric" default={metricDefault} />
      <TextField label="Description" name="description" default={descriptionDefault} />
    </FieldGroup>
    <FieldGroup label="Metric 2" name="metricTwo" default={metricGroupDefault}>
      <TextField label="Metric value" name="metric" default={metricDefault} />
      <TextField label="Description" name="description" default={descriptionDefault} />
    </FieldGroup>
    <FieldGroup label="Metric 3" name="metricThree" default={metricGroupDefault}>
      <TextField label="Metric value" name="metric" default={metricDefault} />
      <TextField label="Description" name="description" default={descriptionDefault} />
    </FieldGroup>
  </ModuleFields>
);
