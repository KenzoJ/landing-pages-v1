import { useEffect } from 'react';

const REVEALED_CLASS = 'lp-scroll--revealed';
const THRESHOLD = 0.55;

export default function LandingPageRevealIsland() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-lp-scroll]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          entry.target.classList.add(REVEALED_CLASS);
          observer.unobserve(entry.target);
        }
      },
      { threshold: THRESHOLD },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
