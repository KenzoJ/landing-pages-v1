import { ModuleFields } from '@hubspot/cms-components/fields';

export function Component() {
  return (
    <div>
      <div />
      <div aria-hidden="true" />
    </div>
  );
}

export const fields = <ModuleFields>{null}</ModuleFields>;

export const meta = {
  label: 'Data',
};
