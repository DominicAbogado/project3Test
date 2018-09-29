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
  console.log('kfnbskf')
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

app.get("/api/workshop/grade/:grade/:connection", function(req, res) {
  db.Workshop.find({
    $and: [{"offerings.connection":req.params.connection}, {"offerings.grade":req.params.grade}]
  })
    .then(function(results) {
      console.log(results);
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
  console.log(req.params.connection);
  console.log(req.params.grade);
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

app.get("/api/users", function (req, res) {
  // Grab every document in the Articles collection
  db.Profile.find({})
    .then(function (dbProfile) {
      // If we were able to  successfully find Articles, send them back to the client
      res.json(dbProfile);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


app.get("/saved-workshops/:id", function (req, res) {
  // Grab every document in the Articles collection
  db.Workshop.find({_id: req.params.id})
    .then(function (dbArticle) {
      // If we were able to  successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.get("/saved-workshops", function (req, res) {
  // Grab every document in the Articles collection
  db.Workshop.find({saved:true})
    .then(function (dbWorkshop) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbWorkshop);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


app.post("/addsave/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Workshop.findOneAndUpdate({
      _id: req.params.id
    }, {$set: {saved: true}}, {new:true})
    .then(function (dbWorkshop) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbWorkshop);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});


// REMOVING ARTICLES FROM SAVED
app.post("/remove/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
  db.Workshop.findOneAndUpdate({
      _id: req.params.id
    }, {$set: {saved: false}}, {new:true})
    .then(function (dbWorkshop) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbWorkshop);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
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