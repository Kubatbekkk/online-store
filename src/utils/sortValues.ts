import { Product } from 'src/Types/ProductType';

export default function sortValues(target: Product[], payload: string) {
  const order = payload === 'lowest' ? 1 : payload === 'highest' && -1;
  if (order === 1 || order === -1) {
    return target.sort((a, b) => order * (a.price - b.price));
  } if (payload === 'nameA') {
    return target.sort((a, b) => a.title.localeCompare(b.title));
  }
  return target.sort((a, b) => b.title.localeCompare(a.title));
}
