import type { Product } from './Types/ProductType';

export type SetProductsAction = {
  type: 'setProducts',
  payload: {
    products: Product[]
  }
};

export type FindItemFromListAction = {
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

export type AddToCartAction = {
  type: 'addToCart';
  payload: {
    productId: number;
  };
};
export type RemoveFromCartAction = {
  type: 'removeFromCart';
  payload: {
    productId: number;
  };
};
export type FilterCategoryCheckBoxAction = {
  type: 'filterCategoryCheckBox';
  payload: {
    categoryList: string[] | []
  }
};
export type FilterBrandCheckBoxAction = {
  type: 'filterBrandCheckBox';
  payload: {
    brandList: string[] | []
  }
};
export type FilterByPriceRangeAction = {
  type: 'filterByPriceRange';
  payload: {
    min: number,
    max: number
  }
};
export type FilterByStockRangeAction = {
  type: 'filterByStockRange';
  payload: {
    min: number,
    max: number
  }
};

export function filterByStockRange(min: number, max: number): FilterByStockRangeAction {
  return {
    type: 'filterByStockRange',
    payload: {
      min,
      max,
    },
  };
}

export function filterByPriceRange(min: number, max: number): FilterByPriceRangeAction {
  return {
    type: 'filterByPriceRange',
    payload: {
      min,
      max,
    },
  };
}
export function filterCategoryCheckBox(categoryList: string[] | []): FilterCategoryCheckBoxAction {
  return {
    type: 'filterCategoryCheckBox',
    payload: {
      categoryList,
    },
  };
}
export function filterBrandCheckBox(brandList: string[] | []): FilterBrandCheckBoxAction {
  return {
    type: 'filterBrandCheckBox',
    payload: {
      brandList,
    },
  };
}

export function removeFromCart(productId: number): RemoveFromCartAction {
  return {
    type: 'removeFromCart',
    payload: {
      productId,
    },
  };
}

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
