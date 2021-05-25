const marginRange = document.getElementById("margin-range");
const marginRangeLength = document.getElementById('margin-range-length');

const templateContainer = document.querySelectorAll('.template-container');
const templateContainerSecond = document.querySelector('.template-container-second');

marginRange.addEventListener('input', () => {
    marginRangeLength.innerHTML = '';
    marginRangeLength.innerHTML = (marginRange.value) * 10;
    localStorage.setItem('margin-range-value', marginRange.value);
    changeMargin(marginRange.value);
});

const changeMargin = (value) => {
    if (templateContainer[0]) templateContainer[0].style.paddingTop = (parseInt(value) * 5) + 'px';
    if (templateContainer[1]) templateContainer[1].style.paddingBottom = (parseInt(value) * 5) + 'px';
    if (templateContainerSecond) templateContainerSecond.style.padding = (parseInt(value) * 10) + 'px';
    templateContainer.forEach(container => {
        container.style.paddingLeft = (parseInt(value) * 10) + 'px';
        container.style.paddingRight = (parseInt(value) * 10) + 'px';
    });
}

const setMarginStyle = () => {
    let marginRangeValue = localStorage.getItem('margin-range-value');

    if (marginRangeValue) {
        marginRange.value = marginRangeValue;
        changeMargin(marginRangeValue);
        marginRangeLength.innerHTML = marginRangeValue * 10;
    } else {
        range.value = 2;
        changeMargin(2);
        rangeLength.innerHTML = 20;
    }
}

window.addEventListener('load', () => {
    setMarginStyle();
})