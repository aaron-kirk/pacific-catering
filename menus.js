const nav = document.querySelector(".nav");
const navlinks = document.querySelectorAll(".nav a");

const appetizerButton = document.querySelector("#appetizer");
const lunchButton = document.querySelector("#lunch");
const dinnerButton = document.querySelector("#dinner");
const corporateButton = document.querySelector("#corporate");

const menuTitle = document.querySelector(".menu-title");
const menuDiv = document.querySelector(".menu");
const menuDelay = 250;

let currentMenu = "appetizer";
showMenu(currentMenu);

function showMenu(menu) {
    removeAllActive();
    currentMenu = menu;

    switch (menu) {
        case "appetizer":
            appetizerButton.classList.add("active");
            menuTitle.style.opacity = "0";
            menuDiv.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Appetizer Menu";
                menuDiv.innerHTML = appetizerMenu;
                menuTitle.style.opacity = "1";
                menuDiv.style.opacity = "1";
            }, menuDelay);
            break;
        
        case "lunch":
            lunchButton.classList.add("active");
            menuTitle.style.opacity = "0";
            menuDiv.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Lunch Menu";
                menuDiv.innerHTML = appetizerMenu;
                menuTitle.style.opacity = "1";
                menuDiv.style.opacity = "1";
            }, menuDelay);
            break;
        
        case "dinner":
            dinnerButton.classList.add("active");
            menuTitle.style.opacity = "0";
            menuDiv.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Dinner Menu";
                menuDiv.innerHTML = appetizerMenu;
                menuTitle.style.opacity = "1";
                menuDiv.style.opacity = "1";
            }, menuDelay);
            break;

        case "corporate":
            corporateButton.classList.add("active");
            menuTitle.style.opacity = "0";
            menuDiv.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Corporate Menu";
                menuDiv.innerHTML = appetizerMenu;
                menuTitle.style.opacity = "1";
                menuDiv.style.opacity = "1";
            }, menuDelay);
            break;

        default:
            break;
    }
}

function removeAllActive() {
    appetizerButton.classList.remove("active");
    lunchButton.classList.remove("active");
    dinnerButton.classList.remove("active");
    corporateButton.classList.remove("active");
}

let prevScrollDistance;
let isNavShown = true;

document.addEventListener("scroll", (e) => {
    let scrollDistance = window.pageYOffset;

    if(scrollDistance + window.innerHeight >= document.body.offsetHeight) {
        navlinks.forEach((link) => {
            link.style.color = "black";
        });
        nav.style.top = "0";
        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "rgb(245, 237, 237)";
    } else if(scrollDistance <= 0.9*window.innerHeight) {
        navlinks.forEach((link) => {
            link.style.color = "white";
        });
        nav.style.top = "0";
        nav.style.boxShadow = "none";
        nav.style.backgroundColor = "transparent";
    } else if(scrollDistance < prevScrollDistance) {
        navlinks.forEach((link) => {
            link.style.color = "black";
        });
        nav.style.backgroundColor = "rgb(245, 237, 237)";
        nav.style.top = "0";
        nav.style.boxShadow = "0 0 10px 0";
      } else {
        nav.style.top = "-10vh";
        nav.style.boxShadow = "none";
      }

    prevScrollDistance = scrollDistance
});