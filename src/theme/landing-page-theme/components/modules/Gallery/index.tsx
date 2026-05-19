import {
  ImageFieldType,
  LinkFieldType,
  TextFieldType,
} from '@hubspot/cms-components/fields';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.js';
import typography from '../../styles/typography.module.css';
import styles from './gallery.module.css';

type GallerySectionFields = {
  title: TextFieldType['default'];
  location: TextFieldType['default'];
  image: ImageFieldType['default'];
  sectionLink: LinkFieldType['default'];
};

type GalleryFieldValues = {
  sectionOne: GallerySectionFields;
  sectionTwo: GallerySectionFields;
  sectionThree: GallerySectionFields;
};

type GalleryProps = {
  fieldValues: GalleryFieldValues;
};

function GalleryItem({ title, location, image, sectionLink }: GallerySectionFields) {
  const href = getLinkFieldHref(sectionLink);
  const { src, alt, width, height } = image ?? {};

  return (
    <article className={styles.item}>
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

export function Component({ fieldValues }: GalleryProps) {
  const sections = [
    fieldValues.sectionOne,
    fieldValues.sectionTwo,
    fieldValues.sectionThree,
  ];

  return (
    <section
      className={styles.gallery}
      aria-label="Gallery"
      data-lp-reveal="gallery"
    >
      <div className={styles.inner}>
        <div className={styles.grid}>
          {sections.map((section, index) => (
            <GalleryItem key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'Gallery',
};
