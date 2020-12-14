const paths = require('./config/paths')
const postcssPresetEnv = require('postcss-preset-env')
const purgecss = require('@fullhuman/postcss-purgecss')
const replace = require('postcss-replace')

module.exports = ({ env }) => ({
  plugins: [
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
    env === 'production'
      ? purgecss({
          content: [
            `${paths.html}/*.html`,
            `${paths.src}/**/*.js`,
            'node_modules/bootstrap/js/collapse.js',
            'node_modules/bootstrap/js/modal.js',
            'node_modules/bootstrap/js/transition.js',
          ],
          rejected: true,
        })
      : false,
      replace({
        pattern: 'max-device-width',
        data: { replaceAll: 'max-width' }
      })
  ],
})
