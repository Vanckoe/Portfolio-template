import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://kcmg.kz"], // Укажите домен или IP, откуда загружаются изображения
  },
};

export default withNextIntl(nextConfig);
