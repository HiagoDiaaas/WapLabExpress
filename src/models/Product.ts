let products: Product[] = [];

class Product {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  save() {
    products.push(this);
  }

  update() {
    const index = products.findIndex((product) => product.id === this.id);
    if (index !== -1) {
      products[index] = this;
    } else {
      throw new Error(`Product with id ${this.id} not found.`);
    }
  }

  static fetchAll() {
    return products;
  }

  static findById(productId: number) {
    return products.find((product) => product.id === productId);
  }

  static deleteById(productId: number) {
    const index = products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      products.splice(index, 1);
    } else {
      throw new Error(`Product with id ${productId} not found.`);
    }
  }
}

export default Product;
