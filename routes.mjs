import { resolve } from 'path';
import db from './db/models/index.mjs';
import initUsersController from './controllers/users-controller.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);

  app.post('/api/register', usersController.signup);
  app.post('/api/login', usersController.login);
  app.get('/api/verify-cookie', usersController.verify);
}
