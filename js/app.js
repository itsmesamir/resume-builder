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

nextBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-10%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnSec.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-20%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});

nextBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-30.2%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-40.3%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnFifth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50.5%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSixth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-60.5%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSeventh.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-70.6%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnEighth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-80.8%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnNineth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-90.9%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
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
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnThird.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-10%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnFourth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-20%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFifth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-30%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnSixth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-40.2%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnSeventh.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50.6%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});

prevBtnEighth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-60.8%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnNineth.addEventListener("click", function(event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-70.9%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});