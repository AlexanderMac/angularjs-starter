import * as ng from 'angular';
import { NavBarComponent } from './navbar.component';
import { SpinnerComponent } from './spinner.component';

export default ng
  .module('app.shared', [])
  .component('navbar', NavBarComponent)
  .component('spinner', SpinnerComponent)
  .name;
