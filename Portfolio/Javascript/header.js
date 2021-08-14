"use strict"

const headerItems = document.querySelectorAll('.header-item-content');

const [home, aboutMe, services, stack, projects] = headerItems;

function addScrollToEvent(element, elementTo) {

    element.addEventListener('click', () => {
        document.querySelector(elementTo).scrollIntoView();
    });
}

addScrollToEvent(aboutMe, '.about');
addScrollToEvent(services, '.main_services');
addScrollToEvent(stack, '.skills');
addScrollToEvent(projects, '.projects');