import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    let price = this.product.price.toFixed(2);
    let productName = this.product.name;
    let productImage = this.product.image;

    let card = createElement(`
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${productImage}" class="card__image" alt="product">
        <span class="card__price">€${price}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${productName}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `);

    card.addEventListener('click', (event) => {
      let addButton = event.target.closest('button');

      if (addButton) {
        let addProductEvent = new CustomEvent('product-add', {
          detail: this.product.id,
          bubbles: true,
        });

        event.target.closest('.card').dispatchEvent(addProductEvent);
      }
    });

    return card;
  }
}
