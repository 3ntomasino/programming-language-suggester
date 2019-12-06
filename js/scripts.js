$(document).ready(function() {
  $("form#blanks").submit(function(event) {

    var nameInput = $("input#name").val();
    var optionsRadios = $("input:radio[name=optionsRadios]:checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]:checked").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios2]:checked").val();

    $(".name").text(nameInput);


    $("#csharp").show();
    $("#ruby").show();
    $("#python").show();
    console.log
    event.preventDefault();
  });
});
