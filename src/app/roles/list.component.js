class RoleListController {
  constructor($location, $routeParams, NotificationService, RoleService) {
    this.ngLocationSrvc = $location;
    this.roleSrvc = RoleService;
    this.ntfsSrvc = NotificationService;
    this.roleId = $routeParams.id;
  }

  $onInit() {
    this._loadRoles();
  }

  _loadRoles() {
    this.isLoading = true;
    return this.roleSrvc
      .getRoles()
      .then(roles => this.roles = roles)
      .catch(err => this.ntfsSrvc.error(err, 'Unable to load roles'))
      .finally(() => this.isLoading = false);
  }

  roleDetails(role) {
    this.ngLocationSrvc.path(`/roles/${role.id}`);
  }

  editRole(role) {
    this.ngLocationSrvc.path(`/roles/${role.id}/edit`);
  }

  deleteRole(role) {
    let res = confirm(`Delete ${role.name}? The role will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.roleSrvc
      .deleteRole(role.id)
      .then(() => {
        _.remove(this.roles, role);
        this.ntfsSrvc.info('Role deleted successfully');
      })
      .catch(err => this.ntfsSrvc.error(err, 'Unable to delete role'))
      .finally(() => this.isSaving = false);
  }
}

export const RoleListComponent = {
  template: require('./list.component.pug'),
  controller: RoleListController
};
