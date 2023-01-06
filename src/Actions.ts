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

export type SortUnionType = 'lowest' | 'highest' | 'nameA' | 'nameZ';

export type SortProductsAction = {
  type: 'sortProducts';
  payload: {
    sortType: SortUnionType;
  };
};

type AddToCartAction = {
  type: 'addToCart';
  payload: {
    productId: number;
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
export function sortProducts(sortType: SortUnionType): SortProductsAction {
  return {
    type: 'sortProducts',
    payload: {
      sortType,
    },
  };
}

export function addToCart(productId: number): AddToCartAction {
  return {
    type: 'addToCart',
    payload: {
      productId,
    },
  };
}
