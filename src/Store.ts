/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { applyMiddleware, createStore } from 'redux';
import type { Api } from './Api';
import type { Product } from './Types/ProductType';
import createApiService from './ApiService';
import selectValues from './utils/selectValues';
import sortValues from './utils/sortValues';
import sortByCategory from './utils/sortByCategory';
import * as actions from './Actions';
import sortByBrand from './utils/sortByBrand';
import filterByPriceRange from './utils/filterByPriceRange';
import filterByStockRange from './utils/filterByStockRange';
import createCartService from './Services/CartService';

export type StoreType = ReturnType<typeof initProductListStore>;

export default function initProductListStore(options: { api: typeof Api }) {
  const { api } = options;
  return createStore(
    productListReducer,
    applyMiddleware(createLogService(), createApiService(api), createCartService()),
  );
}

function createLogService() {
  // eslint-disable-next-line max-len
  return () => (next: (arg0: { type: string; payload: {}; }) => any) => (action: { type: string, payload: {} }): typeof next => {
    console.log('action: ', action);
    return next(action);
  };
}

type Cart = Record<ProductId, number>;

type ProductId = Product['id'];

type NewState = {
  productsById: Record<ProductId, Product>
  products: ProductId[]
  filteredProducts: ProductId[]
};

const state: NewState = {
  productsById: {
    1: {
      id: 1,
      title: 'Product',
      description: 'fsjkjds',
      price: 12,
    },
  },
  filteredProducts: [1],
};

