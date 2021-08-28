"use strict"

/***********************
 * THIS FILE IS FOR THE IMAGE SLIDER 
 * ON THE SERVICES SECTION IN THE WEBPAGE.
 ***********************/

/**
 * A function that shows the image
 * when the user clicks to the dotted 
 * navigation.
 * 
 * @param {*} source 
 * - source of the image.
 * 
 * @param {*} serviceTitle
 * - the title of the service. 
 */

const timeline = gsap.timeline(); // gsap instance animation.

/**
 * 
 * @param {*} source 
 * - source of the image.
 * @param {*} serviceTitle 
 * - title of the service offered.
 * @param {*} serviceDefinition 
 * - definition of the service.
 * @param {*} dot 
 * - the navigation button for all the images.
 */
function showImage(source, serviceTitle, serviceDefinition) {

    let image = document.getElementById('image-service');
    let title = document.querySelector('#service-title');
    let definition = document.querySelector('#service-definition');

    if (!timeline.isActive()) {

        image.src = source; // set the source.
        title.textContent = serviceTitle; // set the service title.
        definition.textContent = serviceDefinition; // set the definition of the service.

        // Here is the animation of the image slider.
        timeline.from('#image-service', {opacity: 0, duration: easeDuration, ease: easeAnimation});
        timeline.from('#service-main-content',{opacity: 0, duration: easeDuration, ease: easeAnimation}, "-=2.5")
    }
}

window.addEventListener('DOMContentLoaded', () => {

    let firstImage = document.getElementById('first-image');
    let secondImage = document.getElementById('second-image');
    let thirdImage = document.getElementById('third-image');
    let message = '';

    firstImage.addEventListener('click', function() {

        message = `Business without advertisements is boring. I can help you to build your own E-Commerce Site so that you can introduce your wonderful products to your customers. Simple, Fast, and Easy to use website!`;

        showImage('Portfolio/Javascript/Services Image/Airpods.jpg', 'E-Commerce Site', message);
    });

    secondImage.addEventListener('click', function() {

        message = `Managing your products is a crucial part when you are taking businesses. BUT! Application like this would help you to organize and track your products. It is user-friendly application so that you don't need to worry about how to use the app. I can provide you good quality designs and applications for your own business.`;

        showImage('Portfolio/Projects/Product Management System.jpg', 'Product Management System', message);
    });

    thirdImage.addEventListener('click', function() {

        message = `I also offer web designs that support other developers to make a design with good qualities with maintainable user interfaces that satisfies the needs of users. It is a crucial part for making a website so that it needs to be done with great output.`;

        showImage('Portfolio/Javascript/Services Image/Unravel.jpg', 'Web Design', message);
    })
}) // END OF SERVICES SECTION PROGRAM.