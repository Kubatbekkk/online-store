import type { Product } from 'src/Types/ProductType';

const countInCartProduct = (products: Product[]) => products.reduce((acc, product) => {
  if (product.cartCount > 0) {
    acc[product.id] = product.cartCount;
  }
  return acc;
}, {} as Record<Product['id'], number>);

export default countInCartProduct;
