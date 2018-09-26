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

app.get("/api/users", function(req,res){
  db.Profile.find({})
  .then(function(dbUsers){
    res.json(dbUsers);
  })
  .catch(function(err){
    res.json(err)
  });
});

app.get('/api/users/_id',function(req,res){
  db.Profile.find({
      where:{
          uid:req.params._id
      }
  }).then(function(data){
      
      //send user data to html and js file [data]
      res.json(data);
      
  })
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

app.get("/api/workshop/connection/:connection", function(req, res) {
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

//USER PROFILE
app.post("/api/users", function (req, res) {
  db.Profile.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contactNum: req.body.contactNum,
    schoolName: req.body.schoolName,
    schoolAddress: req.body.schoolAddress,
    city: req.body.city,
    province: req.body.city,
    postal: req.body.postal
  });
  res.sendStatus(200);
});



// app.post("/api/bookings", function(req,res){
//   db.Booking.create({
//     firstName:req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     schoolName: req.body.schoolName,
//     schoolAddress: req.body.schoolAddress,
//     grade: req.body.grade,
//     classSize: req.body.classSize,
//     selection: req.body.selection
//   })
//   .then(function(dbBooking){
//     res.json(dbBooking)
//   });
// });

};