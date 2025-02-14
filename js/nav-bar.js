// Select the menu button and navbar
const menuButton = document.querySelector(".menu-toggle-btn");
const navigationMenu = document.querySelector(".navbar");
const toggleMenuVisibility = function () {
  navigationMenu.classList.toggle("visible");
};

menuButton.addEventListener("click", toggleMenuVisibility);
