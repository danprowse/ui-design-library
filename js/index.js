const mobileNavButton = document.querySelector(".mobile-nav-btn");
const mobileNavDropdown = document.querySelector(".mobile-slider-nav");
const navLinks = mobileNavDropdown.querySelectorAll("a");

const moveNavbar = (action) => {
  mobileNavButton.classList[action]("open");
  mobileNavDropdown.classList[action]("open");
};

// Event Listeners
mobileNavButton.addEventListener("click", () => {
  if (mobileNavDropdown.classList.contains("open")) {
    moveNavbar("remove");
  } else {
    moveNavbar("add");
  }
});