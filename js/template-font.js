const range = document.getElementById("range");
const rangeLength = document.getElementById('range-length');

const templateWrapperWhole = document.querySelector('.template-wrapper');
const paragraphList = document.querySelectorAll('.template-wrapper p');
const spanList = document.querySelectorAll('.template-wrapper span');

range.addEventListener('input', () => {
    rangeLength.innerHTML = '';
    rangeLength.innerHTML = (range.value) / 10;
    localStorage.setItem('range-value', range.value);
    changeFont(range.value);
});

const changeFont = (value) => {
    templateWrapperWhole.style.fontSize = (parseInt(value) * 1.5) + 'px';
    paragraphList.forEach(p => {
        p.style.fontSize = (parseInt(pFont) * (parseInt(value) / 10)) + 'px';
    });

    spanList.forEach(span => {
        span.style.fontSize = (parseInt(spanFont) * (parseInt(value) / 10)) + 'px';
    });
}

const setFontStyle = () => {
    let rangeValue = localStorage.getItem('range-value');
    if (rangeValue) {
        range.value = rangeValue;
        changeFont(rangeValue);
        rangeLength.innerHTML = rangeValue / 10;
    } else {
        range.value = 11;
        changeFont(10);
        rangeLength.innerHTML = 1.1;
    }
}

window.addEventListener('load', () => {
    setFontStyle();
})