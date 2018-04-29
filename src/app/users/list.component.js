class UsersListController {
  constructor($location, $routeParams, NotificationService, UserService) {
    this.ngLocationSrvc = $location;
    this.userSrvc = UserService;
    this.notificationSrvc = NotificationService;
    this.userId = $routeParams.id;
  }

  $onInit() {
    this.isLoading = true;
    this._loadUsers();
  }

  _loadUsers() {
    return this.userSrvc
      .getUsers()
      .then(users => this.users = users)
      .catch(err => this.notificationSrvc.error(err, 'Unable to load users'))
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
        this.notificationSrvc.info('User deleted successfully');
      })
      .catch(err => this.notificationSrvc.error(err, 'Unable to delete user'))
      .finally(() => this.isSaving = false);
  }
}

export const UsersListComponent = {
  template: require('./list.component.pug'),
  controller: UsersListController
};
