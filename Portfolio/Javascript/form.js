"use strict";

function isEmpty(fieldValue) {

    return fieldValue.length < 1;
}
/** THIS IS THE PROGRAM/SRC CODE FOR THE FORM SECTION
 * IN THE WEBPAGE. */
document.getElementById('form').onsubmit = () => {

    // Here's the variables
    const name = document.querySelector('#full-name').value;
    const email = document.querySelector('#e-mail').value;
    const password = document.querySelector('#password').value;
    const message = document.querySelector('#message').value;
    const modal = document.querySelector('#modal');
    const modalContent = document.querySelector('#modal-message');

    modal.style.opacity = '0';

    /** Checks if one of the required fields are empty. */
    if (isEmpty(name) || isEmpty(email) 
        || isEmpty(password) || isEmpty(message)) {

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

        // Resets the form and hides the modal after 2 seconds.
        setTimeout(() => {
            modal.style.display = 'none';
            document.getElementById('full-name').value = '';
            document.getElementById('e-mail').value = '';
            document.getElementById('password').value = '';
            document.getElementById('message').value = '';
        }, 2000);
    }
    return false; // we return false so that the form do not go to another page.
};