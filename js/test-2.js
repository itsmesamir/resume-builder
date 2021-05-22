let sectionss = document.querySelectorAll('.resume-section');
let lists1 = document.querySelectorAll('.section-list');

let sect = [];

sectionss.forEach(section => {
        sect.push(section);
    })
    // localStorage.setItem('listsss', JSON.stringify(lists1));
    // let listss = JSON.parse(localStorage.getItem('listsss'));
    // console.log(lists1);
localStorage.setItem('section', sectionss.innerHTML);
let sections = window.localStorage.getItem('section');
console.log(sections);

sections.forEach((section) => {
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
        debugger
        // console.log('ydragging', yDraggingsection);

        console.log('close section', closestsection);
        console.log('next section', nextsection);
        // console.log('nexttop', nextsectionRect.top);
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