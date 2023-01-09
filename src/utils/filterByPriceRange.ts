export default function filterByPriceRange(products, min, max) {
  return products.filter((product) => product.price >= min
        && product.price <= max);
}
