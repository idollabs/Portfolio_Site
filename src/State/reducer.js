import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_ITEM': {
      return {
        ...state,
        itemExpanded: true,
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

const initialState = {
  itemExpanded: false,
};

export const useSiteState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { itemExpanded } = state;

  const togglePortfolioItem = useCallback(() => {
    if (!itemExpanded) {
      dispatch({ type: 'OPEN_ITEM' });
    } else {
      dispatch({ type: 'CLOSE_ITEM' });
    }

    console.log('itemexpanded', itemExpanded);
  }, [dispatch, itemExpanded]);

  return { state, togglePortfolioItem };
};
