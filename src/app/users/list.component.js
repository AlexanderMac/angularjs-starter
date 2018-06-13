class UserListController {
  constructor($q, $location, $routeParams, NotificationService, RoleService, UserService) {
    this.ngQSrvc = $q;
    this.ngLocationSrvc = $location;
    this.roleSrvc = RoleService;
    this.userSrvc = UserService;
    this.ntfsSrvc = NotificationService;
    this.userId = $routeParams.id;
  }

  $onInit() {
    this._loadUsers();
  }

  _loadUsers() {
    this.isLoading = true;
    return this.ngQSrvc
      .all([
        this.roleSrvc.getRoles(),
        this.userSrvc.getUsers()
      ])
      .then(([roles, users]) => {
        _.each(users, user => {
          user.roles = _.chain(user.roles)
            .map(userRoleId => _.find(roles, { id: +userRoleId }))
            .map(role => role ? role.name : '')
            .compact()
            .join(',')
            .value();
        });
        this.users = users;
      })
      .catch(err => this.ntfsSrvc.error(err, 'Unable to load users'))
      .finally(() => this.isLoading = false);
  }

  userDetails(user) {
    this.ngLocationSrvc.path(`/users/${user.id}`);
  }

  editUser(user) {
    this.ngLocationSrvc.path(`/users/${user.id}/edit`);
  }

  deleteUser(user) {
    let res = confirm(`Delete ${user.name}? The user will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.userSrvc
      .deleteUser(user.id)
      .then(() => {
        _.remove(this.users, user);
        this.ntfsSrvc.info('User deleted successfully');
      })
      .catch(err => this.ntfsSrvc.error(err, 'Unable to delete user'))
      .finally(() => this.isSaving = false);
  }
}

export const UserListComponent = {
  template: require('./list.component.pug'),
  controller: UserListController
};
