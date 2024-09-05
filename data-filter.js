document.addEventListener('DOMContentLoaded', () => {
    // Select all filter buttons and gallery items
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to handle the filtering
    function filterItems(filter) {
        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            // Get the filter value from the clicked button
            const filter = button.getAttribute('data-filter');
            // Filter the gallery items based on the selected filter
            filterItems(filter);
        });
    });

    // Initial filter
    filterItems('all');
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-product');
    const closeModal = document.querySelector('.close-btn');

    function closeModalFunction() {
        modal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeModalFunction);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModalFunction();
        }
    });
});

