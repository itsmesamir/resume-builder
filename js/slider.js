const frontPageContainer = document.querySelector('.front-page-container');
const createBtn = document.querySelector('.create-btn');

const sliderContainer = document.querySelector('.slider-container');
const sliderPage = document.querySelector('.slider-page');
const templateBtnFirst = document.querySelector('.template-btn-1');
const templateBtnSecond = document.querySelector('.template-btn-2');

const contactPrev = document.querySelector('.prev-1');
const contactNext = document.querySelector('.next-1');

const contactInformation = document.querySelector('.contact-information');
const expPrev = document.querySelector('.prev-2');
const expSubmit = document.querySelector('#submit');

const progressText = document.querySelectorAll(".step h3");
const bullet = document.querySelectorAll(".step .bullet");
const progressCheck = document.querySelectorAll(".step .check");
let current = 1;

createBtn.addEventListener('click', function() {
    frontPageContainer.style.display = 'none';
    sliderContainer.style.display = 'block';
});

const nextBtnSliderFn = (marginLeft) => {
    if (sliderPage) sliderPage.style.marginLeft = `${marginLeft}%`;
    if (bullet[current - 1]) bullet[current - 1].classList.add("active");
    if (progressCheck[current - 1]) progressCheck[current - 1].classList.add("active");
    if (progressText[current - 1]) progressText[current - 1].classList.add("active");
    current += 1;
}

const prevBtnSliderFn = (marginLeft) => {
    if (sliderPage) sliderPage.style.marginLeft = `${marginLeft}%`;
    if (bullet[current - 2]) bullet[current - 2].classList.remove("active");
    if (progressCheck[current - 2]) progressCheck[current - 2].classList.remove("active");
    if (progressText[current - 2]) progressText[current - 2].classList.remove("active");
    current -= 1;
}

templateBtnFirst.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnSliderFn(-100);
});

templateBtnSecond.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnSliderFn(-100);
});

contactPrev.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnSliderFn(0);
});

contactNext.addEventListener("click", function(event) {
    event.preventDefault();
    nextBtnSliderFn(-280)
});

expPrev.addEventListener("click", function(event) {
    event.preventDefault();
    prevBtnSliderFn(-100);
});