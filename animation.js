// Fade-in animation for header
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Add the 'visible' class to trigger the fade-in animation
    setTimeout(() => {
        header.classList.add('visible');
    }, 100); // Delay to ensure the animation is visible
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust the scroll threshold as needed
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});