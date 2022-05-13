let handElement = document.querySelector(".container__hand")
let transitionElement = document.querySelector(".container__transition")
let textElement = document.querySelector(".container__text")
let oldTitleElement = document.querySelector(".title__first")
let newTitleElement = document.querySelector(".title__second")
window.setTimeout(() => {
    handElement.style.display = "none";
    transitionElement.style.display = "block"
    
}, 2000);

window.setTimeout(() => {
    textElement.style.display = "flex";
}, 2800);

window.setTimeout(() => {
    transitionElement.style.display = "none";
}, 4000);

window.setTimeout(() => {
    newTitleElement.style.visibility = "visible";
}, 6000);

let imagesElement  = document.querySelector(".container__images")

window.setTimeout(() => {
    imagesElement.style.display = "flex";
}, 4000);