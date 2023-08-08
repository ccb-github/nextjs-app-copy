/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  images:{
    domains: ['fake.com', "i.picsum.photos", "www.pexels.com"],
  },
  i18n
};

module.exports = nextConfig;
