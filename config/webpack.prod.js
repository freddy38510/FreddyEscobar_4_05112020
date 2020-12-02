const glob = require('glob-all')
const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CriticalCssPlugin = require('critical-css-webpack-plugin')

const criticalCssPluginOptions = {
  base: paths.build,
  minify: true,
  extract: true,
  include: ['svg', '.icon-lg', '.bg-repeat'],
  dimensions: [
    {
      height: 800,
      width: 350,
    },
    {
      height: 863,
      width: 900,
    },
  ],
  concurrency: 4,
  penthouse: {
    blockJSRequests: false
  },
  inline: {
    preload: true
  },
}

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].js',
  },
  plugins: [
    // Extracts CSS into separate files
    // Note: style-loader is for development, MiniCssExtractPlugin is for production
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new PurgecssPlugin({
      paths: glob.sync([paths.html, `${paths.src}/index.js`, `${paths.src}/**/*`, 'node_modules/bootstrap/js/**/*'],  { nodir: true }),
      rejected: true
    }),
    new CriticalCssPlugin({
      ...criticalCssPluginOptions,
      src: 'index.html',
      target: 'index.html'
    }),
    new CriticalCssPlugin({
      ...criticalCssPluginOptions,
      src: 'contact.html',
      target: 'contact.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
