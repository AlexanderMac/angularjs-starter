class RoleFormController {
  constructor($location, $routeParams, NotificationService, RoleService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.roleSrvc = RoleService;
    this.roleId = +$routeParams.id;
  }

  $onInit() {
    if (!this.roleId) {
      this.role = {};
      return;
    }
    this._loadRole();
  }

  _loadRole() {
    this.isLoading = true;
    return this.roleSrvc
      .getRole(this.roleId)
      .then(role => this.role = role)
      .catch(err => {
        this.notificationSrvc.error(err, 'Unable to load role');
        this.ngLocationSrvc.path('/roles');
      })
      .finally(() => this.isLoading = false);
  }

  saveRole() {
    this.isSaving = true;
    let fn = this.roleId ? 'updateRole' : 'createRole';
    this.roleSrvc[fn](this.role)
      .then(() => {
        this.notificationSrvc.info(`Role ${this.roleId ? 'updated' : 'created'} successfully`);
        this.ngLocationSrvc.path('/roles');
      })
      .catch(err => this.notificationSrvc.error(err, 'Unable to save role'))
      .finally(() => this.isSaving = false);
  }
}

export const RoleFormComponent = {
  template: require('./form.component.pug'),
  controller: RoleFormController
};
