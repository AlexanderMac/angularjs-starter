'use strict';

const CONFIG = './config/';
const TASKS  = './tasks/';
const TEST   = './test/';
const SRC    = './src/';
const DIST   = './dist/';

const config = {
  filters: {
    js: '*.js',
    jsDeep: '**/*.js',
    css: '*.css',
    cssDeep: '**/*.css',
    styl: '*.styl',
    stylDeep: '**/*.styl',
    pug: '*.pug',
    pugDeep: '**/*.pug',
    images: '*.{ico,png,jpg,jpeg,gif,webp,svg}',
    imagesDeep: '**/*.{ico,png,jpg,jpeg,gif,webp,svg}',
    fonts: '*.{eot,svg,ttf,woff,woff2}',
    fontsDeep: '**/*.{eot,svg,ttf,woff,woff2}'
  },

  paths: {
    config: CONFIG,
    tasks: TASKS,
    test: TEST,
    src: SRC,
    srcApp: SRC + 'app/',
    srcImages: SRC + 'images/',
    dist: DIST,
    distJs: DIST + 'scripts/',
    distJsLocale: DIST + 'scripts/locale',
    distCss: DIST + 'css/',
    distViews: DIST + 'views/',
    distImages: DIST + 'images/',
    distFonts: DIST + 'fonts/'
  }
};

module.exports = config;
