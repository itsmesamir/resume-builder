const addSubSectionTemplate = (template) => {
    const templateAddBtn = document.querySelector(`#add-${template}-btn`);
    const templateFormContainer = document.querySelector(`.${template}-form-container`);

    const templateFormContent = document.querySelector(`.${template}-form-content`);
    const templateName = document.querySelector(`.${template}-name`);
    const templateRating = document.querySelector(`.${template}-rating`);

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
                    }
                })
            })
        })
    }
    deletetemplateItem();

    const clonetemplateContent = () => {
        const clonetemplateFormContent = templateFormContent.cloneNode(true);
        templateFormContainer.appendChild(clonetemplateFormContent);
        templateFormContainer.lastElementChild.querySelector(`.${template}-name`).value = '';
        templateFormContainer.lastElementChild.querySelector(`.${template}-rating`).value = '';

        // check content count after adding
        deletetemplateItem();
        let uploadedtemplateFormContents = document.querySelectorAll(`.${template}-form-content`);
        let templateCount = uploadedtemplateFormContents.length;
        localStorage.setItem(`${template}-content-count`, templateCount);

    }

    templateAddBtn.addEventListener('click', () => {

        clonetemplateContent();
    });

    const loadtemplateContent = () => {
        let templateCount = localStorage.getItem(`${template}-content-count`);
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

addSubSectionTemplate('lang-tech');
addSubSectionTemplate('skills');
addSubSectionTemplate('languages');