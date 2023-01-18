const checkJwt = require("../helpers/checkJwt");
const { UserRepository } = require("../repositories/index");
class UserController {
  async getUsers(req, res) {
    try {
      checkJwt(req);

      const usersList = await UserRepository.getAllUsers();

      res.json({ usersList });
    } catch (error) {
      res.status(error.status).json({ message: error.errors });
    }
  }

  async toggleUsersIsBlocked(req, res) {
    try {
      checkJwt(req);
      const { idList, isBlocked } = req.body;
      const updatedUserList = await UserRepository.changeIsBlocked(
        idList,
        isBlocked
      );

      res.json({ updatedUserList });
    } catch (error) {
      res.status(error.status).json({ message: error.errors });
    }
  }

  async deleteUsers(req, res) {
    try {
      checkJwt(req);
      const { idList } = req.body;
      const updatedUserList = await UserRepository.deleteUsers(idList);

      res.json({ updatedUserList });
    } catch (error) {
      res.status(error.status).json({ message: error.errors });
    }
  }
}

module.exports = new UserController();
