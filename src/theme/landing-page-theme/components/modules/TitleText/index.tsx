import { TextFieldType } from '@hubspot/cms-components/fields';
import typography from '../../styles/typography.module.css';
import styles from './title-text.module.css';

type TitleTextFieldValues = {
  title: TextFieldType['default'];
  subtitle: TextFieldType['default'];
};

type TitleTextProps = {
  fieldValues: TitleTextFieldValues;
  revealId?: string;
};

export function TitleTextSection({
  fieldValues,
  revealId,
}: {
  fieldValues: TitleTextFieldValues;
  revealId: string;
}) {
  const { title, subtitle } = fieldValues;

  return (
    <section
      className={styles.titleText}
      aria-label="Title text"
      data-lp-reveal={revealId}
    >
      <div className={styles.inner}>
        {title && (
          <p className={`${styles.title} ${typography.sectionHeader}`}>{title}</p>
        )}
        {subtitle && (
          <p className={`${styles.subtitle} ${typography.subtitleText}`}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function Component({ fieldValues }: TitleTextProps) {
  return <TitleTextSection fieldValues={fieldValues} revealId="title-text" />;
}

export { fields } from './fields.js';

export const meta = {
  label: 'Title Text',
};
