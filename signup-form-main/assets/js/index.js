let emailError = document.querySelector("#email-error");
let emailField = document.querySelector("#email-field");
let form = document.querySelector("form");

// Prevent form submit so that page does not refresh
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function emailCheck() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Valid email required";
  } else {
    emailError.innerHTML = "";
    document.querySelector("#sign-up").classList.add("hidden");
    document.querySelector("#success-popup").classList.remove("hidden");
    document.querySelector("span").innerHTML = emailField.value;
  }
}

function reload() {
  window.location.reload();
}
