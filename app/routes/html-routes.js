// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function (app) {


  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  });

  app.get("/workshops", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/workshop.html'))
  });

  app.get("/booking", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/booking.html'))
  });


  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'))
  });

  app.get("/userprofile", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/userprofile.html'))
  });

  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/profile.html'))
  });

  app.get("/api/users", function(req,res){
    db.Profile.find({})
    .then(function(results){
      res.json(results);
    })
    .catch(function(err){
      res.json(err)
    });
  });

};