import { GalleryItem } from '../GalleryItem/index.js';
import styles from './gallery.module.css';

type GalleryProps = {
  fieldValues: {
    sectionOne: Parameters<typeof GalleryItem>[0]['fieldValues'];
    sectionTwo: Parameters<typeof GalleryItem>[0]['fieldValues'];
    sectionThree: Parameters<typeof GalleryItem>[0]['fieldValues'];
  };
};

export function Component({ fieldValues }: GalleryProps) {
  const items = [
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
          {items.map((item, index) => (
            <GalleryItem key={index} fieldValues={item} />
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
