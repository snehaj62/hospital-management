const mongoose = require("mongoose");

const Doctor_appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  date: Date,
  status: String, 
});

module.exports = mongoose.model(
  "Doctor_Appointment",
  Doctor_appointmentSchema
);
