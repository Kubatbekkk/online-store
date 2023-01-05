import * as actions from './Actions';
import { Product } from './Types/ProductType';

// export function createApiService(api) {
//   let timer = null;
//   const delay = 5000;
//   return (storeAPI) => (next) => (action) => {
//     if (action.type === 'init') {
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(() => {
//         const products = api.getProducts();
//         storeAPI.dispatch(actions.setProducts(products));
//         timer = null;
//       }, delay);
//     } else if (action.type === 'reset' && timer) {
//       clearTimeout(timer);
//       timer = null;
//     }
//     return next(action);
//   };
// }
export default function createApiService(api) {
  return (storeAPI: { dispatch: (arg0: { type: 'setProducts'; payload: { products: Product[]; }; }) => void; }) => (next: (arg0: any) => any) => (action: { type: string; }) => {
    if (action.type === 'init') {
      const products = api.getProducts();
      storeAPI.dispatch(actions.setProducts(products));
    }
    return next(action);
  };
}
