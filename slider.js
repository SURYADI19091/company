let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to change slide
function changeSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach((slide) => slide.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    
    // Set the current slide and dot to active
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Automatically move to the next slide every 5 seconds
function autoSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0; // Go back to the first slide
    }
    changeSlide(currentSlide);
}

// Add event listener to dots for manual slide selection
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        changeSlide(currentSlide);
    });
});

// Set interval for automatic slide change
setInterval(autoSlide, 5000);







