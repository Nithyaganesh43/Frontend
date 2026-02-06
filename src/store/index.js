import { createContext, useContext, useReducer, useMemo } from 'react';

/**
 * Example global store using React Context + useReducer
 * For complex state, consider using Zustand or Redux Toolkit
 */

const StoreContext = createContext(null);
const DispatchContext = createContext(null);

const initialState = {
  user: null,
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedState = useMemo(() => state, [state]);

  return (
    <StoreContext.Provider value={memoizedState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}

export function useDispatch() {
  const context = useContext(DispatchContext);
  if (context === null) {
    throw new Error('useDispatch must be used within a StoreProvider');
  }
  return context;
}
