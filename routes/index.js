var express = require("express");
var router = express.Router();
var jwtAuthenticator = require("../middlewares/jwt_authenticator")();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("I am here");
});

router.get("/gen", async (req, res, next) => {
  const token = await jwtAuthenticator.generateToken();
  res.json(token);
});

router.post(
  "/verify",
  jwtAuthenticator.authenticateToken,
  async (req, res, next) => {
    res.json(req.user.user);
  }
);

module.exports = router;
