# 3D-Model-Ecommerce-Backend
3D-Model-Ecommerce-Backend

## How to setup and run backend server locally
1. Clone repo
2. Install packages by running 
```
npm i
```
3. Create a .env file with these set of configurations
```
POSTGRES_USERNAME=<username>
POSTGRES_PASSWORD=<password>
POSTGRES_HOST=127.0.0.1
POSTGRES_DATABASE=3d-model-ecommerce-development
SALT=3d-model
```
4. Create DB and run migrations
```
npx sequelize db:create
[optional] npx sequelize migration:generate --name create-tables
[optional] npx sequelize seed:generate --name seed-data
[optional] npx sequelize db:migrate
[optional] npx sequelize db:seed:all
[optional] npx sequelize db:migrate:undo
[optional] npx sequelize db:seed:undo
```
5. Run server with 
```
nodemon index.mjs
```
6. Optionally configure node.json to watch for certain file extensions (.js / .mjs)


