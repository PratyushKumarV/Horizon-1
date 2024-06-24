document.addEventListener("DOMContentLoaded", function () {
    const carouselPrev = document.querySelector("[data-carousel-prev]");
    const carouselNext = document.querySelector("[data-carousel-next]");
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    let currentIndex = 0;

    // Function to show current slide
    const showSlide = (index) => {
        carouselItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    };

    // Event listener for previous button
    carouselPrev.addEventListener("click", () => {
        currentIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    // Event listener for next button
    carouselNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    });
    showSlide(currentIndex);
});
