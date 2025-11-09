document.addEventListener("DOMContentLoaded", () => {
  // ====== MAIN SLIDER (YELLOW LAMBO) ======
  const mainSlides = document.querySelectorAll(".slides img");
  const dots = document.querySelectorAll(".dot");
  const thumbs = document.querySelectorAll(".thumbnail-container .thumb img");
  let currentSlide = 0;

  function showMainSlide(index) {
    if (mainSlides.length === 0) return;
    if (index < 0) index = mainSlides.length - 1;
    if (index >= mainSlides.length) index = 0;
    currentSlide = index;

    mainSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
      slide.style.opacity = i === currentSlide ? 1 : 0;
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
    });

    thumbs.forEach((thumb, i) => {
      thumb.parentElement.classList.toggle("active", i === currentSlide);
    });
  }

  // Function to allow onclick in HTML
  window.goToSlide = function(index) {
    showMainSlide(index);
  };

  // Thumbnails click
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => showMainSlide(i));
  });

  // Auto slide every 6s
  setInterval(() => showMainSlide(currentSlide + 1), 6000);

  // Initialize
  showMainSlide(currentSlide);



  // ====== SECOND SLIDER (BLACK LAMBO) ======
  const slides2 = document.querySelectorAll(".slides2 img");
  const dots1 = document.querySelectorAll(".dot1");
  const thumbs1 = document.querySelectorAll(".thumb1 img");
  let currentIndex2 = 0;

  function showBlackLambo(index) {
    if (slides2.length === 0) return;
    if (index < 0) index = slides2.length - 1;
    if (index >= slides2.length) index = 0;
    currentIndex2 = index;

    slides2.forEach((slide, i) => {
      slide.classList.toggle("active1", i === currentIndex2);
      slide.style.opacity = i === currentIndex2 ? 1 : 0;
    });

    dots1.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex2);
    });

    thumbs1.forEach((thumb, i) => {
      thumb.parentElement.classList.toggle("active", i === currentIndex2);
    });
  }

  // Function for inline HTML
  window.goToSlideBlack = function(index) {
    showBlackLambo(index);
  };

  // Dots + thumbnails click
  dots1.forEach((dot, i) => dot.addEventListener("click", () => showBlackLambo(i)));
  thumbs1.forEach((thumb, i) => thumb.addEventListener("click", () => showBlackLambo(i)));

  // Auto slide every 5s
  setInterval(() => showBlackLambo(currentIndex2 + 1), 5000);

  // Initialize
  showBlackLambo(currentIndex2);
});

document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector('.main-header a'); // select the Carshow.ph link
  link.addEventListener("click", function(e) {
    e.preventDefault(); // stop instant navigation
    const href = this.getAttribute("href"); // get the target

    // add fade-out class
    document.body.classList.add("fade-out");

    // after transition, navigate
    setTimeout(() => {
      window.location.href = href;
    }, 500); // match transition duration
  });
});

window.addEventListener('load', () => {
  const splash = document.getElementById('splashScreen');
  const main = document.getElementById('mainContent');

  // Show splash for 3 seconds
  setTimeout(() => {
    splash.classList.add('fade-out'); // fade out splash

    setTimeout(() => {
      splash.style.display = 'none';  // hide splash
      main.classList.add('visible');   // fade in main content
    }, 1000); // match CSS transition
  }, 3000);
});

// Smooth fade on "View More" click
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('viewMoreBtn');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const splash = document.getElementById('splashScreen');
    const main = document.getElementById('mainContent');

    // fade out current content
    if (main) main.classList.remove('visible');
    if (splash) splash.classList.add('fade-out');

    // wait before navigating
    setTimeout(() => {
      window.location.href = btn.href;
    }, 1000);
  });
});
