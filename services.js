const nav = document.querySelector(".nav");
const navlinks = document.querySelectorAll(".nav a");

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