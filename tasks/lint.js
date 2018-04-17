'use strict';

const gulp     = require('gulp');
const geslint  = require('gulp-eslint');
const gpuglint = require('gulp-pug-lint');
const filters  = require('../config/gulp').filters;
const paths    = require('../config/gulp').paths;

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
