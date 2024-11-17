const hamMenu = document.querySelector("#toggle-icon");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
