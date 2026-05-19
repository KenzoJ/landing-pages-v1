import { ModuleFields } from '@hubspot/cms-components/fields';
import placeholderImage from '../../../images/placeholder.png';
import styles from './information-widget.module.css';

const OPTIONS = [
  'Personalized support',
  'Save time and money',
  'Hidden gems',
  'Free for you',
] as const;

export function Component() {
  return (
    <section
      className={styles.widget}
      aria-label="Information"
      data-lp-reveal="information-widget"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.options}>
            {OPTIONS.map((label) => (
              <button key={label} type="button" className={styles.option}>
                {label}
              </button>
            ))}
          </div>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              src={placeholderImage}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export const fields = <ModuleFields>{null}</ModuleFields>;

export const meta = {
  label: 'Information Widget',
};
