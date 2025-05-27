import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value:
              'encrypted-media=(), fullscreen=(), accelerometer=(), gyroscope=()',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
