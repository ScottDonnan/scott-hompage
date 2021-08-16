const input = document.getElementById('nav-button');

function addingEventListener() {
input.addEventListener('mouseover', function() {
    alert('I was clicked');
})
};

addingEventListener();