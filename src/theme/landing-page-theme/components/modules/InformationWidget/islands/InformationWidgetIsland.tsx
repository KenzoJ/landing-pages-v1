import { useCallback, useEffect, useRef, useState } from 'react';
import { RichTextFieldType } from '@hubspot/cms-components/fields';
import SanitizedContent from '../../../SanitizeHTML/index.js';
import cx from '../../../utils/classnames.js';
import styles from '../information-widget.module.css';

const CONTENT_REVEAL_DELAY_MS = 40;

const LABELS = [
  'Production Offices',
  'Edit Suites',
  'Screening Rooms',
  'Studios',
  'Technology',
  'Grip and Electric',
  'Consultation',
] as const;

const WHEEL_THRESHOLD = 5;

type SectionFields = {
  content: RichTextFieldType['default'];
};

type InformationWidgetFieldValues = {
  sections: SectionFields[];
};

type InformationWidgetIslandProps = {
  fieldValues: InformationWidgetFieldValues;
};

export default function InformationWidgetIsland({
  fieldValues,
}: InformationWidgetIslandProps) {
  const items = LABELS.map((label, index) => ({
    label,
    content: fieldValues.sections?.[index]?.content,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleContentIndex, setVisibleContentIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wheelDeltaRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleContentIndex(activeIndex);
      return;
    }

    setVisibleContentIndex(null);
    const timer = window.setTimeout(() => {
      setVisibleContentIndex(activeIndex);
    }, CONTENT_REVEAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  const goToPrevious = useCallback(() => {
    setActiveIndex((index) => Math.max(index - 1, 0));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((index) => Math.min(index + 1, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) return;

      event.preventDefault();
      wheelDeltaRef.current += event.deltaY;

      if (Math.abs(wheelDeltaRef.current) < WHEEL_THRESHOLD) return;

      if (wheelDeltaRef.current > 0) {
        goToNext();
      } else {
        goToPrevious();
      }

      wheelDeltaRef.current = 0;
    };

    section.addEventListener('wheel', handleWheel, { passive: false });
    return () => section.removeEventListener('wheel', handleWheel);
  }, [goToNext, goToPrevious]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      goToNext();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      goToPrevious();
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.widget}
      aria-label="Information"
    >
      <div className={styles.inner} data-lp-reveal="information-widget">
        <div className={styles.layout}>
          <nav className={styles.menu} aria-label="Space types">
            <div
              className={styles.menuViewport}
              tabIndex={0}
              onKeyDown={handleKeyDown}
            >
              {items.map((item, index) => {
                const offset = index - activeIndex;
                const distance = Math.abs(offset);
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.label}
                    type="button"
                    className={cx(styles.menuItem, isActive && styles.menuItemActive)}
                    style={{
                      '--offset': offset,
                      '--distance': distance,
                    } as React.CSSProperties}
                    data-offset={offset}
                    data-distance={distance}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.menuItemLabel}>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className={styles.contentPanel} aria-live="polite">
            <div
              className={cx(
                styles.contentInner,
                visibleContentIndex !== null && styles.contentInnerVisible,
              )}
            >
              {visibleContentIndex !== null && items[visibleContentIndex]?.content && (
                <div className={styles.richText}>
                  <SanitizedContent content={items[visibleContentIndex].content} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
