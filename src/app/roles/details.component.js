class RoleDetailsController {
  constructor($location, $routeParams, NotificationService, RoleService) {
    this.ngLocationSrvc = $location;
    this.ntfsSrvc = NotificationService;
    this.roleSrvc = RoleService;
    this.roleId = +$routeParams.id;
  }

  $onInit() {
    this._loadRole();
  }

  _loadRole() {
    this.isLoading = true;
    return this.roleSrvc
      .getRole(this.roleId)
      .then(role => this.role = role)
      .catch(err => {
        this.ntfsSrvc.error(err, 'Unable to load role');
        this.ngLocationSrvc.path('/roles');
      })
      .finally(() => this.isLoading = false);
  }
}

export const RoleDetailsComponent = {
  template: require('./details.component.pug'),
  controller: RoleDetailsController
};
