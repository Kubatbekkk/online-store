import { Product } from 'src/Types/ProductType';

export default function selectValues(value: string, state: Product[]) {
  return state.filter((obj) => obj.title.toLowerCase().includes(value.trim().toLowerCase()));
}
