"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let html = document.querySelector('#html');
    let css = document.querySelector('#css');
    let js = document.querySelector('#javascript');
    let java = document.querySelector('#java');
    let adobeXD = document.querySelector('#adobe-xd');
    let scss = document.querySelector('#scss');

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