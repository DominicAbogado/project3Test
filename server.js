var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server

// Require all models
var db = require("./app/models");

// Initialize Express
var app = express();
var PORT = 3000;

app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("app/public"));
mongoose.connect("mongodb://localhost/projectThreeTest");

// Routes
require("./app/routes/api-routes")(app);
require("./app/routes/html-routes.js")(app);

// =============================================================

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});