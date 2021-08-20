//const navButton = document.getElementById('navMenu');

//navButton.addEventListener('mouseover', function() {
//    navButton.innerHTML = "<h2>Now I include this data</h2><a href=''>Biography</a><p></p><a href=''>Resume</a>";
//});

// Variables for navigation menu buttons
const profButton = document.getElementById('profLink');
const familyButton = document.getElementById('familyLink');
const musicButton = document.getElementById('musicLink');
const contactButton = document.getElementById('contactLink');
const homeButton = document.getElementById('homeLink');

// Variable for page content accessed by menu buttons
const familySection = document.getElementById('family');
const profSection = document.getElementById('professional');
const musicSection = document.getElementById('music');
const contactSection = document.getElementById('contact');
const mainpageSection = document.getElementById('home');


profButton.addEventListener('click', function() {
    familySection.style.display = 'none';
    musicSection.style.display = 'none';
    contactSection.style.display = 'none';
    profSection.style.display = 'flex';
    mainpageSection.style.display = 'none';
});

familyButton.addEventListener('click', function() {
    familySection.style.display = 'flex';
    musicSection.style.display = 'none';
    contactSection.style.display = 'none';
    profSection.style.display = 'none';
    mainpageSection.style.display = 'none';
});

musicButton.addEventListener('click', function() {
    familySection.style.display = 'none';
    musicSection.style.display = 'flex';
    contactSection.style.display = 'none';
    profSection.style.display = 'none';
    mainpageSection.style.display = 'none';
});

contactButton.addEventListener('click', function() {
    familySection.style.display = 'none';
    musicSection.style.display = 'none';
    contactSection.style.display = 'flex';
    profSection.style.display = 'none';
    mainpageSection.style.display = 'none';
});

homeButton.addEventListener('click', function() {
    familySection.style.display = 'none';
    musicSection.style.display = 'none';
    contactSection.style.display = 'none';
    profSection.style.display = 'none';
    mainpageSection.style.display = 'flex';
});