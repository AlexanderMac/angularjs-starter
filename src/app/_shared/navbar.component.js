class NavBarController {
  constructor($location) {
    this.ngLocationSrvc = $location;
  }

  isActive(route, fullMatch) {
    let currentPath = this.ngLocationSrvc.path();
    if (!fullMatch) {
      return _.startsWith(currentPath, route);
    }
    return route === currentPath;
  }
}

export const NavBarComponent = {
  template: require('./navbar.component.pug'),
  controller: NavBarController
};
