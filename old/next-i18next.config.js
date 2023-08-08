// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    i18n: {
      debug: process.env.NODE_ENV === 'development',
      defaultLocale: 'ch',
      locales: ['en', 'ch'],
    },
}