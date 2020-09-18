//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  name: String,
  created_at: { type: Date, default: Date.now() },
});

var userModel = mongoose.model("UserModel", UserModelSchema);
module.exports = userModel;
