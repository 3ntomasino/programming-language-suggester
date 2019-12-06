$(document).ready(function() {
  $("form#blanks").submit(function(event) {

    var nameInput = $("input#name").val();
    var optionsRadios = $("input:radio[name=optionsRadios]:checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]:checked").val();
    var optionsRadios3 = $("input:radio[name=optionsRadios3]:checked").val();
    var optionsRadios4 = $("input:radio[name=optionsRadios4]:checked").val();
    var optionsRadios5 = $("input:radio[name=optionsRadios5]:checked").val();

    $(".name").text(nameInput);


    $("#csharp").show();
    $("#ruby").show();
    $("#python").show();
    $("#blanks").hide();
    console.log
    event.preventDefault();
  });
});
