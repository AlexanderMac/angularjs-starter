import * as _ from 'lodash';

export class MemoryRepoService {
  constructor($q) {
    this.ngQPromise = $q;
    this.models = [];
    this.nextId = 0;
  }

  getOne(id) {
    let res = _.find(this.models, { id: parseInt(id) });
    return this.ngQPromise.resolve(res);
  }

  getList() {
    return this.ngQPromise.resolve(this.models);
  }

  create(model) {
    model.id = ++this.nextId;
    this.models.push(model);
    return this.ngQPromise.resolve(model);
  }

  update(modelData) {
    let model = _.find(this.models, { id: parseInt(modelData.id) });
    _.extend(model, modelData);
    return this.ngQPromise.resolve(model);
  }

  delete(id) {
    _.remove(this.models, { id: parseInt(id) });
    return this.ngQPromise.resolve();
  }
}

export function MemoryRepoServiceFactory() {
  return MemoryRepoService;
}
