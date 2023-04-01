const express = require("express");
const router = express.Router();
const Station = require("../controller/station");

router.get("/", async (req, res) => {
  const stations = await Station.find_all();
  res.json(stations);
});

router.post("/add", async (req, res) => {
  const { station_address, station_name } = req.body;
  const station = await Station.create_station(station_address, station_name);
  res.json(station);
});

router.delete("/delete", async (req, res) => {
  const { station_id } = req.body;
  const station = await Station.delete_station(station_id);
  res.json(station);
});

module.exports = router;
