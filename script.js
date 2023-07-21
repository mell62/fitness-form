const form = document.querySelector(".form");
const passField = document.querySelector(".password-field");
const cpassField = document.querySelector(".cpassword-field");
const cpassMessage = document.querySelector(".cpassword-message");

function passCheck(event) {
  if (passField.value !== cpassField.value) {
    event.preventDefault();
    cpassMessage.setAttribute("style", "opacity: 1;");
    setTimeout(vanishMessage, 3000);
  }
}

function vanishMessage() {
  cpassMessage.setAttribute("style", "opacity: 0;");
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
