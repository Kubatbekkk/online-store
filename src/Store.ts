/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { applyMiddleware, createStore } from 'redux';
import type { Api } from './Api';
import type { Product } from './Types/ProductType';
import createApiService from './ApiService';
import selectValues from './utils/selectValues';
import sortValues from './utils/sortValues';
import { SortUnionType } from './Actions';
import sortByCategory from './utils/sortByCategory';
import * as actions from './Actions';
import sortByBrand from './utils/sortByBrand';

export type StoreType = ReturnType<typeof initProductListStore>;

export default function initProductListStore(options: { api: typeof Api }) {
  const { api } = options;
  return createStore(
    productListReducer,
    applyMiddleware(createLogService(), createApiService(api)),
  );
}

function createLogService() {
  // eslint-disable-next-line max-len
  return () => (next: (arg0: { type: string; payload: {}; }) => any) => (action: { type: string, payload: {} }): typeof next => {
    console.log('action: ', action);
    return next(action);
  };
}

export type ProductListState =
  {
    products: Product[];
    filteredProducts: Product[]
    totalItems: number;
    totalAmount: number;
    searchValue: string;
    sortType: 'lowest' | 'highest' | 'nameA' | 'nameZ';
    categoryList: string[] | [];
    brandList: string[] | [];
  };

  type ProductsAction =
  {
    type: 'setProducts',
    payload: {
      products: Product[],
    };
  } |
  { type: 'findItemFromList';
    payload: {
      searchValue: string
    }
  } | { type: 'init' }
  | {
    type: 'addToCart',
    payload: {
      productId: number
    }
  }
  | {
    type: 'removeFromCart',
    payload: {
      productId: number
    }
  }
  | {
    type: 'sortProducts';
    payload: {
      sortType: SortUnionType;
    }

  }
  | actions.FilterCategoryCheckBoxAction | actions.FilterBrandCheckBoxAction;
// const getLocalStorage = () => {
//   const totalItems = localStorage.getItem('totalItems');
//   if (totalItems) {
//     return JSON.parse(localStorage.getItem('totalItems'));
//   }
//   return 0;
// };

// eslint-disable-next-line @typescript-eslint/default-param-last
function productListReducer(state: ProductListState = {
  products: [],
  filteredProducts: [],
  totalItems: 0,
  totalAmount: 0,
  searchValue: '',
  sortType: 'lowest',
  categoryList: [],
  brandList: [],
}, action: ProductsAction): ProductListState {
  switch (action.type) {
    case 'init':
      return {
        products: [],
        filteredProducts: [],
        totalItems: 0,
        totalAmount: 0,
        searchValue: '',
        sortType: 'lowest',
        categoryList: [],
        brandList: [],
      };
    case 'setProducts': {
      return {
        ...state,
        products: [...action.payload.products],
        filteredProducts:
          sortValues(selectValues(state.searchValue, [...action.payload.products]), state.sortType),
        totalItems: 0,
      };
    }
    case 'findItemFromList': {
      const { searchValue } = action.payload;

      return {
        ...state,
        filteredProducts: sortByCategory(sortByBrand(sortValues(
          selectValues(searchValue, state.products),
          state.sortType,
        ), state.brandList), state.categoryList),
        searchValue,
      };
    }
    case 'sortProducts':
      return {
        ...state,
        sortType: action.payload.sortType,
        filteredProducts: sortByCategory(sortByBrand(sortValues(
          selectValues(state.searchValue, state.products),
          action.payload.sortType,
        ), state.brandList), state.categoryList),
      };
    case 'addToCart': {
      const products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            cartCount: Math.min(product.cartCount + 1, 1),
          };
        }
        return product;
      });

      const totalItems = products.reduce((sum, product) => sum + product.cartCount, 0);
      const totalAmount = products.reduce((sum, product) => sum + product.price * product.cartCount, 0);
      return {
        ...state,
        products,
        totalItems,
        totalAmount,
        filteredProducts: sortByCategory(sortByBrand(sortValues(
          selectValues(state.searchValue, products),
          state.sortType,
        ), state.brandList), state.categoryList),
      };
    }
    case 'removeFromCart': {
      const products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            cartCount: Math.min(product.cartCount - 1, 0),
          };
        }
        return product;
      });
      const totalItems = products.reduce((sum, product) => sum + product.cartCount, 0);
      const totalAmount = products.reduce((sum, product) => sum + product.price * product.cartCount, 0);
      return {
        ...state,
        products,
        totalItems,
        totalAmount,
        filteredProducts: sortByCategory(sortByBrand(sortValues(
          selectValues(state.searchValue, products),
          state.sortType,
        ), state.brandList), state.categoryList),
      };
    }
    case 'filterCategoryCheckBox': {
      return {
        ...state,
        filteredProducts: sortByCategory(sortByBrand(
          sortValues(
            selectValues(state.searchValue, state.products),
            state.sortType,
          ),
          state.brandList,
        ), action.payload.categoryList),
        categoryList: action.payload.categoryList,
      };
    }
    case 'filterBrandCheckBox': {
      return {
        ...state,
        filteredProducts: sortByCategory(sortByBrand(sortValues(
          selectValues(state.searchValue, state.products),
          state.sortType,
        ), action.payload.brandList), state.categoryList),
        brandList: action.payload.brandList,
      };
    }
    default: {
      return state;
    }
  }
}
