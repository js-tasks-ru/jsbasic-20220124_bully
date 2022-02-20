import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render() {

    let carousel = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left" style="display: none;">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon" >
    </div>
    <div class="carousel__inner">
    `);

    let inner = carousel.querySelector('.carousel__inner');

    for (let slide of this.slides) {
      inner.insertAdjacentHTML('beforeend', `
        <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `);
    }

    carousel.addEventListener('click', this.addProduct);

    carousel.position = 0;

    return carousel;
  }

  addProduct(event) {
    // Кнопка "+"
    let addButton = event.target.closest('button');

    if (addButton) {
      let slide = event.target.closest('.carousel__slide').dataset;

      let addProductEvent = new CustomEvent('product-add', {
        detail: slide.id,
        bubbles: true,
      });
      event.target.closest('.carousel').dispatchEvent(addProductEvent);
    }

    // Карусель
    let rightArrow = event.target.closest('.carousel__arrow_right');
    let leftArrow = event.target.closest('.carousel__arrow_left');
    let carouselInner = event.currentTarget.querySelector('.carousel__inner');
    let slideWidth = carouselInner.offsetWidth;
    let totalSlides = event.currentTarget.querySelectorAll('.carousel__slide').length - 1;

    if (rightArrow) {
      event.currentTarget.position++;
      checkPosition();
      carouselInner.style.transform = `translateX(-${slideWidth * event.currentTarget.position}px)`;
    }

    if (leftArrow) {
      event.currentTarget.position--;
      checkPosition();
      carouselInner.style.transform = `translateX(-${slideWidth * event.currentTarget.position}px)`;
    }

    function checkPosition() {
      let innerRightArrow = document.querySelector('.carousel__arrow_right');
      let innerLeftArrow = document.querySelector('.carousel__arrow_left');

      // Должно быть 3
      event.currentTarget.position === totalSlides ? innerRightArrow.style.display = 'none' : innerRightArrow.style.display = '';
      event.currentTarget.position === 0 ? innerLeftArrow.style.display = 'none' : innerLeftArrow.style.display = '';
    }
  }
}



