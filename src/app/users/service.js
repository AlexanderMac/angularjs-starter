export class UserService {
  constructor($q, $window, LocalStorageRepoService) {
    this.repoSrvc = new LocalStorageRepoService($q, $window);
    this.repoSrvc.init('Users');
  }

  getUser(id) {
    return this.repoSrvc.getOne(id);
  }

  getUsers() {
    return this.repoSrvc.getList();
  }

  createUser(user) {
    return this.repoSrvc.create(user);
  }

  updateUser(userData) {
    return this.repoSrvc.update(userData);
  }

  deleteUser(id) {
    return this.repoSrvc.delete(id);
  }
}
