class UserFormController {
  constructor($location, $routeParams, NotificationService, UserService) {
    this.ngLocationSrvc = $location;
    this.notificationSrvc = NotificationService;
    this.userSrvc = UserService;
    this.userId = +$routeParams.id;
  }

  $onInit() {
    if (!this.userId) {
      this.user = {};
      return;
    }
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

  saveUser() {
    this.isSaving = true;
    let fn = this.userId ? 'updateUser' : 'createUser';
    this.userSrvc[fn](this.user)
      .then(() => {
        this.notificationSrvc.info(`User ${this.userId ? 'updated' : 'created'} successfully`);
        this.ngLocationSrvc.path('/users');
      })
      .catch(err => this.notificationSrvc.error(err, 'Unable to save user'))
      .finally(() => this.isSaving = false);
  }
}

export const UserFormComponent = {
  template: require('./form.component.pug'),
  controller: UserFormController
};
