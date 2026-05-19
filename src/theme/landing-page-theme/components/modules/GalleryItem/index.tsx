import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.js';
import typography from '../../styles/typography.module.css';
import styles from './gallery-item.module.css';

type GalleryItemProps = {
  fieldValues: {
    title?: string;
    location?: string;
    image?: {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    sectionLink?: Parameters<typeof getLinkFieldHref>[0];
  };
};

export function GalleryItem({ fieldValues }: GalleryItemProps) {
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

export function Component(props: GalleryItemProps) {
  return (
    <div className={styles.root}>
      <GalleryItem {...props} />
    </div>
  );
}

export {
  fields,
  galleryItemNestedFields,
  galleryItemDefault,
} from './fields.js';

export const meta = {
  label: 'Gallery Item',
};
