$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var nameInput = $("input#name").val();
    var answer1 = $("input:radio[name=optionsRadios]:checked").val();
    var answer2 = $("input:radio[name=optionsRadios2]:checked").val();
    var answer3 = $("input:radio[name=optionsRadios3]:checked").val();
    var answer4 = $("input:radio[name=optionsRadios4]:checked").val();
    var answer5 = $("input:radio[name=optionsRadios5]:checked").val();
    $(".name").text(nameInput);
    if (answer2 === "beginner" || answer4 === "zoolander" ) {
      $("#ruby").show();
    } else if (answer2 === "intermediate" || answer4 === "hackers") {
      $("#csharp").show();
    } else if (answer2 === "advanced" || answer4 === "robot") {
      $("#python").show();
    } else {
      $("#nothing").show();
    }
    $("#blanks").hide();
    event.preventDefault();
  });
});
