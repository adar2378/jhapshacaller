var express = require("express");
const Validator = require("../middlewares/validator")();
var router = express.Router();
var User = require("../database/models/user_model")();
var jwtAuthenticator = require("../middlewares/jwt_authenticator")();
/* GET users listing. */
router.get(
  "/",
  // function (req, res, next) {
  //   const errors = Validator.queryValidator(req, [{ id: "id" }]);
  //   if (errors.length != 0) {
  //     res.status(401).send("Please provide info");
  //   } else {
  //     next();
  //   }
  // },
  jwtAuthenticator.authenticateToken,
  async function (req, res, next) {
    try {
      const user = await User.findUser(req.user.id);
      res.status(200).send({ name: user.name, id: user._id });
    } catch (error) {
      res.status(400).send(error);
    }
  }
);

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.body.name);

    const data = await User.saveUser(req.body.name);
    const generatedToken = await jwtAuthenticator.generateToken(data._id);
    res.send({
      userDetails: {
        name: data.name,
        id: data._id,
      },
      token: generatedToken,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: error });
  }
});

module.exports = router;
