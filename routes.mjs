import db from "./db/models/index.mjs";
import initUsersController from "./controllers/users.controller.mjs";
import initOrdersController from "./controllers/orders.controller.mjs";

export default function routes(app) {
  // users routes
  const usersController = initUsersController(db);
  app.post("/api/register", usersController.signup);
  app.post("/api/login", usersController.login);
  app.get("/api/verify-cookie", usersController.verifyUserIsLoggedIn);

  // orders routes
  const ordersController = new initOrdersController(db, usersController);
  app.post("/api/orders", ordersController.postNewOrder);
}
