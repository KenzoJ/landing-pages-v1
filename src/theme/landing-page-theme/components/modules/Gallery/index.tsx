import { LinkFieldType, TextFieldType } from '@hubspot/cms-components/fields';
import {
  getLinkFieldHref,
  getLinkFieldRel,
  getLinkFieldTarget,
} from '../../utils/content-fields.js';
import verticalPlaceholder from '../../../images/vertical_placeholder.jpg';
import styles from './gallery.module.css';

type GallerySectionFields = {
  text: TextFieldType['default'];
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

function GalleryItem({ text, sectionLink }: GallerySectionFields) {
  const href = getLinkFieldHref(sectionLink);

  return (
    <article className={styles.item}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={verticalPlaceholder}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={styles.copy}>
        {text && <p className={styles.text}>{text}</p>}
        {href && (
          <a
            className={styles.link}
            href={href}
            rel={getLinkFieldRel(sectionLink)}
            target={getLinkFieldTarget(sectionLink)}
          >
            Learn more
          </a>
        )}
      </div>
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
    <section className={styles.gallery} aria-label="Gallery">
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
