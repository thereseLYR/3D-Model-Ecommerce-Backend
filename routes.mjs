import db from "./db/models/index.mjs";
import initUsersController from "./controllers/users.controller.mjs";
import initOrdersController from "./controllers/orders.controller.mjs";
import initStripeController from "./controllers/stripe.controller.mjs";

export default function routes(app) {
  // users routes
  const usersController = initUsersController(db);
  app.post("/api/register", usersController.signup);
  app.post("/api/login", usersController.login);
  app.post("/api/update-profile", usersController.updateProfile);
  app.get("/api/verify-cookie", usersController.verifyUserIsLoggedIn);

  // orders routes
  const ordersController = new initOrdersController(db, usersController);
  app.post("/api/orders", ordersController.postNewOrder);

  // stripe routes
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
  const stripeController = new initStripeController(STRIPE_SECRET_KEY);
  app.post("/api/stripe/payment-intents", stripeController.postPaymentIntent);
}
