class UserDetailsController {
  constructor($location, $routeParams, NotificationService, UserService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.userSrvc = UserService;
    this.userId = $routeParams._id;
  }

  $onInit() {
    this.isLoading = true;
    this._loadUser();
  }

  _loadUser() {
    return this.userSrvc
      .getUser({ _id: this.userId })
      .then(user => {
        this.user = user;
        this.isLoading = false;
      })
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
