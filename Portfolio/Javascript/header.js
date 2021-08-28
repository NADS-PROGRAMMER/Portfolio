"use strict"

// Get the header items including the items in modal.
const [aboutMeItem1, servicesItem1, stackItem1, projectsItem1, aboutMeItem2, servicesItem2, stackItem2, projectsItem2] = document.querySelectorAll('.header-item-content');

window.addEventListener('resize', () => {

    gsap.to('.menu', {y: "-100%", duration: .3, ease: "expo.out"});
})
/** Function to add events that when the user clicks
 * the item, it will scroll to its respective section. */
function addScrollToEvent(element, elementID) {

    element.addEventListener('click', function() {

        document.querySelector(elementID).scrollIntoView();
        gsap.to('.menu', {y: "-100%", duration: .3, ease: "expo.out"});
    });
}

function addOpenMenuEvent() {
    document.querySelector('#hamburger').addEventListener('click', () => {

        gsap.to('.menu', {y: "0%", duration: .3, ease: "expo.out"});
        document.querySelector('.menu').style.display = 'flex';
    });
}

function addCloseMenuEvent(idOrClass) {

    document.querySelector(idOrClass).addEventListener('click', () => {

        gsap.to('.menu', {y: "-200%", duration: .3, ease: "expo.out"});
    })
}

// Adding events.
addScrollToEvent(aboutMeItem1, '.about');
addScrollToEvent(servicesItem1, '.main_services');
addScrollToEvent(stackItem1, '.skills');
addScrollToEvent(projectsItem1, '.projects');

addScrollToEvent(aboutMeItem2, '.about');
addScrollToEvent(servicesItem2, '.main_services');
addScrollToEvent(stackItem2, '.skills');
addScrollToEvent(projectsItem2, '.projects');

addOpenMenuEvent();
addCloseMenuEvent('#close-button');