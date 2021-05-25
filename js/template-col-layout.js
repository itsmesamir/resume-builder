const singleChannel = document.querySelector('.one-channel');
const doubleChannel = document.querySelector('.two-channel');

const headerContent = document.querySelector('.header-content');
const downWrapperContent = document.querySelector('.down-wrapper-content');
const wrapperContentSecond = document.querySelector('.wrapper-content-second');


const editColumnLayout = (display) => {
    if (headerContent) headerContent.style.display = `${display}`;
    if (downWrapperContent) downWrapperContent.style.display = `${display}`;
    if (wrapperContentSecond) wrapperContentSecond.style.display = `${display}`;
}

singleChannel.addEventListener('click', () => {
    doubleChannel.classList.remove('active-column');
    singleChannel.classList.add('active-column');

    localStorage.setItem('active-column', singleChannel.classList[0]);

    editColumnLayout('block');
    profileImg.style.display = 'flex';
    profileImg.style.margin = '0 auto';

    // console.log(profileImg);
});

doubleChannel.addEventListener('click', () => {
    singleChannel.classList.remove('active-column');
    doubleChannel.classList.add('active-column');

    localStorage.setItem('active-column', doubleChannel.classList[0]);

    editColumnLayout('flex');
    profileImg.style.textAlign = 'left';

});

window.addEventListener('load', () => {
    let activeColumn = localStorage.getItem('active-column');
    if (activeColumn) {
        doubleChannel.classList.remove('active-column');
        document.querySelector(`.${activeColumn}`).classList.add('active-column');

        if (activeColumn === 'one-channel') {

            editColumnLayout('block');
            profileImg.style.display = 'flex';
            profileImg.style.margin = '0 auto';
        } else {

            editColumnLayout('flex');
        }
    }
});