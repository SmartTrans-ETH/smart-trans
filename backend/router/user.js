const express = require("express");
const router = express.Router();
const user = require("../controller/user");
const auth = require("../middlewares/authenticator");

const User = new user.User();

router.post("/register", async (req, res) => {
  try {
    const { nome, cpf, birthday, email, pass, address, city, state, wallet } = req.body;

    const users = await User.register(
      nome,
      cpf,
      birthday,
      email,
      pass,
      address,
      city,
      state, wallet
    );
  
    res.json(users);
  }catch(err) {
    console.log(err)
    res.status(500).send(err.message)
  }
 
});

router.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const token = await User.Authentication(email, pass);
  res.json(token);
});
router.get("/auth", auth, async (req, res) => {
  const user = await User.getInfos(req.id)
  res.send(user);
});

module.exports = router;
