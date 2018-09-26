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
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'))
  });

  app.get("/profile", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/profile.html'))
  });

    app.get("/booking", function (req, res) {
    res.sendFile(path.join(__dirname, '../public/public.html'))
  });

};