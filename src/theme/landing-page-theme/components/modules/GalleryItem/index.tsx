import {
  ModuleFields,
  TextField,
  LinkField,
  ImageField,
} from '@hubspot/cms-components/fields';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.js';
import placeholderImage from '../../../images/vertical-placeholder-gray.jpg';
import typography from '../../styles/typography.module.css';
import styles from './gallery-item.module.css';

export function Component({ fieldValues }) {
  const { title, location, image, sectionLink } = fieldValues;
  const href = getLinkFieldHref(sectionLink);
  const { src, alt, width, height } = image ?? {};

  return (
    <article className={styles.item} aria-label="Gallery item">
      {title && (
        <h3 className={`${styles.title} ${typography.sectionHeader}`}>{title}</h3>
      )}
      {src && (
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={src}
            alt={alt ?? ''}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      {location && (
        <p className={`${styles.location} ${typography.subtitleText}`}>{location}</p>
      )}
      {href && (
        <a
          className={`${styles.link} ${typography.accentText}`}
          href={href}
          rel={getLinkFieldRel(sectionLink)}
          target={getLinkFieldTarget(sectionLink)}
        >
          Learn more
        </a>
      )}
    </article>
  );
}

export const fields = (
  <ModuleFields>
    <TextField name="title" label="Title" default="Section Title" />
    <TextField name="location" label="Location" default="Location" />
    <ImageField
      name="image"
      label="Image"
      resizable={true}
      default={{ src: placeholderImage, alt: '' }}
    />
    <LinkField
      name="sectionLink"
      label="Link"
      supportedTypes={['EXTERNAL']}
      default={{
        open_in_new_tab: false,
        url: { href: 'https://example.com', type: 'EXTERNAL', content_id: null },
      }}
    />
  </ModuleFields>
);

export const meta = {
  label: 'Gallery Item',
};
