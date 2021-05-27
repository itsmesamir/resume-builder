// const techIcon = document.getElementById('tech-icon');
// const techSection = document.querySelector('.languages-technologies');

// techIcon.addEventListener('dragstart', function(e) {
//     console.log('clicked');
//     techSection.setAttribute('draggable', 'true');
// })
// setTimeout(() => {
//     techIcon.addEventListener('dragend', function(e) {
//         console.log('clicked');
//         techSection.removeAttribute('draggable', 'true');
//     })
// }, 0);

let sections = document.querySelectorAll('.resume-section');
let lists1 = document.querySelectorAll('.section-list');

let printBtn = document.querySelector('#print');

// let secArr = Array.from(sections);
// let blank = [];
// let hello = [];
// secArr.forEach(section => {
//         blank.push(section.innerHtml)
//         localStorage.setItem('sec', blank);
//         hello.push(localStorage.getItem('sec'));
//         // debugger
//     })
// localStorage.setItem('listsss);
// console.log(sections);

// let sect = localStorage.getItem('listsss');
// debugger
// console.log(secArr);

sections.forEach((section) => {
    section.setAttribute('draggable', 'true');
    registerEventsOnsection(section);
});

function registerEventsOnsection(section) {
    section.addEventListener('dragstart', (e) => {
        section.classList.add('dragging');
    });


    section.addEventListener('dragend', (e) => {
        section.classList.remove('dragging');
    });
}

lists1.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        let draggingsection = document.querySelector('.dragging');
        let sectionAfterDraggingsection = getsectionAfterDraggingsection(list, e.clientY);
        if (sectionAfterDraggingsection) {
            sectionAfterDraggingsection.parentNode.insertBefore(draggingsection, sectionAfterDraggingsection);
        } else {
            list.appendChild(draggingsection);
        }

    });
});

function getsectionAfterDraggingsection(list, yDraggingsection) {

    let listsections = [...list.querySelectorAll('.resume-section:not(.dragging)')];

    return listsections.reduce((closestsection, nextsection) => {

        let nextsectionRect = nextsection.getBoundingClientRect();
        let offset = yDraggingsection - nextsectionRect.top - nextsectionRect.height / 2;
        if (offset < 0 && offset > closestsection.offset) {
            return {
                offset,
                element: nextsection
            }
        } else {
            return closestsection;
        }

    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element;

}

printBtn.addEventListener('click', () => {
    window.print();
})