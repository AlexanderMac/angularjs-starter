import * as ng                  from 'angular';
import { UsersListComponent }   from './list.component';
import { UserFormComponent }    from './form.component';
import { UserDetailsComponent } from './details.component';
import { UserService }          from './service';

import './styles.styl';

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
  .service('UserService', UserService)
  .name;
