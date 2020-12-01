const paths = require('./paths')

const { ProvidePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + '/index.js'],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Extract third-party libraries to vendor bundle
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Index',
      favicon: paths.src + '/images/favicon.png',
      template: paths.html + '/index.html', // template file
      filename: 'index.html', // output file
      scriptLoading: 'defer',
      inject: true
    }),

    new HtmlWebpackPlugin({
      title: 'Contact',
      favicon: paths.src + '/images/favicon.png',
      template: paths.html + '/contact.html', // template file
      filename: 'contact.html', // output file
      scriptLoading: 'defer',
      inject: true
    }),

     new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['mozjpeg', { quality: 50 }],
          ['pngquant'],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeDimensions: true
                },
                {
                  removeAttrs: {
                    attrs: 'fill'
                  }
                }
              ],
            },
          ],
        ],
      },
    }),

    new ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
     })
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'postcss-loader',
          'sass-loader',
        ],
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset',
        generator: { filename: 'images/[name][ext][query]' },
        parser: {
         dataUrlCondition: {
           maxSize: 1 * 1024 // 1kb
         }
       }
      },

      // Fonts: Copy fonts files to build folder
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset',
        generator: { filename: 'fonts/[name][ext][query]' },
        parser: {
         dataUrlCondition: {
           maxSize: 1 * 1024 // 1kb
         }
       }
      },

      {
        test: /\.(svg|)$/,
        use: 'raw-loader',
      },
    ],
  },
}
