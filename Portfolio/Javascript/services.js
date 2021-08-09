"use strict";

/***********************
 * This file is for the image slider on the 
 * services section in the webpage.
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
function showImage(source, serviceTitle, serviceDefinition, dot) {

    let image = document.getElementById('image-service');
    let title = document.querySelector('#service-title');
    let definition = document.querySelector('#service-definition');

    if (!timeline.isActive()) {

        // Here is the animation of the image slider.
        timeline.from('#image-service', {opacity: 0, x: "100%", duration: 2.5, ease: "expo.out"});
        timeline.from('#service-main-content',{opacity: 0, x: "100%", duration: 2.5, ease: "expo.out"}, "-=2.5");

        image.src = source; // set the source.
        title.textContent = serviceTitle; // set the service title.
        definition.textContent = serviceDefinition; // set the definition of the service.
    }
}

window.addEventListener('DOMContentLoaded', () => {

    let firstImage = document.getElementById('first-image');
    let secondImage = document.getElementById('second-image');
    let thirdImage = document.getElementById('third-image');
    let message = '';

    firstImage.addEventListener('click', function() {

        message = `Business without advertisements is boring. I can help you to build your own E-Commerce Site so that you can introduce your wonderful products to your customers. Simple, Fast, and Easy to use website is cool!`;

        showImage('Portfolio/Javascript/Services Image/Web 1920 – 3.jpg', 'E-Commerce Site', message);
    });

    secondImage.addEventListener('click', function() {

        message = `Managing your products is a crucial part when you are taking businesses. BUT! Application like this would help to organize and track your products. It is user-friendly application so that you don't need to worry about what to do in the app. I can provide you good quality applications and designs for your own business.`;

        showImage('Portfolio/Javascript/Services Image/Product Management System.png', 'Product Management System', message);
    });

    thirdImage.addEventListener('click', function() {

        message = `I also offer web designs that support other developers to make a design with good qualities with maintainable user interfaces that satisfies the needs of users. It is a crucial part for making a website so that it needs to be done with great output.`;

        showImage('Portfolio/Javascript/Services Image/Animate 1.jpg', 'Web Design', message);
    })
})
