import { applyMiddleware, createStore } from 'redux';
import type { Api } from './Api';
import type { Product } from './Types/ProductType';
import createApiService from './ApiService';

export default function initProductListStore(options: { api: typeof Api }) {
  const { api } = options;
  return createStore(productListReducer, applyMiddleware(createLogService(), createApiService(api)));
}

function createLogService() {
  return () => (next: (arg0: { type: string; payload: {}; }) => any) => (action: { type: string, payload: {} }): typeof next => {
    console.log('action: ', action);
    return next(action);
  };
}
type ProductListState = {
  products: Product[];
  totalItems: number
};
type ProductsAction =
    {
      type: 'setProducts',
      payload: {
        products: Product[],
      };
    } | { type: 'init' };

function productListReducer(state: ProductListState = {
  products: [],
  totalItems: 0,
}, action: ProductsAction): ProductListState {
  switch (action.type) {
    case 'init':
      return {
        ...state,
      };
    case 'setProducts':
      return {
        ...state,
        products: [...action.payload.products],
      };
    default: {
      return state;
    }
  }
}
