var express = require("express");
var router = express.Router();
var User = require("../database/models/user_model")();
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource and nodemon");
});

router.post("/", async (req, res, next) => {
  try {
    const data = await User.saveUser("Adar");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(401).send({ message: "Error happened" });
  }
});

module.exports = router;