function getProductbyId(state: NewState, productId: ProductId) {
  return state.products[productId];
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
    priceRange: {
      min: number,
      max: number,
    };
    filteredPriceRange: {
      min: number,
      max: number
    }
    stockRange: {
      min: number,
      max: number,
    };
    filteredStockRange: {
      min: number,
      max: number
    };
    cart: Cart
  };

  type ProductsAction =
   actions.FilterCategoryCheckBoxAction
   | actions.FilterBrandCheckBoxAction
   | actions.FilterByPriceRangeAction
   | actions.FilterByStockRangeAction
   | actions.FindItemFromListAction
   | actions.RemoveFromCartAction
   | actions.SortProductsAction
   | actions.SetProductsAction
   | actions.AddToCartAction
   | { type: 'init' }
   | { type: 'cleanupCart' };

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
  priceRange: {
    min: 0,
    max: 1800,
  },
  filteredPriceRange: {
    min: 0,
    max: 1800,
  },
  stockRange: {
    min: 0,
    max: 150,
  },
  filteredStockRange: {
    min: 0,
    max: 150,
  },
  cart: {
  },
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
        priceRange: {
          min: 0,
          max: 1800,
        },
        filteredPriceRange: {
          min: 0,
          max: 1800,
        },
        stockRange: {
          min: 0,
          max: 150,
        },
        filteredStockRange: {
          min: 0,
          max: 150,
        },
        cart: {
        },
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
        filteredProducts: filterByStockRange(
          filterByPriceRange(sortByCategory(sortByBrand(sortValues(
            selectValues(searchValue, state.products),
            state.sortType,
          ), state.brandList), state.categoryList), state.filteredPriceRange.min, state.filteredPriceRange.max),
          state.filteredStockRange.min,
          state.filteredStockRange.max,
        ),
        searchValue,
      };
    }
    case 'sortProducts':
      return {
        ...state,
        sortType: action.payload.sortType,
        filteredProducts: filterByPriceRange(
          filterByStockRange(sortByCategory(sortByBrand(sortValues(
            selectValues(state.searchValue, state.products),
            action.payload.sortType,
          ), state.brandList), state.categoryList), state.filteredStockRange.min, state.filteredStockRange.max),
          state.filteredPriceRange.min,
          state.filteredPriceRange.max,
        ),
      };
    case 'addToCart': {
      const products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            cartCount: Math.min(product.cartCount + action.payload.cartCount, product.stock),
          };
        }
        return product;
      });
      const product = products.find((product) => product.id === action.payload.productId);
      const cart = product && { ...state.cart, [product.id]: product.cartCount };
      const totalItems = Object.values(cart)
        .reduce((sum, product) => sum + product, 0);
      const totalAmount = Object.entries(cart)
        .reduce((acc, [productId, cartCount]) => {
          const prod = products
            .find((product) => product.id === +productId)!;
          return acc + (prod.price * cartCount);
        }, 0);
      return {
        ...state,
        totalItems,
        totalAmount,
        products,
        filteredProducts: filterByStockRange(
          filterByPriceRange(sortByCategory(sortByBrand(sortValues(
            selectValues(state.searchValue, products),
            state.sortType,
          ), state.brandList), state.categoryList), state.filteredPriceRange.min, state.filteredPriceRange.max),
          state.filteredStockRange.min,
          state.filteredStockRange.max,
        ),
        cart,
      };
    }
    case 'removeFromCart': {
      const products = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            cartCount: Math.max(product.cartCount - action.payload.cartCount, 0),
          };
        }
        return product;
      });
      const product = products.find((product) => product.id === action.payload.productId)!;
      const cart = { ...state.cart, [product.id]: product.cartCount };
      const totalItems = Object.values(cart)
        .reduce((sum, product) => sum + product, 0);
      const totalAmount = Object.entries(cart)
        .reduce((acc, [productId, cartCount]) => {
          const prod = products
            .find((product) => product.id === +productId)!;
          return acc + (prod.price * cartCount);
        }, 0);
      return {
        ...state,
        products,
        totalItems,
        totalAmount,
        filteredProducts: filterByStockRange(
          filterByPriceRange(sortByCategory(sortByBrand(sortValues(
            selectValues(state.searchValue, products),
            state.sortType,
          ), state.brandList), state.categoryList), state.filteredPriceRange.min, state.filteredPriceRange.max),
          state.filteredStockRange.min,
          state.filteredStockRange.max,
        ),
        cart,
      };
    }
    case 'cleanupCart': {
      const newCart = {};
      const { cart } = state;
      for (const productId of Object.keys(cart)) {
        const cartCount = cart[productId];
        if (cartCount > 0) {
          newCart[productId] = cartCount;
        }
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case 'filterCategoryCheckBox': {
      return {
        ...state,
        filteredProducts:
          filterByPriceRange(
            filterByStockRange(sortByCategory(sortByBrand(
              sortValues(
                selectValues(state.searchValue, state.products),
                state.sortType,
              ),
              state.brandList,
            ), action.payload.categoryList), state.filteredStockRange.min, state.filteredStockRange.max),
            state.filteredPriceRange.min,
            state.filteredPriceRange.max,
          ),
        categoryList: action.payload.categoryList,
      };
    }
    case 'filterBrandCheckBox': {
      return {
        ...state,
        filteredProducts:
          filterByPriceRange(
            filterByStockRange(sortByCategory(sortByBrand(sortValues(
              selectValues(state.searchValue, state.products),
              state.sortType,
            ), action.payload.brandList), state.categoryList), state.filteredStockRange.min, state.filteredStockRange.max),
            state.filteredPriceRange.min,
            state.filteredPriceRange.max,
          ),
        brandList: action.payload.brandList,
      };
    }
    case 'filterByPriceRange': {
      return {
        ...state,
        filteredProducts:
          filterByPriceRange(filterByStockRange(sortByCategory(sortByBrand(sortValues(
            selectValues(state.searchValue, state.products),
            state.sortType,
          ), state.brandList), state.categoryList), state.filteredStockRange.min, state.filteredStockRange.max), action.payload.min, action.payload.max),
        filteredPriceRange: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    }
    case 'filterByStockRange': {
      return {
        ...state,
        filteredProducts: filterByPriceRange(filterByStockRange(
          sortByCategory(sortByBrand(sortValues(
            selectValues(state.searchValue, state.products),
            state.sortType,
          ), state.brandList), state.categoryList),
          action.payload.min,
          action.payload.max,
        ), state.priceRange.min, state.priceRange.max),
        filteredStockRange: {
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    }

    default: {
      return state;
    }
  }
}
