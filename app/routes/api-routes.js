var Workshop = require("../models/Workshop.js")
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

app.get("/api/all", function(req, res) {
  db.Workshop.find({})
    .then(function(dbWorkshop) {
      res.json(dbWorkshop);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/api/all/:_id", function(req, res) {
  db.Workshop.find({
    _id: req.params._id
  })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/api/workshop/:title", function(req, res) {
  db.Workshop.find({
    title:req.params.title
  })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

};