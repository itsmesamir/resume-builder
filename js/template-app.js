//preview 
const previewBtn = document.getElementsByClassName('preview-btn')[0];

previewBtn.addEventListener('click', function() {

    //redirect to tempate 
    const template = localStorage.getItem('template');
    if (template == "template1") {
        //to template1.html
        // window.location.pathname = "/templates/template-1.html";
        window.open("/templates/template-1.html", 'newWindow');
    } else {
        //to template2.html
        // window.location.pathname = "/templates/template-2.html";
        window.open("/templates/template-2.html", 'newWindow');

    }

});

//get basic info from localstorage and set to form
const basicInfo = JSON.parse(localStorage.getItem('basicInfo'));

function setBasicInfo(data) {
    data.f_name = document.getElementById('info-first-name').value;
    data.l_name = document.getElementById('info-last-name').value;
    data.professional_title = document.getElementById('info-professional-title').value;
    data.address = document.getElementById('info-email-address').value;
    data.phone_no = document.getElementById('info-phone-number').value;
    data.dob = document.getElementById('info-date-of-birth').value;
    data.address = document.getElementById('info-address').value;


}

function setBasicInfoForm(data) {
    document.getElementById('info-first-name').value = data.f_name;
    document.getElementById('info-last-name').value = data.l_name;
    document.getElementById('info-professional-title').value = data.professional_title;
    document.getElementById('info-email-address').value = data.email;
    document.getElementById('info-phone-number').value = data.phone_no;
    document.getElementById('info-date-of-birth').value = data.dob;
    document.getElementById('info-address').value = data.address

}
setBasicInfoForm(basicInfo);



/* ============================
* ==============================
================================*/
//display add social box according to localstorage
const socialInfoTtl = localStorage.getItem('socialInfo') ? JSON.parse(localStorage.getItem('socialInfo')) : [];
console.log('ttl');
console.log(socialInfoTtl);

//get social box parent 
var socialBoxParent = document.getElementsByClassName('social-site-form-container')[0];

//empty before adding 
socialBoxParent.innerHTML = "";
var socialBoxContent = "";
if (socialInfoTtl.length == 0) {
    socialBoxContent += `<div class="social-site-form-content form-content-hobbies" draggable="true" id="0"> <div class="row-2"> <div class="field"> <div class="label"> Name of Social site </div> <input type="text" id="info-facebook" placeholder="eg: Facebook" class="social-site-name"> </div> <div class="field"> <div class="label lang-tech-label"> <div>Link</div> <div class="delete-social-site><i class="fas fa-minus-circle" aria-hidden="true"></i></div> </div> <input type="text" id="info-instagram" placeholder="eg: https://www.fb.com/saw.meer.372" class="social-site-rating social-site-value"> </div> </div> </div>`

} else {
    Array.prototype.forEach.call(socialInfoTtl, function(data, index) {
        socialBoxContent += `<div class="social-site-form-content form-content-hobbies" draggable="true" id="0"> <div class="row-2"> <div class="field"> <div class="label"> Name of Social site </div> <input type="text" id="info-facebook" placeholder="eg: Facebook" class="social-site-name" value="${data.social_type}"> </div> <div class="field"> <div class="label lang-tech-label"> <div>Link</div> <div class="delete-social-site" id="${data.id}"><i class="fas fa-minus-circle" aria-hidden="true"></i></div> </div> <input type="text" id="info-instagram" value="${data.social_value}" placeholder="eg: https://www.fb.com/saw.meer.372" class="social-site-rating social-site-value"> </div> </div> </div>`
    });
}
//append to parent
socialBoxParent.innerHTML = socialBoxContent;
socialBoxContent = "";


//save button for basic info and social info
const saveBasicForm = document.getElementsByClassName('firstNext')[0];

