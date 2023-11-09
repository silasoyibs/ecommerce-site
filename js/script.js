"use strict";
const dropdown = document.querySelector(".dropdown");
const tabHamburgerMenu = document.querySelector(".navbar-toggler");
const tabMenuContainer = document.querySelector(".tablet-nav--container");
const tabMenuCloseBtn = document.querySelector(
  ".tablet-nav--container-btn-close"
);

function toggleClass(clickBtn, toggleType) {
  clickBtn.addEventListener("click", toggleType);
}

function toggleMenu() {
  dropdown.classList.toggle("active");
}
toggleClass(dropdown, toggleMenu);

function toggleTabletMenu() {
  tabMenuContainer.classList.toggle("open-tablet-menu");
}
toggleClass(tabHamburgerMenu, toggleTabletMenu);

function closeTabletMenu() {
  tabMenuContainer.classList.remove("open-tablet-menu");
}
toggleClass(tabMenuCloseBtn, closeTabletMenu);
