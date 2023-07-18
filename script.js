const form = document.querySelector(".form");
const passField = document.querySelector(".password-field");
const cpassField = document.querySelector(".cpassword-field");

function passCheck(event) {
  if (passField.value !== cpassField.value) {
    event.preventDefault();
  }
}

form.addEventListener("submit", passCheck);

// signupBtn.addEventListener("click", () => {
//   console.log(passField.value);
// });
