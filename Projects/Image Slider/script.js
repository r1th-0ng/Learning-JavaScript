// Selecting elements
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let slideInterval;

// Function to show a specific slide
function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0; // Restart from the first slide
    } else if (index < 0) {
        currentIndex = slides.length - 1; // Go to last slide
    } else {
        currentIndex = index;
    }

    // Movve slides
    document.querySelector(".slides").computedStyleMap.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");   
}

// Function to go to next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to previous slide
function prevSlide() {
    showSlide(currentIndex -1);
}

// Function to go to specific slide
function currentSlide(index) {
    showSlide(index);
}

// Auto-slide function
function startAutoSldie() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 30 seconds
}

// Stop auto-slide on user interaction
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event Listeners
document.querySelector(".prev").addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
});

document.querySelector(".next").addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        stopAutoSlide();
        currentIndex(index);
    });
}); 

// Start the slide show automatically
startAutoSldie();
showSlide(currentIndex);
