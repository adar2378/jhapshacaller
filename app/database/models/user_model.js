const UserModel = require("../schemas/user_schema");

const User = () => {
  const saveUser = async (name) => {
    console.log("Inside user");
    const userName = name;
    const model = new UserModel({ name: userName });
    try {
      const result = await model.save();
      console.log("Saved");
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  return {
    saveUser,
  };
};

module.exports = User;
