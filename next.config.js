/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.brand-ing.me',
      },
    ],
    // loader: 'custom',
    // loaderFile: './utils/image/cloudFlareLoader.ts',
  },
};

module.exports = withVanillaExtract(nextConfig);
