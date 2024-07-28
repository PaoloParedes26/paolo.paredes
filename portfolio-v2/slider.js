const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

const projectBoxes = Array.from(document.querySelectorAll('.projects-box')); // Clone boxes

projectBoxes.forEach(box => sliderContainer.appendChild(box.cloneNode(true))); // Add clones

let currentSlide = 0;

function slideTo(slideIndex) {
  sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`; // Adjust based on slide width
  currentSlide = slideIndex;
  // Update button states (disable if on first/last slide) - left as an exercise
}

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    slideTo(currentSlide - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentSlide < projectBoxes.length - 1) {
    slideTo(currentSlide + 1);
  }
});

// Initial slide position (optional)
slideTo(0);

loadShow();

next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}