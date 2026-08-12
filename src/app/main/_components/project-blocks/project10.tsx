import React from 'react';
import SiteBlock from '../siteBlock';
import { useTranslations } from 'next-intl';

const Project1 = () => {
  const t = useTranslations('Projects');

  return (
    <SiteBlock
      title={t('project11.title')}
      description={t('project11.description')}
      link="https://seomarket.vercel.app/ru"
      stack="Nextjs, TypeScript, Tailwind, Telegram API, EmailJS, i18n"
      design="🇺🇦 @v_maslyanik"
      designLink="https://t.me/+o_LQSv0jojg3Y2Zi"
    />
  );
};

export default Project1;
