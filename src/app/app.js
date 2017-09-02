import * as ng from 'angular';

import './common/common.module';
import './services/services.module';
import './home/home.module';
import './users/users.module';

import './app.styl';

ng
  .module('app', [
    'ngRoute',
    'app.common',
    'app.services',
    'app.home',
    'app.users',
  ])
  .config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/not-found', {
        template: require('./common/not-found.pug'),
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });

ng.bootstrap(document.body, ['app']);
