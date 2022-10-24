# 3D-Model-Ecommerce-Backend

3D-Model-Ecommerce-Backend

TODO:

- [ ] (for unchecked checkbox)
- [ ] insert list of routes and apis to call

## How to setup and run backend server locally

1. Clone repo
2. Install packages by running `npm i`

3. Create a .env file with these set of configurations

```
POSTGRES_USERNAME=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_HOST=127.0.0.1
POSTGRES_DATABASE=3d-model-ecommerce-development
SALT=3d-model
STRIPE_SECRET_KEY=<stripe_sk>
```

4. Create DB and run migrations

```
npx sequelize db:create
npx sequelize db:migrate:all
npx sequelize db:seed:all
```

5. Run server with

```
nodemon index.mjs
```

6. Optionally configure node.json to watch for certain file extensions (.js / .mjs)

7. Other sequel commands

- Use these commands to generate migrations and seeders

```
npx sequelize migration:generate --name create-tables
npx sequelize seed:generate --name seed-data
```

- Destructive actions to undo a migration/seeding/drop table

```
npx sequelize db:migrate:undo
npx sequelize db:seed:undo
npx sequelize db:drop
```
