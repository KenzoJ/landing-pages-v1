import { TextFieldType } from '@hubspot/cms-components/fields';
import typography from '../../styles/typography.module.css';
import styles from './data.module.css';

type MetricFields = {
  metric: TextFieldType['default'];
  description: TextFieldType['default'];
};

type DataFieldValues = {
  metricOne: MetricFields;
  metricTwo: MetricFields;
  metricThree: MetricFields;
};

type DataProps = {
  fieldValues: DataFieldValues;
};

function MetricItem({ metric, description }: MetricFields) {
  return (
    <div className={styles.metric}>
      {metric && (
        <p className={`${styles.value} ${typography.sectionHeader}`}>{metric}</p>
      )}
      {description && (
        <p className={`${styles.description} ${typography.subtitleText}`}>{description}</p>
      )}
    </div>
  );
}

export function Component({ fieldValues }: DataProps) {
  const metrics = [fieldValues.metricOne, fieldValues.metricTwo, fieldValues.metricThree];

  return (
    <section className={styles.data} aria-label="Data">
      <div className={styles.grid}>
        {metrics.map((item, index) => (
          <MetricItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export { fields } from './fields.js';

export const meta = {
  label: 'Data',
};
