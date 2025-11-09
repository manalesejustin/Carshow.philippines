window.addEventListener('load', () => {
  const splash = document.getElementById('splashScreen');
  const main = document.querySelector('.video-header');

  setTimeout(() => {
    splash.style.display = 'none'; // hide splash
    main.classList.add('visible'); // fade-in video
  }, 3500); 
});
