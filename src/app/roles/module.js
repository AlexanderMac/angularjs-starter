import * as ng                  from 'angular';
import { RolesListComponent }   from './list.component';
import { RoleFormComponent }    from './form.component';
import { RoleDetailsComponent } from './details.component';
import { RoleService }          from './service';

import './styles.styl';

export default ng
  .module('app.roles', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/roles', {
        template: '<roles-list></roles-list>'
      })
      .when('/roles/new', {
        template: '<role-form></role-form>'
      })
      .when('/roles/:id/edit', {
        template: '<role-form></role-form>'
      })
      .when('/roles/:id', {
        template: '<role-details></role-details>'
      });
  })
  .component('rolesList', RolesListComponent)
  .component('roleForm', RoleFormComponent)
  .component('roleDetails', RoleDetailsComponent)
  .service('RoleService', RoleService)
  .name;
