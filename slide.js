const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.offer-body');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Move the wrapper instead of the container
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for control buttons
nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// Initial setup
showSlide(currentIndex);
