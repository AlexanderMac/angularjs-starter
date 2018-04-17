'use strict';

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers      = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'eval',
  // devtool: 'source-map',
  // devtool: 'hidden-source-map',
  devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-source-map',
  // devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: helpers.root('dist'),
    compress: true,
    port: 3001
  }
});
