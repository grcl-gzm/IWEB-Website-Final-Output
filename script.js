// Scroll to top when clicking the "Personal Projects" title
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("personal-projects");

  if (title) {
    title.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});

// Swiping gallery feature
document.addEventListener('DOMContentLoaded', function() {
  function setupSwipeGallery(slideSelector, prevBtnId, nextBtnId) {
    let currentSlide = 0;
    const slides = document.querySelectorAll(slideSelector);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    if (prevBtn && nextBtn && slides.length) {
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
      showSlide(currentSlide);
    }
  }

  setupSwipeGallery('.env-slide', 'env-prev', 'env-next');
  setupSwipeGallery('.inv-slide', 'inv-prev', 'inv-next');
  setupSwipeGallery('.logo-slide', 'logo-prev', 'logo-next');
  setupSwipeGallery('.char-slide', 'char-prev', 'char-next');
});
