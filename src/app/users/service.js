export class UserService {
  constructor(MemoryRepoService) {
    this.memoryRepoSrvc = MemoryRepoService;
  }

  getUser(data = {}) {
    return this.memoryRepoSrvc
      .getOne(data._id)
      .then(res => res.data);
  }

  getUsers() {
    return this.memoryRepoSrvc
      .getList()
      .then(res => res.data);
  }

  createUser(user) {
    return this.memoryRepoSrvc
      .create(user)
      .then(res => res.data);
  }

  updateUser(userData) {
    return this.memoryRepoSrvc
      .update(userData)
      .then(res => res.data);
  }

  deleteUser(_id) {
    return this.memoryRepoSrvc.delete(_id);
  }
}
