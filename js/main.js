var isFormSubmitted = localStorage.getItem("isFormSubmitted");
var isValidEmail = localStorage.getItem("isValidEmail");
var email = localStorage.getItem("email");
if(isFormSubmitted === "true" && isValidEmail === "false") {
  console.log("email: " + email);
  $(".error").show();
  $(".icon-error").show();
  $("input").val(email);
  $("input").focus();
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
    localStorage.email = $("input").val();
  }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
