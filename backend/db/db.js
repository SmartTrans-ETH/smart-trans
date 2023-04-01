const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/database.sqlite",
  logging: false,
});

module.exports = sequelize;
