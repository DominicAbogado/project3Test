$( document ).ready(function() {

function getArticles() {
  $(".testClass").empty();
  $.getJSON("/api/all", function (data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $(".testClass").append
      (`<div data-id="${data[i]._id}">
      <h3>${data[i].title}</h3>
      <p>${data[i].description}</p>
      `);
      
      console.log(data[i])
    }
  });
};

  
$(".testButton").on("click", function () {
  getArticles();
  console.log("hello");
});

});
