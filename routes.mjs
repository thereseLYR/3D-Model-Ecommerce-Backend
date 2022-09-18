import { resolve } from 'path';
import db from './db/models/index.mjs';
import initUsersController from './controllers/users-controller.mjs';

export default function routes(app) {
  const usersController = initUsersController(db);

  app.post('/register', usersController.signup);
  app.post('/login', usersController.login);
  app.get('/verify-cookie', usersController.verify);
  app.get('*', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
