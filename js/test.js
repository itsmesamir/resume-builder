const sections = document.querySelectorAll('.resume-section');
const lists = document.querySelectorAll('.section-list');

sections.forEach(section => {
    section.addEventListener('dragstart', (e) => {
        section.classList.add('dragging');
    })

    section.addEventListener('dragend', (e) => {
        section.classList.remove('dragging');
    })
})

lists.forEach((list) => {
    list.addEventListener('dragover', (e) => {
        let x = e.clientX;
        let y = e.clientY;
        let selectedItem = document.querySelector('.dragging');
        let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
        console.log(document.elementFromPoint(x, y));
        // if (document.elementFromPoint(x, y) === null) {
        //     // console.log('hello');
        // }
        // if (selectedItem.nextElementSibling === null) {
        //     list.appendChild(selectedItem);

        // }

        if (list === swapItem.parentNode) {
            swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
            console.log(swapItem);
            list.insertBefore(selectedItem, swapItem);
            // console.log(swapItem);
        } else {
            // list.appendChild(selectedItem);

        }
    })
})