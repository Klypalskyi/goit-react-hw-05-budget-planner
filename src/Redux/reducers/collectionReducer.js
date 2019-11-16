import { collectionActionTypes } from '../actions/collectionActions';

const collectionReducer = (state = [], { type, payload }) => {
  switch (type) {
    case collectionActionTypes.SAVE_ITEM:
      return [...state, payload];
    case collectionActionTypes.DELETE_ITEM: {
      return [...state].filter(el => el.id !== payload);
    }
    default:
      return state;
  }
};

export default collectionReducer;
