const Sequelize = require("sequelize");
const database = require("../db/db");

const Station = database.define("station", {
  station_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  station_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  station_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Station;
