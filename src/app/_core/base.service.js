import * as _ from 'lodash';

export class BaseService {
  constructor($q) {
    this.ngQPromise = $q;
    this.objects = [];
    this.nextId = 0;
  }

  getOne(id) {
    let obj = _.chain(this.objects)
      .find({ id: parseInt(id) })
      .cloneDeep()
      .value();
    return this.ngQPromise.resolve(obj);
  }

  getList() {
    let objects = _.cloneDeep(this.objects);
    return this.ngQPromise.resolve(objects);
  }

  create(obj) {
    obj.id = ++this.nextId;
    this.objects.push(_.cloneDeep(obj));
    return this.ngQPromise.resolve(obj);
  }

  update(objData) {
    let obj = _.find(this.objects, { id: parseInt(objData.id) });
    _.extend(obj, objData);
    return this.ngQPromise.resolve(_.cloneDeep(obj));
  }

  delete(id) {
    _.remove(this.objects, { id: parseInt(id) });
    return this.ngQPromise.resolve();
  }
}
