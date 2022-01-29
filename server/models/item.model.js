const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var itemSchema = new Schema({
  itemName: String,
  description: String,
  dateOfAddition: Date,
  availableUntil: Date,
  available: { type: Boolean, default: true },
  coordinates: [Number],
  category: {
    type: "String",
    enum: ["Furniture", "Electronics", "Clothing", "Miscellaneous"],
    default: "Miscellaneous",
  },
  condition: {
    type: "String",
    enum: ["Mint", "Good", "Satisfactory", "Broken"],
    default: "Good",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
