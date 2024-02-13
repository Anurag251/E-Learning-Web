// side nav
const sideNavButton = document.querySelector(".side-nav-button");
const sideNav = document.querySelector(".side-nav");
const sideNavBg = document.querySelector(".side-nav-bg");
const sideNavClose = document.querySelector(".side-nav-close");
const sideNavItems = document.querySelectorAll(".side-nav .nav-button");

sideNavButton.addEventListener("click", () => {
  sideNav.classList.add("active");
});

const closeSideNav = () => {
  sideNav.classList.remove("active");
};

sideNavClose.addEventListener("click", closeSideNav);
sideNavBg.addEventListener("click", closeSideNav);

sideNavItems.forEach((sideNavItem) => {
  sideNavItem.addEventListener("click", closeSideNav);
});

const header = document.querySelector("header");

document.querySelector("main").addEventListener("scroll", (e) => {
  if (e.target.scrollTop > 600 && e.target.scrollTop < 1500) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
