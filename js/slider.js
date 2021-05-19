const sliderPage = document.querySelector('.slider-page');
const templateBtnFirst = document.querySelector('.template-btn-1');
const templateBtnSecond = document.querySelector('.template-btn-2');
const contactPrev = document.querySelector('.prev-1');
const contactNext = document.querySelector('.next-1');
const expPrev = document.querySelector('.prev-2');
const expNext = document.querySelector('.next-2');
const contactInformation = document.querySelector('.contact-information');

const progressText = document.querySelectorAll(".step h3");
const progressBullet = document.querySelectorAll(".step .bullet");
const progressCheck = document.querySelectorAll(".step .check");
let current = 1;

templateBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    sliderPage.style.marginLeft = "-100%";
    // sliderPage.firstElementChild = contactInformation;
    sliderPage.firstElementChild.classList.add('transition');
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
templateBtnSecond.addEventListener("click", function(event) {
    event.preventDefault();
    sliderPage.style.marginLeft = "-100%";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
contactPrev.addEventListener("click", function(event) {
    event.preventDefault();
    sliderPage.style.marginLeft = "0%";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
contactNext.addEventListener("click", function(event) {
    event.preventDefault();
    sliderPage.style.marginLeft = "-280%";
    progressBullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
expPrev.addEventListener("click", function(event) {
    event.preventDefault();
    sliderPage.style.marginLeft = "-100%";
    progressBullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
// expNext.addEventListener("click", function(event) {
//     event.preventDefault();
//     // sliderPage.style.marginLeft = "-300%";
//     progressBullet[current - 1].classList.add("active");
//     progressCheck[current - 1].classList.add("active");
//     progressText[current - 1].classList.add("active");
//     current += 1;
// });