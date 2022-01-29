const Item = require("../models/item.model.js");
const moment = require("moment");

exports.create = (req, res) => {
  const item = new Item({
    itemName: req.body.itemName,
    description: req.body.description,
    dateOfAddition: new Date().toLocaleDateString(),
    availableUntil: moment(req.body.availableUntil, "MM-DD-YYYY").toDate(),
    coordinates: req.body.coordinates,
    category: req.body.category,
    condition: req.body.condition,
    image: req.files.image,
  });

  item
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        success: false,
        message: err.message || "Some error occurred while creating the Item.",
      });
    });
};

exports.findAvailableItems = (req, res) => {
  Item.find({ available: true })
    .then((Items) => {
      res.send(Items);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Items.",
      });
    });
};

exports.findCategoryItems = (req, res) => {
  Item.find({ available: true, category: req.params.category })
    .then((Items) => {
      res.send(Items);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Items.",
      });
    });
};

exports.makeItemUnavailable = (req, res) => {
  Item.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        available: false,
      },
    },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("Error Occured");
      }
    }
  )
    .then((Item) => {
      if (!Item) {
        return res.status(404).send({
          success: false,
          message: "Item not found with id " + req.params.id,
        });
      }
      res.send(Item);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          success: false,
          message: "Item not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        success: false,
        message: "Error updating Item with id " + req.params.id,
      });
    });
};
