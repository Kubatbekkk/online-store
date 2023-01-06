/* eslint-disable @typescript-eslint/no-use-before-define */
import { applyMiddleware, createStore } from 'redux';
import type { Api } from './Api';
import type { Product } from './Types/ProductType';
import createApiService from './ApiService';
import selectValues from './utils/selectValues';
import sortValues from './utils/sortValues';

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

type ProductListState =
  {
    products: Product[];
    filteredProducts: Product[]
    totalItems: number;
    searchValue: string;
    sortType: 'lowest' | 'highest' | 'nameA' | 'nameZ'
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
    type: 'sortProducts';
    payload: {
      sortType: 'lowest' | 'highest' | 'nameA' | 'nameZ';
    };
  };

// eslint-disable-next-line @typescript-eslint/default-param-last
function productListReducer(state: ProductListState = {
  products: [],
  filteredProducts: [],
  totalItems: 0,
  searchValue: '',
  sortType: 'lowest',
}, action: ProductsAction): ProductListState {
  switch (action.type) {
    case 'init':
      return {
        products: [],
        filteredProducts: [],
        totalItems: 0,
        searchValue: '',
        sortType: 'lowest',
      };
    case 'setProducts': {
      return {
        ...state,
        products: [...action.payload.products],
        filteredProducts:
          sortValues(selectValues(state.searchValue, [...action.payload.products]), state.sortType),
      };
    }
    case 'findItemFromList': {
      const { searchValue } = action.payload;
      return {
        ...state,
        filteredProducts: sortValues(
          selectValues(searchValue, state.products),
          state.sortType,
        ),
        searchValue,
      };
    }
    case 'sortProducts':
      return {
        ...state,
        sortType: action.payload.sortType,
        filteredProducts: sortValues(
          selectValues(state.searchValue, state.products),
          action.payload.sortType,
        ),
      };
    default: {
      return state;
    }
  }
}
