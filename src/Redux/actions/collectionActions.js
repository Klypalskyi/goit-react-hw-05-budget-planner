export const collectionActionTypes = {
  SAVE_ITEM: 'SAVE_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
};

export const saveItem = expense => ({
  type: collectionActionTypes.SAVE_ITEM,
  payload: expense,
});

export const deleteItem = id => ({
  type: collectionActionTypes.DELETE_ITEM,
  payload: id,
});