//click event for saving basic info and social info
saveBasicForm.addEventListener('click', () => {
    localStorage.setItem('socialInfo', []);
    var socialInfo = localStorage.getItem('socialInfo') ? JSON.parse(localStorage.getItem('socialInfo')) : []

    //get basic info from form and set to local storage
    setBasicInfo(basicInfo)

    //get social infos and add to localstorage
    const parentSocial = document.getElementsByClassName('social-site-form-container')[0];
    const socialCards = parentSocial.querySelectorAll('.social-site-form-content');
    if (socialCards.length > 0) {
        //through all card
        Array.prototype.forEach.call(socialCards, function(card) {
            //find social type and value 
            const socialType = card.querySelector('.social-site-name').value;
            const socialValue = card.querySelector('.social-site-value').value;

            const social_info = {
                id: card.getAttribute('id'),
                social_type: socialType,
                social_value: socialValue
            };

            socialInfo.push(social_info);

        });
    }
    localStorage.setItem('socialInfo', JSON.stringify(socialInfo));
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo));

})


/* ============================
* ==============================
================================*/
//get existing summary and display
const summary = localStorage.getItem('summary') ? localStorage.getItem('summary') : '';
document.getElementById('summary').value = summary;

//save button for summary
const saveSummaryBtn = document.getElementsByClassName('next-1')[0];

//click event
saveSummaryBtn.addEventListener('click', () => {
    //get summary
    const summary = document.getElementById('summary').value;

    localStorage.setItem('summary', summary);
})


/* ============================
* ==============================
================================*/

//save button for work experience
const saveExperience = document.getElementsByClassName('next-2')[0];

//click event
saveExperience.addEventListener('click', () => {
    localStorage.setItem('experiences', []);
    var experiences = localStorage.getItem('experiences') ? JSON.parse(localStorage.getItem('experiences')) : []

    //get work experiences & add to localstorage
    const parentExperience = document.getElementsByClassName('experience-form-container')[0];
    const experienceCard = parentExperience.querySelectorAll('.experience-form-content');
    if (experienceCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(experienceCard, function(card) {
            //find work experiences value
            const experience_info = {
                job_title: card.querySelector('#experience-job-title').value,
                company: card.querySelector('#experience-company-name').value,
                city: card.querySelector('#experience-city').value,
                country: card.querySelector('#experience-country').value,
                start_date: card.querySelector('#experience-start-date').value,
                end_date: card.querySelector('#experience-end-date').value,
                description: card.querySelector('#experience-job-description').value,
            }

            experiences.push(experience_info);

        });
    }
    console.log(experiences);
    localStorage.setItem('experiences', JSON.stringify(experiences));
})

/* ============================
* ==============================
================================*/
//save button for education
const saveEducation = document.getElementsByClassName('next-3')[0];

//click event
saveEducation.addEventListener('click', () => {
    localStorage.setItem('educations', []);
    var educations = localStorage.getItem('educations') ? JSON.parse(localStorage.getItem('educations')) : []


    const parentEducation = document.getElementsByClassName('education-form-container')[0];
    const educationCard = parentEducation.querySelectorAll('.education-form-content');

    if (educationCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(educationCard, function(card) {
            //find education value
            const education_info = {
                filed_of_study: card.querySelector('#education-field-of-study').value,
                school: card.querySelector('#education-school-name').value,
                city: card.querySelector('#education-city').value,
                country: card.querySelector('#education-country').value,
                start_date: card.querySelector('#edu-start-date').value,
                end_date: card.querySelector('#edu-end-date').value,
                description: card.querySelector('#edu-description').value,
            }

            educations.push(education_info);

        });
    }
    console.log(educations);

    localStorage.setItem('educations', JSON.stringify(educations));
    console.log(educations);


})

/* ============================
* ==============================
================================*/
//save button for languages& technologies
const saveLangTech = document.getElementsByClassName('next-4')[0];

//click event
saveLangTech.addEventListener('click', () => {
    localStorage.setItem('technologies', []);
    var technologies = localStorage.getItem('technologies') ? JSON.parse(localStorage.getItem('technologies')) : []


    const parentTech = document.getElementsByClassName('lang-tech-form-container')[0];
    const techCard = parentTech.querySelectorAll('.lang-tech-form-content');

    if (techCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(techCard, function(card) {
            //find technologies value
            const tech_info = {
                header: card.querySelector('.lang-tech-name').value,
                description: card.querySelector('.lang-tech-description').value,
            }

            technologies.push(tech_info);

        });
    }

    console.log(technologies);
    localStorage.setItem('technologies', JSON.stringify(technologies));

});

/* ============================
* ==============================
================================*/
//save button for skills
const saveSkill = document.getElementsByClassName('next-5')[0];

