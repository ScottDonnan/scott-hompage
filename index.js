const navButton = document.getElementById('navMenu');

navButton.addEventListener('mouseover', function() {
    navButton.innerHTML = "<h2>'Now I include this data'</h2>";
});

navButton.addEventListener('mouseout', function() {
    navButton.innerHTML = "Navigation";
});

