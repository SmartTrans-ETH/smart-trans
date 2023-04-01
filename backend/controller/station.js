const Stations = require("../models/station");

class Station {
  async create_station(station_address, station_name) {
    const station = await Stations.create({
      station_address: station_address,
      station_name: station_name,
    });
    return station;
  }
  async find_all() {
    const stations = await Stations.findAll();
    return stations;
  }
  async delete_station(station_id) {
    const station = await Stations.destroy({
      where: {
        station_id: station_id,
      },
    });
    return station;
  }
}

module.exports = new Station();
