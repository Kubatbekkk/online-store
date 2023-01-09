import * as actions from './Actions';

export default function createApiService(api) {
  let timer: null | ReturnType<typeof setTimeout> = null;
  const delay = 500;
  let id = 0;
  return (storeAPI) => (next) => (action) => {
    if (action.type === 'init') {
      if (timer) {
        clearTimeout(timer);
      }
      id++;
      const tid = id;
      timer = setTimeout(() => {
        if (tid !== id) {
          return;
        }
        const products = api.getProducts();
        storeAPI.dispatch(actions.setProducts(products));
        timer = null;
      }, delay);
    } else if (action.type === 'stop') {
      clearTimeout(timer);
      timer = null;
    }
    return next(action);
  };
}
