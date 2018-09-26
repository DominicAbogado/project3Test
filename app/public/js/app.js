$(document).ready(function () {

  // function getWorkshops() {
  //   $(".testClass").empty();
  //   $.getJSON("/api/all", function (data) {
  //     // For each one
  //     for (var i = 0; i < data.length; i++) {
  //       // Display the apropos information on the page
  //       $(".testClass").append
  //       (`<div data-id="${data[i]._id}">
  //       <h3>${data[i].title}</h3>
  //       <p>${data[i].description}</p>
  //       <button id="${data[i]._id}">Save</button>
  //       `);

  //       console.log(data[i])
  //     }
  //   });
  // };

  function getWorkshops() {
    $(".accordion").empty();
    $.getJSON("/api/all", function (data) {
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $(".accordion").append(`
      <div class="card">
      <div class="card-header btn btn-link" data-toggle="collapse" id="heading-${data[i]._id}" data-target="#${data[i]._id}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#${data[i]._id}" aria-expanded="true" aria-controls="${data[i]._id}">
          ${data[i].title}
          </button>
        </h5>
      </div>
      <div id="${data[i]._id}" class="collapse" aria-labelledby="heading-${data[i]._id}" data-parent="#accordion">
        <div class="card-body workshopDescriptions">
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
          </div>
      </div>
    </div>
   </div>
      `);
      }
    });
  };

  {
    /* <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Collapsible Group Item #2
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Collapsible Group Item #3
            </button>
          </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    </div> */
  }


  function getWorkshopGrade() {
    $(".accordion").empty();
    $.getJSON("/api/workshop/offering/" + $("#gradeSelect").val(), function (data) {
      // For each one
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $(".accordion").append(
          `
      <div class="card">
      <div class="card-header btn btn-link" data-toggle="collapse" id="heading-${data[i]._id}" data-target="#${data[i]._id}">
        <h5 class="mb-0">
          <button class="btn btn-link" data-toggle="collapse" data-target="#${data[i]._id}" aria-expanded="true" aria-controls="${data[i]._id}">
          ${data[i].title}
          </button>
        </h5>
      </div>
      <div id="${data[i]._id}" class="collapse" aria-labelledby="heading-${data[i]._id}" data-parent="#accordion">
        <div class="card-body workshopDescriptions">
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
          </div>
      </div>
    </div>
   </div>
      `
        );
      }
    });
  }


  $(".viewFilter").on("click", function () {
    getWorkshopGrade();
  });


  $('.viewAll').on('click', () => {
    console.log("working")
    getWorkshops();
  })

  // function getWorkshopFilter(){
  //   if($("#connectionSelect").val() && $("#"))
  // }





});