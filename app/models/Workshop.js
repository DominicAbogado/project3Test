const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workshopSchema = new Schema({
    title: { type: String, required: true },
    desciption: { type: String, required: true },
    offerings: [
      {
        grade: Number,
        topic: String,
        curriculum: String,
        connection: String
      }
    ],
    saved:{type: Boolean, default:false}
  });

  const Workshop = mongoose.model("Workshop", workshopSchema)
  
  module.exports = Workshop;