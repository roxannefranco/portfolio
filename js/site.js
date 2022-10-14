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

// importing array with list of projects
import { projects } from "./projectsList.js";
console.log(projects);

const projectsContainer = document.querySelector(".projects-container");

projects.forEach(function (project) {
  projectsContainer.innerHTML += `
  <div class="single-project">
            <div class="project-text">
                <h2 class="main-title">${project.name}</h2>
                <p class="text">${project.description}
                </p>
                <div class="buttons">
                    <a class="cta" href="${project.link}">live website</a>
                    <a class="cta icon" href="${project.github}"><svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.35504 15.2109C6.35504 15.2891 6.26694 15.3516 6.15585 15.3516C6.02944 15.3633 5.94133 15.3008 5.94133 15.2109C5.94133 15.1328 6.02944 15.0703 6.14052 15.0703C6.25544 15.0586 6.35504 15.1211 6.35504 15.2109ZM5.16371 15.0352C5.1369 15.1133 5.21351 15.2031 5.32843 15.2266C5.42802 15.2656 5.54294 15.2266 5.56593 15.1484C5.58891 15.0703 5.51613 14.9805 5.40121 14.9453C5.30161 14.918 5.19052 14.957 5.16371 15.0352ZM6.85685 14.9688C6.74577 14.9961 6.66915 15.0703 6.68064 15.1602C6.69214 15.2383 6.79173 15.2891 6.90665 15.2617C7.01774 15.2344 7.09435 15.1602 7.08286 15.082C7.07137 15.0078 6.96794 14.957 6.85685 14.9688ZM9.37742 0C4.06431 0 0 4.11328 0 9.53125C0 13.8633 2.67379 17.5703 6.49294 18.875C6.98327 18.9648 7.15565 18.6562 7.15565 18.4023C7.15565 18.1602 7.14415 16.8242 7.14415 16.0039C7.14415 16.0039 4.4627 16.5898 3.8996 14.8398C3.8996 14.8398 3.4629 13.7031 2.83468 13.4102C2.83468 13.4102 1.95746 12.7969 2.89597 12.8086C2.89597 12.8086 3.8498 12.8867 4.3746 13.8164C5.21351 15.3242 6.61936 14.8906 7.16714 14.6328C7.25524 14.0078 7.50423 13.5742 7.78004 13.3164C5.63871 13.0742 3.47823 12.7578 3.47823 9C3.47823 7.92578 3.76936 7.38672 4.38226 6.69922C4.28266 6.44531 3.95706 5.39844 4.48185 4.04688C5.28246 3.79297 7.125 5.10156 7.125 5.10156C7.89113 4.88281 8.71472 4.76953 9.53065 4.76953C10.3466 4.76953 11.1702 4.88281 11.9363 5.10156C11.9363 5.10156 13.7788 3.78906 14.5794 4.04688C15.1042 5.40234 14.7786 6.44531 14.679 6.69922C15.2919 7.39062 15.6673 7.92969 15.6673 9C15.6673 12.7695 13.4111 13.0703 11.2698 13.3164C11.6222 13.625 11.921 14.2109 11.921 15.1289C11.921 16.4453 11.9095 18.0742 11.9095 18.3945C11.9095 18.6484 12.0857 18.957 12.5722 18.8672C16.4028 17.5703 19 13.8633 19 9.53125C19 4.11328 14.6905 0 9.37742 0ZM3.72339 13.4727C3.67359 13.5117 3.68508 13.6016 3.7502 13.6758C3.81149 13.7383 3.8996 13.7656 3.9494 13.7148C3.99919 13.6758 3.9877 13.5859 3.92258 13.5117C3.86129 13.4492 3.77319 13.4219 3.72339 13.4727ZM3.30968 13.1562C3.28286 13.207 3.32117 13.2695 3.39778 13.3086C3.45907 13.3477 3.53569 13.3359 3.5625 13.2812C3.58931 13.2305 3.55101 13.168 3.4744 13.1289C3.39778 13.1055 3.33649 13.1172 3.30968 13.1562ZM4.55081 14.5469C4.48952 14.5977 4.5125 14.7148 4.60061 14.7891C4.68871 14.8789 4.7998 14.8906 4.8496 14.8281C4.8994 14.7773 4.87641 14.6602 4.7998 14.5859C4.71552 14.4961 4.60061 14.4844 4.55081 14.5469ZM4.11411 13.9727C4.05282 14.0117 4.05282 14.1133 4.11411 14.2031C4.1754 14.293 4.27883 14.332 4.32863 14.293C4.38992 14.2422 4.38992 14.1406 4.32863 14.0508C4.275 13.9609 4.1754 13.9219 4.11411 13.9727Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>
            </div>
            <img src="${project.image}">
        </div>`;
});
