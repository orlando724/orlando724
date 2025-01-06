let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel img');
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel img');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 4000); /* Auto-slide every 4 seconds */
});
