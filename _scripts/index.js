import '../_styles/index.sass';

let currentIndex = 0;
const slides = Array.from(document.querySelectorAll('.marquee .slide'));

slides[0].setAttribute('data-active', true);

setInterval(() => {
  const previousIndex = currentIndex;
  currentIndex++;

  if (currentIndex === slides.length) {
    currentIndex = 0;
  }

  slides[previousIndex].setAttribute('data-active', false);

  setTimeout(() => {
    slides[currentIndex].setAttribute('data-active', true);
  }, 1000);
}, 5000);
