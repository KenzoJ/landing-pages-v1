import { useEffect } from 'react';

const REVEALED_CLASS = 'lp-reveal--revealed';
const THRESHOLD = 0.15;
const ROOT_MARGIN = '80px 0px 80px 0px';

export default function LandingPageRevealIsland() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-lp-reveal]');
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add(REVEALED_CLASS);
          observer.unobserve(entry.target);
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN },
    );

    for (const target of targets) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
