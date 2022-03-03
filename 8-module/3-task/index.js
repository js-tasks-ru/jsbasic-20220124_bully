export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) {return;}

    let foundedProduct = this.cartItems.find(item => item.product.id === product.id);

    if (!foundedProduct) {
      foundedProduct = { product, count: 1 };
      this.cartItems.push(foundedProduct);
    }
    else
    {foundedProduct.count++;}

    this.onProductUpdate(foundedProduct);
  }

  updateProductCount(productId, amount) {
    let foundedProduct = this.cartItems.find(item => item.product.id === productId);
    if (foundedProduct) {
      foundedProduct.count += +amount;
      if (foundedProduct.count === 0)
      {this.cartItems = this.cartItems.filter(item => item.product.id !== productId);}

      this.onProductUpdate(foundedProduct);
    }
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.product.price * item.count, 0);
  }

  onProductUpdate(foundedProduct) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}
