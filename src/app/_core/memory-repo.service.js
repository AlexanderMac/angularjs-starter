import * as _ from 'lodash';

export class MemoryRepoService {
  constructor($q) {
    this.ngQPromise = $q;
    this.models = [];
    this.nextId = 0;
  }

  getOne(id) {
    let model = _.chain(this.models)
      .find({ id: parseInt(id) })
      .cloneDeep()
      .value();
    return this.ngQPromise.resolve(model);
  }

  getList() {
    let models = _.cloneDeep(this.models);
    return this.ngQPromise.resolve(models);
  }

  create(model) {
    model.id = ++this.nextId;
    this.models.push(_.cloneDeep(model));
    return this.ngQPromise.resolve(model);
  }

  update(modelData) {
    let model = _.find(this.models, { id: parseInt(modelData.id) });
    _.extend(model, modelData);
    return this.ngQPromise.resolve(_.cloneDeep(model));
  }

  delete(id) {
    _.remove(this.models, { id: parseInt(id) });
    return this.ngQPromise.resolve();
  }
}

export function MemoryRepoServiceFactory() {
  return MemoryRepoService;
}
