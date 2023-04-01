const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const Token = req.header("Authorization").replace("Bearer ", "");

  if (!Token) {
    res.status(401).send({ error: "Please authenticate." });
    return;
  }

  try {
    const [token, tokenType] = Token.split(" ");

    const { sub } = jwt.verify(token, "4b0d30a9f642b3bfff67d0b5b28371a9");
    req.id = sub;
    return { "executing:next function": next() };
  } catch (error) {
    res.status(401).send({ error: "user not logged" });
  }
};

module.exports = auth;
