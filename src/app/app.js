import * as ng from 'angular';

import './_common/module';
import './home/module';
import './users/module';

import './app.styl';

ng
  .module('app', [
    'ngRoute',
    'app.common',
    'app.home',
    'app.users',
  ])
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/not-found', {
        template: require('./_common/not-found.pug'),
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });

ng.bootstrap(document.body, ['app']);
