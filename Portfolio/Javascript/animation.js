"use strict";

/************************************************************
 * THIS IS THE PROGRAM FOR THE ANIMATION
 * OF ALL THE ELEMENTS WHEN THE onScroll() EVENT IS TRIGGERED.
 ************************************************************/
let easeAnimation = "sine.out";
let easeDuration = 0.5;

document.addEventListener('DOMContentLoaded', () => {

    gsap.to('*', {opacity: 1, duration: easeDuration, ease: easeAnimation});
    // Vertical Animation
    function verticalAnimation(yValue = "100%", id, element) {

        /** I use destructuring because we only need two properties 
         *  of the getBoundingClientRect() method. */
        const {top, bottom} = element.getBoundingClientRect();

        if ((top <= window.innerHeight)) {
            gsap.to(id, {y: "0%", duration: easeDuration, ease: easeAnimation});
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        } 
        else {

            gsap.to(id, {opacity: 0, ease: "power1"});
            gsap.to(id, {y: yValue, ease: "power1"});
            element.style.opacity = '0';
        } 

        if ((bottom >= 0)) {
            gsap.to(id, {y: "0%", duration: easeDuration, ease: easeAnimation});
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        } 
        else {

            gsap.to(id, {opacity: 0, ease: "power1"});
            gsap.to(id, {y: yValue, ease: "power1"});
            element.style.opacity = '0';
        }
    }

    /**
     * This is the animation for the element
     * in horizontal axis.
     */
    function horizontalAnimation(xValue, id, element) {

        const {top, bottom} = element.getBoundingClientRect();

        if ((top <= window.innerHeight)) {
            gsap.to(id, {x: 0, duration: easeDuration, ease: easeAnimation});
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        } 
        else {

            gsap.to(id, {opacity: 0, ease: "power1"});
            gsap.to(id, {x: xValue, ease: "power1"});
            element.style.opacity = '0';
        } 

        if ((bottom >= 0)) {
            gsap.to(id, {x: 0, duration: easeDuration, ease: easeAnimation});
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        } 
        else {

            gsap.to(id, {opacity: 0, ease: "power1"});
            gsap.to(id, {x: xValue, ease: "power1"});
            element.style.opacity = '0';
        }
    }

    function buttonAnimation(id, button) {

        const {top, bottom} = button.getBoundingClientRect();

        if (top <= window.innerHeight)
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        else
            gsap.to(id, {opacity: 0});

        if (bottom >= 0)
            gsap.to(id, {opacity: 1, duration: easeDuration, ease: easeAnimation});
        else
            gsap.to(id, {opacity: 0});
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

    /***************************************************************************
     * THESE ARE ALL OF ANIMATIONS FOR ALL THE WEBPAGE SECTIONS WHEN THE USER
     * SCROLLS UP/DOWN TO THE PAGE.
     * 
     * I DIVIDED IT TO SEVERAL FUNCTIONS TO MAKE IT ORGANIZE AND CLEAN.
     ***************************************************************************/

    /**
     * This is the animation function for the 
     * first section that can be seen when opened
     * the page.
     */
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

    /**
     * This is the animation function for the about 
     * section in the webpage.
     */
    function aboutSectionAnimation() {

        let image = document.querySelector('#about-photo');
        let aboutContent = document.querySelector('.about-content_info');

        horizontalAnimation("-100%", '#about-photo', image);
        horizontalAnimation("100%", '.about-content_info', aboutContent);
    }

    /**
     * This is the animation function for the 
     * skills section in the webpage.
     */
    function skillsAnimation() {

        let title = document.querySelector('#skills-title-section');
        let skills = document.querySelector('.skills-content');

        verticalAnimation("-100%", '#skills-title-section', title);
        verticalAnimation("30%", '.skills-content', skills);
    }

    /**
     * This is the animation function for the
     * project section in the webpage.
     */
    function projectsAnimation() {


        let project1Image = document.querySelector('#project-1-image');
        let project1Section = document.querySelector('#project-1-section');

        let project2Image = document.querySelector('#project-2-image');
        let project2Section = document.querySelector('#project-2-section');

        let project3Image = document.querySelector('#project-3-image');
        let project3Section = document.querySelector('#project-3-section');

        horizontalAnimation("-100%", "#project-1-image", project1Image);
        horizontalAnimation("100%", "#project-1-section", project1Section);

        horizontalAnimation("100%", "#project-2-image", project2Image);
        horizontalAnimation("-100%", "#project-2-section", project2Section);

        horizontalAnimation("-100%", "#project-3-image", project3Image);
        horizontalAnimation("100%", "#project-3-section", project3Section);
    }

    document.querySelector('#up-arrow').addEventListener('click', () => {

        window.scrollTo(0, 0);
    });

    // Events when the user scrolls the page.
    document.addEventListener('scroll', () => {

        mainSectionAnimateOnScroll();
        aboutSectionAnimation();
        servicesAnimation();
        skillsAnimation();
        projectsAnimation();
    });
}) // END OF onScroll() animations for all the elements in the webpage.


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

        showImage('Portfolio/Javascript/Services Image/Web 1920 – 3.jpg', 'E-Commerce Site', message);
    });

    secondImage.addEventListener('click', function() {

        message = `Managing your products is a crucial part when you are taking businesses. BUT! Application like this would help you to organize and track your products. It is user-friendly application so that you don't need to worry about how to use the app. I can provide you good quality designs and applications for your own business.`;

        showImage('Portfolio/Javascript/Services Image/Product Management System.png', 'Product Management System', message);
    });

    thirdImage.addEventListener('click', function() {

        message = `I also offer web designs that support other developers to make a design with good qualities with maintainable user interfaces that satisfies the needs of users. It is a crucial part for making a website so that it needs to be done with great output.`;

        showImage('Portfolio/Javascript/Services Image/Animate 1.jpg', 'Web Design', message);
    })
}) // END OF SERVICES SECTION PROGRAM.


