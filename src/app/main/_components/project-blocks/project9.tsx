import React from 'react';
import SiteBlock from '../siteBlock';
import { useTranslations } from 'next-intl';

const Project1 = () => {
  const t = useTranslations('Projects');

  return (
    <SiteBlock
      title={t('project10.title')}
      description={t('project10.description')}
      link="https://scenarify-ai.vercel.app/"
      stack="Next.js, TypeScript, PostHog, AWS, Cloudflare, Vercel, i18n "
      design="🇬🇧 No info"
      designLink="no info"
    />
  );
};

export default Project1;
