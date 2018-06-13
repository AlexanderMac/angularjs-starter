import * as ng                  from 'angular';
import { UserListComponent }    from './list.component';
import { UserFormComponent }    from './form.component';
import { UserDetailsComponent } from './details.component';
import { UserService }          from './service';

import './styles.styl';

export default ng
  .module('app.users', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/users', {
        template: '<user-list></user-list>'
      })
      .when('/users/new', {
        template: '<user-form></user-form>'
      })
      .when('/users/:id/edit', {
        template: '<user-form></user-form>'
      })
      .when('/users/:id', {
        template: '<user-details></user-details>'
      });
  })
  .component('userList', UserListComponent)
  .component('userForm', UserFormComponent)
  .component('userDetails', UserDetailsComponent)
  .service('UserService', UserService)
  .name;
