import { useState, useEffect } from 'react';
import * as actions from '../Actions';
import type { ProductListState } from '../Store';

export default function useStore(store, dependencyArr = []) {
  const [state, setState] = useState<ProductListState>(store.getState());

  useEffect(() => {
    const action = actions.init();
    store.dispatch(action);
    setState(store.getState());
    return store.subscribe(() => setState(store.getState()));
  }, dependencyArr);
  return [state, store.dispatch];
}
