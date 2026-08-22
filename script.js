const menuButton = document.getElementById("menuButton");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("mobile-open");
  });
}
