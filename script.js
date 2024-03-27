// home page image slider
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(showSlide, 7000); // Change slide every 10 seconds
    showSlide(); // Show initial slide
});

// Function to move carousel in about us page
function moveCarousel() {
    const container = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const currentItem = items[0];
    container.style.transition = 'transform 0.9s ease';
    container.style.transform = `translateX(-${currentItem.offsetWidth}px)`;
    setTimeout(() => {
    container.appendChild(currentItem);
    container.style.transition = 'none';
    container.style.transform = 'translateX(0)';
    }, 3000); // Move every 5 seconds
}

  // Start carousel movement
setInterval(moveCarousel, 5000);