import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Title"
      default="Curated Top picks in LOCATION"
    />
    <TextField name="subtitle" label="Subtitle" default="" />
  </ModuleFields>
);
