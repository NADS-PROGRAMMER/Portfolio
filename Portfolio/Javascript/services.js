"use strict";

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
function showImage(source, serviceTitle) {

    let image = document.getElementById('image-service');
    let title = document.getElementById('service-title');

    image.src = source;
    title.textContent = serviceTitle;
}

window.addEventListener('DOMContentLoaded', () => {

    // Variables
    let firstImage = document.getElementById('first-image');
    let secondImage = document.getElementById('second-image');
    let thirdImage = document.getElementById('third-image');

    
    firstImage.addEventListener('click', () => {

        showImage('Portfolio/Javascript/Services Image/Web 1920 – 3.jpg', 'E-Commerce Site');
    });

    secondImage.addEventListener('click', () => {

        showImage('Portfolio/Javascript/Services Image/Product Management System.png', 'Product Management System');
    });

    thirdImage.addEventListener('click', () => {

        showImage('Portfolio/Javascript/Services Image/Animate 1.jpg', 'Web Design');
    })
})
