class NavBarController {
  constructor($location) {
    this.ngLocationSrvc = $location;
  }

  isActive(route) {
    return _.startsWith(this.ngLocationSrvc.path(), route);
  }
}

export const NavBarComponent = {
  template: require('./navbar.component.pug'),
  controller: NavBarController
};
