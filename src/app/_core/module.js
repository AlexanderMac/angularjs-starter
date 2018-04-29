import * as ng                 from 'angular';
import { NotificationService } from './notification.service';
import { MemoryRepoService }   from './memory-repo.service';

export default ng
  .module('app.core', [])
  .service('NotificationService', NotificationService)
  .service('MemoryRepoService', MemoryRepoService)
  .name;
