'use strict'

function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('visible')) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    } 
    else {
        element.classList.remove('hidden');
        element.classList.add('visible');
    }
}
