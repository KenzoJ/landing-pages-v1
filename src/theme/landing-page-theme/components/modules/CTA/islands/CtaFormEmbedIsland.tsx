import { useEffect } from 'react';
import { ctaFormEmbed } from '../embed-config.js';
import styles from '../cta.module.css';

function loadEmbedScript(src: string): Promise<void> {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

  if (existing?.dataset.loaded === 'true') {
    return Promise.resolve();
  }

  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function CtaFormEmbedIsland() {
  const { portalId, formId, region, scriptSrc } = ctaFormEmbed;

  useEffect(() => {
    loadEmbedScript(scriptSrc).catch(() => {
      // Embed script failed; frame markup remains for debugging.
    });
  }, [scriptSrc]);

  return (
    <div
      className={`hs-form-frame ${styles.formFrame}`}
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
