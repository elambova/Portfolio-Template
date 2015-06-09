"use strict";
$('#slider').bxSlider({
    mode: 'fade',
    auto: true,
    autoControls: true,
    pause: 2000
});
var toggleButtonNavigation = document.getElementById('btn-navigation');
var navigation = document.getElementById('navigation');

toggleButtonNavigation.addEventListener("click", function () {
    if (navigation.style.display === '') {
        navigation.style.display = "block";
//        navigation.style.width = '100%';
    } else {
        navigation.style.display = '';
    }
});