"use strict";

const timeline = gsap.timeline();

// Introduction
document.documentElement.style.overflowY = 'hidden';
timeline.from('#header-title', {opacity: 0, y: "30%", duration: 1, ease: "power1"});
timeline.from('.header-item', {opacity: 0, y: "30%", duration: .5, ease: "power1"}, "-=1");
timeline.from('#sub-title', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-title', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-hr', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-button', {opacity: 0, duration: .5, ease: "power1"});
timeline.from('.infos', {opacity: 0, y: "10%", duration: .5, ease: "power1", stagger: ".2"}, "-=1")
        .then(() => document.documentElement.style.overflowY = 'scroll');

function verticalAnimation(yValue = "100%", id, element) {

    /** I use destructuring because we only need two properties 
     *  of the getBoundingClientRect() method.
     */
    const {top, bottom} = element.getBoundingClientRect();

    if ((top <= window.innerHeight)) {
        gsap.to(id, {y: "0%", duration: 2.5, ease: "expo.out"});
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: yValue, ease: "power1"});
        element.style.opacity = '0';
    } 

    if ((bottom >= 0)) {
        gsap.to(id, {y: "0%", duration: 2.5, ease: "expo.out"});
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {y: yValue, ease: "power1"});
        element.style.opacity = '0';
    }
}

function horizontalAnimation(xValue, id, element) {

    const {top, bottom} = element.getBoundingClientRect();

    if ((top <= window.innerHeight)) {
        gsap.to(id, {x: 0, duration: 2.5, ease: "expo.out"});
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {x: xValue, ease: "power1"});
        element.style.opacity = '0';
    } 

    if ((bottom >= 0)) {
        gsap.to(id, {x: 0, duration: 2.5, ease: "expo.out"});
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    } 
    else {

        gsap.to(id, {opacity: 0, ease: "power1"});
        gsap.to(id, {x: xValue, ease: "power1"});
        element.style.opacity = '0';
    }
}

/** The method for animating the services section on the webpage. */
function servicesAnimation() {

    let title = document.querySelector('#services-section-title');
    let image = document.querySelector('#image-service');
    let mainContent = document.querySelector('#service-main-content');
    let dots = document.querySelector('.dots');

    verticalAnimation("-100%", '#services-section-title', title);
    horizontalAnimation('-100%', '#image-service', image);
    horizontalAnimation('100%', '#service-main-content', mainContent);
    verticalAnimation("100%", '.dots', dots);
}

function skillsAnimation() {

    let title = document.querySelector('#skills-title-section');
    let skills = document.querySelector('.skills-content');

    verticalAnimation("-100%", '#skills-title-section', title);
    verticalAnimation("100%", '.skills-content', skills);
}

function buttonAnimation(id, button) {

    const {top, bottom} = button.getBoundingClientRect();

    if (top <= window.innerHeight)
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    else
        gsap.to(id, {opacity: 0});

    if (bottom >= 0)
        gsap.to(id, {opacity: 1, duration: 2.5, ease: "expo.out"});
    else
        gsap.to(id, {opacity: 0});
}


function mainSectionAnimateOnScroll() {

    let mainTitle = document.querySelector('#main-title');
    let subTitle = document.querySelector('#sub-title');
    let hr = document.querySelector('#main-hr');
    let button = document.querySelector('#main-button');
    let basicInfoSection = document.querySelector('#basic-info-section');
    let header = document.querySelector('header');

    verticalAnimation("-100%", 'header', header);
    verticalAnimation("-100%", '#sub-title', subTitle);
    verticalAnimation("-100%",'#main-title', mainTitle);
    verticalAnimation("-100%",'#main-hr', hr);
    buttonAnimation('#main-button', button);
    verticalAnimation("-100%",'#basic-info-section', basicInfoSection);
}

function aboutSectionAnimation() {

    let image = document.querySelector('#about-photo');
    let aboutContent = document.querySelector('.about-content_info');
    let title = document.querySelector('#about-title-section');
    let paragraph = document.querySelector('#about-paragraph');

    horizontalAnimation("-100%", '#about-photo', image);
    horizontalAnimation("100%", '.about-content_info', aboutContent);
}

document.addEventListener('scroll', () => {

    mainSectionAnimateOnScroll();
    aboutSectionAnimation();
    servicesAnimation();
    skillsAnimation();
});
