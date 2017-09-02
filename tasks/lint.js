'use strict';

var gulp     = require('gulp');
var geslint  = require('gulp-eslint');
var gpuglint = require('gulp-pug-lint');
var argv     = require('yargs').argv;
var filters  = require('../config/gulp').filters;
var paths    = require('../config/gulp').paths;

gulp.task('lint-scripts', () => {
  return gulp
    .src(paths.srcApp + filters.jsDeep)
    .pipe(geslint())
    .pipe(geslint.format())
    .pipe(geslint.failAfterError());
});

gulp.task('lint-views', () => {
  return gulp
    .src([
      paths.src + filters.pugDeep,
    ])
    .pipe(gpuglint());
});

gulp.task('lint', ['lint-scripts', 'lint-views']);
