import { Product } from 'src/Types/ProductType';

export default function sortValues(target: Product[], payload: string) {
  const order = payload === 'asc' ? 1 : -1;
  return target.sort((a, b) => order * (a.price - b.price));
}
