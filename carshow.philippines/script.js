window.addEventListener('load', () => {
  const splash = document.getElementById('splashScreen');
  const main = document.getElementById('mainContent');

  // Keep splash visible for 3 seconds
  setTimeout(() => {
    splash.classList.add('fade-out');

    // After fade-out animation, hide splash & fade in main content
    setTimeout(() => {
      splash.style.display = 'none';
      main.classList.add('visible'); // triggers fade-in
    }, 1000); // match splash fade-out duration
  }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('viewMoreBtn');
  const splash = document.getElementById('splashScreen');
  const main = document.getElementById('mainContent') || document.querySelector('.video-header');

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // fade out splash/overlay
      if (splash) splash.classList.add('fade-out');
      if (main) main.classList.remove('visible'); // fade out main content

      // navigate after fade
      setTimeout(() => {
        window.location.href = btn.href;
      }, 1000); // same duration as fade-out
    });
  }
});
