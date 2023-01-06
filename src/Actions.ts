import type { Product } from './Types/ProductType';

type SetProductsAction = {
  type: 'setProducts',
  payload: {
    products: Product[]
  }
};

type FindItemFromListAction = {
  type: 'findItemFromList',
  payload: {
    searchValue: string
  }
};

type SortProductsAction = {
  type: 'sortProducts';
  payload: {
    sortType: 'lowest' | 'highest' | 'nameA' | 'nameZ';
  };
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

export function findItemFromList(searchValue: string): FindItemFromListAction {
  return {
    type: 'findItemFromList',
    payload: {
      searchValue,
    },
  };
}

export function sortProducts(sortType: 'lowest' | 'highest' | 'nameA' | 'nameZ'): SortProductsAction {
  return {
    type: 'sortProducts',
    payload: {
      sortType,
    },
  };
}
