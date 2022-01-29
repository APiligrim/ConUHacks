module.exports = (app) => {
  const items = require("../controllers/item.controller.js");

  app.post("/items", items.create);
  app.get("/items", items.findAvailableItems);
  app.get("/items/category/:category", items.findCategoryItems);
  app.put("/items/claim/:id", items.makeItemUnavailable);
};
