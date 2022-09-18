import { Sequelize } from "sequelize";
import allConfig from "../config/config.js";

// TODO: import models

const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// TODO: add model relationships

export default db;
