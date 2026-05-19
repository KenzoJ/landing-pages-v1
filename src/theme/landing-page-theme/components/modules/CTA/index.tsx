import { Island } from '@hubspot/cms-components';
import { TextFieldType } from '@hubspot/cms-components/fields';
// @ts-expect-error -- ?island not typed
import CtaFormEmbedIsland from './islands/CtaFormEmbedIsland.js?island';
import styles from './cta.module.css';

type CtaFieldValues = {
  headline: TextFieldType['default'];
};

type CtaProps = {
  fieldValues: CtaFieldValues;
};

export function Component({ fieldValues }: CtaProps) {
  const { headline } = fieldValues;

  return (
    <section className={styles.cta} aria-label="Call to action" data-lp-reveal="cta">
      <div className={styles.inner}>
        {headline && <h2 className={styles.headline}>{headline}</h2>}
        <div className={styles.form}>
          <Island hydrateOn="load" module={CtaFormEmbedIsland} />
        </div>
      </div>
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'CTA',
  categories: ['forms_and_buttons'],
};
