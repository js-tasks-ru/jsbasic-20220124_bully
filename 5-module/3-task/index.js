function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const carousel = document.querySelector('.carousel');
  const slideWidth = carouselInner.offsetWidth;

  let slideIndex = 0;

  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    slideIndex++;
    carouselInner.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  })

  arrowLeft.addEventListener('click', () => {
    slideIndex--;
    carouselInner.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
  })

  carousel.addEventListener('click', () => {
    slideIndex === 3 ? arrowRight.style.display = 'none' : arrowRight.style.display = '';
    slideIndex === 0 ? arrowLeft.style.display = 'none' : arrowLeft.style.display = '';
  })
}
