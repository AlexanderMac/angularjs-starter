import * as _ from 'lodash';

export class MemoryRepoService {
  constructor($q) {
    this.ngQPromise = $q;
    this.models = [];
    this.nextId = 0;
  }

  getOne(_id) {
    let res = _.find(this.models, { _id: parseInt(_id) });
    return this.ngQPromise.resolve({ data: res });
  }

  getList() {
    let res = this.models;
    return this.ngQPromise.resolve({ data: res });
  }

  create(model) {
    model._id = ++this.nextId;
    this.models.push(model);
    return this.ngQPromise.resolve({ data: model });
  }

  update(modelData) {
    let model = _.find(this.models, { _id: parseInt(modelData._id) });
    _.extend(model, modelData);
    return this.ngQPromise.resolve({ data: model });
  }

  delete(_id) {
    _.remove(this.models, { _id: parseInt(_id) });
    return this.ngQPromise.resolve({});
  }
}
