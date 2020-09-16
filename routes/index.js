var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json("I am here");
});

router.get("/gen", function (req, res, next) {
  let token = require("crypto").randomBytes(64).toString("hex");
  console.log(token);
  res.json("Ok");
});

module.exports = router;
