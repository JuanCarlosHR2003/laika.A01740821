const mongoose = require("mongoose");
const { addressSchema } = require("./address");

const homeSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true,
  },
  end_date: Date,
  keeper: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
    },
  },
  address: {
    type: addressSchema,
    required: true,
  },
});

homeSchema.virtual("type").get(function () {
  if (!this.end_date) return "Permanente";
  return "Temporal";
});

const Home = mongoose.model("Home", homeSchema);
module.exports = { Home, homeSchema };
