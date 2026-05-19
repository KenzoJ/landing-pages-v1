import { Island } from '@hubspot/cms-components';
import { ModuleFields } from '@hubspot/cms-components/fields';
// @ts-expect-error -- ?island not typed
import LandingPageRevealIsland from './islands/LandingPageRevealIsland.js?island';

export function Component() {
  return <Island hydrateOn="load" module={LandingPageRevealIsland} />;
}

export const fields = <ModuleFields>{null}</ModuleFields>;

export const meta = {
  label: 'Landing Page Reveal',
};
