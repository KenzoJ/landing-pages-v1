import { TextFieldType } from '@hubspot/cms-components/fields';
import typography from '../../styles/typography.module.css';
import styles from './faq.module.css';

type FaqSectionFields = {
  question: TextFieldType['default'];
  answer: TextFieldType['default'];
};

type FaqFieldValues = {
  headline: TextFieldType['default'];
  sections: FaqSectionFields[];
};

type FaqProps = {
  fieldValues: FaqFieldValues;
};

export function Component({ fieldValues }: FaqProps) {
  const { headline, sections = [] } = fieldValues;

  return (
    <section
      className={styles.faq}
      aria-label="Frequently asked questions"
      data-lp-reveal="faq"
    >
      {headline && (
        <h2 className={`${styles.headline} ${typography.sectionHeader}`}>{headline}</h2>
      )}
      {sections.length > 0 && (
        <div className={styles.sections}>
          {sections.map((section, index) => (
            <details key={index} className={styles.item}>
              {section.question && (
                <summary className={styles.question}>{section.question}</summary>
              )}
              {section.answer && <p className={styles.answer}>{section.answer}</p>}
            </details>
          ))}
        </div>
      )}
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'FAQ',
  categories: ['text'],
};
