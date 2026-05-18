import { TextFieldType } from '@hubspot/cms-components/fields';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.js';
import { ButtonContentType } from '../../fieldLibrary/ButtonContent/types.js';
import { Button } from '../Button/ButtonComponent.js';
import styles from './cta.module.css';

type CtaFieldValues = {
  headline: TextFieldType['default'];
  button: ButtonContentType;
};

type CtaProps = {
  fieldValues: CtaFieldValues;
};

export function Component({ fieldValues }: CtaProps) {
  const { headline, button } = fieldValues;

  return (
    <section className={styles.cta} aria-label="Call to action">
      <div className={styles.inner}>
        {headline && <h2 className={styles.headline}>{headline}</h2>}
        <Button
          buttonStyle="primary"
          buttonSize="medium"
          href={getLinkFieldHref(button.buttonContentLink)}
          rel={getLinkFieldRel(button.buttonContentLink)}
          target={getLinkFieldTarget(button.buttonContentLink)}
          showIcon={button.buttonContentShowIcon}
          iconFieldPath="button.buttonContentIcon"
          iconPosition={button.buttonContentIconPosition}
        >
          {button.buttonContentText}
        </Button>
      </div>
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'CTA',
};
