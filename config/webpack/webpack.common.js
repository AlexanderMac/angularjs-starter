process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NotifierPlugin = require('webpack-notifier');
const helpers = require('./helpers');

module.exports = {
  stats: {
    assets: false,
    builtAt: false,
    children: false,
    chunks: true,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    cachedAssets: false,
    depth: false,
    entrypoints: false,
    timings: false,
    hash: false,
    modules: false,
    version: false
  },

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.js'],
    symlinks: true,
    modules: [
      helpers.root('src', 'app'),
      'node_modules'
    ],
    mainFields: ['browser', 'module', 'main']
  },

  entry: {
    app: './src/app/app.js',
    vendors: './src/app/vendors.js'
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor1',
          chunks: 'all'
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false
            }
          },
          'pug-html-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        exclude: /(node_modules)/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    // To hide `Critical dependency: the request of a dependency is an expression` warning
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('src', 'app')
    ),

    new HtmlPlugin({
      template: 'src/public/index.pug'
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name]-[hash].css',
      chunkFilename: 'css/[name]-[hash].css'
    }),

    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false
    }),

    new NotifierPlugin({
      title: 'app',
      excludeWarnings: true,
      skipFirstNotification: true
    })
  ]
};
