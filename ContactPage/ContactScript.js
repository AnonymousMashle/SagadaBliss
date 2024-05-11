const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.login-popup');
const iconClose = document.querySelector('.icon-close')
const header = document.querySelector('header');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});




window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 60)
});

