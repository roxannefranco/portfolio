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
