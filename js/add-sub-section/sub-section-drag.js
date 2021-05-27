const subSectionDrag = (sections, lists) => {

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

    lists.forEach((list) => {
        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            let draggingsection = document.querySelector('.dragging');
            let sectionAfterDraggingsection = getsectionAfterDraggingsection(e.clientY);
            if (sectionAfterDraggingsection) {
                sectionAfterDraggingsection.parentNode.insertBefore(draggingsection, sectionAfterDraggingsection);
            } else {
                list.appendChild(draggingsection);
            }

        });
    });

    function getsectionAfterDraggingsection(yDraggingsection) {

        let listsections = [...sections];

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
}