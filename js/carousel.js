// ===== CARROSSEL =====
let currentSlide = 0;
let carouselInterval;

function goToSlide(index) {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = dots.length;

    currentSlide = index;

    // Atualizar posição do carrossel
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Atualizar dots
    dots.forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-dot').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// Iniciar carrossel automático quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    startCarousel();

    // Pausar carrossel quando mouse estiver sobre ele
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    }
});
