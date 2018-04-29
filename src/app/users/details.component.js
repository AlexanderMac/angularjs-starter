class UserDetailsController {
  constructor($location, $routeParams, NotificationService, UserService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.userSrvc = UserService;
    this.userId = +$routeParams.id;
  }

  $onInit() {
    this._loadUser();
  }

  _loadUser() {
    this.isLoading = true;
    return this.userSrvc
      .getUser(this.userId)
      .then(user => this.user = user)
      .catch(err => {
        this.notificationSrvc.error(err, 'Unable to load user');
        this.ngLocationSrvc.path('/users');
      })
      .finally(() => this.isLoading = false);
  }
}

export const UserDetailsComponent = {
  template: require('./details.component.pug'),
  controller: UserDetailsController
};
