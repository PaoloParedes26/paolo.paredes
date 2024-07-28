const hamIcon = document.querySelector('.hamburger-icon');

const hamMenu = document.querySelector('.hamburger-menu');

hamIcon.addEventListener('click', () => {
    hamIcon.classList.toggle('active');
    hamMenu.classList.toggle('active');
})