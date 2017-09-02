class UserDetailsController {
  constructor($location, $routeParams, NotificationService, UsersService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.usersSrvc = UsersService;
    this.userId = $routeParams._id;
  }

  $onInit() {
    this.isLoading = true;
    return this.usersSrvc
      .getUser({ _id: this.userId })
      .then(user => {
        this.user = user;
        this.isLoading = false;
      })
      .catch(err => {
        this.notificationSrvc.error(err, 'Unable to load record');
        this.ngLocationSrvc.path('/users');
      })
      .finally(() => this.isLoading = false);
  }
}

export const UserDetailsComponent = {
  template: require('./user-details.component.pug'),
  controller: UserDetailsController
};
