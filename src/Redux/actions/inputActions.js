export const inputActionType = {
  CHANGE: 'CHANGE',
  CLEAR: 'CLEAR',
};

export const inputChange = ({ target }) => ({
  type: inputActionType.CHANGE,
  payload: target,
});
export const clearInput = name => ({
  type: inputActionType.CLEAR,
  payload: name,
});
