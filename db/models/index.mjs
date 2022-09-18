import { Sequelize } from "sequelize";
import allConfig from "../../sequelize.config.cjs";
import url from 'url';
import initUserModel from './user.mjs';

// TODO: import models

const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// TODO: add model relationships
db.User = initUserModel(sequelize, Sequelize.DataTypes);

// Specify relationship of the tables here:

export default db;
