let map = document.querySelector(".map__image-block");
let iframe = document.querySelector("iframe");
let button = document.querySelector(".navigation__button-menu");
let menu = document.querySelector(".navigation__list-menu-open");
let link = document.querySelector(".main-header__link")

link.classList.remove("main-header__link--bottom")
button.classList.add("navigation__button")
menu.classList.toggle("navigation__list-menu")

button.addEventListener("click", open_menu);

function open_menu() {
  button.classList.toggle("navigation__button--toggle");
  menu.classList.toggle("navigation__list-menu")
}

map.style.display = "none";
iframe.style.display = "block";
