class RoleMultiselectorController {
  constructor(RoleService) {
    this.roleSrvc = RoleService;
    this.roles = [];
    this.selectedRoles = {};
    this.isNoRoleSelected = true;
  }

  $onInit() {
    this.roleSrvc
      .getRoles()
      .then(roles => {
        this.roles = roles;
        this.selectedRoles = _.reduce(this.roles, (res, role) => {
          res[role.id] = _.includes(this.initialRoles, role.id);
          return res;
        }, {});
        this.isNoRoleSelected = this.initialRoles.length === 0;
      });
  }

  changeRole() {
    let roles = _.chain(this.selectedRoles)
      .keys()
      .filter(roleId => this.selectedRoles[roleId])
      .value();
    this.isNoRoleSelected = roles.length === 0;
    this.onChange({ roles });
  }
}

export const RoleMultiselectorComponent = {
  template: require('./multiselector.component.pug'),
  controller: RoleMultiselectorController,
  bindings: {
    initialRoles: '<',
    onChange: '&'
  }
};
