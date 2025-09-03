'use client';

import { useEffect, useRef } from 'react';
import { initPosthog, posthog } from '@/lib/posthog';

export default function PosthogLandingTracker() {
  const firstInteraction = useRef<number | null>(null);
  const scrollMilestones = useRef(new Set<number>());

  useEffect(() => {
    initPosthog();
    // pageview 1 раз
    posthog.capture('$pageview', { $current_url: window.location.href });

    // time to first interaction
    const onInteract = () => {
      if (firstInteraction.current === null) {
        firstInteraction.current = performance.now();
        posthog.capture('first_interaction', {
          ms: Math.round(firstInteraction.current),
        });
        window.removeEventListener('pointerdown', onInteract, true);
        window.removeEventListener('keydown', onInteract, true);
      }
    };
    window.addEventListener('pointerdown', onInteract, true);
    window.addEventListener('keydown', onInteract, true);

    // scroll depth (25/50/75/100)
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      const p = Math.min(100, Math.round((h.scrollTop / max) * 100));
      [25, 50, 75, 100].forEach((m) => {
        if (p >= m && !scrollMilestones.current.has(m)) {
          scrollMilestones.current.add(m);
          posthog.capture('scroll_depth', { percent: m });
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // outbound link clicks (внешние ссылки)
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      // CTA по data-атрибуту
      const cta = target.getAttribute('data-cta');
      if (cta) {
        posthog.capture('cta_click', {
          id: cta,
          href: target.getAttribute('href'),
        });
      }

      // внешняя ссылка
      const href = target.getAttribute('href');
      if (href && /^https?:\/\//i.test(href) && !href.includes(location.host)) {
        posthog.capture('outbound_click', { href });
      }
    };
    window.addEventListener('click', onClick, { capture: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('click', onClick, true);
      window.removeEventListener('pointerdown', onInteract, true);
      window.removeEventListener('keydown', onInteract, true);
    };
  }, []);

  return null;
}
