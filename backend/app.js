//index.js
const express = require("express");
require("express-async-errors");
require("dotenv").config();
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json()); //Irá suportar JSON
app.use(
  bodyParser.urlencoded({
    // Irá suportar urlenconded
    extended: true,
  })
);

(async () => {
  const database = require("./db/db.js");
  const User = require("./models/user");
  const Station = require("./models/station");
  const Trip = require("./models/trip");

  try {
    const resultado = await database.sync();
    console.log("foi");
  } catch (error) {
    console.log(error);
  }
})();

//routers
const userRouter = require("./router/user");
const stationRouter = require("./router/station");
const tripRouter = require("./router/trip");

app.use("/user", userRouter);
app.use("/station", stationRouter);
app.use("/trip", tripRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
