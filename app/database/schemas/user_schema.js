//Require Mongoose
var mongoose = require("mongoose");
const myMongoose = require("../db_connector");
//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  name: String,
  created_at: { type: Date, default: Date.now() },
});

var userModel = myMongoose.model("user", UserModelSchema);
module.exports = userModel;
