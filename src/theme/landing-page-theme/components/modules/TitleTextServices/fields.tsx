import { ModuleFields, TextField } from '@hubspot/cms-components/fields';

export const fields = (
  <ModuleFields>
    <TextField
      name="title"
      label="Title"
      default="We have you covered"
    />
    <TextField
      name="subtitle"
      label="Subtitle"
      default="Book a variety of services"
    />
  </ModuleFields>
);
