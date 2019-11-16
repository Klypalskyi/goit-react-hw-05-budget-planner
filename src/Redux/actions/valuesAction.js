export const valuesActionType = {
  ADD_BUDGET: 'ADD_BUDGET',
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addBudget = value => ({
  type: valuesActionType.ADD_BUDGET,
  payload: value,
});

export const addExpense = value => ({
  type: valuesActionType.ADD_EXPENSE,
  payload: value,
});

export const removeExpense = value => ({
  type: valuesActionType.REMOVE_EXPENSE,
  payload: value,
});
