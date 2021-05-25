// background color
const headerWrapper = document.querySelector('.header-wrapper');
const profileTitle = document.querySelector('.profile-title');
// text color 
const contactIcon = document.querySelectorAll('.contact-icon i');
const resumeSectionTitleIcon = document.querySelectorAll('.resume-section-title i');
const resumeSectionTopic = document.querySelectorAll('.resume-section-topic span');
const listTileTitle = document.querySelectorAll('.list-tile-title');
const progress = document.querySelectorAll('.progress');
const starChecked = document.querySelectorAll('.checked');
const referencePerson = document.querySelectorAll('.reference-person');
const leftTopWrapper = document.querySelector('.left-top-wrapper');

const colorBlock = document.querySelectorAll('.color-block');

let activeColorBlock;
let targetColorBg;
let targetColorTxt;

for (let index = 0; index < colorBlock.length; index++) {
    colorBlock[index].setAttribute('id', index);
}

colorBlock.forEach((block) => {
    block.addEventListener('click', (e) => {
        activeColorBlock = document.querySelector('.active-color-block');
        activeColorBlock.classList.remove('active-color-block');
        block.classList.add('active-color-block');
        localStorage.setItem('color-active-block', block.id);

        if (headerWrapper) removeColorBg(headerWrapper);
        if (profileTitle) removeColorBg(profileTitle);
        if (leftTopWrapper) removeColorBg(leftTopWrapper);
        progress.forEach(p => removeColorBg(p));

        targetColorBg = block.lastElementChild.classList[1];

        localStorage.setItem('active-color-bg', targetColorBg);
        if (headerWrapper) addColorBg(headerWrapper);
        if (profileTitle) addColorBg(profileTitle);
        if (leftTopWrapper) addColorBg(leftTopWrapper);
        progress.forEach(p => addColorBg(p));

        // style color 
        removeColorTxt(contactIcon);
        removeColorTxt(resumeSectionTitleIcon);
        removeColorTxt(resumeSectionTopic);
        removeColorTxt(listTileTitle);
        removeColorTxt(starChecked);
        removeColorTxt(referencePerson);

        targetColorTxt = block.lastElementChild.classList[2];
        localStorage.setItem('active-color-txt', targetColorTxt);

        addColorTxt(contactIcon);
        addColorTxt(resumeSectionTitleIcon);
        addColorTxt(resumeSectionTopic);
        addColorTxt(listTileTitle);
        addColorTxt(starChecked);
        addColorTxt(referencePerson);
    })
})

const addColorBg = (section) => section.classList.add(targetColorBg);

const removeColorBg = (section) => section.classList.remove(localStorage.getItem('active-color-bg'));

const addColorTxt = (section) => section.forEach((sec) => sec.classList.add(targetColorTxt))

const removeColorTxt = (section) => section.forEach((sec) => sec.classList.remove(localStorage.getItem('active-color-txt')));



const init = () => {
    let activeColorBg = localStorage.getItem('active-color-bg');
    let activeColorTxt = localStorage.getItem('active-color-txt');
    let activeCBlock = localStorage.getItem('color-active-block');
    if (activeCBlock) {

        colorBlock.forEach(block => {
            if (block.id == activeCBlock) {
                block.classList.add('active-color-block');
            }
        })
    } else {
        activeColorBg = 'darkOrange-bg';
        activeColorTxt = 'darkOrange-txt';
        colorBlock[6].classList.add('active-color-block');
        // // block.classList.add(activeColorBg);

        if (headerWrapper) addColorBg(headerWrapper);
        if (profileTitle) addColorBg(profileTitle);
        if (leftTopWrapper) addColorBg(leftTopWrapper);
        progress.forEach(p => addColorBg(p));
        addColorTxt(contactIcon);
        addColorTxt(resumeSectionTitleIcon);
        addColorTxt(resumeSectionTopic);
        addColorTxt(listTileTitle);
        addColorTxt(starChecked);
        addColorTxt(referencePerson);
    }
    if (activeColorBg) {
        if (headerWrapper) {
            headerWrapper.classList.add(activeColorBg);
        }
        if (profileTitle) {
            profileTitle.classList.add(activeColorBg);
        }
        if (leftTopWrapper) {
            leftTopWrapper.classList.add(activeColorBg);
        }
    }

    if (activeColorBg) progress.forEach(p => p.classList.add(activeColorBg))
    if (activeColorTxt) contactIcon.forEach(icon => icon.classList.add(activeColorTxt));
    if (activeColorTxt) resumeSectionTopic.forEach(icon => icon.classList.add(activeColorTxt));
    if (activeColorTxt) resumeSectionTitleIcon.forEach(icon => icon.classList.add(activeColorTxt));
    if (activeColorTxt) listTileTitle.forEach(icon => icon.classList.add(activeColorTxt));
    if (activeColorTxt) referencePerson.forEach(icon => icon.classList.add(activeColorTxt));
    if (activeColorTxt) starChecked.forEach(icon => icon.classList.add(activeColorTxt));
}

window.addEventListener('load', () => {
    init();
})