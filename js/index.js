// Navbar Click Event listener

let hamburger = document.querySelector('#hamburger');
let navbar = document.querySelector('.navbar');   
let leftnav = document.querySelector('.leftnav'); 
let rightnav = document.querySelector('.rightnav'); 
//Don't use .getelmentbyclassname() as it selects and returns html collection not a single element.

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('resp-nav-height');
    leftnav.classList.toggle('resp-visibilty');
    rightnav.classList.toggle('resp-visibilty');
});


// .classList.toggle() wo ksis bhi element ki andar ki class ko remove aur add krta hai.
// yaad rakhein pahli baar hamesha remove krta hai.


// In this code navbar.classList.toggle('resp-nav-height');, we are using the classList.toggle() method
//  to toggle the "resp-nav-height" class on the navbar element.

// Here's what happens when this line of code is executed:

// It checks if the "resp-nav-height" class is present on the navbar element.
// If the class is present, it removes it.
// If the class is not present, it adds it.