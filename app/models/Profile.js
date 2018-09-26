const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  contactNum: { type: String, required: true },
  schoolName: { type: String, required: true },
  schoolAddress: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  postal: { type: String, required: true }
  });

  const Profile = mongoose.model("Profile", profileSchema)
  
  module.exports = Profile;
