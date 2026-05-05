import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
    serverComponentsExternalPackages: ['ssh2'],
  },
  transpilePackages: ['@autmzr/command-protocol'],
};

export default withNextIntl(nextConfig);
