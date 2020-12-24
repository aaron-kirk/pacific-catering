const body = document.querySelector('body');
const img = document.querySelector(".image");

body.addEventListener("mousemove", (e) => {

    var imgRect = img.getBoundingClientRect();
    let xAxis = (imgRect.right - imgRect.left)/2 + imgRect.left;
    let yAxis = (imgRect.bottom - imgRect.top)/2 + imgRect.top;
    let maxTranslation = .75;

    let xPos = e.pageX - xAxis;
    let yPos = e.pageY - yAxis;

    let xTrans = maxTranslation*xPos/screen.width;
    let yTrans = maxTranslation*yPos/screen.height;

    img.style.transform = `translateX(${xTrans}%) translateY(${yTrans}%)`;
});