import * as ng from 'angular';

import './_core/module';
import './_shared/module';
import './home/module';
import './users/module';

import './app.styl';

ng
  .module('app', [
    'ngRoute',
    'app.core',
    'app.shared',
    'app.home',
    'app.users',
  ])
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/not-found', {
        template: require('./_shared/not-found.pug'),
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });

ng.bootstrap(document.body, ['app']);
