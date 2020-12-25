const nav = document.querySelector(".nav");
const navlinks = document.querySelectorAll(".nav a");

const specialEventsImg = document.querySelector("#special-events img");
const weddingsImg = document.querySelector("#weddings img");
const corporateImg = document.querySelector("#corporate img");

let prevScrollDistance;

let imgSpace = 30;

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

document.addEventListener("scroll", (e) => {
    let scrollDistance = window.pageYOffset;

    console.log(specialEventsImg.style.top);

    if(scrollDistance < 0.1*window.innerHeight) {
        specialEventsImg.style.top = `-${imgSpace}vh`;
        weddingsImg.style.top = `-${imgSpace}vh`;
        corporateImg.style.top = `-${imgSpace}vh`;
    } else if(scrollDistance < 1.1*window.innerHeight) {
        specialEventsImg.style.top = `${(imgSpace*(scrollDistance - 0.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
        weddingsImg.style.top = `-${imgSpace}vh`;
        corporateImg.style.top = `-${imgSpace}vh`;
    } else if(scrollDistance < 2.1*window.innerHeight) {
        specialEventsImg.style.top = `${(imgSpace*(scrollDistance - 0.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
        weddingsImg.style.top = `${(imgSpace*(scrollDistance - 1.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
        corporateImg.style.top = `-${imgSpace}vh`;
    } else if(scrollDistance < 3.1*window.innerHeight) {
        specialEventsImg.style.top = "0";
        weddingsImg.style.top = `${(imgSpace*(scrollDistance - 1.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
        corporateImg.style.top = `${(imgSpace*(scrollDistance - 2.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
    } else if(scrollDistance < 4.1*window.innerHeight) {
        specialEventsImg.style.top = "0";
        weddingsImg.style.top = "0";
        corporateImg.style.top = `${(imgSpace*(scrollDistance - 2.1*window.innerHeight)/(2*window.innerHeight))-imgSpace}vh`;
    } else {
        specialEventsImg.style.top = "0";
        weddingsImg.style.top = "0";
        corporateImg.style.top = "0";
    }
});
