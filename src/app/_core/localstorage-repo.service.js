import * as _                from 'lodash';
import { MemoryRepoService } from './memory-repo.service';

export class LocalStorageRepoService extends MemoryRepoService {
  constructor($q, $window) {
    super($q);
    this.localStorage = $window.localStorage;
  }

  init(collectionName) {
    this.collectionName = collectionName;
    this.load();
  }

  load() {
    let modelsStr = this.localStorage.getItem(this.collectionName);
    if (modelsStr) {
      let models = _.attempt(JSON.parse.bind(null, modelsStr));
      this.models = _.isError(models) ? [] : models;
      let nextIdStr = _.chain(this.models)
        .map('id')
        .max()
        .value();
      this.nextId = +nextIdStr || 0;
    }
  }

  save() {
    let models = _.chain(this.models)
      .map(model => _.omit(model, '$$hashKey'))
      .value();
    let modelsStr = JSON.stringify(models);
    this.localStorage.setItem(this.collectionName, modelsStr);
  }

  create(model) {
    return super
      .create(model)
      .then(res => {
        this.save();
        return res;
      });
  }

  update(modelData) {
    return super
      .update(modelData)
      .then(res => {
        this.save();
        return res;
      });
  }

  delete(id) {
    return super
      .delete(id)
      .then(res => {
        this.save();
        return res;
      });
  }
}

export function LocalStorageRepoServiceFactory() {
  return LocalStorageRepoService;
}
