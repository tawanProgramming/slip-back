const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  tickets: [
    {
      name: String,
      code: String,
      date: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
