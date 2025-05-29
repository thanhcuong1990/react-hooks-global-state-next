import { createStore } from 'react-hooks-global-state-next';

import { initialState, reducer } from './common';

export const { dispatch, useStoreState } = createStore(reducer, initialState);
