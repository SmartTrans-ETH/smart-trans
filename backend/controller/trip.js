const Trips = require("../models/trip");
const moment = require("moment");

class Trip {
  async create_trip(user_id, station_id, trip_date) {
    try {
      const trip = await Trips.create({
        user_id: user_id,
        station_id: station_id,
        trip_date: trip_date,
      });
      return trip;
    } catch (error) {
      console.log(error);
    }
  }
  async find_all() {
    const trips = await Trips.findAll();
    return trips;
  }
  async find_all_user(user_id) {
    const trips = await Trips.findAll({ where: { user_id: user_id } });
    const Station = require("../controller/station");
    const result = [];
    for (let i = 0; i < trips.length; i++) {
      const station = await Station.get_station(trips[i].station_id);
      console.log(trips[i]["createdAt"])
      result.push({
        date: moment(trips[i]["createdAt"]).format("DD/MM/YYYY"),
        hour: moment(trips[i]["createdAt"]).format("HH:mm"),
        station: station["station_name"],
      });
    }
    return result;
  }
  async find_all_station(station_id) {
    const trips = await Trips.findAll({ where: { station_id: station_id } });
    return trips;
  }
}

module.exports = new Trip();
