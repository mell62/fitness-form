const form = document.querySelector(".form");
const passField = document.querySelector(".password-field");
const cpassField = document.querySelector(".cpassword-field");

function passCheck(event) {
  if (passField.value !== cpassField.value) {
    event.preventDefault();
  }
}

function colorValidation() {
  if (passField.value !== cpassField.value) {
    cpassField.setAttribute("style", "color:rgb(227,82,44);");
  } else {
    cpassField.removeAttribute("style", "color:rgb(227,82,44);");
  }
}

form.addEventListener("submit", passCheck);
cpassField.addEventListener("input", colorValidation);
