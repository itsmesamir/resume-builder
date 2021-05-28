//get all template choose btn
const elem = document.getElementsByClassName('template_chooser');

//through each element of result
Array.prototype.forEach.call(elem, function(btn) {

    // set click event
    btn.addEventListener('click', function(e) {
        //get attribute 
        const template = btn.getAttribute('template');
        //set to localstorage
        localStorage.setItem('template', template);
    })

});

/*=======================================
*=======================================
=========================================*/
//contact information 
const contactInformationBtn = document.getElementsByClassName('next-1')[0];
var basicInfo = {
    'resume_name': '',
    'f_name': '',
    'l_name': '',
    'email': '',
    'phone_no': '',
    'professional_title': '',
    'address': '',
    'dob': '',
}

//set data from localstorage to input fields for contact information
const stored_basicInfo = JSON.parse(localStorage.getItem('basicInfo'));

//set to input fields
function setContactInformation(data) {
    document.getElementById('resume-name').value = data.resume_name;
    document.getElementById('first-name').value = data.f_name;
    document.getElementById('last-name').value = data.l_name;
    document.getElementById('email').value = data.email;
    document.getElementById('phone-no').value = data.phone_no;

}
if (stored_basicInfo) {

    setContactInformation(stored_basicInfo);
}


//click event
contactInformationBtn.addEventListener('click', (e) => {

    //get form data 
    basicInfo.resume_name = document.getElementById('resume-name').value;
    basicInfo.f_name = document.getElementById('first-name').value;
    basicInfo.l_name = document.getElementById('last-name').value;
    basicInfo.email = document.getElementById('email').value;
    basicInfo.phone_no = document.getElementById('phone-no').value;

    //set to localstorage
    localStorage.setItem('basicInfo', JSON.stringify(basicInfo))
});

/*=======================================
*=======================================
=========================================*/
//experience level

//get all experiennce type box
const experienceCards = document.getElementsByClassName('single-experience');

//through each element of result
Array.prototype.forEach.call(experienceCards, function(card) {

    // set click event
    card.addEventListener('click', function(e) {
        //get attribute 
        const experience_info = {
            'experience': card.getAttribute('experience'),
            'year': card.getAttribute('year')
        }

        //set to localstorage
        localStorage.setItem('experience_info', JSON.stringify(experience_info));
    })

});


//submit 
const submitBtn = document.getElementsByClassName('submitBtn')[0];

submitBtn.addEventListener('click', function(e) {
    window.location.pathname = "app.html"
    console.log('test');
    console.log(window.location.pathname);
});