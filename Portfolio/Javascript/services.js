"use strict";


function showImage(source, serviceTitle) {

    let image = document.getElementById('image-service');
    let title = document.getElementById('service-title');

    image.src = source;
    title.textContent = serviceTitle;
}


window.addEventListener('DOMContentLoaded', function() {

    let image = document.getElementById('image-service');
    let firstImage = document.getElementById('first-image');
    let secondImage = document.getElementById('second-image');
    let thirdImage = document.getElementById('third-image');

    firstImage.addEventListener('click', function() {

        showImage('Portfolio/Javascript/Services Image/Web 1920 – 3.jpg', 'E-Commerce Site');
    });

    secondImage.addEventListener('click', function() {

        showImage('Portfolio/Javascript/Services Image/Product Management System.png', 'Product Management System');
    });

    thirdImage.addEventListener('click', function() {

        showImage('Portfolio/Javascript/Services Image/Animate 1.jpg', 'Web Design');
    })
})
