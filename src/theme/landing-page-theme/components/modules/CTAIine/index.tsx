import { TextFieldType } from '@hubspot/cms-components/fields';
import { ButtonContentType } from '../../fieldLibrary/ButtonContent/types.js';
import { getLinkFieldHref, getLinkFieldRel, getLinkFieldTarget } from '../../utils/content-fields.js';
import { Button } from '../Button/ButtonComponent.js';
import typography from '../../styles/typography.module.css';
import styles from './ctaline.module.css';

type CTAIineFieldValues = {
  headline: TextFieldType['default'];
  button: ButtonContentType;
};

type CTAIineProps = {
  fieldValues: CTAIineFieldValues;
};

export function Component({ fieldValues }: CTAIineProps) {
  const { headline, button } = fieldValues;

  return (
    <section className={styles.ctaLine} aria-label="Call to action">
      <div className={styles.inner}>
        <div className={styles.layout}>
          {headline && (
            <p className={`${styles.headline} ${typography.subtitleText}`}>{headline}</p>
          )}
          <div className={styles.buttonWrapper}>
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
        </div>
      </div>
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'CTA Line',
};
