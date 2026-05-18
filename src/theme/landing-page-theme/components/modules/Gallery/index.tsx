import { ModuleFields } from '@hubspot/cms-components/fields';
import logo1 from '../../../images/logo-1.png';
import logo2 from '../../../images/logo-2.png';
import logo3 from '../../../images/logo-3.png';
import logo4 from '../../../images/logo-4.png';
import logo5 from '../../../images/logo-5.png';
import logo6 from '../../../images/logo-6.png';
import styles from './gallery.module.css';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function LogoGroup() {
  return (
  <div className={styles.group} aria-hidden="true">
    {logos.map((src, index) => (
      <div key={index} className={styles.slide}>
        <img src={src} alt="" loading="lazy" decoding="async" />
      </div>
    ))}
  </div>
  );
}

export function Component() {
  return (
    <section className={styles.gallery} aria-label="Partner logos">
      <div className={styles.viewport}>
        <div className={styles.track}>
          <LogoGroup />
          <LogoGroup />
        </div>
      </div>
    </section>
  );
}

export const fields = <ModuleFields>{null}</ModuleFields>;

export const meta = {
  label: 'Gallery',
};
