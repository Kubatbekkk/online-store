export default function filterByPriceRange(products, min, max) {
  return products.filter((product) => product.stock >= min
          && product.stock <= max);
}
