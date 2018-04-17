'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack               = require('webpack');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const helpers               = require('./helpers');

module.exports = {
  stats: { children: false },

  entry: {
    app: './src/app/app.js',
    vendor: './src/app/vendor.js'
  },

  resolve: {
    extensions: ['.js']
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.pug$/,
        loaders: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minify'
        })
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?minify', 'stylus-loader']
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: helpers.root(),
      verbose: false,
      dry: false
    }),

    new webpack.optimize.CommonsChunkPlugin({ name: ['vendor'].reverse() }),

    // TODO: required?
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src/app')
    ),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      moment: 'moment'
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

    new HtmlWebpackPlugin({
      template: './src/public/index.pug',
      inject: 'body'
    }),

    new ExtractTextPlugin('css/[name].css'),

    new WebpackNotifierPlugin({
      title: 'app',
      excludeWarnings: true,
      skipFirstNotification: true
    })
  ]
};
