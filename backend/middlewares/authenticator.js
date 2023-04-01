const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const Token = req.header("Authorization").replace("Bearer ", "");

  if (!Token) {
    res.status(401).send({ error: "Please authenticate." });
    return;
  }

  try {
    const [token, tokenType] = Token.split(" ");

    const { sub } = jwt.verify(token, process.env.JWT_SECRET);
    req.id = sub;
    
    next()
  } catch (error) {
    res.status(401).send({ error: "user not logged" });
  }
};

module.exports = auth;
