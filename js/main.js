var isFormSubmitted = localStorage.getItem("isFormSubmitted");
var isValidEmail = localStorage.getItem("isValidEmail");
if(isFormSubmitted === "true" && isValidEmail === "false") {
  $(".error").show();
  $(".icon-error").show();
} else {
  $(".error").hide();
  $(".icon-error").hide();
}

$("button").click(function( event ) {
  localStorage.isFormSubmitted = true;
  if(validateEmail($("input").val())) {
    $(".error").hide();
    $(".icon-error").hide();
    localStorage.isValidEmail  = true;
    alert("Email submitted successfully!");
  } else {
    $(".error").show();
    $(".icon-error").show();
    localStorage.isValidEmail  = false;
  }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
