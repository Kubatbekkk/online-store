import * as actions from './Actions';

export default function createApiService(api) {
  let timer: null | ReturnType<typeof setTimeout> = null;
  const delay = 1_000;
  return (storeAPI) => (next) => (action) => {
    if (action.type === 'init') {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const products = api.getProducts();
        storeAPI.dispatch(actions.setProducts(products));
        timer = null;
      }, delay);
    } else {
      clearTimeout(timer);
      timer = null;
    }
    return next(action);
  };
}
