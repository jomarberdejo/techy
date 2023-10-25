
  document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const navLinks = document.querySelector("nav ul");

    burgerMenu.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });

