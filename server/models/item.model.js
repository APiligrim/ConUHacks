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
    type: String,
    enum: ["Furniture", "Electronics", "Clothing", "Miscellaneous"],
    default: "Miscellaneous",
  },
  condition: {
    type: Number,
    min: 1,
    max: 3,
    default: 2,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Item", itemSchema);
