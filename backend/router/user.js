const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const auth = require("../middlewares/authenticator");

const User = new user.User();
function foi() {
  return "user validado";
}

router.get("/register", async (req, res) => {
  const { name, cpf, birthday, email, pass, address, city, state } = req.body;

  const users = await User.register(
    name,
    cpf,
    birthday,
    email,
    pass,
    address,
    city,
    state
  );

  res.json(users);
});

router.get("/login", async (req, res) => {
  const { email, pass } = req.body;
  const token = await User.Authentication(email, pass);
  res.json(token);
});
router.get("/auth", async (req, res) => {
  const { token } = req.body;
  const autho = await auth(req, res, foi);
  res.send(autho);
});

module.exports = router;
