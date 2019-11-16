import { inputActionType } from '../actions/inputActions';

const initialState = {
  budgetAmount: '0',
  expenseName: '',
  expenseAmount: '0',
};

const inputReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case inputActionType.CHANGE: {
      const { name, value } = payload;
      if (payload.type === 'number' && value.startsWith('0')) {
        return { ...state, [name]: value.replace('0', '') };
      }
      if (payload.type === 'number' && value.length === 0) {
        return { ...state, [name]: '0' };
      }
      return { ...state, [name]: value };
    }

    case inputActionType.CLEAR:
      return payload === 'expenseName'
        ? { ...state, [payload]: '' }
        : { ...state, [payload]: '0' };

    default:
      return state;
  }
};

export default inputReducer;
