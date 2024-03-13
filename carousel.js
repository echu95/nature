
let slideIndex = 1;
      const slides = document.querySelectorAll(".slide");

      function showSlide() {
        slides.forEach((slide, index) => {
          slide.style.transform = `translateX(${100 * (index - slideIndex)}%)`;
        });
      }

      function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide();
      }

      function prevSlide() {
          slideIndex = (slideIndex - 1 + slides.length) % slides.length;
          showSlide();
      }

      function autoSlide() {
        nextSlide();
        setTimeout(autoSlide, 5000); // Change slide every 3 seconds (adjust as needed)
      }

      autoSlide(); // Start automatic sliding