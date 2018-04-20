import * as ng                 from 'angular';
import * as toastr             from 'toastr';
import { NotificationService } from './notification.service';
import { MemoryRepoService }   from './memory-repo.service';
import { NavBarComponent }     from './navbar.component';
import { SpinnerComponent }    from './spinner.component';

export default ng
  .module('app.common', [])
  .service('NotificationService', NotificationService)
  .service('MemoryRepoService', MemoryRepoService)
  .value('Toastr', toastr)
  .component('navBar', NavBarComponent)
  .component('spinner', SpinnerComponent)
  .name;
