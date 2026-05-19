import { useState } from 'react';
import { ImageFieldType, RichTextFieldType, TextFieldType } from '@hubspot/cms-components/fields';
import SanitizedContent from '../../../SanitizeHTML/index.js';
import typography from '../../../styles/typography.module.css';
import styles from '../social-proof.module.css';

type TestimonialFields = {
  headshot: ImageFieldType['default'];
  quote: RichTextFieldType['default'];
  nameAndCompany: TextFieldType['default'];
};

type SocialProofFieldValues = {
  testimonialOne: TestimonialFields;
  testimonialTwo: TestimonialFields;
  testimonialThree: TestimonialFields;
};

type SocialProofIslandProps = {
  fieldValues: SocialProofFieldValues;
};

export default function SocialProofIsland({ fieldValues }: SocialProofIslandProps) {
  const testimonials = [
    fieldValues.testimonialOne,
    fieldValues.testimonialTwo,
    fieldValues.testimonialThree,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];
  const inactive = testimonials
    .map((testimonial, index) => ({ testimonial, index }))
    .filter(({ index }) => index !== activeIndex);

  const { src: headshotSrc, alt: headshotAlt, width, height } = active.headshot ?? {};

  return (
    <section
      className={styles.socialProof}
      aria-label="Social proof"
      data-lp-reveal="social-proof"
    >
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.media}>
            {headshotSrc && (
              <div className={styles.mainImageWrapper}>
                <img
                  className={styles.mainImage}
                  src={headshotSrc}
                  alt={headshotAlt ?? ''}
                  width={width}
                  height={height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
          </div>
          <div className={styles.quoteSection}>
            <span className={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            <div className={styles.content}>
              {active.quote && (
                <blockquote className={`${styles.quote} ${typography.subtitleText}`}>
                  <SanitizedContent content={active.quote} />
                </blockquote>
              )}
              {active.nameAndCompany && (
                <p className={`${styles.attribution} ${typography.accentText}`}>
                  {active.nameAndCompany}
                </p>
              )}
            </div>
          </div>
          {inactive.length > 0 && (
            <div className={styles.thumbnails}>
              {inactive.map(({ testimonial, index }) => {
                const thumb = testimonial.headshot;
                if (!thumb?.src) return null;

                return (
                  <button
                    key={index}
                    type="button"
                    className={styles.thumbnail}
                    onClick={() => setActiveIndex(index)}
                    aria-label={
                      testimonial.nameAndCompany
                        ? `Show testimonial from ${testimonial.nameAndCompany}`
                        : `Show testimonial ${index + 1}`
                    }
                  >
                    <img
                      className={styles.thumbnailImage}
                      src={thumb.src}
                      alt={thumb.alt ?? ''}
                      width={thumb.width}
                      height={thumb.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
