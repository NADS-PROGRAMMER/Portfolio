"use strict";

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('form').onsubmit = () => {

        // Here's the variables
        const name = document.getElementById('full-name').value;
        const email = document.getElementById('e-mail').value;
        const message = document.getElementById('message').value;
        const modal = document.querySelector('#modal');

        /** Checks if one of the required fields are empty. */
        if (String(name).length < 1 || String(email).length < 1 || String(message).length < 1) {

            document.querySelector('#modal-message').textContent = 'Please fill up all the required fields.' // Change the paragraph content.

            modal.style.display = 'block'; // Show the modal.
            modal.style.background = '#b33f40'; // Change the background to matte red.
            modal.style.animation = 'modalAnimation 1000ms forwards'; // Set the animation to it.

        }
        /** Here is the code that would execute if the above conditions aren't met. */
        else { 

            document.querySelector('#modal-message').textContent = 'Your message has been sent!' // Change the paragraph content.

            modal.style.display = 'block'; // Show the modal.
            modal.style.background = '#48A14D'; // Set the background of the modal to matte green.
            modal.style.animation = 'modalAnimation 1000ms forwards'; // Set the animation to it.
            
            // Resets the form and hides the modal after 1.5 seconds.
            setTimeout(() => {
                modal.style.display = 'none';
                document.getElementById('full-name').value = '';
                document.getElementById('e-mail').value = '';
                document.getElementById('message').value = '';
            }, 1500);
        }
        return false; // we return false so that the form do not go to another page.
    }
}) ;