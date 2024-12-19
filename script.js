// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Function to redirect to WhatsApp with a product-specific message
function redirectToWhatsApp(productName) {
    const whatsappBaseUrl = "https://wa.me/923235643963/?text=";
    const message = `I am interested in buying the ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappBaseUrl}${encodedMessage}`, '_blank');
}

// Attach event listeners to all Buy Now buttons
const buyNowButtons = document.querySelectorAll('.buy-now');
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product-name');
        redirectToWhatsApp(productName);
    });
});


// Start the slideshow
setInterval(nextSlide, 3000);

// Adjust slideshow dimensions for large images
const slideshowContainer = document.querySelector('.slideshow');
slideshowContainer.style.width = '100%';
slideshowContainer.style.height = '100vh'; // Use full viewport height for the slideshow

// Ensure all images in the slideshow cover the entire slideshow container
slides.forEach(slide => {
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.style.objectFit = 'cover';
    slide.style.position = 'absolute';
    slide.style.top = '0';
    slide.style.left = '0';
    slide.style.transition = 'opacity 1s ease-in-out';
});
// Add animation for product cards
const productCards = document.querySelectorAll('.product');
productCards.forEach(card => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
    });
});
