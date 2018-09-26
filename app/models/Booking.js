const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    schoolName: { type: String, required: true },
    schoolAddress: { type: String, required: true },
    grade: {type: Number, required: true},
    classSize: {type: Number, required:true},
    selection: { type: String, required: true }

  });

  const Booking = mongoose.model("Booking", bookingSchema)
  
  module.exports = Booking;