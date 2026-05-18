import {
  ModuleFields,
  TextField,
  RichTextField,
  BackgroundImageField,
} from '@hubspot/cms-components/fields';
import { RichText } from '@hubspot/cms-components';
import placeholderImage from '../../../images/placeholder.png';
import type { CSSPropertiesMap } from '../../types/components.js';
import styles from './intro.module.css';

function toCssBackgroundPosition(position?: string) {
  if (!position) return 'center center';
  return position.toLowerCase().replace(/_/g, ' ');
}

function getBackgroundCssVars(bgImage?: {
  src?: string;
  background_position?: string;
  background_size?: string;
}): CSSPropertiesMap | undefined {
  const { src, background_position, background_size } = bgImage ?? {};
  if (!src) return undefined;

  return {
    '--intro-bg-image': `url(${src})`,
    '--intro-bg-position': toCssBackgroundPosition(background_position),
    '--intro-bg-size': (background_size ?? 'COVER').toLowerCase(),
  };
}

export function Component({ fieldValues }) {
  const backgroundCssVars = getBackgroundCssVars(fieldValues.bg_image);

  return (
    <div
      className={
        backgroundCssVars
          ? `${styles.wrapper} ${styles.wrapperWithBackground}`
          : styles.wrapper
      }
      style={backgroundCssVars}
    >
      <div className={styles.content}>
        <h1>{fieldValues.headline}</h1>
        <RichText fieldPath="gettingStarted" />
      </div>
      <div className={styles.widgetPlaceholder} aria-hidden="true" />
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <BackgroundImageField
      name="bg_image"
      label="Background image"
      required={false}
      default={{
        src: placeholderImage,
        background_position: 'MIDDLE_CENTER',
        background_size: 'COVER',
      }}
    />

    <TextField
      name="headline"
      label="Headline"
      default="Landing Page for LOCATION"
    />
    <RichTextField
      name="subtitle"
      label="Subtitle"
      default="Subtitle"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Intro',
};
