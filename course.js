document.addEventListener('DOMContentLoaded', () => {
    const sliderInner = document.querySelector('.courses-slider-inner');
    const items = document.querySelectorAll('.courses-slider-inner .course-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        const offset = -currentIndex * 100;
        sliderInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextItem, 3000); // Change slide every 3 seconds
});
