const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, min: [6, 'Too few characters'], max: 20},
  });

  const User = mongoose.model("User", userSchema)
  
  module.exports = User;
