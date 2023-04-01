const Sequelize = require("sequelize");
const database = require("../db/db");
const User = require("./user");
const Station = require("./station");

const Trip = database.define("trip", {
  trip_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  station_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Trip.belongsTo(User, { foreignKey: "user_id" });
Trip.belongsTo(Station, { foreignKey: "station_id" });
User.hasMany(Trip, { foreignKey: "user_id" });
Station.hasMany(Trip, { foreignKey: "station_id" });

module.exports = Trip;
