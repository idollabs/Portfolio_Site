import { useReducer, useCallback, useContext, createContext } from 'react';

const initialState = {
  itemExpanded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_ITEM': {
      return {
        ...state,
        itemExpanded: action.id,
      };
    }
    case 'CLOSE_ITEM': {
      return {
        ...state,
        itemExpanded: false,
      };
    }
    default:
      return state;
  }
};

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { itemExpanded } = state;

  const togglePortfolioItem = useCallback(
    (id) => {
      if (!itemExpanded) {
        dispatch({ type: 'OPEN_ITEM', id });
      } else {
        dispatch({ type: 'CLOSE_ITEM' });
      }

      console.log('itemexpanded', itemExpanded);
    },
    [dispatch, itemExpanded]
  );

  const value = { state, togglePortfolioItem };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useSiteState = () => {
  const { state, togglePortfolioItem } = useContext(Context);

  return { state, togglePortfolioItem };
};
