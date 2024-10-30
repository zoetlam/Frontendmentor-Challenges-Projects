const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", function () {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const productBtn = document.querySelector(".product-btn");
const companyBtn = document.querySelector(".company-btn");
const contactBtn = document.querySelector(".contact-btn");

function subMenuShow(a,b){
    a.addEventListener("click", function () {
        document.querySelector(b).classList.toggle("show");
      })
}
subMenuShow(productBtn, ".product-show");
subMenuShow(companyBtn, ".company-show");
subMenuShow(contactBtn, ".contact-show");


document.querySelectorAll(".product-btn, .company-btn, .contact-btn").forEach(function(button) {
  button.addEventListener("click", function() {
      const image = this.nextElementSibling; // Find the adjacent image
      if (image && image.classList.contains("rotate")) {
          image.classList.toggle("up"); // Toggle rotation class
      }
  });
});