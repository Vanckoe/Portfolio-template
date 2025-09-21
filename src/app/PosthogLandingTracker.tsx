'use client';
import { useEffect } from 'react';
import { initPosthog, posthog } from '@/lib/posthog';

export default function PosthogLandingTracker() {
  useEffect(() => {
    initPosthog();
    posthog.capture('$pageview', { $current_url: window.location.href });
    posthog.capture('debug_ping', { t: Date.now() });
  }, []);
  return null;
}
