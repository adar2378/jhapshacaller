const jwt = require("jsonwebtoken");
const fs = require("fs");
var privateKEY = fs.readFileSync("./private.key", "utf8");
var publicKEY = fs.readFileSync("./public.key", "utf8");

const jwtAuthenticator = () => {
  const authenticateToken = (req, res, next) => {
    // Gather the jwt access token from the request header
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401); // if there isn't any token

    jwt.verify(token, publicKEY, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      req.user = user;
      next(); // pass the execution off to whatever request the client intended
    });
  };

  const generateToken = async () => {
    var payload = {
      user: "Adar",
    };
    const signOptions = {
      expiresIn: "30d", // 30 days validity
      algorithm: "RS256",
    };
    try {
      const token = await jwt.sign(payload, privateKEY, signOptions);
      return token;
    } catch (error) {
      return false;
    }
  };

  return { authenticateToken, generateToken };
};

module.exports = jwtAuthenticator;
