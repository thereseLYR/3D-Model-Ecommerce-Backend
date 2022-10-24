import initCategoriesController from "./controllers/categories.controller.mjs";
import initModelsController from "./controllers/models.controller.mjs";
import initOrdersController from "./controllers/orders.controller.mjs";
import initStripeController from "./controllers/stripe.controller.mjs";
import initUsersController from "./controllers/users.controller.mjs";
import db from "./db/models/index.mjs";

export default function routes(app) {
  // users routes
  const usersController = initUsersController(db);
  app.post("/api/register", usersController.signup);
  app.post("/api/login", usersController.login);
  app.post("/api/update-profile", usersController.updateProfile);
  app.post("/api/logout", usersController.logout);
  app.get("/api/verify-cookie", usersController.verifyUserIsLoggedIn);
  app.get("/api/users/:user_id", usersController.getUserByUserID);

  // orders routes
  const ordersController = new initOrdersController(db, usersController);
  app.post("/api/orders", ordersController.postNewOrder);
  app.get("/api/orders/users/:user_id", ordersController.getLatestOrder);

  // stripe routes
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
  const stripeController = new initStripeController(STRIPE_SECRET_KEY);
  app.post("/api/stripe/payment-intents", stripeController.postPaymentIntent);

  // models routes
  const modelsController = initModelsController(db);
  app.get("/api/models/:modelId", modelsController.getModelData); //expects something like /api/models/1
  app.get("/api/models", modelsController.getAllModels);
  app.get(
    "/api/models-by-category/:categoryId",
    modelsController.getModelsByCategory
  );

  // categories routes
  const categoriesController = initCategoriesController(db);
  app.get("/api/categories", categoriesController.getAllCategories);
}
