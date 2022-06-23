let map = document.querySelector(".map__image-map");
let iframe = document.querySelector("iframe");
let button = document.querySelector(".navigation__button");
let menu = document.querySelector(".navigation__list-menu");

button.addEventListener("click", open_menu);

function open_menu() {
  button.classList.toggle("navigation__button--toggle");
  menu.classList.toggle("navigation__list-menu--open")
}

map.style.display = "none";
iframe.style.display = "block";
