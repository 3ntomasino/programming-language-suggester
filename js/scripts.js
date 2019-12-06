$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var optionsRadios = $("input:radio[name=optionsRadios]":checked").val();
    var optionsRadios2 = $("input:radio[name=optionsRadios2]":checked").val();
  event.preventDefault();
  });
});
