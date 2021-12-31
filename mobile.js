const hbr = document.querySelector('.hamburger');
const leftSlide = document.querySelector('.leftSlide');
const body = document.body;
const head = document.querySelector('.head');
const form = document.querySelector('.form');
const mobile = document.querySelector('.social-mobile');


hbr.addEventListener('click', (e) => {
    leftSlide.classList.toggle("active")
})


document.addEventListener('click', e => {
    if(e.target ===  body || e.target === container || e.target === head || e.target === form) {
        leftSlide.classList.remove('active');
    }
})

