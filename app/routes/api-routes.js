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

app.get("/api/:_id", function(req, res) {
  db.Workshop.findById({
    _id: req.params._id
  })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/api/workshop/offering/:grade", function(req, res) {
  console.log(req.params.grade);
  db.Workshop.find({
    "offerings.grade":req.params.grade
  })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.get("/api/workshop/offering/:connection", function(req, res) {
  db.Workshop.find({
    "offerings.connection":req.params.connection
  })
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});


app.post("/api/bookings", function(req,res){
  db.Booking.create({
    firstName:req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    schoolName: req.body.schoolName,
    schoolAddress: req.body.schoolAddress,
    grade: req.body.grade,
    classSize: req.body.classSize,
    selection: req.body.selection
  })
  .then(function(dbBooking){
    res.json(dbBooking)
  });
});

app.post("/api/users", function(req, res){
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then
})

};