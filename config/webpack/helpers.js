'use strict';

const path = require('path');

const _root = path.resolve(__dirname, '../..');

exports.root = (...args) => {
  return path.join.apply(path, [_root].concat(args));
};
