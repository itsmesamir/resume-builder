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

const colorBlock = document.querySelectorAll('.color-block');

let activeColorBlock;
let targetColorBg;
let targetColorTxt;

for (let index = 0; index < colorBlock.length; index++) {
    colorBlock[index].setAttribute('id', index);
    // console.log(colorBlock[index]);
}

colorBlock.forEach((block) => {
    block.addEventListener('click', (e) => {
        activeColorBlock = document.querySelector('.active-color-block');
        activeColorBlock.classList.remove('active-color-block');
        block.classList.add('active-color-block');
        localStorage.setItem('color-active-block', block.id);
        // activeCBlock.
        // style bg 
        removeColorBg(headerWrapper);
        removeColorBg(profileTitle);
        progress.forEach(p => removeColorBg(p));

        targetColorBg = block.lastElementChild.classList[1];

        localStorage.setItem('active-color-bg', targetColorBg);
        addColorBg(headerWrapper);
        addColorBg(profileTitle);
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
        colorBlock[6].classList.add('color-active-block');
    }
    if (activeColorBg) headerWrapper.classList.add(activeColorBg)
    if (activeColorBg) profileTitle.classList.add(activeColorBg);
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