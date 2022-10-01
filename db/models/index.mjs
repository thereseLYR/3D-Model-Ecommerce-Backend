import { Sequelize } from "sequelize";
import allConfig from "../../sequelize.config.cjs";
import url from "url";
import initUserModel from "./user.mjs";
import initModelModel from "./model.mjs";
import initOrderModel from "./order.mjs";

const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

let sequelize;

if (env === "production") {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(":"));
  const password = dbUrl.auth.substr(
    dbUrl.auth.indexOf(":") + 1,
    dbUrl.auth.length
  );
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Model = initModelModel(sequelize, Sequelize.DataTypes);
db.Order = initOrderModel(sequelize, Sequelize.DataTypes);

// Specify relationship of the tables here:
// 1. User (One) - Order (Many)
db.User.hasMany(db.Order, {
  foreignKey: "customerId",
});
db.Order.belongsTo(db.User, { foreignKey: "id" });

export default db;
