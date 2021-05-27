const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const nextBtnFifth = document.querySelector(".next-4");
const prevBtnSixth = document.querySelector(".prev-5");
const nextBtnSixth = document.querySelector(".next-5");
const prevBtnSeventh = document.querySelector(".prev-6");
const nextBtnSeventh = document.querySelector(".next-6");
const prevBtnEighth = document.querySelector(".prev-7");
const nextBtnEighth = document.querySelector(".next-7");
const prevBtnNineth = document.querySelector(".prev-8");
const nextBtnNineth = document.querySelector(".next-8");
const prevBtnTenth = document.querySelector(".prev-9");
const nextBtnTenth = document.querySelector(".next-9");
// const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let current = 1;

const nextBtnFunction = (marginLeft) => {
    if (slidePage) slidePage.style.marginLeft = `${marginLeft}%`;
    if (bullet[current - 1]) bullet[current - 1].classList.add("active");
    if (progressCheck[current - 1]) progressCheck[current - 1].classList.add("active");
    if (progressText[current - 1]) progressText[current - 1].classList.add("active");
    current += 1;
}

const prevBtnFunction = (marginLeft) => {
    if (slidePage) slidePage.style.marginLeft = `${marginLeft}%`;
    if (bullet[current - 2]) bullet[current - 2].classList.remove("active");
    if (progressCheck[current - 2]) progressCheck[current - 2].classList.remove("active");
    if (progressText[current - 2]) progressText[current - 2].classList.remove("active");
    current -= 1;
}

nextBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-10);
});

nextBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-20);
});

nextBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-30.2);
});

nextBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-40.3);
});

nextBtnFifth.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-50.5);
});

nextBtnSixth.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-60.5);
});

nextBtnSeventh.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-70.6);
});

nextBtnEighth.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-80.8);
});

nextBtnNineth.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnFunction(-90.9);
});

// submitBtn.addEventListener("click", function() {
//     bullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
//     setTimeout(function() {
//         alert("Your Form Successfully Signed up");
//         location.reload();
//     }, 800);
// });


prevBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(0);
});

prevBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-10);
});

prevBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-20);
});

prevBtnFifth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-30.3);
});

prevBtnSixth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-40.3);
});

prevBtnSeventh.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-50.4);
});

prevBtnEighth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-60.6);
});

prevBtnNineth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-70.6);
});

prevBtnTenth.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnFunction(-80.7);
});

// window.addEventListener('load', () => {
//     let currentElement = localStorage.getItem('current-element');
//     let marginLeftOfElement = localStorage.getItem('margin-left');
//     current = currentElement;
//     nextBtnFunction(marginLeftOfElement);
//     // let marginLeftOfElements = localStorage.getItem('margin-left');
//     prevBtnFunction(marginLeftOfElement);

//     console.log(currentElement);
//     // console.log(marginLeftOfElement);

// })