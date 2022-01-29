const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const upload = require("express-fileupload");
const path = require("path");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 6000;

const app = express();
app.options("*", cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(cors());
app.use(upload());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../web/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../web/build", "index.html"));
  });
}

mongoose.Promise = global.Promise;

dbConfig = {
  url: process.env.dbURL,
};

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

require("./routes/items.route.js")(app);

// Examples
app.get("/testGet", async (req, res) => {
  console.log("Tested Get");
  res.json({ status: "working" });
});

app.post("/testPost", async (req, res) => {
  console.log("request body");
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => console.log("Server @ port", port));
