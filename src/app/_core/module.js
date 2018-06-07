import * as ng                            from 'angular';
import { NotificationService }            from './notification.service';
import { MemoryRepoServiceFactory }       from './memory-repo.service';
import { LocalStorageRepoServiceFactory } from './localstorage-repo.service';

export default ng
  .module('app.core', [])
  .service('NotificationService', NotificationService)
  .service('MemoryRepoService', MemoryRepoServiceFactory)
  .service('LocalStorageRepoService', LocalStorageRepoServiceFactory)
  .name;
