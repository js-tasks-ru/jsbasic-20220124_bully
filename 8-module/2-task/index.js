import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.render();
  }

  render() {
    this.elem = createElement(`
    <div class="products-grid">
      <div class="products-grid__inner">
      </div>
    </div>`);

    let gridInner = this.elem.querySelector('.products-grid__inner');

    for (let product of this.products) {
      let card = new ProductCard(product);
      card.elem.dataset.category = product.category;
      card.elem.dataset.maxSpiciness = product.spiciness;

      if (product.nuts) {
        card.elem.dataset.noNuts = product.nuts;
      }

      if (product.vegeterian) {
        card.elem.dataset.vegeterianOnly = product.vegeterian;
      }

      gridInner.insertAdjacentHTML('beforeend', card.elem.outerHTML);
    }


    return this.elem;
  }

  updateFilter(filters) {
    this.filters = Object.assign(this.filters, filters);

    let productsGridInner = this.elem.querySelector('.products-grid__inner');
    productsGridInner.innerHTML = '';

    for (let product of this.products) {
      if (this.filters.noNuts === true && product.nuts === true) {
        continue;
      }
      if (this.filters.vegeterianOnly === true && product.vegeterian !== true) {
        continue;
      }
      if (this.filters.maxSpiciness !== undefined && this.filters.maxSpiciness < product.spiciness) {
        continue;
      }
      if (this.filters.category !== undefined && this.filters.category != product.category) {
        continue;
      }
      let productCard = new ProductCard(product);
      productsGridInner.append(productCard.elem);
    }

  }
}
