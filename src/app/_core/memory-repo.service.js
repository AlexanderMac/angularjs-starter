import { BaseService } from './base.service';

export class MemoryRepoService extends BaseService {}

export function MemoryRepoServiceFactory() {
  return MemoryRepoService;
}
