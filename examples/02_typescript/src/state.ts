import { createGlobalState } from 'react-hooks-global-state-next';

export const { useGlobalState } = createGlobalState({
  count: 0,
  person: {
    age: 0,
    firstName: '',
    lastName: '',
  },
});