//click event
saveSkill.addEventListener('click', () => {
    localStorage.setItem('skills', []);
    var skills = localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : []


    const parentSkill = document.getElementsByClassName('skills-form-container')[0];
    const skillCard = parentSkill.querySelectorAll('.skills-form-content');

    if (skillCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(skillCard, function(card) {
            //find skills value
            const skill_info = {
                skill: card.querySelector('.skills-name').value,
                rating: card.querySelector('.skills-rating').value,
            }

            skills.push(skill_info);

        });
    }

    console.log(skills);
    localStorage.setItem('skills', JSON.stringify(skills));
});


/* ============================
* ==============================
================================*/
//save button for languages
const saveLanguage = document.getElementsByClassName('next-6')[0];

//click event
saveLanguage.addEventListener('click', () => {
    localStorage.setItem('languages', []);
    var languages = localStorage.getItem('languages') ? JSON.parse(localStorage.getItem('languages')) : []


    const parentLanguage = document.getElementsByClassName('languages-form-container')[0];
    const languageCard = parentLanguage.querySelectorAll('.languages-form-content');

    if (languageCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(languageCard, function(card) {
            //find languagea value
            const language_info = {
                language: card.querySelector('.languages-name').value,
                rating: card.querySelector('.languages-rating').value,
            }

            languages.push(language_info);

        });
    }

    console.log(languages);
    localStorage.setItem('languages', JSON.stringify(languages));
});

/* ============================
* ==============================
================================*/
//save button for personal skills
const savePersonalSkills = document.getElementsByClassName('next-7')[0];

//click event
savePersonalSkills.addEventListener('click', () => {
    localStorage.setItem('personalSkills', []);
    var personalSkills = localStorage.getItem('personalSkills') ? JSON.parse(localStorage.getItem('personalSkills')) : []


    const parentPersonal = document.getElementsByClassName('personal-skills-form-container')[0];
    const personalCard = parentPersonal.querySelectorAll('.personal-skills-form-content');

    if (personalCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(personalCard, function(card) {
            //find personal skills value
            const personal_skill_info = {
                skill: card.querySelector('.personal-skills-name').value,
                rating: card.querySelector('.personal-skills-rating').value,
            }

            personalSkills.push(personal_skill_info);

        });
    }

    console.log(personalSkills);
    localStorage.setItem('personalSkills', JSON.stringify(personalSkills));
});

/* ============================
* ==============================
================================*/
//save button for hobby
const saveHobby = document.getElementsByClassName('next-8')[0];

//click event
saveHobby.addEventListener('click', () => {
    localStorage.setItem('hobbies', []);
    var hobbies = localStorage.getItem('hobbies') ? JSON.parse(localStorage.getItem('hobbies')) : []


    const parentHobby = document.getElementsByClassName('hobbies-form-container')[0];
    const hobbyCard = parentHobby.querySelectorAll('.hobbies-form-content');

    if (hobbyCard.length > 0) {

        //through all card
        Array.prototype.forEach.call(hobbyCard, function(card) {
            //find hobby value
            const hobby_info = {
                name: card.querySelector('.hobbies-name').value,
            }

            hobbies.push(hobby_info);

        });
    }

    console.log(hobbies);
    localStorage.setItem('hobbies', JSON.stringify(hobbies));
});


/* ============================
* ==============================
================================*/

//save button for reference
const saveReference = document.getElementsByClassName('next-9')[0];

//click event
saveReference.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.setItem('reference', []);
    var reference = localStorage.getItem('reference') ? JSON.parse(localStorage.getItem('reference')) : []

    var reference_info = {
        person_name: document.querySelector('#references-person-name').value,
        company_name: document.querySelector('#references-company-name').value,
        person_position: document.querySelector('#references-person-position').value,
        contact_no: document.querySelector('#references-contact-number').value,
        email: document.querySelector('#references-email').value,
        description: document.querySelector('#references-description').value,
    }

    reference.push(reference_info)


    console.log(reference);
    localStorage.setItem('reference', JSON.stringify(reference));

    //redirect to tempate
    const template = localStorage.getItem('template');
    console.log('click');
    if (template == "template1") {
        //to template1.html
        window.location.pathname = "/templates/template-1.html";
    } else {
        //to template2.html
        window.location.pathname = "/templates/template-2.html";

    }
});