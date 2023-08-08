// @ts-check
const { i18n } = require('./next-i18next.config.js')

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require('./next-utils.config')
const { esmExternals = false, tsconfigPath } =
  loadCustomBuildParams()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
}

module.exports = nextConfig