/**
 * THIS IS THE PROGRAM FOR THE SKILL SECTION IN 
 * THE WEBPAGE.
 */
document.addEventListener('DOMContentLoaded', () => {

    let html = document.querySelector('#html');
    let css = document.querySelector('#css');
    let js = document.querySelector('#javascript');
    let java = document.querySelector('#java');
    let adobeXD = document.querySelector('#adobe-xd');
    let scss = document.querySelector('#scss');
    let sql = document.querySelector('#sql');

    html.addEventListener('mouseover', () => {showSkillName('HTML', '#html')});
    html.addEventListener('mouseleave', () => {hideSkillName('#html')});
    
    css.addEventListener('mouseover', () => {showSkillName('CSS', '#css')});
    css.addEventListener('mouseleave', () => {hideSkillName('#css')});

    js.addEventListener('mouseover', () => {showSkillName('Javascript', '#javascript')});
    js.addEventListener('mouseleave', () => {hideSkillName('#javascript')});

    java.addEventListener('mouseover', () => {showSkillName('Java', '#java')});
    java.addEventListener('mouseleave', () => {hideSkillName('#java')});

    adobeXD.addEventListener('mouseover', () => {showSkillName('Adobe XD', '#adobe-xd')});
    adobeXD.addEventListener('mouseleave', () => {hideSkillName('#adobe-xd')});

    scss.addEventListener('mouseover', () => {showSkillName('SCSS', '#scss')});
    scss.addEventListener('mouseleave', () => {hideSkillName('#scss')});

    sql.addEventListener('mouseover', () => {showSkillName('MySQL', '#sql')});
    sql.addEventListener('mouseleave', () => {hideSkillName('#sql')});

    /*********************************************************************************
     * HERE ARE THE METHODS USED FOR THE ANIMATION ON THE SKILLS LOGO.
     * Ex HTML and CSS logo.
     * 
     * See the implementation below.
     ********************************************************************************/


    function showSkillName(skill, id) {

        let skillName = document.getElementsByClassName('skill-name');
        let logo = document.querySelector(id);

        logo.style.transition = 'transform 300ms';
        logo.style.transform = 'translateY(-5px)';
        logo.style.setProperty("filter", "drop-shadow(0px 0px 1px white)");
        for (let i = 0; i < skillName.length; i++) {

            if (skillName[i].innerHTML === skill) {

                skillName[i].style.animation = 'animationVisibility 300ms ease-in';
                skillName[i].style.visibility = 'visible';
            }
        }
    }

    /** A function that hides the skill name. 
     * Ex. When the user hovers the image of HTML logo, then if 
     * the mouse leave event triggers, it hides the name of it.
     * 
     * This function accepts the id of the image
     * for that it transform back to it's original position.
     * 
     * NOTE: See Transform property
     */
    function hideSkillName(id) {

        let skillName = document.getElementsByClassName('skill-name');
        let logo = document.querySelector(id);

        logo.style.transform = 'translateY(0)';
        logo.style.setProperty("filter", "none");
        for (let i = 0; i < skillName.length; i++) {

            skillName[i].style.animation = 'none';
            skillName[i].style.visibility = 'hidden';
        }
    }
});

/** THIS IS THE PROGRAM/SRC CODE FOR THE FORM SECTION
 * IN THE WEBPAGE.
 */
document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form').onsubmit = () => {

        // Here's the variables
        const name = document.querySelector('#full-name').value;
        const email = document.querySelector('#e-mail').value;
        const message = document.querySelector('#message').value;
        const modal = document.querySelector('#modal');
        const modalContent = document.querySelector('#modal-message');

        modal.style.opacity = '0';

        /** Checks if one of the required fields are empty. */
        if (String(name).length < 1 || String(email).length < 1 || String(message).length < 1) {

            modalContent.textContent = 'Please fill up all the required fields.' // Change the paragraph content.

            gsap.to('#modal', {opacity: 1, duration: 1.5, ease: easeAnimation});
            modal.style.display = 'block'; // Show the modal.
            modal.style.background = '#b33f40'; // Change the background to matte red.
        }
        /** Here is the code that would execute if the above conditions aren't met. */
        else { 

            modalContent.textContent = 'Your message has been sent!' // Change the paragraph content.

            gsap.to('#modal', {opacity: 1, duration: 1.5, ease: easeAnimation});
            modal.style.display = 'block'; // Show the modal.
            modal.style.background = '#48A14D'; // Set the background of the modal to matte green.

            // Resets the form and hides the modal after 1.5 seconds.
            setTimeout(() => {
                modal.style.display = 'none';
                document.getElementById('full-name').value = '';
                document.getElementById('e-mail').value = '';
                document.getElementById('message').value = '';
            }, 2000);
        }
        return false; // we return false so that the form do not go to another page.
    }
});