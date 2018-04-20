import * as ng                 from 'angular';
import * as toastr             from 'toastr';
import { NotificationService } from './notification.service';
import { MemoryRepoService }   from './memory-repo.service';

export default ng
  .module('app.services', [])
  .service('NotificationService', NotificationService)
  .service('MemoryRepoService', MemoryRepoService)
  .value('Toastr', toastr)
  .name;
