import React from 'react';
import SiteBlock from '../siteBlock';
import { useTranslations } from 'next-intl';

const Project1 = () => {
  const t = useTranslations('Projects');

  return (
    <SiteBlock
      title={t('project12.title')}
      description={t('project12.description')}
      link="https://everest-sable-alpha.vercel.app"
      stack="Nextjs, TypeScript, Tailwind, TelegramAPI, Nodemailer"
      design="🇰🇿 @Vanckoe"
      designLink="https://t.me/Vanckoe"
    />
  );
};

export default Project1;
