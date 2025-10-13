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

// ---------------------------------------
// Page Transition
// Fade in the page on load
  setTimeout(function() {
    document.body.classList.add('page-fade-in');
  }, 10);

  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');

    if (href && href === 'MainPage.html#about-artist') {
            e.preventDefault();
            document.body.classList.remove('page-fade-in');
            setTimeout(function() {
              window.location.replace('MainPage.html#about-artist');
            }, 500);
    } else if (href && !href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.remove('page-fade-in');
        setTimeout(function() {
          window.location.href = href;
        }, 500);
      }
    });
  });

// ---------------------------------------
// Page Transition

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.body.classList.add('page-fade-in');
  }, 10);

  document.querySelectorAll('nav a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');

      if (href && href === 'MainPage.html#about-artist') {
        e.preventDefault();
        document.body.classList.remove('page-fade-in');
        setTimeout(function() {
          window.location.replace('MainPage.html#about-artist');
        }, 500);
      
      } else if (href && !href.startsWith('#')) {
        e.preventDefault();
        document.body.classList.remove('page-fade-in');
        setTimeout(function() {
          window.location.href = href;
        }, 500);
      }
    });
  });

// ---------------------------------------
// Swiping gallery feature
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
  setupSwipeGallery('.vid-slide', 'vid-prev', 'vid-next');
});

// ---------------------------------------
// Hamburger Menu for Gallery Page
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const galleryNav = document.getElementById('galleryNav');

  if (hamburger && galleryNav) {
    const navLinks = galleryNav.querySelectorAll('a');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', () => {
      galleryNav.classList.toggle('active');
    });

    // Close menu when any category link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        galleryNav.classList.remove('active');
      });
    });
  }
});
