const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authenticator");

const Trip = require("../controller/trip");

router.post("/add", async (req, res) => {
  const { user_id, station_id } = req.body;
  const trip = await Trip.create_trip(user_id, station_id);
  res.json(trip);
});

router.get("/", auth, async (req, res) => {
  const trips = await Trip.find_all();
  res.json(trips);
});

router.get("/user", auth, async (req, res) => {
  const trips = await Trip.find_all_user(req.id);
  res.json(trips);
});

router.get("/station", auth, async (req, res) => {
  const { station_id } = req.body;
  const trips = await Trip.find_all_station(station_id);
  res.json(trips);
});

module.exports = router;
