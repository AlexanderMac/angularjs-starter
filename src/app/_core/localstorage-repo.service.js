import * as _          from 'lodash';
import { BaseService } from './base.service';

export class LocalStorageRepoService extends BaseService {
  constructor($q, $window) {
    super($q);
    this.localStorage = $window.localStorage;
  }

  init(collectionName) {
    this.collectionName = collectionName;
    this.load();
  }

  load() {
    let objectsStr = this.localStorage.getItem(this.collectionName);
    if (objectsStr) {
      let objects = _.attempt(JSON.parse.bind(null, objectsStr));
      this.objects = _.isError(objects) ? [] : objects;
      let nextIdStr = _.chain(this.objects)
        .map('id')
        .max()
        .value();
      this.nextId = +nextIdStr || 0;
    }
  }

  save() {
    let objects = _.chain(this.objects)
      .map(obj => _.omit(obj, '$$hashKey'))
      .value();
    let objectsStr = JSON.stringify(objects);
    this.localStorage.setItem(this.collectionName, objectsStr);
  }

  create(obj) {
    return super
      .create(obj)
      .then(res => {
        this.save();
        return res;
      });
  }

  update(objData) {
    return super
      .update(objData)
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

export class LocalStorageRepoServiceFactory {
  constructor($q, $window) {
    this.$q = $q;
    this.$window = $window;
  }

  getInstance() {
    return new LocalStorageRepoService(this.$q, this.$window);
  }
}
