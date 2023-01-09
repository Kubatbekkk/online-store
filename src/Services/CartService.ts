import { addToCart, cleanupCart } from 'src/Actions';

export default function createCartService() {
  return (storeAPI) => (next) => (action) => {
    try {
      return next(action);
    } finally {
      if (action.type === 'setProducts') {
        const cart = JSON.parse(localStorage.getItem('cart') ?? '{}');
        for (const productId of Object.keys(cart)) {
          const cartCount = cart[productId];
          if (cartCount > 0) {
            storeAPI.dispatch(addToCart(parseInt(productId), cart[productId]));
          }
        }
      } else if (action.type === 'addToCart' || action.type === 'removeFromCart') {
        const { cart } = storeAPI.getState();
        localStorage.setItem('cart', JSON.stringify(cart));
      } else if (action.type === 'stop') {
        // storeAPI.dispatch(cleanupCart());
        // const { cart } = storeAPI.getState();
        // localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  };
}
