'use client';
import posthog from 'posthog-js';

let inited = false;

export function initPosthog() {
  if (inited) return posthog;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
  if (!key) return posthog;

  posthog.init(key, {
    api_host: host,
    capture_pageview: false, // сами отправим 1 раз
    capture_pageleave: true,
    autocapture: true, // автосбор кликов и т.п. (можно выключить)
    persistence: 'localStorage+cookie',
    disable_session_recording: true, // включишь при желании
    // базовая приватность
    mask_all_text: false,
    mask_all_element_attributes: true,
  });

  // Зарегистрируем UTM сессии (один раз)
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
    ].forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) posthog.register(utm);
  } catch {}

  inited = true;
  return posthog;
}

export { posthog };
