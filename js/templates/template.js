//get summary and display 
function getSummary() {
    const summary = localStorage.getItem('summary') ? localStorage.getItem('summary') : 'Please Enter Summary';

    var summaryNode = document.getElementsByClassName('summary-content')[0];
    summaryNode.innerHTML = "";
    summaryNode.innerHTML = `<p>${summary}</p>`;

}

//get name and role 
function getNameRole() {
    const basicInfo = JSON.parse(localStorage.getItem('basicInfo'));

    var fname = document.getElementsByClassName('profile-first-name')[0];
    fname.innerHTML = '';
    fname.innerHTML = basicInfo.f_name;

    var lname = document.getElementsByClassName('profile-last-name')[0];
    lname.innerHTML = '';
    lname.innerHTML = basicInfo.l_name;

    var role = document.getElementsByClassName('profile-job-title')[0];
    role.innerHTML = '';
    role.innerHTML = `<span><h3>${basicInfo.professional_title}</h3></span>`
}

//get social info 
function getSocialInfo() {
    const socialInfo = localStorage.getItem('socialInfo') ? JSON.parse(localStorage.getItem('socialInfo')) : [];


    if (socialInfo.length > 0) {
        var parentNode = document.getElementsByClassName('profile-contact-details')[0];
        parentNode.innerHTML = "";

        var socialBoxContent = "";
        Array.prototype.forEach.call(socialInfo, function (data, index) {
            socialBoxContent += `<div class="profile-contact-details-content"> <div class="contact-icon"> <i class="fas fa-phone-alt"></i> </div> <div class="contact-details-text"> <p>${socialInfo[index].social_value
                }</p > </div > </div > `
        });

        parentNode.innerHTML = socialBoxContent;
    }
}

//get language and technologies 
function getLanguageandTech() {
    const languages = localStorage.getItem('technologies') ? JSON.parse(localStorage.getItem('technologies')) : [];

    if (languages.length > 0) {
        var parentNode = document.getElementsByClassName('tech-parent')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(languages, (data, index) => {
            content += `<div class="resume-section-content"> <div class="resume-section-topic"> <span>${languages[index].header}</span> </div> <div class="resume-section-description"> <span> <p>${languages[index].description}</p> </span> </div> </div>`;
        });

        parentNode.innerHTML = content;

    }
}

//get languages 
function getLanguages() {
    const languages = localStorage.getItem('languages') ? JSON.parse(localStorage.getItem('languages')) : [];
    if (languages.length > 0) {
        var parentNode = document.getElementsByClassName('language-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(languages, (data, index) => {
            content += `<div class="languages-section-content"> <div class="languages-name"> <span>${data.language}</span> </div> <div class="languages-rating"> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> </div> </div>`;
        });

        parentNode.innerHTML = content;

    }
}

//get hobies 
function getHobies() {
    const hobies = localStorage.getItem('hobbies') ? JSON.parse(localStorage.getItem('hobbies')) : [];

    if (hobies.length > 0) {
        var parentNode = document.getElementsByClassName('hobbies-name')[0];
        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(hobies, (data, index) => {
            content += `<ul><li><span>${data.name}</span></li></ul>`
        });

        parentNode.innerHTML = content;
    }
}

//get skills 
function getSkills() {
    const skills = localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [];

    if (skills.length > 0) {
        var parentNode = document.getElementsByClassName('skills-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(skills, (data, index) => {
            content += `<div class="skills-section-content"> <div class="skills-name"> <span>${data.skill}</span> </div> <div class="skills-rating"> <span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> <span class="fa fa-star"></span> </div> </div>`
        });

        parentNode.innerHTML = content;
    }
}

//get personal skills
function getPersonalSkills() {
    const personalSkills = localStorage.getItem('personalSkills') ? JSON.parse(localStorage.getItem('personalSkills')) : [];

    if (personalSkills.length > 0) {
        var parentNode = document.getElementsByClassName('personal-skills-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(personalSkills, (data, index) => {
            content += `<div class="personal-skills-section-content"> <div class="personal-skills-name"> <span>${data.skill}</span> <span id="personal-skills-percent">32%</span> </div> <div class="personal-skills-progress"> <progress class="progress" value="32" max="100"></progress> </div> </div>`;
        });

        parentNode.innerHTML = content;
    }
}

//get reference
function getReference() {
    const reference = localStorage.getItem('reference') ? JSON.parse(localStorage.getItem('reference')) : [];

    if (reference.length > 0) {
        var parentNode = document.getElementsByClassName('reference-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(reference, (data, index) => {
            content += `<div class="references-content resume-section-list-tile"> <div class="reference-subtitle list-tile-subtitle"> <div class="reference-person">${data.person_name}</div> <span class="reference-position">${data.person_position}</span> <span class="dash">-</span> <span class="reference-company">${data.company_name}</span> <div class="reference-contact">${data.contact_no}</div> <div class="reference-email">${data.email}</div> </div> <div class="reference-description"> <p>${data.description} </p> </div></div>`;
        });

        parentNode.innerHTML = content;
    }
}

//get work experience 
function getWorkExperience() {
    const works = localStorage.getItem('experiences') ? JSON.parse(localStorage.getItem('experiences')) : [];

    if (works.length > 0) {
        var parentNode = document.getElementsByClassName('experience-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(works, (data, index) => {
            content += `<div class="work-experience-content resume-section-list-tile"> <div class="list-tile-title-subtitle"> <span class="list-tile-title">${data.company}</span> <span class="dash">-</span> <span class="list-tile-subtitle">${data.job_title}</span> </div> <div class="list-tile-date-address"> <span class="list-tile-date"><span class="list-tile-date-from">${data.start_date}</span><span class="dash">-</span> <span class="list-tile-date-to">${data.end_date}</span></span> <span class="slash">/</span> <span class="list-tile-address"><span>${data.city}, ${data.country}</span></span> </div> <div class="list-tile-description"> <ul> <li> <p>${data.description} </p> </li> </ul> </div> </div>`;
        });

        parentNode.innerHTML = content;
    }
}

//get education
function getEducation() {
    const educations = localStorage.getItem('educations') ? JSON.parse(localStorage.getItem('educations')) : [];

    if (educations.length > 0) {
        var parentNode = document.getElementsByClassName('education-container')[0];

        parentNode.innerHTML = "";

        var content = "";
        Array.prototype.forEach.call(educations, (data, index) => {
            console.log(data);
            content += `<div class="education-content resume-section-list-tile"> <div class="list-tile-title-subtitle"> <span class="list-tile-title">${data.school}</span> <span class="dash">-</span> <span class="list-tile-subtitle">${data.school}</span> </div> <div class="list-tile-date-address"> <span class="list-tile-date"><span class="list-tile-date-from">${data.start_date}</span><span class="dash">-</span> <span class="list-tile-date-to">${data.end_date}</span></span> <span class="slash">/</span> <span class="list-tile-address"><span>${data.city}, ${data.country}</span></span> </div> <div class="list-tile-description"> <ul> <li> <p>${data.description}</p> </li> </ul> </div> </div>`;
        });
        educations
        parentNode.innerHTML = content;
    }
}



getSummary();
getNameRole();
getSocialInfo();
getLanguageandTech();
getLanguages();
getHobies();
getSkills();
getPersonalSkills();

getReference();
getWorkExperience();
getEducation();
