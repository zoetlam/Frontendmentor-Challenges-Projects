const sideMenu = document.querySelector("#off-screen-menu");
function menuShowUp(){
    sideMenu.classList.remove("right-[-100%]");
}
const closeBtn = document.querySelector("#closeButton");
function closeMenu(){
    sideMenu.classList.add("right-[-100%]");
}