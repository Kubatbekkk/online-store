import { useState, useEffect } from 'react';
import * as actions from '../Actions';

export default function useStore(store) {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const action = actions.init();
    store.dispatch(action);
    setState(store.getState());
    return store.subscribe(() => setState(store.getState()));
  }, []);
}
