const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([optimizedImages], { target: 'serverless',webpack5: true, experimental: { modern: true, esmExternals: true, }, reactStrictMode: true, images: { domains: [],disableStaticImages: true },});
