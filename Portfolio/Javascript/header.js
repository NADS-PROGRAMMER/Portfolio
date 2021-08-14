"use strict"

// Get the header items.
const [home, aboutMe, services, stack, projects] = document.querySelectorAll('.header-item-content');

/** Function to add events that when the user clicks
 * the item, it will scroll to its respective section. */
function addScrollToEvent(element, elementID) {

    element.addEventListener('click', () => {
        document.querySelector(elementID).scrollIntoView();
    });
}

addScrollToEvent(aboutMe, '.about');
addScrollToEvent(services, '.main_services');
addScrollToEvent(stack, '.skills');
addScrollToEvent(projects, '.projects');