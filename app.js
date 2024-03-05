const menuBar = document.querySelector("#burger-icon");
const navBar = document.querySelector("#nav-container");
const navClose = document.querySelector("#close-icon");

// showing nav bar
menuBar.addEventListener("click", () => {
  navBar.classList.add("showNav");
  console.log(navBar);
});

// closing nav bar
navClose.addEventListener("click", () => {
  navBar.classList.remove("showNav");
});
