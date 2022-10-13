const switchBtn = document.querySelector("#switch-btn");
const body = document.querySelector("body");

// switch between light and dark mode
switchBtn.onclick = () => {
  if (body.classList.contains("light")) {
    // body contains class light then removes
    body.classList.remove("light");
  } else {
    // body does not contain class light then adds
    body.classList.add("light");
  }
};

// open menu
const openButton = document.querySelector("#hamburguer");
const closeButton = document.querySelector("#close");
const hiddenMenu = document.querySelector(".hidden-menu");
openButton.onclick = function () {
  hiddenMenu.style.display = "block";
  closeButton.style.display = "block";
};

// close menu
closeButton.onclick = function () {
  hiddenMenu.style.display = "none";
  closeButton.style.display = "none";
};
