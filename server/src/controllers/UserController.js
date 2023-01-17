class UserController {
  async getUsers(req, res) {
    res.json("server");
  }
}

module.exports = new UserController();
