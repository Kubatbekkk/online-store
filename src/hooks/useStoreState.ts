import { useState, useEffect } from 'react';
import * as actions from '../Actions';
import type { ProductListState } from '../Store';
import { useStore } from './useStore';

export default function useStoreState() {
  const store = useStore();
  const [state, setState] = useState<ProductListState>(store.getState());

  useEffect(() => store.subscribe(() => setState(store.getState())), [store]);
  return [state, store.dispatch];
}
