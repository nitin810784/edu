document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial-item");
    let dots = document.querySelectorAll(".slider-dot");
    let currentIndex = 0;
    let timer;

    // Function to show testimonial
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            dots[i].classList.remove("active");
            if (i === index) {
                testimonial.classList.add("active");
                dots[i].classList.add("active");
            }
        });
    }

    // Auto-slide function
    function autoSlide() {
        timer = setInterval(function () {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000); // Change testimonial every 5 seconds
    }

    // Start auto-slide
    autoSlide();

    // Handle dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            clearInterval(timer); // Stop auto-sliding when user interacts
            showTestimonial(index);
            currentIndex = index;
            autoSlide(); // Restart auto-slide after interaction
        });
    });

    // Show first testimonial by default
    showTestimonial(currentIndex);
});
