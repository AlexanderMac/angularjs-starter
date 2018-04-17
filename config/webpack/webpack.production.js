'use strict';

const webpack      = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'eval',
  devtool: 'source-map',
  // devtool: 'hidden-source-map',
  // devtool: 'inline-source-map',
  // devtool: 'eval-source-map',
  // devtool: 'cheap-source-map',
  // devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        warnings: false,
        'screw_ie8': true
      },
      output: {
        comments: false
      },
      sourceMap: true,
      mangle : false
    })
  ]
});
