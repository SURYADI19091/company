document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-product');
    const closeBtn = modal.querySelector('.close-btn');

    function openModal(product) {
        // Update modal content here
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);

    document.querySelectorAll('.detail-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.getAttribute('data-product');
            // Dummy product details, replace with actual data fetching logic
            const productDetails = {
                'clothing1': {
                    imgSrc: 'resource/img/clothing1.jpg',
                    title: 'Casual Shirt',
                    price: '$29.99',
                    material: 'Cotton',
                    sizes: 'S, M, L, XL',
                    description: 'A comfortable and stylish casual shirt.'
                }
            };
            openModal(productDetails[productId] || {});
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
