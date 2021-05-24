const hidePictureBtn = document.getElementById('hide-picture');
const blackWhitePictureBtn = document.getElementById('b-w-picture');
const hideContactIconsBtn = document.getElementById('hide-contact-icons');
const profileImg = document.querySelector('.profile-img img');

const hidePicture = () => hidePictureBtn.checked ? profileImg.style.display = 'none' : profileImg.style.display = 'block';

hidePictureBtn.addEventListener('click', () => {
    localStorage.setItem('is-hide-picture-checked', hidePictureBtn.checked);
    hidePicture();
});

const editPicture = () => blackWhitePictureBtn.checked ? profileImg.classList.add('b-w-picture') : profileImg.classList.remove('b-w-picture');

blackWhitePictureBtn.addEventListener('click', () => {
    localStorage.setItem('is-b-w-checked', blackWhitePictureBtn.checked);
    editPicture();
});

const hideContactIcons = () => {
    if (hideContactIconsBtn.checked) {
        contactIcon.forEach((icon) => {
            icon.style.display = 'none';
        })
    } else {
        contactIcon.forEach((icon) => {
            icon.style.display = 'block';
        })
    }
}

hideContactIconsBtn.addEventListener('click', () => {
    localStorage.setItem('is-hide-contact-icons-checked', hideContactIconsBtn.checked);
    hideContactIcons()
});

const initPictureDisplay = () => {
    let isPictureHideChecked = localStorage.getItem('is-hide-picture-checked');

    if (isPictureHideChecked === 'true') {
        hidePictureBtn.checked = true;
        hidePicture();
    }
}

const initPictureColor = () => {
    let isBnWChecked = localStorage.getItem('is-b-w-checked');

    if (isBnWChecked === 'true') {
        blackWhitePictureBtn.checked = true;
        editPicture();
    }
}

const initHideContactIcons = () => {
    let isHideContactsChecked = localStorage.getItem('is-hide-contact-icons-checked');

    if (isHideContactsChecked === 'true') {
        hideContactIconsBtn.checked = true;
        hideContactIcons();
    }
}

const initialize = () => {

    initPictureDisplay();
    initPictureColor();
    initHideContactIcons();
}

window.addEventListener('load', () => {
    initialize();
})