function getSaved(){
  $(".showBooking").empty();
  $.getJSON("/saved-workshops", function (data) {
    $(".showBooking").append(`<div class="bookingTitle><h3>Booked Workshops</h3></div>`)
    for (var i = 0; i < data.length; i++) {
      $(".showBooking").append(   `
      <div class="card">
      <div class="card-header btn btn-link" data-toggle="collapse" id="heading-${data[i]._id}" data-target="#${data[i]._id}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#${data[i]._id}" aria-expanded="true" aria-controls="${data[i]._id}">
          ${data[i].title}
          </button>
        </h5>
      </div>
      <div id="${data[i]._id}" class="collapse" aria-labelledby="heading-${data[i]._id}" data-parent="#accordion">
        <div class="card-body workshopDescriptions innerOpacity">
          <div id="descriptionDesc">
            <h3>${data[i].title}</h3>
             ${data[i].description}
          </div>
      <div class="row">
        <div class="workshopDetails col-lg-4">
          <div class="gradeDesc desc">
          <h5>Grade group: ${data[i].offerings[0].grade} </h5>
          </div>
          <div class="topicDesc desc">
            <h5>Topics: </h5>
              ${data[i].offerings[0].topic}
          </div>
          <div class="curriculumDesc desc">
            <h5>Curriculum: </h5>
              ${data[i].offerings[0].curriculum}
          </div>
          <button>
          </div>

          <div class="workshopDetails col-lg-4">
          <div class="gradeDesc desc">
            <h5>Grade group: ${data[i].offerings[1].grade} </h5>
          </div>
          <div class="topicDesc">
            <h5>Topics: </h5>
              ${data[i].offerings[1].topic}
          </div>
          <div class="curriculumDesc desc">
            <h5>Curriculum: </h5>
              ${data[i].offerings[1].curriculum}
          </div>
          </div>
          <div class="workshopDetails col-lg-4">
          <div class=gradeDesc desc>
          <h5>Grade group: ${data[i].offerings[2].grade} </h5>
          </div>
          <div class="topicDesc desc">
            <h5>Topics: </h5>
              ${data[i].offerings[2].topic}
          </div>
          <div class="curriculumDesc desc">
            <h5>Curriculum: </h5>
              ${data[i].offerings[2].curriculum}
          </div>
          </div>
          </div>
          <div class="connectionDesc desc">
            <h3>Engineering Connection: </h3>
              ${data[i].offerings[0].connection}
              <br>
          </div>
      </div>
    </div>
   </div>
      `)
    }
  })
}
function getProfile() {
  $(".showProfile").empty();
  $.getJSON("/api/users", function (data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      var booking = data[i];
      // Display the apropos information on the page

      $(".showProfile").append(`
      <div class="bookingDetails">
        <h3>Hello ${data[i].firstName} ${data[i].lastName}!</h3>
        <h3>Your booking request is as follows: </h3>
        <h4>School: ${booking.schoolName}</h4>
        <h4>
        Address: ${booking.schoolAddress}, ${booking.city}, ${booking.postal} 
        </h4>
     </div>
     `);
    }
  });
};

$(document).on("click", ".submitRequest", function(){
  $(".bookingInformation").empty();
  $(".bookingInformation").append(`<h1>Your request is on it's way</h1>`)
})

getProfile();
getSaved();

$(document).on("click", "#removeSaved", function () {
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");

  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
      method: "POST",
      url: "/remove/" + thisId,
      data: {
        // Value taken from title input
        saved: false,
      }
    })
    // With that done
    .then(function (data) {
      // Log the response
      console.log(data);
      // Empty the notes section
    });
  getSaved();
});

$(".viewSaved").on("click", function () {
  getWorkshopsSaved()
})

$(".viewProfile").on("click", function () {
  getProfile()
})