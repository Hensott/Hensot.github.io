let currentSlide = 0;
const slides = document.querySelectorAll('.banner .slide');

function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;
    const offset = -currentSlide * 100; // Смещение в процентах
    document.querySelector('.banner .slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
