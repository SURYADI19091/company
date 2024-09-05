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


const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


// Function to toggle the sidebar visibility
function toggleNavbar() {
    var sidebar = document.getElementById('sidebar');
    // Add or remove the 'active' class to show or hide the sidebar
    sidebar.classList.toggle('active');
}

// Function to close the sidebar
function closeSidebar() {
    var sidebar = document.getElementById('sidebar');
    // Remove the 'active' class to hide the sidebar
    sidebar.classList.remove('active');
}

// Optional: Close the sidebar if a click occurs outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('navbarToggle');
    
    // Check if the click was outside of the sidebar and toggle button
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});


// Function to load translations
function loadTranslations(language) {
    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[language] && translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        });
}

