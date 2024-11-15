const inputEmail = document.querySelector("#email-field");
const errorField = document.querySelector("#error");
const errorContent = document.querySelector("#errorShow");
function emailCheck() {
  if (
    !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorField.classList.remove("hidden");
    inputEmail.classList.add("border-soft-red", "border-2");
    inputEmail.classList.remove("border-[1px]");
    errorContent.innerHTML = "Please provide a valid email";
  } else {
    errorContent.innerHTML = "Thank You for Joining Us!";
    errorContent.classList.remove("text-soft-red");
    errorContent.classList.add("text-pink-red");
    errorField.classList.add("hidden");
    inputEmail.classList.remove("border-soft-red", "border-2");
    inputEmail.classList.add("border-[1px]", "border-pink-red");
  }
}
