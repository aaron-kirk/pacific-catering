let nav = document.querySelector(".nav");

let appetizerButton = document.querySelector("#appetizer");
let lunchButton = document.querySelector("#lunch");
let dinnerButton = document.querySelector("#dinner");
let corporateButton = document.querySelector("#corporate");

let menuTitle = document.querySelector(".menu-title");

let currentMenu = "appetizer";

function showMenu(menu) {
    removeAllActive();
    currentMenu = menu;
    console.log(menuTitle);
    switch (menu) {
        case "appetizer":
            appetizerButton.classList.add("active");
            menuTitle.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Appetizer Menu";
                menuTitle.style.opacity = "1";
            }, 250);
            break;
        
        case "lunch":
            lunchButton.classList.add("active");
            menuTitle.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Lunch Menu";
                menuTitle.style.opacity = "1";
            }, 250);
            break;
        
        case "dinner":
            dinnerButton.classList.add("active");
            menuTitle.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Dinner Menu";
                menuTitle.style.opacity = "1";
            }, 250);
            break;

        case "corporate":
            corporateButton.classList.add("active");
            menuTitle.style.opacity = "0";
            setTimeout(() => {
                menuTitle.innerHTML = "Corporate Menu";
                menuTitle.style.opacity = "1";
            }, 250);
            break;

        default:
            break;
    }
}

let removeAllActive = () => {
    appetizerButton.classList.remove("active");
    lunchButton.classList.remove("active");
    dinnerButton.classList.remove("active");
    corporateButton.classList.remove("active");
}

/*
document.addEventListener("scroll", (e) => {
    let scrollDistance = window.pageYOffset;

    if(scrollDistance > 0.05*window.innerHeight) {
        console.log("Scrolled down");
        nav.style.boxShadow = "0px 0px 5px 0px";
    } else {
        console.log("Scrolled up");
        nav.style.boxShadow = "none";
    }
});/**/

let prevScrollDistance;
let isNavShown = true;

document.addEventListener("scroll", (e) => {
    let scrollDistance = window.pageYOffset;

    if(scrollDistance < 0.05*window.innerHeight) {
        nav.style.top = "0";
        nav.style.boxShadow = "none";
    } else if(scrollDistance < prevScrollDistance) {
        nav.style.top = "0";
        nav.style.boxShadow = "0 0 5px 0";
      } else {
        nav.style.top = "-10vh";
        nav.style.boxShadow = "none";
      }

    prevScrollDistance = scrollDistance
});