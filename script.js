// Cinematic Parallax Scrolling Rule Matrix
window.addEventListener('scroll', () => {
    const parallaxBg = document.querySelector('.parallax-bg');
    let scrollPosition = window.pageYOffset;
    // Slargish crawl background downward slowly during page scroll mechanics
    parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
});

// Interactive Package Injection Rule
function selectPackage(packageName) {
    document.getElementById('selectedPackageDisplay').value = packageName;
    
    // Smooth scroll down to calculation interface area block
    document.getElementById('estimator').scrollIntoView({ behavior: 'smooth' });
    calculateEstimate();
}

// User Friendly Interactive Pricing Engine 
function calculateEstimate() {
    const ratePerKm = parseFloat(document.getElementById('carSelect').value);
    const distance = parseFloat(document.getElementById('distanceInput').value);
    const displayElement = document.getElementById('fareDisplay');

    if (isNaN(distance) || distance <= 0) {
        displayElement.innerText = "Check entries";
        return;
    }

    const calculatedTotal = ratePerKm * distance;
    displayElement.innerText = "₹" + calculatedTotal.toLocaleString('en-IN');
}

// Trigger Smart WhatsApp Booking Link Generation
function triggerBookingLink() {
    const vehicleName = document.getElementById('carSelect').options[document.getElementById('carSelect').selectedIndex].text.split(' - ')[0];
    const distance = document.getElementById('distanceInput').value;
    const packageChoice = document.getElementById('selectedPackageDisplay').value;
    
    const dynamicMessage = encodeURIComponent(`Hello Ambigai Tourism Ooty! I want to configure an elite booking:\n\n🚗 Vehicle: ${vehicleName}\n🗺️ Selected Itinerary: ${packageChoice}\n🛣️ Total Route: ${distance} Kilometers.`);
    
    window.open(`https://wa.me/919626172090?text=${dynamicMessage}`, '_blank');
}

// Review Testimonial Window Slider Engine
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.navigation-dot');

function showSpecificSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function jumpToSlide(index) {
    showSpecificSlide(index);
}

// Automatic Testimonial Switch rotation thread
setInterval(() => {
    let nextIndex = (currentSlideIndex + 1) % slides.length;
    showSpecificSlide(nextIndex);
}, 6000);

// Initialize baseline calculations on load execution
window.onload = () => {
    calculateEstimate();
};
