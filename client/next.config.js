// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  cssModules: true
})

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
});
