import { valuesActionType } from '../actions/valuesAction';

const initialState = {
  budget: 0,
  expenses: 0,
  balance: 0,
};

const valuesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case valuesActionType.ADD_BUDGET: {
      const balance = Number(payload) - state.expenses;
      return { ...state, budget: Number(payload), balance };
    }

    case valuesActionType.ADD_EXPENSE: {
      const expenses = state.expenses + Number(payload);
      const balance = state.budget - state.expenses - Number(payload);
      return { ...state, expenses, balance };
    }

    case valuesActionType.REMOVE_EXPENSE: {
      const expenses = state.expenses - Number(payload);
      const balance = state.balance + Number(payload);
      return { ...state, expenses, balance };
    }

    default:
      return state;
  }
};

export default valuesReducer;
