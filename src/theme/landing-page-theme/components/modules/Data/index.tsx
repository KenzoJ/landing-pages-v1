import { ModuleFields } from '@hubspot/cms-components/fields';
import typography from '../../styles/typography.module.css';
import styles from './data.module.css';

const METRICS = [
  {
    target: 300,
    prefix: '',
    suffix: '+',
    description: 'Large Projects',
  },
  {
    target: 18,
    prefix: '$',
    suffix: 'M+',
    description: 'Total Bookings to Date',
  },
  {
    target: 500,
    prefix: '',
    suffix: '+',
    description: 'Partner Vendors',
  },
] as const;

type Metric = (typeof METRICS)[number];

function MetricItem({ target, prefix, suffix, description }: Metric) {
  const label = `${prefix}${target}${suffix}`;

  return (
    <div className={styles.metric}>
      <p className={`${styles.value} ${typography.sectionHeader}`}>
        {prefix}
        <span
          className={styles.counter}
          style={{ '--target': target } as React.CSSProperties}
          aria-hidden="true"
        />
        {suffix}
        <span className={styles.srOnly}>{label}</span>
      </p>
      <p className={`${styles.description} ${typography.subtitleText}`}>{description}</p>
    </div>
  );
}

export function Component() {
  return (
    <section className={styles.data} aria-label="Data" data-lp-reveal="data">
      <div className={styles.grid}>
        {METRICS.map((metric) => (
          <MetricItem key={metric.description} {...metric} />
        ))}
      </div>
    </section>
  );
}

export const fields = <ModuleFields>{null}</ModuleFields>;

export const meta = {
  label: 'Data',
};
