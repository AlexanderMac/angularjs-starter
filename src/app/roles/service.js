export class RoleService {
  constructor(lsRepoServiceFactory) {
    this.repoSrvc = lsRepoServiceFactory.getInstance();
    this.repoSrvc.init('Roles');
  }

  getRole(id) {
    return this.repoSrvc.getOne(id);
  }

  getRoles() {
    return this.repoSrvc.getList();
  }

  createRole(role) {
    return this.repoSrvc.create(role);
  }

  updateRole(roleData) {
    return this.repoSrvc.update(roleData);
  }

  deleteRole(id) {
    return this.repoSrvc.delete(id);
  }
}

RoleService.$inject = ['LocalStorageRepoServiceFactory'];
