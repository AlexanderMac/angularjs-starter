export class UserService {
  constructor(LocalStorageRepoService) {
    this.repoSrvc = LocalStorageRepoService;
    this.repoSrvc.init('Users');
  }

  getUser(id) {
    return this.repoSrvc
      .getOne(id)
      .then(res => res.data);
  }

  getUsers() {
    return this.repoSrvc
      .getList()
      .then(res => res.data);
  }

  createUser(user) {
    return this.repoSrvc
      .create(user)
      .then(res => res.data);
  }

  updateUser(userData) {
    return this.repoSrvc
      .update(userData)
      .then(res => res.data);
  }

  deleteUser(id) {
    return this.repoSrvc.delete(id);
  }
}
