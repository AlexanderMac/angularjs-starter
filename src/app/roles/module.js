import * as ng                        from 'angular';
import { RoleListComponent }          from './list.component';
import { RoleFormComponent }          from './form.component';
import { RoleDetailsComponent }       from './details.component';
import { RoleMultiselectorComponent } from './multiselector.component';
import { RoleService }                from './service';

import './styles.styl';

export default ng
  .module('app.roles', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/roles', {
        template: '<role-list></role-list>'
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
  .component('roleList', RoleListComponent)
  .component('roleForm', RoleFormComponent)
  .component('roleDetails', RoleDetailsComponent)
  .component('roleMultiselector', RoleMultiselectorComponent)
  .service('RoleService', RoleService)
  .name;
