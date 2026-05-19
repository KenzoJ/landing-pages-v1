import { ModuleFields, TextField, FieldGroup } from '@hubspot/cms-components/fields';

const metricOneDefault = {
  metric: '300+',
  description: 'Large Projects',
};

const metricTwoDefault = {
  metric: '$18M+',
  description: 'Total Bookings to Date',
};

const metricThreeDefault = {
  metric: '500+',
  description: 'Partner Vendors',
};

export const fields = (
  <ModuleFields>
    <FieldGroup label="Metric 1" name="metricOne" default={metricOneDefault}>
      <TextField label="Metric value" name="metric" default={metricOneDefault.metric} />
      <TextField label="Description" name="description" default={metricOneDefault.description} />
    </FieldGroup>
    <FieldGroup label="Metric 2" name="metricTwo" default={metricTwoDefault}>
      <TextField label="Metric value" name="metric" default={metricTwoDefault.metric} />
      <TextField label="Description" name="description" default={metricTwoDefault.description} />
    </FieldGroup>
    <FieldGroup label="Metric 3" name="metricThree" default={metricThreeDefault}>
      <TextField label="Metric value" name="metric" default={metricThreeDefault.metric} />
      <TextField label="Description" name="description" default={metricThreeDefault.description} />
    </FieldGroup>
  </ModuleFields>
);
