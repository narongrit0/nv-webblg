const UserController = require('./controller/UserControllers');

module.exports = (app) => {
  //get all user
  app.get("/user", UserController.index),
  //create user
  app.post("/user/:userId", UserController.create),
  //edit
  app.put("/user/:userId", UserController.put),
  //delete
  app.delete("/user/:userId", UserController.delete),
  //show by id
  app.get("/user/:userId", UserController.show);
};