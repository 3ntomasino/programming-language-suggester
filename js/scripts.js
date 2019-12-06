$(document).ready(function() {
  $("form#blanks").submit(function(event) {

    var nameInput = $("input#name").val();
    var answer1 = $("input:radio[name=optionsRadios]:checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]:checked").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios3]:checked").val();
    var optionsRadios4 = $("input:radio[name=optionsRadios4]:checked").val();
    var optionsRadios5 = $("input:radio[name=optionsRadios5]:checked").val();

    $(".name").text(nameInput);

    if (answer1 === "apps") {
      $("#ruby").show();
    } else if (answer1 === "games") {
      $("#python").show();
    } else if (answer1 === "programs") {
      $("#csharp").show();
    }


    
    $("#blanks").hide();
    console.log
    event.preventDefault();
  });
});
