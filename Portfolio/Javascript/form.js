"use strict";

document.addEventListener('DOMContentLoaded', () => {

    let name = document.getElementById('full-name').value;
    let email = document.getElementById('e-mail').value;

    document.getElementById('form').onsubmit = () => {

        if (name === '' || email === '') 
            alert('Empty')
        return false;
    }
}) ;