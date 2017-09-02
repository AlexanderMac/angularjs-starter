class UsersListController {
  constructor($location, $routeParams, NotificationService, UsersService) {
    this.ngLocationSrvc = $location;
    this.usersSrvc = UsersService;
    this.notificationSrvc = NotificationService;
    this.userId = $routeParams._id;
  }

  $onInit() {
    this.isLoading = true;
    return this.usersSrvc
      .getUsers()
      .then(users => this.users = users)
      .catch(err => this.notificationSrvc.error(err, 'Unable to load records'))
      .finally(() => this.isLoading = false);
  }

  userDetails(user) {
    this.ngLocationSrvc.path(`/users/${user._id}`);
  }

  editUser(user) {
    this.ngLocationSrvc.path(`/users/${user._id}/edit`);
  }

  deleteUser(user) {
    let res = confirm(`Delete ${user.name}? The user will be permanently deleted.`);
    if (!res) {
      return;
    }

    this.isSaving = true;
    this.usersSrvc
      .deleteUser(user._id)
      .then(() => {
        _.remove(this.users, user);
        this.notificationSrvc.info('User deleted successfully');
      })
      .catch(err => this.notificationSrvc.error(err, 'Unable to delete user'))
      .finally(() => this.isSaving = false);
  }
}

export const UsersListComponent = {
  template: require('./users-list.component.pug'),
  controller: UsersListController
};
