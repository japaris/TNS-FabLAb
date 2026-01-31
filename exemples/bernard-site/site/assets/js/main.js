// main.js - This file can be used for any custom JavaScript functionality.

document.addEventListener('DOMContentLoaded', (event) => {
    // Example: Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
