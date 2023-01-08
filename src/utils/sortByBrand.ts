import type { Product } from 'src/Types/ProductType';

export default function sortByBrand(products: Product[], payload: string[]) {
  if (payload.length > 0) {
    return products.filter((product) => payload.includes(product.brand));
  }
  return products;
}
