class UserFormController {
  constructor($location, $routeParams, NotificationService, UsersService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.usersSrvc = UsersService;
    this.userId = $routeParams._id;
  }

  $onInit() {
    if (!this.userId) {
      this.user = {};
      return;
    }
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

  saveUser() {
    this.isSaving = true;
    let fn = this.userId ? 'updateUser' : 'createUser';
    this.usersSrvc[fn](this.user)
      .then(() => {
        this.notificationSrvc.info(`User ${this.userId ? 'updated' : 'created'} successfully`);
        this.ngLocationSrvc.path('/users');
      })
      .catch(err => this.notificationSrvc.error(err, 'Unable to save record'))
      .finally(() => this.isSaving = false);
  }
}

export const UserFormComponent = {
  template: require('./user-form.component.pug'),
  controller: UserFormController
};
