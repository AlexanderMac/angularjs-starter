import * as ng                  from 'angular';
import { UsersListComponent }   from './users-list.component';
import { UserFormComponent }    from './user-form.component';
import { UserDetailsComponent } from './user-details.component';
import { UsersService }         from './users.service';

import './users.styl';

export default ng
  .module('app.users', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/users', {
        template: '<users-list></users-list>'
      })
      .when('/users/new', {
        template: '<user-form></user-form>'
      })
      .when('/users/:_id/edit', {
        template: '<user-form></user-form>'
      })
      .when('/users/:_id', {
        template: '<user-details></user-details>'
      });
  })
  .component('usersList', UsersListComponent)
  .component('userForm', UserFormComponent)
  .component('userDetails', UserDetailsComponent)
  .service('UsersService', UsersService)
  .name;
