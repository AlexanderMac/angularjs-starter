export class RoleService {
  constructor($q, $window, LocalStorageRepoService) {
    this.repoSrvc = new LocalStorageRepoService($q, $window);
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
