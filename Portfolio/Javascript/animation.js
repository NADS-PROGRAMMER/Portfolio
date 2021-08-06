"use strict";

const timeline = gsap.timeline();

timeline.from('#sub-title', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-title', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-hr', {opacity: 0, y: "30%", duration: .5, ease: "power1"});
timeline.from('#main-button', {opacity: 0, y: "10%", duration: .5, ease: "power1"});