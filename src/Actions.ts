import type { Product } from './Types/ProductType';

type SetProductsAction = {
  type: 'setProducts',
  payload: {
    products: Product[]
  }
};

export function init(): { type: 'init' } {
  return {
    type: 'init',
  };
}

export function setProducts(products: Product[]): SetProductsAction {
  return {
    type: 'setProducts',
    payload: {
      products,
    },
  };
}
