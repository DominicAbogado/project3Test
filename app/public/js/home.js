$(document).ready(function () {

    $(".add-btn").on("click", function (event) {
        event.preventDefault();

        //Making a new profile
        var newProfile = {
            firstName: $("#firstNameProfile").val().trim(),
            lastName: $("#lastNameProfile").val().trim(),
            email: $("#emailProfile").val().trim(),
            contactNum: $("#contactNumberProfile").val().trim(),
            schoolName: $("#schoolNameProfile").val(),
            startTime: $("#startTimeProfile").val(),
            endTime: $("#endTimeProfile").val(),
            schoolAddress: $("#schoolAddressProfile").val(),
            city: $("#cityProfile").val().trim(),
            province: $("#provinceProfile").val().trim(),
            postal: $("#postalProfile").val().trim(),
        };

        $.post("/api/users", newProfile, function (data) {
            console.log(data);
        });

        $("#firstNameProfile").val("");
        $("#lastNameProfile").val("");
        $("#emailProfile").val("");
        $("#contactNumberProfile").val("");
        $("#schoolNameProfile").val("");
        $("#schoolAddressProfile").val("");
        $("#startTimeProfile").val("");
        $("#endTimeProfile").val("");
        $("#cityProfile").val("");
        $("#provinceProfile").val("");
        $("#postalProfile").val("");
    });


});