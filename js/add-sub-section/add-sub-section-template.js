const addSubSectionTemplate = (template) => {
    const templateAddBtn = document.querySelector(`#add-${template}-btn`);
    const templateFormContainer = document.querySelector(`.${template}-form-container`);

    const templateFormContent = document.querySelector(`.${template}-form-content`);
    const templateName = document.querySelector(`.${template}-name`);
    const templateRating = document.querySelector(`.${template}-rating`);

    // let sections = document.querySelectorAll(``.${template}-form-content');
    // let lists1 = document.querySelectorAll('.social-site-form-container');
    // console.log(sections);
    // console.log(lists1);


    let templateFormContentsDrag = document.querySelectorAll(`.${template}-form-content`);
    let templateFormContainersDrag = document.querySelectorAll(`.${template}-form-container`);
    subSectionDrag(templateFormContentsDrag, templateFormContainersDrag);

    const deletetemplateItem = () => {
        const templateFormContents = document.querySelectorAll(`.${template}-form-content`);
        const deletetemplate = document.querySelectorAll(`.delete-${template}`);

        for (let i = 0; i < templateFormContents.length; i++) {
            templateFormContents[i].setAttribute('id', i);
            deletetemplate[i].setAttribute('id', i);
        }
        templateFormContents.forEach(content => {
            deletetemplate.forEach((deleteSkill) => {
                deleteSkill.addEventListener('click', () => {
                    if (content.id === deleteSkill.id) {
                        templateFormContainer.removeChild(content);
                        let uploadedtemplateFormContents = document.querySelectorAll(`.${template}-form-content`);
                        let templateCount = uploadedtemplateFormContents.length;
                        localStorage.setItem(`${template}-content-count`, templateCount);

                        templateFormContentsDrag = document.querySelectorAll(`.${template}-form-content`);
                        templateFormContainersDrag = document.querySelectorAll(`.${template}-form-container`);
                        subSectionDrag(templateFormContentsDrag, templateFormContainersDrag);

                    }
                })
            })
        })
    }
    deletetemplateItem();

    const clonetemplateContent = () => {

        let clonetemplateFormContent;
        if (templateFormContent) clonetemplateFormContent = templateFormContent.cloneNode(true);

        if (templateFormContent) templateFormContainer.appendChild(clonetemplateFormContent);
        if (templateFormContent) templateFormContainer.lastElementChild.querySelector(`.${template}-name`).value = '';
        if (templateFormContent)
            if (template !== 'hobbies') templateFormContainer.lastElementChild.querySelector(`.${template}-rating`).value = '';

            // check content count after adding
        deletetemplateItem();
        let uploadedtemplateFormContents = document.querySelectorAll(`.${template}-form-content`);
        let templateCount = uploadedtemplateFormContents.length;
        localStorage.setItem(`${template}-content-count`, templateCount);

        templateFormContentsDrag = document.querySelectorAll(`.${template}-form-content`);
        templateFormContainersDrag = document.querySelectorAll(`.${template}-form-container`);
        subSectionDrag(templateFormContentsDrag, templateFormContainersDrag);
    }

    if (templateAddBtn) {
        templateAddBtn.addEventListener('click', () => {

            clonetemplateContent();
        });
    }

    const loadtemplateContent = () => {
        let templateCount = localStorage.getItem(`${template}-content-count`);
        if (templateFormContent)
            if (templateCount === '0') templateFormContainer.removeChild(templateFormContent);
        for (let i = 1; i < templateCount; i++) {
            clonetemplateContent();
        }
    }

    window.addEventListener('load', () => {
        loadtemplateContent();
    })
}



// calling template 

addSubSectionTemplate('social-site');
addSubSectionTemplate('experience');
addSubSectionTemplate('education');
addSubSectionTemplate('lang-tech');
addSubSectionTemplate('skills');
addSubSectionTemplate('languages');
addSubSectionTemplate('personal-skills');
addSubSectionTemplate('hobbies');
addSubSectionTemplate('references');