import {
  ModuleFields,
  TextField,
  ImageField,
  FieldGroup,
} from '@hubspot/cms-components/fields';
import placeholderImage from '../../../images/placeholder.png';
import {
  SearchListings,
  searchListingsNestedFields,
  searchListingsDefault,
} from '../SearchListings/index.js';
import typography from '../../styles/typography.module.css';
import styles from './intro.module.css';

export function Component({ fieldValues }) {
  const { src, alt, width, height } = fieldValues.hero_image ?? {};

  return (
    <div className={styles.intro}>
      {src && (
        <div className={styles.heroImageWrapper} aria-hidden={alt ? undefined : true}>
          <img
            className={styles.heroImage}
            src={src}
            alt={alt ?? ''}
            width={width}
            height={height}
          />
        </div>
      )}
      <div className={styles.contentStack}>
        <div className={styles.copy}>
          <h1 className={`${styles.headline} ${typography.sectionHeader}`}>
            {fieldValues.headline}
          </h1>
        </div>
        <div className={styles.searchPanel}>
          <SearchListings fieldValues={fieldValues.searchListings} />
        </div>
        {fieldValues.tagline && (
          <p className={`${styles.tagline} ${typography.subtitleText}`}>
            {fieldValues.tagline}
          </p>
        )}
      </div>
    </div>
  );
}

export const fields = (
  <ModuleFields>
    <ImageField
      name="hero_image"
      label="Hero image"
      required={false}
      resizable={true}
      default={{
        src: placeholderImage,
        alt: '',
      }}
    />

    <TextField
      name="headline"
      label="Headline"
      default="Landing Page for LOCATION"
    />
    <FieldGroup
      name="searchListings"
      label="Search listings"
      default={searchListingsDefault}
    >
      {searchListingsNestedFields}
    </FieldGroup>
    <TextField
      name="tagline"
      label="Tagline"
      default="Book space at the Speed of Production"
    />
  </ModuleFields>
);

export const meta = {
  label: 'Intro',
};
