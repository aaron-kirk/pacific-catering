let appetizerButton = document.querySelector("#appetizer");
let lunchButton = document.querySelector("#lunch");
let dinnerButton = document.querySelector("#dinner");
let corporateButton = document.querySelector("#corporate");

function showMenu(menu) {
    removeAllActive();

    switch (menu) {
        case "appetizer":
            appetizerButton.classList.add("active");
            break;
        
        case "lunch":
            lunchButton.classList.add("active");
            break;
        
        case "dinner":
            dinnerButton.classList.add("active");
            break;

        case "corporate":
            corporateButton.classList.add("active");
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